import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ChartCards from "../components/ChartCards";
import PostsCards from "../components/PostsCard";
import { PostI } from "../types";

const Posts = () => {
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  const fetchData = async () => {
    const response = await axios
      .get("https://dummyjson.com/posts")
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data.posts;
      console.log("Data dos posts: ", data);
      setData(data);
    }
  };



  useEffect(() => {
    fetchData();
    // fetchUserData();
  }, []);
  return (
    <div>
      {data.map((post: PostI) => (
        <PostsCards
          id={post.userId}
          title={post.title}
          body={post.body}
          reactions={post.reactions}
          tags={post.tags} userId={0}        />
      ))}
    </div>
  );
};

export default Posts;
