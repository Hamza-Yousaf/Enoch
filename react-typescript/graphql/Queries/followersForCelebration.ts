import { gql } from "@apollo/client";

export const GET_FOLLOWERS_FOR_CELEBRATION = gql`
{
    AllMyFloowers{
      follower{
        userName
        profileImage
        bio
      }
    }
  }
`;
