import PostList from "./PostList";
import type { Posts } from "../types";
import React from "react";

export default function Posts():React.JSX.Element{
    const [currentPage, setCurrentPage] = React.useState(1);

const [posts, setPosts] = React.useState<Posts[]>([]);

  React.useEffect(() => {
    fetch("/data/DataToPost.json")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);


    return (
        <div className="mt-5 ">
            <div className="md:w-60% flex justify-evenly">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">All Posts ({posts.length})</h1>
            </div>
                <div id="paginate">
                    <button onClick={() => setCurrentPage(currentPage-1)}
                            disabled = {currentPage === 1}
                            className="px-4 py-2 bg-black text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >Previous</button>
                    <p>Page {currentPage} of {posts.length>10? Math.ceil(posts.length / 10) : 1}</p>
                    <button onClick={() => setCurrentPage(currentPage+1)}
                            disabled = {currentPage === Math.ceil(posts.length / 10) || posts.length === 0}
                            className="px-4 py-2 bg-black text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >Next</button>
                </div>
            <PostList current={currentPage} posts={posts}/>
        </div>
    )
}