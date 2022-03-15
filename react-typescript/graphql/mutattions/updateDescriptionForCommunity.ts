import { gql } from "@apollo/client";

export const UPDATE_COMMUNITY_DESCRIPTION = gql`
mutation
updateCommunity(
    $communityId:String! 
    $description:String!
)
{
  updateCommunityDescription(
      communityId:$communityId,
      description:$description
      ){
    success
    errors
  }
}
`;