import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;