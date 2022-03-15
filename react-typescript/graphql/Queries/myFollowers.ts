import { gql } from "@apollo/client";

export const GET_MY_FOLLOERS = gql`
  {
    AllMyFloowers {
      id
      userName
      followinguserid
      userid
    }
  }
`;
