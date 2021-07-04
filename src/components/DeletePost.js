import 'bootstrap/dist/css/bootstrap.css';
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const DeletePost = () => {

  const { id } = useParams();
  const { data: post, isDataPending, error } = useFetch("http://localhost:8000/posts/" + id); //fetch requested data
  const history = useHistory();

  const handleDeleteClick = () => {
    fetch("http://localhost:8000/posts/" + post.id, {
      method: "DELETE"
    })
    .then(() => {
      history.push("/");
    })
  }

  const handleCancelClick = () => {
    history.push("/");
  }

  return (
    <div className="post-delete">
      {post && (
        <div className="post-details">
          <h2>{ post.title }</h2>
          <p>{ post.author }</p>
        </div>
      )}
      <h3>Are you sure you want to delete this Post?</h3>
      <div className="row">
        <div className="col-6"><button onClick={handleDeleteClick}>Delete</button></div>
        <div className="col-6"><button onClick={handleCancelClick}>Cancel</button></div>
      </div>
    </div>
  );
}

export default DeletePost;
