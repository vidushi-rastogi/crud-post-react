import Navbar from "./Navbar";
import Home from "./Home";
import PostDetails from "./PostDetails";
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";
import CreatePost from "./CreatePost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //app routes
  return (
    <Router>
      <Navbar />

      <div className="content">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
          <Route exact path="/delete">
            <Home />
          </Route>
          <Route path="/delete/:id">
            <DeletePost />
          </Route>
          <Route exact path="/update">
            <Home />
          </Route>
          <Route path="/update/:id">
            <UpdatePost />
          </Route>
          <Route path="/posts/:id">
            <PostDetails />
          </Route>
        </Switch>

      </div>

    </Router>

  );
}

export default App;
