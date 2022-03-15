import { gql } from "@apollo/client";

export const REPORT_POST_MUTATION = gql`
  mutation rPost(
    $postId: String!
    $detailedReasonForReportingPost: String!
    $mainReasonForReportingPost: String!
  ) {
    reportPost(
      postId: $postId
      detailedReasonForReportingPost: $detailedReasonForReportingPost
      mainReasonForReportingPost: $mainReasonForReportingPost
    )
  }
`;
