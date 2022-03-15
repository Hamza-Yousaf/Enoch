import { gql } from "@apollo/client";

export const GET_ALL_PUBLICLY_SHARED_EVENTS = gql`
  {
    getAllPubliclySharedEvents(limit: 20) {
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
      hasMore
      count
    }
  }
`;
