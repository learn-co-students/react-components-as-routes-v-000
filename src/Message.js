import React from 'react';

class Message extends React.Component {
  render() {
    return(
      <div>
        <label htmlFor="message">Message</label>
        <textarea
            rows={3}
            cols={25}
          />
      </div>
    );
  }
}

export default Message;
