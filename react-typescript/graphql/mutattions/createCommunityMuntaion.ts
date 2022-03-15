import { gql } from "@apollo/client";

export const CREATE_COMMUNITY_MUTATION = gql`
mutation
createCommunitySchema(
  $about: String!
  $communityType: String!
  $communityName: String!
  $adult_community: Boolean!
)
{
  CreateCommunity(
    about:$about
    communityType: $communityType
    CommunityInput:{
    communityName:$communityName
    adult_community: $adult_community
    
  })
  {
    id
    communityName
    about
    coverImage
    communityDescription
    communityType
  }
}
`;