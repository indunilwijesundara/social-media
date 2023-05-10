import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import {posts} from "../../dummyData"
export default function Feed() {
  return (
    <div className="feed">
      <div className="feed">
        <div className="feedwrapper">
         <Share/> 
       
       {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
        </div>
      </div>
    </div>
  )
}

