import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

const PostDetails = () => {

  const { id } = useParams();
  var like, dislike;
  const { data: post, isDataPending, error } = useFetch("http://localhost:8000/posts/" + id);
  const history = useHistory();

  const handleHomeClick = () => {
    history.push("/");
  }

  const handleLike = () => {
    like = post.likes + 1; //updates like count by +1

    fetch("http://localhost:8000/posts/" + id, {
      method: "PATCH",
      headers: {"Content-type": "application/json",},
      body: JSON.stringify({
        likes: like,
      })
    })
    .then(() => {
      window.location.reload(false); //rerenders the page to show the update

    })
  }

  const handleDislike = () => {
    dislike = post.dislikes + 1;  //updates dislike count by +1

    fetch("http://localhost:8000/posts/" + id, {
      method: "PATCH",
      headers: {"Content-type": "application/json",},
      body: JSON.stringify({
        dislikes: dislike,
      })
    })
    .then(() => {
      window.location.reload(false);

    })
  }

  return (
    <div className="post-details">
      {isDataPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && (
        <article>
          <h2>{ post.title }</h2>
          <p>{ post.author }</p>
          <div>{ post.body }</div>
          <div className="row">
            <div className="col-6"><i onClick={handleLike} className="fa fa-thumbs-up">{post.likes}</i></div>
            <div className="col-6"><i onClick={handleDislike} className="fa fa-thumbs-down">{post.dislikes}</i></div>
          </div>
          <button onClick={handleHomeClick}>Go Home</button>
        </article>
      )}
    </div>
  );


}

export default PostDetails;
