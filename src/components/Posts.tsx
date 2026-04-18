import PostList from "./PostList";
import type { Posts } from "../types";
import { useParams } from "react-router-dom";

export default function Posts():React.JSX.Element{

const posts:Posts[] = [
  { id: 1, title: "First Post", content: "Hello world" },
  { id: 2, title: "Second Post", content: "More content" },
];

const { id } = useParams();

    return (
        <div>
            <h1>Posts</h1>
            <h3>Post ID: {id}</h3>;
            <PostList posts={posts}/>
        </div>
    )
}