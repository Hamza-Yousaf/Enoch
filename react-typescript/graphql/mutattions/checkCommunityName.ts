import { gql } from "@apollo/client";

export const CHECK_COMMUNITY_MUTATION = gql`
mutation
checkCommunity($communityName:String!)
{
  checkCommunityName(communityName:$communityName)
}
`;