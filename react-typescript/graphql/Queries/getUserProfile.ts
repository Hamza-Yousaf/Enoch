import { gql } from "@apollo/client";

export const GET_USER_PROFILE_QUERY = gql`
query{
    getUserProfile{
      id
      email
    }
  }

`