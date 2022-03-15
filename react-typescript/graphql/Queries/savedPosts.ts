import { gql } from "@apollo/client";

export const savedPostsQuery = gql`
  query savedPost($offset: Int!, $limit: Int!) {
    getSavedPost(offset: $offset, limit: $limit) {
      id
      title
      text
      whoCanSeePost
      url
      imageurl
      createdAt
      updatedAt
      user {
        id
        userName
        bio
        profileImage
        firstName
        lastName
        followerCount
      }
      comments {
        id
        text
        profileImage
        userName
      }
      likeCount
      dislikeCount
      commentsCount
      perPostViewCount
      document
      poll {
        optionA
        optionB
        optionC
        optionD
        totalVoteCount
        voteDurationTimeLeft
      }
      pollQuestion
    }
  }
`;
