import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";

export function Chat({ profilePic, name, message, timestamp }) {
  return (
    <div className="chat">
      <Avatar className="chat_image" alt={name} src={profilePic} />
      <div className = "chat_details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className = "chat_timestamp">{timestamp}</p>
    </div>
  );
}
