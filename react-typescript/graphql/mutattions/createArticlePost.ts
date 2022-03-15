import { gql } from "@apollo/client";

export const ARTICLE_POST_MUTATION = gql`
  mutation articlePost(
    $whoCanSeePost: String!
    $postingAs: String!
    $articlepostinput: String!
  ) {
    createPostArticle(
      whoCanSeePost: $whoCanSeePost
      postingAs: $postingAs
      articlepostinput: $articlepostinput
    )
  }
`;
