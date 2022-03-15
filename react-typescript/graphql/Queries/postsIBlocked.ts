import { gql } from "@apollo/client";

export const POSTS_I_BLOCKED_QUERY = gql`
  query blocked($offset: Int!, $limit: Int!) {
    getPostsIBlocked(offset: $offset, limit: $limit) {
      id
    }
  }
`;
