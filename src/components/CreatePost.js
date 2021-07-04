import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false); //handles lag time
  const history = useHistory();  //used to navigate through page visit history

  const handleSubmit = (e) => {
    e.preventDefault();
    var likes = 0; //initially like and dislike count is zero
    var dislikes = 0;
    const post = {title, body, author, likes, dislikes};

    setIsPending(true);

    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post)
    })
    .then(() => {
      setIsPending(false);
      console.log("new posted");
      history.push("/"); //redirects to home route
    })
  }

  return (

    <div className="create">
      <h2>Add New Post</h2>

      <form onSubmit={handleSubmit}>
        <label>Post Title : </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Post Content : </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Post Author : </label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isPending && <button>Add Post</button>}
        {isPending && <button
                        disabled
                        style= {{backgroundColor: 'grey'}}>Adding Post...
                      </button>}
      </form>

    </div>
  );
}

export default CreatePost;
