


import { gql } from "@apollo/client";

export const GET_COMMUNITY_BY_ID = gql`
query
mainQuery($communityId:String!)
{
    getCommunityById(communityId: $communityId){
        communityName
        id
        about
        coverImage
        communityHeader
        communityDescription
        communityType
        adult_community
        updated_at

        joinedUsers{
     
          id
          requestStatus
        }
      }
  }
`;