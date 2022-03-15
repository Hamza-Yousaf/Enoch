import gql from "graphql-tag";

export const USE_ENOCH_FOR_MUTATION = gql`
  mutation ($useEnochFor: String!) {
    useEnochFor(useEnochFor: $useEnochFor){
      firstName
    }
  }
`;

export const PERSONAL_INFO_MUTATION = gql`
mutation PersonalInformation(
  $hiderelationshipInProfile: Boolean!
  $relationShip: String!
  $gender: String!
  $bio: String!
  $hideDateOfBirth: Boolean!
  $dateOfBirth: String!
  $website: String!
  $hideContry: Boolean!
  $country: String!
  $hideHereFor: Boolean!
  $hereFor: String!
  $fullname: String!  
) {
  PersonalInformation(
    hiderelationshipInProfile:$hiderelationshipInProfile
    relationShip: $relationShip
    gender: $gender
    bio: $bio
    hideDateOfBirth: $hideDateOfBirth
    dateOfBirth:$dateOfBirth
    website: $website
    hideContry: $hideContry
    country: $country
    hideHereFor: $hideHereFor
    hereFor: $hereFor
    fullname: $fullname
  ) {
    suggestion
    message
    success
  }
}
`;


export const INDUSTRIES_MUTATION = gql`
  mutation ($industries: String!) {
    Industries(industries: $industries){
      message,
      success
    }
  }
`;

export const OTHER_INDUSTRIES_MUTATION = gql`
  mutation ($otherIndustries: String!) {
    OtherIndustries(otherIndustries: $otherIndustries){
      message,
      success
    }
  }
`;


export const TOGGLE_FOLLOW_MUTATION = gql`
  mutation ($userid: String!) {
    FollowerAndUnfollowRequeat(userid: $userid)
  }
`;

export const JOIN_COMMUNITY_MUTATION = gql`
  mutation ($communityId: String!) {
    joinCommunity(communityId: $communityId)
  }
`;

export const LATEST_NEWSUBSCRIBE_MUTATION = gql`
  mutation ($newssubscrib: String!){
    LatestNewSubscribe(newssubscrib: $newssubscrib){
      message,
      success
    }
  }
`;

export const USERNAME_CHECKER_MUTATION = gql`
  mutation ($userName: String!){
    UserNameChecker(userName: $userName){
      message,
      success
    }
  }
`;

export const COMPLETE_ON_BOARDING_MUTATION = gql`
  mutation {
    CompleteOnboarding{
      message,
      success
    }
  }
`;
