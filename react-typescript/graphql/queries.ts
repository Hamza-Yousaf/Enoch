import { gql } from "@apollo/client";

export const GET_USER_PROFILE_QUERY = gql`
  query {
    getUserProfile {
      firstName
      lastName
      profileImage
      cardTwoavatar
      cardAvatar
      country
      gender
      followerCount
      followingCount
      backgroundAvatar
      bio
      email
      id
      userName
      createdAt
      relationShip
      dateOfBirth
      hideDateOfBirth
      website
      herefor
      hiderelationshipInProfile
      hideherefor
      fullName
      backgroundAvatar
      cardTitle
      isOnline
    }
  }
`;

export const GET_ALL_POSTS_QUERY = gql`
  query getPosts($limit: Int!, $offset: Int!) {
    getAllPost(limit: $limit, offset: $offset) {
      posts {
        id
        title
        text
        url
        imageurl
        createdAt
        updatedAt
        user {
          id
          userName
          bio
          profileImage
          firstName
          lastName
          followerCount
        }
        comments {
          text
        }
        likeReactioncounter
        wowreactioncounter
        likeCount
        dislikeCount
      }
      hasmore
    }
  }
`;

export const GET_OTHER_USER_QUERY = gql`
  query otherUser($userId: String!) {
    getOtherUserProfile(userId: $userId) {
      firstName
      lastName
      profileImage
      cardTwoavatar
      cardAvatar
      country
      # gender
      followerCount
      followingCount
      backgroundAvatar
      bio
      email
      id
      userName
      createdAt
      relationShip
      dateOfBirth
      hideDateOfBirth
      website
      herefor
      hiderelationshipInProfile
      hideherefor
      fullName
      backgroundAvatar
      cardTitle
    }
  }
`;

export const GET_COUNTRIES = gql`
  query CountriesQuery {
    countries {
      code
      name
    }
  }
`;

export const GET_ALL_COMMUNITIES = gql`
  query CommunitiesQuery {
    getAllMyCommunity {
      id
      communityName
      # communityHolder
    }
  }
`;

export const GET_ALL_ENOCH_COMMUNITIES = gql`
  query AllCommunitiesQuery {
    getAllCommunity {
      id
      communityName
      # communityHolder
    }
  }
`;

export const GET_COMMUNITY = gql`
  query getCommunityQuery($communityId: String!) {
    getCommunity(communityId: $communityId) {
      communityName
      # communityHolder
      communityDescription
      joinedUsers {
        user {
          email
        }
      }
    }
  }
`;

export const GET_EVENTS_QUERY = gql`
  {
    getAllEvents(limit: 50) {
      events {
        title
        id
        description
        experience_level
        number_of_event_planners
        event_hosting_frequency
        type_of_event
        event_category
        start_date
        start_time
        end_date
        createdAt
        updatedAt
        organizerId
        venue
        address
        eventHeader
        eventBannerImage
        end_time
        is_cancelled
        broadcast_link
        organizer {
          userName
        }
      }
    }
  }
`;

export const GET_ATTENDEES_QUERY = gql`
  query getAttendeesEvent($eventId: String!, $limit: Int!) {
    getEventAttendees(eventId: $eventId, limit: $limit) {
      attendees {
        id
        user_id
        event_id
        username
        first_name
        avatar
        createdAt
        permission
        bio
      }
      count
    }
  }
`;

export const CHECK_ATTENDING_QUERY = gql`
  query checkAttendStatus($eventId: String!, $userId: String!) {
    isUserAttendingEvent(eventId: $eventId, userId: $userId)
  }
`;

export const SINGLE_EVENT_QUERY = gql`
  query getSingleEvent($id: String!) {
    singleEvent(id: $id) {
      title
      id
      description
      experience_level
      number_of_event_planners
      event_hosting_frequency
      type_of_event
      event_category
      start_date
      start_time
      end_date
      createdAt
      updatedAt
      organizerId
      venue
      address
      eventHeader
      eventBannerImage
      end_time
      is_cancelled
      broadcast_link
      organizer {
        userName
      }
    }
  }
`;
