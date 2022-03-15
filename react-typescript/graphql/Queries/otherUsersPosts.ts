import { gql } from "@apollo/client";

export const GET_OTHER_USERS_POST_QUERY = gql`
  query otherUserPost($id: String!) {
    getOtherUserPost(id: $id) {
      id
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
      documentProps {
        sizes
        filename
        fileExtentions
      }
      poll {
        optionA
        optionB
        optionC
        optionD
        totalVoteCount
        voteDurationTimeLeft
        PollCheckUser {
          voteStatus
          # userSelectOption
        }
        optionAPercent
        optionBPercent
        optionCPercent
        optionDPercent
      }
      pollQuestion
    }
  }
`;
