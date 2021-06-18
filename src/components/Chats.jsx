import "./Chats.css";
import {Chat} from "./Chat";
export function Chats() {
    return (
        <div className= "chats">
            <Chat 
                name="mark"
                message = "yo what"
                timestamp = "40secon"
                profilePic ="https://www.infotechnology.com/files/image/97/97492/60ca12975bb3d.jpg"

            />
            <Chat 
                name="mark"
                message = "yo what"
                timestamp = "40secon"
                profilePic ="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?auto=format&w=190"

            />
            
        </div>
    )
}
