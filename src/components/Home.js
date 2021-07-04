import PostList from "./PostList";
import useFetch from "./useFetch";
import { useLocation } from 'react-router-dom';

const Home = () => {

  const { data, isDataPending, error } = useFetch("http://localhost:8000/posts"); //fetch all the data
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isDataPending && <div>Loading Data...</div>}
      {data && <PostList posts={data} title="Posts" location={location.pathname}/>}
    </div>
  );
}

export default Home;
