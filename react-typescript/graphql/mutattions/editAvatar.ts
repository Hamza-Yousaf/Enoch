import { gql } from "@apollo/client";

export const EDIT_AVATAR_MUTATION = gql`
  mutation updateAvatar(
    $profileImage: String!
    $cardAvatar: String!
    $cardTitle: String!
    $userName: String!
  ) {
    AvartarProfileUpdate(
      profileImage: $profileImage
      cardAvatar: $cardAvatar
      cardTitle: $cardTitle
      userName: $userName
    ) {
      message
      success
    }
  }
`;
