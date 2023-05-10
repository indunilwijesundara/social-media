import "./rightbar.css";
import {users} from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/post/gift.jpeg" alt=""/>
          <span className="birthdayText"><b>pola foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/post/ad.jpeg" alt=""/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        {users.map((u) => ( 
          <Online key={u.id} user={u}/>
        ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar=()=>{
    return(
      <>
      <h4 className="rightbarTitle"> User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
           <span className="rightbarInfoValue">Kandy</span>
        </div>
         <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
           <span className="rightbarInfoValue">Poojapitiya</span>
        </div>
         <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
           <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle"> User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/p4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lakmini Wijesundara</span>
        </div>
         <div className="rightbarFollowing">
          <img src="assets/person/p1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lakmini Wijesundara</span>
        </div>
         <div className="rightbarFollowing">
          <img src="assets/person/p2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lakmini Wijesundara</span>
        </div>
         <div className="rightbarFollowing">
          <img src="assets/person/p3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lakmini Wijesundara</span>
        </div>
         <div className="rightbarFollowing">
          <img src="assets/person/p4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lakmini Wijesundara</span>
        </div>
         <div className="rightbarFollowing">
          <img src="assets/person/p1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lakmini Wijesundara</span>
        </div>
      </div>
      </>
    )

  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        
      </div>
    </div>
  )
}
