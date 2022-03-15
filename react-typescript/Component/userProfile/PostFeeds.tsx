import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { USER_POSTS_QUERY } from "../../graphql/Queries/userPosts";
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import dynamic from "next/dynamic";
const SingleFeed = dynamic(
  () => import("../home-post/Components/MainSection/SingleFeed")
);
import { Skeleton } from "antd";
import { GET_OTHER_USERS_POST_QUERY } from "../../graphql/Queries/otherUsersPosts";

interface Props {
  userId: string;
}

const PostFeeds: React.FC<Props> = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const { data, loading, error } = useQuery(USER_POSTS_QUERY);
  const otherUserPostQueryData = useQuery(GET_OTHER_USERS_POST_QUERY, {
    variables: {
      id: userId,
    },
  });

  console.log("user id", userId);

  useEffect(() => {
    if (userId) {
      if (otherUserPostQueryData?.data) {
        setPosts(otherUserPostQueryData?.data?.getOtherUserPost);
      }
    } else {
      if (data) {
        setPosts(data?.getUserPost);
      }
    }
  }, [data, otherUserPostQueryData?.data]);
  console.log("useerPosts", posts);
  return (
    <div id="Posts" className="tabcontent">
      {loading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        posts?.map((post, index) => {
          //@ts-ignore
          return <SingleFeed post={post} />;
        })
      )}
    </div>
  );
};

export default withApollo(PostFeeds, { getDataFromTree });
