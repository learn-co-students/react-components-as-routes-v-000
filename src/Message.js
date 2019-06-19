import React from 'react';

const Message = (props) => {
  return (
    <React.Fragment>
      <h2> { props.message.subject } </h2>
      <p> { props.message.content } </p>
    </React.Fragment>
  )
};

export default Message;
