import "./sidebar.css"
import {Bookmark, Event, Group, HelpOutline, Message, MessageRounded, PlayCircleFilledOutlined, PlayCircleFilledWhiteOutlined, RssFeed, RssFeedOutlined, School, WorkOutline} from "@mui/icons-material";
import {users} from "../../dummyData";
import Closefriend from "../closefriend/Closefriend";
export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarwrapper">
            <ul className="sidebarlist">
                <li className="sidebarListItem">
                  <RssFeedOutlined className="sidebarIcon"/>
                  <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                  <MessageRounded className="sidebarIcon"/>
                  <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                  <PlayCircleFilledWhiteOutlined className="sidebarIcon"/>
                  <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                  <Group className="sidebarIcon"/>
                  <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                  <Bookmark className="sidebarIcon"/>
                  <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                  <HelpOutline className="sidebarIcon"/>
                  <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon"/>
                  <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                  <Event className="sidebarIcon"/>
                  <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                  <School className="sidebarIcon"/>
                  <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
             {users.map(u=>(
              <Closefriend key={u.id} user={u}/>
             ))}
              
            </ul>
        </div>
    </div>
  )
}
