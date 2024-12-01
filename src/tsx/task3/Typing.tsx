export function Typing({message}: {message: Message}) {
    return (
        <li key={message.id} className="clearfix">
            <div className="message-data">
              <span className="message-data-name"><i className="fa fa-circle online"></i>{message.from.name}</span>
              <span className="message-data-time">{message.time}</span>
            </div>
            <div className="typing">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
            </div>
          </li>
    )
}