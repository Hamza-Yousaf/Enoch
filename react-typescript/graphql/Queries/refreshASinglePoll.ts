import { gql } from "@apollo/client";

export const fetchSinglePoll = gql`
  query refreshSinglePoll($PostId: String!) {
    PollRefreshQuery(PostId: $PostId) {
      poll {
        optionA
        optionB
        optionC
        optionD
        totalVoteCount
        voteDurationTimeLeft
        PollCheckUser {
          voteStatus
          userSelectOption
        }
        optionAPercent
        optionBPercent
        optionCPercent
        optionDPercent
      }
      pollQuestion
    }
  }
`;
