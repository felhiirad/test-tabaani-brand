import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Posts from './compo/Posts';
import Pagination from './compo/Pagination'
import './App.css';



const App = () => {
 const [posts,setPosts]=useState([]);
 const [loading,setLoading]=useState(false);
 const [currentPage,setCurrentPage]=useState(1);
 const[postsPerPage]=useState(51);
// il va afficher 51 post a chaque page

 useEffect(()=>{
   const fetchPosts=async()=>{
     setLoading(true);
     const res=await axios.get('https://jsonplaceholder.typicode.com/photos');
     setPosts(res.data);
     setLoading(false);
   }
   fetchPosts();
 },[]);

 //get current posts
 const indexOfLastPost=currentPage * postsPerPage;
 const indexOfFirstPost=indexOfLastPost - postsPerPage;
 const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);

 //change page
 const paginate=(pageNumber)=>setCurrentPage(pageNumber);
 




  return ( 
    <div className="App">
      <form  className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="posts">
      <Posts posts={currentPosts} loading={loading}/>
      
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      

    </div>
   );
}
 
export default App;

