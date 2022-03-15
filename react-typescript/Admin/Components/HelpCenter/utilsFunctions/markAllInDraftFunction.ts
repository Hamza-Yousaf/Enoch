export const markAllInDraftFunction = (
  currentMarkAllControlValue: any,
  likeAllDraftMsg: any,
  setLikeAllDraftMsg: any,
  likeAllInDraft: any,
  likeAllInDraftValue: any,
  markAllDraft: any,
  markAllDraftMsg: any,
  setMarkAllDraftMsg: any,
  markAllDraftValue: any,
  addToDraftDeleteList: any,
  TicketsInDraft: any
) => {
  if (currentMarkAllControlValue === "Starred") {
    if (likeAllDraftMsg === true) {
      setLikeAllDraftMsg(false);
      likeAllInDraft(!likeAllInDraftValue);
    } else {
      setLikeAllDraftMsg(true);
      likeAllInDraft(!likeAllInDraftValue);
    }
  } else {
    if (markAllDraftMsg === true) {
      setMarkAllDraftMsg(false);
      markAllDraft(!markAllDraftValue);
      addToDraftDeleteList([]);
    } else {
      let arrayOfIds: string[] = [];
      setMarkAllDraftMsg(true);
      markAllDraft(!markAllDraftValue);
      TicketsInDraft.forEach((ticket: any, index: any) => {
        arrayOfIds.push(ticket.subID);
      });
      addToDraftDeleteList(arrayOfIds);
    }
  }
};
