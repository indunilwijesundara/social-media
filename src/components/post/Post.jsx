import { MoreVert } from "@mui/icons-material"
import { useState } from "react";
import { users } from "../../dummyData";
import "./post.css"

export default function Post({post}) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setLiked] = useState(false)
  const likeHandler =()=>{
    setLike(isLiked ? like=1 : like+1)
    setLiked(!isLiked)
  }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
              <div className="postLeft">
                <img className="postProfileImg" 
                src={users.filter((u)=>u.id==post?.userId)[0].profilePicture} alt=""/>
                <span className="postUsername">
                  {users.filter((u)=>u.id==post?.userId)[0].username}
                  </span> 
                <span className="postDate">{post.date}</span> 
              </div>
              <div className="postTopRight">
                
                <MoreVert/>
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post?.desc}</span>
              <img className="postImg" src={post.poto} alt=""/>
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src="assets/post/like.png" onClick={likeHandler} alt=""/>
                <img className="heartIcon" src="assets/post/heart.png" onClick={likeHandler} alt=""/>
                <span className="postlikeCounter">{like} people like it</span>
              </div>
               <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
               </div>
            </div>
        </div>
    </div>
  )
}
