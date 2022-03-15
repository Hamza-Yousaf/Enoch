import { gql } from "@apollo/client";

export const CHECK_USERNAME_MUTATION = gql`
  mutation checkUserName($userName: String!) {
    CheckIfUserNameIsAlreadyTaken(userName: $userName)
  }
`;
