import { gql } from "@apollo/client";

export const RPG_AVATARS_QUERY = gql`
  {
    RpgAvatar {
      userprofileavatar
    }
  }
`;
