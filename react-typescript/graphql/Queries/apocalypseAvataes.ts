import { gql } from "@apollo/client";

export const APOCALYPSE_AVATARS_QUERY = gql`
  {
    ApocolypseAvatar {
      userprofileavatar
    }
  }
`;
