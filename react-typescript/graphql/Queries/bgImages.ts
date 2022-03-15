import { gql } from "@apollo/client";

export const BG_IMAGES_QUERY = gql`
  {
    BGAvatar {
      bgRpgSrc
      bgRAliensSrc
      bgApocalypsegSrc
    }
  }
`;
