import { gql } from "@apollo/client";

export const ALIEN_AVATARS_QUERY = gql`
  {
    AliensAvatar {
      userprofileavatar
    }
  }
`;
