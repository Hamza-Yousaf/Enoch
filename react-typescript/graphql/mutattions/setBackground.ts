import { gql } from "@apollo/client";

export const SET_BACKGROUND_MUTATION = gql`
  mutation setBackground($addAvatar: String!) {
    BackgroundAvatar(addAvatar: $addAvatar) {
      success
      message
    }
  }
`;
