import { gql } from "@apollo/client";

export const CREATE_A_POLL_QUESTION = gql`
  mutation CraeteApollPost(
    $pollQuestion: String!
    $title: String!
    $postingAs: String!
    $optionA: String!
    $optionB: String!
    $optionC: String!
    $optionD: String!
    $voteDurationTimeLeft: String!
    $whoCanSeePost: String!
  ) {
    createApoll(
      pollQuestion: $pollQuestion
      title: $title
      postingAs: $postingAs
      optionA: $optionA
      optionB: $optionB
      optionC: $optionC
      optionD: $optionD
      voteDurationTimeLeft: $voteDurationTimeLeft
      whoCanSeePost: $whoCanSeePost
    )
  }
`;
