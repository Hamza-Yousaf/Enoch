import { gql } from "@apollo/client";


export const UPDATE_COMMUNITY_HEADER = gql`
mutation
communityHeader(
  $communityId:String!
  $coverImage:String!
  $communityHeader:String!
)
{
  updateCommunityHeader(
    communityId:$communityId 
    coverImage:$coverImage
    communityHeader:$communityHeader
  ){
    errors
    success
  }
}
`;