import React, {Component} from 'react'

class Signup extends Component {
    render() {
        return(
            <div className="signupPage">
                <h3>Need an account? Signup Here!</h3>
                <form>
                    <div>
                        <input type="text" name="firstName" placeholder="First Name" />
                        <br />

                        <input type="text" name="lastName" placeholder="Last Name" />
                        <br />

                        <input type="text" name="username" placeholder="Username" />
                        <br />

                        <input type="text" name="email" placeholder="Email" />
                        <br />

                        <input type="password" name="password" placeholder="Password" />
                        <br />
                    </div>
                    <br />
                    <input type="submit" value="Create Account"/>
                </form>
            </div>
        )
    }
}

export default Signup
