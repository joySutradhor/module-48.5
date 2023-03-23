import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
    </div>
  );
}


function LoadPosts(){
  const [posts, setPosts] = useState([]);
  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
  } , [])

  
  return (
    <div className='singlePostContainer'>
      {
        posts.map(post => <SinglePost post = {post}></SinglePost>)
      }
    </div>
  )
}

const SinglePost =(props)=> {
  const {id, title,body} = props.post ;
  return (
    <div className='singlePost'>
      <h3>Id : {id}</h3>
      <h4>Title : {title}</h4>
      <p>Body : {body}</p>
    </div>
  )
}


export default App;
