import { gql } from "@apollo/client";

export const sharePostMutation = gql`
  mutation postShare($id: String!) {
    sharePost(id: $id)
  }
`;
