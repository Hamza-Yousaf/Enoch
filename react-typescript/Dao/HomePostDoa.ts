import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { POSTS_QUERY } from "../graphql/Queries/homepostQuery";

const postData = useQuery(POSTS_QUERY);
const { data, loading, error } = postData;
const [posts, setPosts] = useState([]);

useEffect(() => {
  const postData = useQuery(POSTS_QUERY);
  const { data, loading, error } = postData;
  const getPosts = () => {
    setPosts(data?.getAllPost);
  };

  getPosts();
  console.log(posts);
}, []);
