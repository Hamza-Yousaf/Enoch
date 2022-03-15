import { gql } from "@apollo/client";

export const BLOCK_POST_MUTATION = gql`
  mutation block($reasonForBlock: String!, $postId: String!) {
    blockPost(reasonForBlock: $reasonForBlock, postId: $postId)
  }
`;
