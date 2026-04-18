import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from './components/About'
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetails";

export default function App(){

  return (
   <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/posts/:id" element={<PostDetail/>}/>
    </Routes>
   </>   
  )
}