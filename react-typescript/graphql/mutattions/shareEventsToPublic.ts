import { gql } from "@apollo/client";

export const SHARE_EVENT_TO_PUBLIC_MUTATION = gql`
  mutation shareToPublic($text: String!, $event_id: String!) {
    userShareEventToEveryOne(text: $text, event_id: $event_id) {
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
