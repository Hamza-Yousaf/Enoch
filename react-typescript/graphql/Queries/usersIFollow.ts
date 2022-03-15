import { gql } from "@apollo/client";

export const USERS_I_FOLLOW_QUERY = gql`
  {
    UsersIFollowerd {
      followinguserName
      userName
      followinguserid
      id
    }
  }
`;
