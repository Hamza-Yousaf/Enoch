import {gql} from '@apollo/client'

export const Aprove_PRIVET_COMMUNITY = gql`
mutation
approvePrivetCommunity(
  $requestId:String!
)
{
  approvePrivateCommunityRequest(requestId:$requestId){
    errors
  	success
  }
}

`