import { gql } from "@apollo/client";

export const EDIT_USER_PROFILE_MUTATION = gql`
  mutation profileEdit($EditProfileInput: EditProfileInput!) {
    editUserProfile(EditProfileInput: $EditProfileInput) {
      user {
        firstName
        website
        gender
        bio
        herefor
      }
      error
    }
  }
`;
