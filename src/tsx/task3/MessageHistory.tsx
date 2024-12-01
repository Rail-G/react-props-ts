import { Message } from "./Message"
import { Response } from "./Response"
import { Typing } from "./Typing"

export function MessageHsitory({messages}: {messages: Message[]}) {
    return (
        <div className="container">
            <div className="peoples">
                <p className="peoples-error-text">Error</p>
                <p className="peoples-error-text">\_(- _ -)_/</p>
            </div>
            <div className="chat">
                <div className="chat-header">
                    <p className="peoples-error-text">Error</p>
                    <p className="peoples-error-text">\_(- _ -)_/</p>
                </div>
                <div className="chat-history">
                    <ul>
                        {messages.map(elem => {
                            if (elem.type === 'message') {
                                return (
                                    <Message message={elem}/>
                                )
                            } else if (elem.type === 'response') {
                                return (
                                    <Response message={elem}/>
                                )
                            } else if (elem.type === 'typing') {
                                return (
                                    <Typing message={elem}/>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}