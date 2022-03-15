import {gql} from '@apollo/client'

export const APROVE_JOIN_COMMUNITY = gql`
mutation
aprover(
$requestId:String!
)
{
  approveCommunityRequest(requestId:$requestId){
    errors
    success
  }
}

`