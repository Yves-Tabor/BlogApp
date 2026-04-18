
import type React from "react";
import { useParams } from "react-router-dom";

function PostDetail(): React.JSX.Element {
  const { id } = useParams();

  return <h1>Post ID: {id}</h1>;
}

export default PostDetail;