import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UpdatePost = () => {

  const { id } = useParams();
  const history = useHistory();
  var postTitle, postBody, author, likes, dislikes;
  const { data: post, isDataPending, error } = useFetch("http://localhost:8000/posts/" + id);
  var [title, setTitle] = useState("");
  var [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  //storing initial values
  if (post) {
    postTitle = post.title;
    postBody = post.body;
    author = post.author;
    likes = post.likes;
    dislikes = post.dislikes;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      title = postTitle;
    }
    if (body === "") {
      body = postBody;
    }

    const post = {title, body, author, likes, dislikes}
    setIsPending(true);

    fetch("http://localhost:8000/posts/" + id, {
      method: "PUT",
      headers: {"Content-type": "application/json",},
      body: JSON.stringify(post)
    })
    .then(() => {
      setIsPending(false);
      console.log("post updated");
      history.push("/");
    })
  }


  return (

    <div className="create">
      <h2>Update Post</h2>
      {post && (
          <form onSubmit={handleSubmit}>
            <label>Post Title : </label>
            <input
              type="text"
              defaultValue={post.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Post Content : </label>
            <textarea
              defaultValue={post.body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>

            {!isPending && <button>Update Post</button>}
            {isPending && <button disabled style={{backgroundColor: 'grey'}}>Updating...</button>}
        </form>
      )}

    </div>
  );
}

export default UpdatePost;
