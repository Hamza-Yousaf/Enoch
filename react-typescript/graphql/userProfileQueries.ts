import gql from "graphql-tag";

export const GET_SUGGEST_FOLLOW = gql`
  query {
    SuggestFollow {
      profileImage
      userName
      country
      bio
      id
    }
  }
`;

export const GET_ALL_COMMUNITIES = gql`
  query {
    getAllCommunity {
      communityName
      image
      about
      communityDescription
      communityHeader
      id
      coverImage
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query {
    getUserProfile {
      userName
    }
  }
`;

export const GET_AVATAR_RPG = gql`
  query {
    RpgAvatat {
      idPrimary
      src
      id
    }
  }
`;

export const GET_AVATAR_APOCALYPSE = gql`
  query {
    ApocalypseAvatat {
      idPrimary
      src
      id
    }
  }
`;

export const GET_AVATAR_ALIEN = gql`
  query {
    AlienAvatar {
      idPrimary
      src
      id
    }
  }
`;

export const GET_BACKGROUND_RPG = gql`
  query {
    BackgroundRpgImages {
      idPrimary
      src
      id
    }
  }
`;

export const GET_BACKGROUND_APOCALYPSE = gql`
  query {
    BackgroundApocalypseImages {
      idPrimary
      src
      id
    }
  }
`;

export const GET_BACKGROUND_ALIEN = gql`
  query {
    BackgroungAlienImages {
      idPrimary
      src
      id
    }
  }
`;
