import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import innerPathReducer from "./innerPathReducer";
import messageTabReducer from "./messagePathReducer";
import markAllInboxReducer from "./markAllInboxReducer";
import markAllSentReducer from "./markAllSentReducer";
import markAllDraftReducer from "./markAllDraftReducer";
import showCreateTicketInputsReducer from "./showCreateTicketInputsReducer";
import addToDeleteListReducer from "./addToDeleteListReducer";
import addToSentDeleteListReducer from "./addToSentDeleteListReducer";
import addToDraftDeleteListReducer from "./addToDraftDeleteListReducer";
import deleteInboxTicketReducer from "./deleteInboxTicketReducer";
import deleteSentTicketsReducer from "./deleteSentTicketsReducer";
import deleteDraftTicketsReducer from "./deleteDraftTicketsReducer";
import inboxTicketsReducer from "./inboxTicketsReducer";
import draftTicketsReducer from "./draftTicketsReducer";
import sentTicketsReducer from "./sentTicketsReducer";
import deleteAlertReducer from "./deleteAlertReducer";
import showDeleteConfirmModalReducer from "./showDeleteConfirmModalReducer";
import openMessageAttachmentsReducer from "./openMessageAttachmentsReducer";
import likeAllInInboxReducer from "./likeAllInInboxReducer";
import likeAllInSentReducer from "./likeAllInSentReducer";
import likeAllInDraftReducer from "./likeAllInDraftReducer";
import showNameTagsReducer from "./showNameTagsReducer";
import currentMarkAllControlReducer from "./currentMarkAllControlReducer";
import showShareTicketModalReducer from "./showShareTicketModalReducer";
import showForwardTicketModalReducer from "./showForwardTicketModalReducer";
import showSharedTicketSuccessModalReducer from "./showSharedTicketSuccessModalReducer";
import quotedMessageReducer from "./quotedMessageReducer";
import showAddToThreadModalReducer from "./showAddToThreadModalReducer";
import showTransferTicketModalReducer from "./showTransferTicketModalReducer";
import showSavedPostAlertReducer from "./showSavedPostAlertReducer";
import showReportPostAlertReducer from "./showReportPostAlertReducer";
import showCopyLinkAlertReducer from "./showCopyLinkAlertReducer";
import currentEventCreationStageReducer from "./currentEventCreationStageReducer";
import showInviteAttendeesModalReducer from "./showInviteAttendeesModalReducer";
import showShareEventModalReducer from "./showShareEventModalReducer";
import profilePictureUrlReducer from "./profilePictureUrlReducer";
import coverImageUrlReducer from "./coverImageUrlReducer";
import currentEntertainmentTabReducer from "./currentEntertainmentTabReducer";
import currentEntertainmentSubMenuReducer from "./currentEntertainmentPopularTabReducer";
import currentKenoTabReducer from "./currentKenoTabReducer";
import currentKenoTournamentTabReducer from "./currentKenoTournamentTabReducer";
import currentKenoWinnersTabReducer from "./currentKenoWinnersTabReducer";
import numbersToPlayInTreasureHuntReducer from "./numbersToPlayInTreasureHuntReducer";
import currentAdmin2faMethodReducer from "./currentAdmin2faMethodReducer";
import showEditProfileModalReducer from "./showEditProfileModalReducer";
import setUserProfileReducer from "./setUserProfileReducer";
import showCreateCommunityModalReducer from "./showCreateCommunityModalReducer";
import showWheelModalReducer from "./showWheelModalReducer";
import currentEventCreationIdReducer from "./currentEventCreationIdReducer";
import currentEventCreationDataReducer from "./currentEventCreationDataReducer";
import currentLoggedInUserReducer from "./currentLoggedInUserReducer";
import currentEventReducer from "./currentEventReducer";
import getAllPostsReducers from "./getAllPostReducres";
import isimageselectedReducer from "./isimageselectedReducer";
import createPostStateReducer from "./setCreatePostStateReducer";
import refetchUserProfileReducer from "./refetchUserProfileReducer";
import refetchUserProfileFunctionReducer from "./setRefetchUserFunctionReducer";
import setUserProfileStateReducer from "./setUserProfileStateReducer";
import networkReducer from "./networkReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "setCreatePostState",
    "currentLoggedInUser",
    "setUserProfileState",
  ],
};

