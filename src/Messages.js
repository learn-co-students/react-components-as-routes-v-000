import React from 'react';
import Message from './Message'

const inbox = [
  {
    subject: 'Hello',
    content: 'What up my dude??'
  },
  {
    subject: 'New place',
    content: 'Hey man, come check out the new crib...'
  },
  {
    subject: 'Happy Days',
    content: 'Odd thought, but have you ever seen this show, Happy Days?'
  }
]

let keyCount = 0;

class Messages extends React.Component {

  listMessaages = () => {
    return(
      <ul>
        {inbox.map(message => <li key={keyCount+= 1}><Message message={message} /></li>)}
      </ul>
    )
  }

  render() {
    return(
      this.listMessaages()
    )
  }
};

export default Messages;
