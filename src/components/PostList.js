import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const PostList = ({ posts, location }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <div className="post-preview row" key={post.id} >
          <div className="col-4">
            <Link to={`/posts/${post.id}`}><h2>{ post.title }</h2></Link>
            <p>Written by { post.author }</p>
          </div>
          <div className="col-4">
            {location === "/delete" && <Link to={`/delete/${post.id}`}><button>Remove</button></Link>}
          </div>
          <div className="col-4">
            {location === "/update" && <Link to={`/update/${post.id}`}><button>Update</button></Link>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
