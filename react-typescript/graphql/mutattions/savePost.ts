import { gql } from "@apollo/client";

export const savePostMutation = gql`
  mutation saveAPost($postId: String!) {
    savePost(postId: $postId)
  }
`;
