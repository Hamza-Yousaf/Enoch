import {gql} from "@apollo/client";

export const CHECHK_COMMUNITY_NAME = gql `
query
checkCommunite(
  $communityName:String!
)
{
  checkCommunityName(communityName:$communityName )
}
`;