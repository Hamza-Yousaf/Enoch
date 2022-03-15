import gql from "graphql-tag";

export const SIGN_UP_MUTATION = gql`
  mutation ($data: RegisterInput!) {
    register(data: $data) {
      firstName
      lastName
      email
      id
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      user {
        completeOnboarding       
      }
    }
  }
`;

export const EDIT_USER_PROFILE_MUTATION = gql`
  mutation profileEdit(
    # $dateOfBirth: String
    $website: String
    $country: String
    $city: String
    $username: String
  ) {
    editProfile(
      # dateOfBirth: $dateOfBirth
      website: $website
      country: $country
      city: $city
      userName: $username
    ) {
      suggestion
      message
      success
    }
  }
`;

export const CREATE_COMMUNITY_MUTATION = gql`
  mutation commCreate(
    $communityType: String!
    $CommunityInput: CommunityInput!
    $about: String!
  ) {
    CreateCommunity(
      communityType: $communityType
      CommunityInput: $CommunityInput
      about: $about
    ) {
      communityName
      id
      communityDescription
      communityType
      adult_community
    }
  }
`;

export const EDIT_COMMUNITY_MUTATION = gql`
  mutation communityEdit(
    $about: String!
    $description: String!
    $communityId: String!
    $communityType: String!
    $CommunityInput: CommunityInput!
  ) {
    editCommunity(
      about: $about
      description: $description
      communityId: $communityId
      communityType: $communityType
      CommunityInput: $CommunityInput
    )
  }
`;

export const JOIN_COMMUNITY_MUTATION = gql`
  mutation JoinCommunity($communityId: String!) {
    joinCommunity(communityId: $communityId)
  }
`;

export const CREATE_EVENT_MUTATION_BASIC_INFO = gql`
  mutation CreateEventBasic($createEventBasicInput: EventBasicInputType!) {
    createEventBasicInfo(createEventBasicInput: $createEventBasicInput) {
      errors {
        message
      }
      event {
        id
      }
      success
    }
  }
`;

export const EDIT_EVENT_MUTATION_BASIC_INFO = gql`
  mutation editEvent(
    $createEventBasicInput: EventBasicInputType!
    $eventId: String!
  ) {
    editEventBasicInfo(
      createEventBasicInput: $createEventBasicInput
      EventId: $eventId
    ) {
      errors {
        message
      }
      event {
        id
        title
        description
      }
      success
    }
  }
`;

export const CREATE_EVENT_MUTATION_DETAILS = gql`
  mutation eventCreateDetails(
    $createEventDetailsInput: EventDetailsInputType!
  ) {
    createEventDetails(createEventDetailsInput: $createEventDetailsInput) {
      success
      errors {
        message
      }
      event {
        title
        experience_level
        number_of_event_planners
        id
        description
        organizer {
          id
        }
        speakers
      }
    }
  }
`;

export const CREATE_EVENT_MUTATION_EVENT_PAGES = gql`
  mutation eventpage($createEventEventPageInput: EventPageInputType!) {
    createEventEventPage(
      createEventEventPageInput: $createEventEventPageInput
    ) {
      errors {
        message
      }
      success
      event {
        id
        title
        event_hosting_frequency
        type_of_event
        event_category
      }
    }
  }
`;

export const CREATE_EVENT_MUTATION_DATE_AND_PLACE = gql`
  mutation eventDateAndPlace(
    $createEventDateAndPlaceInput: EventDateAndPlaceInputType!
  ) {
    createEventDateAndPlace(
      createEventDateAndPlaceInput: $createEventDateAndPlaceInput
    ) {
      errors {
        message
      }
      success
      event {
        id
        title
        event_hosting_frequency
        type_of_event
        event_category
        start_time
        end_time
        end_date
        start_date
        venue
        address
        broadcast_link
      }
    }
  }
`;

export const CREATE_EVENT_MUTATION_PUBLISH = gql`
  mutation eventPublish($eventId: String!, $eventVisibility: String!) {
    createEventPublish(eventId: $eventId, eventVisibility: $eventVisibility) {
      errors {
        message
      }
      event {
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
      }
      success
    }
  }
`;

export const UPLOAD_MUTATION = gql`
  mutation eventImage($picture: Upload!) {
    uploadEventImage(picture: $picture)
  }
`;

export const EVENT_HEADER_MUTATION = gql`
  mutation eventHeaderUpdate($eventId: String!, $headerText: String!) {
    updateEventHeader(eventId: $eventId, headerText: $headerText) {
      errors {
        message
      }
      success
      event {
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
        eventHeader
        eventBannerImage
      }
    }
  }
`;

export const EVENT_HEADER_BANNER_IMAGE_MUTATION = gql`
  mutation bannerImageUpdate($eventId: String!, $bannerImageName: String!) {
    updateEventBannerImage(
      eventId: $eventId
      bannerImageName: $bannerImageName
    ) {
      event {
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
        end_time
        createdAt
        updatedAt
        organizerId
        venue
        eventHeader
        eventBannerImage
      }
      success
      errors {
        message
      }
    }
  }
`;

export const EVENT_DELETE_MUTATION = gql`
  mutation eventDelete($id: String!) {
    deleteEvent(id: $id)
  }
`;

export const ATTEND_EVENT_MUTATION = gql`
  mutation eventAttend($attendEventInputs: AttendEventInputType!) {
    AttendEvent(attendEventInputs: $attendEventInputs) {
      errors {
        message
      }
      success
      event {
        attendees
        title
      }
    }
  }
`;

export const CANCEL_EVENT_MUTATION = gql`
  mutation eventCancel($EventId: String!) {
    cancelEvent(EventId: $EventId)
  }
`;

export const REACTIVATE_EVENT_MUTATION = gql`
  mutation eventReactivate($EventId: String!) {
    reactivateEvent(EventId: $EventId)
  }
`;

export const DECLINE_ATTENDEE = gql`
  mutation declineAttendee($AttendeeId: String!, $EventId: String!) {
    declineAttendeeParticipation(AttendeeId: $AttendeeId, EventId: $EventId)
  }
`;

export const MULTIPLE_ATTENDEE_DECLINE_MUTATION = gql`
  mutation declineMultiple(
    $MultipleAttendeesInput: MultipleAttendeesInputType!
  ) {
    declineMultipleAttendeeParticipation(
      MultipleAttendeesInput: $MultipleAttendeesInput
    )
  }
`;
