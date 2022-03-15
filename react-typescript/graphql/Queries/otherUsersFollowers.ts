import { gql } from "@apollo/client";

export const getOtherUsersFollowers = gql`
  query otherUserFollower($userId: String!) {
    GetOthersUsersFollowers(userId: $userId) {
      userName
      follower {
        userName
      }
    }
  }
`;
