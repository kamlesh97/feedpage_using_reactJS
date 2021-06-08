import React from "react";
// import axios from "axios";
import Posts from "./components/Posts";
import Navbar from'./components/Navbar'
const App = () => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPAge] = useState(10);

  // const fetchPost = async () => {
  //   // setLoading(true);
  //   const res = await fetch(
  //     "https://www.mocky.io/v2/59ac28a9100000ce0bf9c236"
  //   );
  //   setPosts(res.data);
  //   // setLoading(false);
  // };

  // useEffect(() => {
    
  //   fetchPost();
  // }, []);
  // console.log(posts.posts);
  return (
    <div>
      {/* <h1>feed_Page</h1> */}
      <Navbar/>
      <Posts />
    </div>
  );
};

export default App;

//        http://www.mocky.io/v2/59b3f0b0100000e30b236b7e
//  http://www.mocky.io/v2/59ac28a9100000ce0bf9c236
//  http://www.mocky.io/v2/59ac293b100000d60bf9c239
