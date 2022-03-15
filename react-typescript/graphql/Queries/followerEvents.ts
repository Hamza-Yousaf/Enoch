import { gql } from "@apollo/client";

export const EVENTS_SHARED_TO_FOLLOWERS_QUERY = gql`
  query eventSharedToMe($limit: Int!, $user_id: String!) {
    getAllEventsSharedToMe(limit: $limit, user_id: $user_id) {
      sharedEvents {
        event_id
        text
        sharer_id
        createdAt
        updatedAt
        sharer {
          userName
          profileImage
          followerCount
          bio
        }
      }
    }
  }
`;
