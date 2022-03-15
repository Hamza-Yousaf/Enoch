import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = {
  currentCreatePostTab: "text-post",
  postingAs: "",
  userProfileImage: "",
  userName: "",
  usersCommunity: "",
  usersCommunityImage: "",
  isPostingAsDropdownOpen: false,
  isWhoCanSeeDropdownOpen: false,
  isCommunitiesModalOpen: false,
  communityWithVisibility: "",
  whoCanSeePost: "anyone",
  postText: "",
  sendingPost: false,
  isPostScreenOpen: false,
  isDocPostScreenOpen: false,
  isCommunitySelected: false,
  selectedCommunityName: "",
  selectedCommunityImage: "",
  communityName: "",
  postVideoFile: "",
  postImageFile: "",
  postTitle: "",
  postTo: "Your Communities",
  postType: "",
  justAddedHashTag: false,
  pollQuestion: "",
  pollCreationStage: 1,
  optionCAdded: false,
  addOptionC: false,
  addOptionD: false,
  OptionA: "",
  OptionB: "",
  OptionC: "",
  OptionD: "",
  duration: "1 Week",
  document: "",
  documentDescription: "",
  communitiesPostTriger: false,
  joinCommunites: false,
  wikiClick: false,
};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_CREATE_POST_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
