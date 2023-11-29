import { timeStampConversion } from "../functions/timeStampConversion";
import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();
  const messageTime = timeStampConversion(message.createdAt);
  return (
    <div>
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img src={new URL(message.avatar)} alt={`${message.name}-image`} />
          </div>
        </div>
        <div className="chat-header">
          {message.name}
          <time className="text-xs opacity-50">{`\t${messageTime}`}</time>
        </div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
