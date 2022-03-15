export const markAllInboxFunction = (
  currentMarkAllControlValue: string,
  likeAllInboxMsg: boolean,
  setLikeAllInboxMsg: any,
  likeAllInInbox: any,
  likeAllInInboxValue: any,
  markAllInboxMsg: any,
  setMarkAllInboxMsg: any,
  markAllInbox: any,
  markAllInboxValue: any,
  addToDeleteList: any,
  TicketsInInbox: any
) => {
  if (currentMarkAllControlValue === "Starred") {
    if (likeAllInboxMsg === true) {
      setLikeAllInboxMsg(false);
      likeAllInInbox(!likeAllInInboxValue);
    } else {
      setLikeAllInboxMsg(true);
      likeAllInInbox(!likeAllInInboxValue);
    }
  } else {
    if (markAllInboxMsg === true) {
      setMarkAllInboxMsg(false);
      markAllInbox(!markAllInboxValue);
      addToDeleteList([]);
    } else {
      let arrayOfIds: string[] = [];
      setMarkAllInboxMsg(true);
      markAllInbox(!markAllInboxValue);
      TicketsInInbox.forEach((ticket: any, index: any) => {
        arrayOfIds.push(ticket.subID);
      });
      addToDeleteList(arrayOfIds);
    }
  }
};