const rootReducer = combineReducers({
  innerPath: innerPathReducer,
  messageTab: messageTabReducer,
  markAllInbox: markAllInboxReducer,
  markAllSent: markAllSentReducer,
  markAllDraft: markAllDraftReducer,
  showCreateTicketInputs: showCreateTicketInputsReducer,
  deleteList: addToDeleteListReducer,
  sentDeleteList: addToSentDeleteListReducer,
  draftDeleteList: addToDraftDeleteListReducer,
  deleteInboxTicket: deleteInboxTicketReducer,
  deleteSentTickets: deleteSentTicketsReducer,
  deleteDraftTickets: deleteDraftTicketsReducer,
  inboxTickets: inboxTicketsReducer,
  deleteAlert: deleteAlertReducer,
  sentTickets: sentTicketsReducer,
  draftTickets: draftTicketsReducer,
  showDeleteConfirmModal: showDeleteConfirmModalReducer,
  openMessageAttachment: openMessageAttachmentsReducer,
  likeAllInInbox: likeAllInInboxReducer,
  likeAllInSent: likeAllInSentReducer,
  likeAllInDraft: likeAllInDraftReducer,
  currentMarkAllControl: currentMarkAllControlReducer,
  showNameTags: showNameTagsReducer,
  showShareTicketModal: showShareTicketModalReducer,
  showForwardTicketModal: showForwardTicketModalReducer,
  showSharedTicketSuccessModal: showSharedTicketSuccessModalReducer,
  quotedMessage: quotedMessageReducer,
  showAddToThreadModal: showAddToThreadModalReducer,
  showTransferTicketModal: showTransferTicketModalReducer,
  showSavedPostAlert: showSavedPostAlertReducer,
  showReportPostAlert: showReportPostAlertReducer,
  showCopyLinkAlert: showCopyLinkAlertReducer,
  currentEventCreationStage: currentEventCreationStageReducer,
  showInviteAttendeesModal: showInviteAttendeesModalReducer,
  showShareEventModal: showShareEventModalReducer,
  profilePictureUrl: profilePictureUrlReducer,
  coverImageUrl: coverImageUrlReducer,
  current_entertainment_tab: currentEntertainmentTabReducer,
  current_entertainment_sub_menu: currentEntertainmentSubMenuReducer,
  currentKenoTab: currentKenoTabReducer,
  currentKenoTournamentTab: currentKenoTournamentTabReducer,
  currentKenoWinnersTab: currentKenoWinnersTabReducer,
  numbersToPlayInTreasureHunt: numbersToPlayInTreasureHuntReducer,
  current_admin_2fa_method: currentAdmin2faMethodReducer,
  showEditProfileModal: showEditProfileModalReducer,
  userProfile: setUserProfileReducer,
  showCreateCommunityModal: showCreateCommunityModalReducer,
  showWheelModal: showWheelModalReducer,
  currentEventCreationId: currentEventCreationIdReducer,
  currentEventCreationData: currentEventCreationDataReducer,
  currentLoggedInUser: currentLoggedInUserReducer,
  currentEvent: currentEventReducer,
  getAllPosts: getAllPostsReducers,
  isImageSelected: isimageselectedReducer,
  setCreatePostState: createPostStateReducer,
  refetchUserProfileReducer: refetchUserProfileReducer,
  refetchUserFunction: refetchUserProfileFunctionReducer,
  setUserProfileState: setUserProfileStateReducer,
  networkState: networkReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type State = ReturnType<typeof rootReducer>;
