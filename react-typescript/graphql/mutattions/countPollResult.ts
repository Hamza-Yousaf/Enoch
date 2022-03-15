import { gql } from "@apollo/client";

export const COUNTING_POLL_RESULT = gql`
  mutation vote($postid: String!, $userSelectedOption: String!) {
    pollVoting(postid: $postid, userSelectedOption: $userSelectedOption)
  }
`;
