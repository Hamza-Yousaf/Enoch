export const changeMarkControlFunction = (
  toggleMarkOptionsShow: any,
  messageTab: any,
  control: any,
  markAllSent: any,
  likeAllInSent: any,
  setLikeAllSentMsg: any,
  setMarkAllSentMsg: any,
  TicketsInSent: any,
  addToSentDeleteList: any,
  markAllInbox: any,
  likeAllInInbox: any,
  setLikeAllInboxMsg: any,
  setMarkAllInboxMsg: any,
  TicketsInInbox: any,
  addToDeleteList: any,
  markAllDraft: any,
  likeAllInDraft: any,
  setLikeAllDraftMsg: any,
  setMarkAllDraftMsg: any,
  currentMarkAllControl: any
) => {
  toggleMarkOptionsShow();
  if (messageTab === "SENT") {
    if (control === "Starred") {
      markAllSent(false);
      likeAllInSent(true);
      setLikeAllSentMsg(true);
    } else if (control === "All") {
      likeAllInSent(false);
      markAllSent(true);
      setMarkAllSentMsg(true);
      let arrayOfIds: string[] = [];
      TicketsInSent.forEach((ticket: any, index: any) => {
        arrayOfIds.push(ticket.subID);
      });
      addToSentDeleteList(arrayOfIds);
    }
  } else if (messageTab === "INBOX") {
    if (control === "Starred") {
      markAllInbox(false);
      likeAllInInbox(true);
      setLikeAllInboxMsg(true);
    } else if (control === "All") {
      likeAllInInbox(false);
      markAllInbox(true);
      setMarkAllInboxMsg(true);
      let arrayOfIds: string[] = [];
      TicketsInInbox.forEach((ticket: any, index: any) => {
        arrayOfIds.push(ticket.subID);
      });
      addToDeleteList(arrayOfIds);
    }
  } else {
    if (control === "Starred") {
      markAllDraft(false);
      likeAllInDraft(true);
      setLikeAllDraftMsg(true);
    } else if (control === "All") {
      likeAllInDraft(false);
      markAllDraft(true);
      setMarkAllDraftMsg(true);
      let arrayOfIds: string[] = [];
      TicketsInInbox.forEach((ticket: any, index: any) => {
        arrayOfIds.push(ticket.subID);
      });
      addToDeleteList(arrayOfIds);
    }
  }

  currentMarkAllControl(control);
};
