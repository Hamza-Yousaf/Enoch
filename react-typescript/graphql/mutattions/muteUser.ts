import { gql } from "@apollo/client";

export const muteUserMutation = gql`
  mutation muteAUser($userId: String!) {
    muteUser(userId: $userId)
  }
`;
