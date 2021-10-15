import './Messages.css';

export function Message({ textMessage }) {
    return textMessage ? (
        <div className='message'>
            <p>{textMessage}</p>
        </div>
    ) : null
}