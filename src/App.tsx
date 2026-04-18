import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from './components/About'
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetails";
import React from 'react'

export default function App(){
const [search, setSearch] = React.useState("");
  return (
   <>
    <NavBar search={search} setSearch={setSearch}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/posts" element={<Posts search={search}/>}/>
      <Route path="/posts/:id" element={<PostDetail/>}/>
    </Routes>
   </>   
  )
}