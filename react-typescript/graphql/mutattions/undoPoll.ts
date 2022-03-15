import { gql } from "@apollo/client";
export const UNDO_POLL = gql`
  mutation undoPoll($postid: String!) {
    UndopollVote(postid: $postid)
  }
`;
