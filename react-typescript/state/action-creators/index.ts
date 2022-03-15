import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const changeInnerPath = (path: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CHANGEINNERPATH,
      payload: path,
    });
  };
};

export const changeMessageTab = (tab: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CHANGEMESSAGETAB,
      payload: tab,
    });
  };
};

export const setRefetchUserFunction = (func: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REFETCH_USER_FUNCTION,
      payload: func,
    });
  };
};

export const setUserProfileState = (data: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_USER_PROFILE_STATE,
      payload: data,
    });
  };
};

export const markAllInbox = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MARKALLINBOX,
      payload: act,
    });
  };
};

export const markAllSent = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MARKALLSENT,
      payload: act,
    });
  };
};

export const markAllDraft = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MARKALLDRAFT,
      payload: act,
    });
  };
};

export const setCreatePostState = (data: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_CREATE_POST_STATE,
      payload: data,
    });
  };
};

export const showCreateTicketInputs = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWCREATETICKETINPUTS,
      payload: act,
    });
  };
};

export const setRefetchUserProfile = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REFETCH_USER_PROFILE,
      payload: act,
    });
  };
};

export const addToDeleteList = (tickets: string[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADDTODELETELIST,
      payload: tickets,
    });
  };
};
export const addToSentDeleteList = (tickets: string[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADDTOSENTDELETELIST,
      payload: tickets,
    });
  };
};
export const addToDraftDeleteList = (tickets: string[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADDTODRAFTDELETELIST,
      payload: tickets,
    });
  };
};

export const deleteInboxTickets = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETEINBOXTICKETS,
      payload: act,
    });
  };
};

export const deleteSentTickets = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETESENTTICKETS,
      payload: act,
    });
  };
};

export const deleteDraftTickets = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETEDRAFTTICKETS,
      payload: act,
    });
  };
};

export const getInboxTickets = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GETINBOXTICKETS,
    });
  };
};

export const deleteTicketsFromInbox = (indices: string[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETETICKETSFROMINBOX,
      payload: indices,
    });
  };
};

export const setDeleteAlert = (alert: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETDELETEALERT,
      payload: alert,
    });
  };
};

export const showDeleteConfirmModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWDELETECONFIRMMODAL,
      payload: act,
    });
  };
};

export const openMessageAttachments = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.OPENMESSAGEATTACHMENTS,
      payload: act,
    });
  };
};

export const likeAllInSent = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LIKEALLINSENT,
      payload: act,
    });
  };
};

export const likeAllInInbox = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LIKEALLININBOX,
      payload: act,
    });
  };
};

export const likeAllInDraft = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LIKEALLINDRAFT,
      payload: act,
    });
  };
};

export const showNameTags = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWNAMETAGS,
      payload: act,
    });
  };
};

export const currentMarkAllControl = (value: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENTMARKALLCONTROL,
      payload: value,
    });
  };
};

export const showShareTicketModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWSHARETICKETMODAL,
      payload: act,
    });
  };
};

export const showCreateCommunityModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWCREATECOMMUNITYMODAL,
      payload: act,
    });
  };
};

export const showForwardTicketModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWFORWARDTICKETMODAL,
      payload: act,
    });
  };
};

export const userProfile = (profile: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_USER_PROFILE,
      payload: profile,
    });
  };
};

export const quotedMessage = (message: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.QUOTEDMESSAGE,
      payload: message,
    });
  };
};

export const showShareTicketSuccessModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWSHARETICKETSUCCESSMODAL,
      payload: act,
    });
  };
};

export const showAddToThreadModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWADDTOTHREADMODAL,
      payload: act,
    });
  };
};

export const showTransferTicketModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWTRANSFERTICKETMODAL,
      payload: act,
    });
  };
};

export const showEditProfileModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWEDITPROFILEMODAL,
      payload: act,
    });
  };
};

export const showSavedPostAlert = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWSAVEDPOSTALERT,
      payload: act,
    });
  };
};

export const showCopyLinkAlert = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWCOPYLINKALERT,
      payload: act,
    });
  };
};

export const showReportPostAlert = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWREPORTPOSTALERT,
      payload: act,
    });
  };
};

export const showInviteAttendeesModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWINVITEATTENDEESMODAL,
      payload: act,
    });
  };
};

export const showWheelModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWWHEELMODAL,
      payload: act,
    });
  };
};

export const showShareEventModal = (act: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOWSHAREEVENTMODAL,
      payload: act,
    });
  };
};

export const profilePictureUrl = (url: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PROFILEPICTUREURL,
      payload: url,
    });
  };
};

export const coverImageUrl = (url: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.COVERIMAGEURL,
      payload: url,
    });
  };
};

export const currentEventCreationStage = (stage: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENTEVENTCREATIONSTAGE,
      payload: stage,
    });
  };
};

export const currentEventCreationId = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_EVENT_CREATION_ID,
      payload: id,
    });
  };
};

export const currentEventCreationData = (data: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_EVENT_CREATION_DATA,
      payload: data,
    });
  };
};

export const currentLoggedInUser = (data: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_LOGGED_IN_USER,
      payload: data,
    });
  };
};

export const currentEvent = (data: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_EVENT,
      payload: data,
    });
  };
};

export const current_entertainment_tab = (tab: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_ENTERTAINMENT_TAB,
      payload: tab,
    });
  };
};

export const current_entertainment_sub_menu = (tab: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_ENTERTAINMENT_SUB_MENU,
      payload: tab,
    });
  };
};

export const current_keno_tab = (tab: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_KENO_TAB,
      payload: tab,
    });
  };
};

export const current_keno_tournament_tab = (tab: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_KENO_TOURNAMENT_TAB,
      payload: tab,
    });
  };
};

export const current_keno_winners_tab = (tab: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_KENO_WINNERS_TAB,
      payload: tab,
    });
  };
};

export const numbers_to_play_in_treasure_hunt = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.NUMBERS_TO_PLAY_IN_TREASURE_HUNT,
      payload: value,
    });
  };
};

export const current_admin_2fa_method = (method: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_ADMIN_2FA_METHOD,
      payload: method,
    });
  };
};

export const get_all_users_posts = (posts: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ALL_POST_DATAs,
      payload: posts,
    });
  };
};

export const isImageSelected = (isImageSelected: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.IMAGE_IS_SELECTED,
      payload: isImageSelected,
    });
  };
};

export const changeNetworkContent = (tab: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_NETWORK_CHANGE,
      payload: tab,
    });
  };
};

export const receivedNetworkConnect = (obj: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RECEIVED_NETWORK_CONNECT,
      payload: obj,
    });
  };
};