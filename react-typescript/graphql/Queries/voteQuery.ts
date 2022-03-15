import { gql } from "@apollo/client";

export const voteOnAPoll = gql`
  query vote($userSelectedOption: String!, $postid: String!) {
    pollingResult(userSelectedOption: $userSelectedOption, postid: $postid) {
      optionA
      optionB
      optionC
      optionD
      optionAPercent
      optionCPercent
      optionBPercent
      optionDPercent
      totalVoteCount
      voteDurationTimeLeft
    }
  }
`;
