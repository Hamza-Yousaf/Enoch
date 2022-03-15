import {gql} from '@apollo/client'

export const REQUEST_JOIN_COMMUNITY = gql`
mutation
request(
  $communityId:String!
){
  requestpostRestrictedCommunity(communityId:$communityId)
  {
    success
    errors
  }
}

`