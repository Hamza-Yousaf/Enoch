import { gql } from "@apollo/client";

export const SHARE_EVENT_TO_FOLLOWERS_MUTATION = gql`
  mutation shareToFollowers($text: String!, $event_id: String!) {
    userShareEventToFollowersOnly(text: $text, event_id: $event_id) {
      errors {
        message
      }
      sharedEvent {
        event_id
        text
        sharer_id
        createdAt
        updatedAt
        id
      }
    }
  }
`;
