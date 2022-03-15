export const markAllInSentFunction = (
  currentMarkAllControlValue: string,
  likeAllSentMsg: any,
  setLikeAllSentMsg: any,
  likeAllInSent: any,
  likeAllInSentValue: any,
  markAllSent: any,
  markAllSentMsg: any,
  setMarkAllSentMsg: any,
  markAllSentValue: any,
  addToSentDeleteList: any,
  TicketsInSent: any
) => {
  if (currentMarkAllControlValue === "Starred") {
    if (likeAllSentMsg === true) {
      setLikeAllSentMsg(false);
      likeAllInSent(!likeAllInSentValue);
    } else {
      setLikeAllSentMsg(true);
      likeAllInSent(!likeAllInSentValue);
    }
  } else {
    if (markAllSentMsg === true) {
      setMarkAllSentMsg(false);
      markAllSent(!markAllSentValue);
      addToSentDeleteList([]);
    } else {
      let arrayOfIds: string[] = [];
      setMarkAllSentMsg(true);
      markAllSent(!markAllSentValue);
      TicketsInSent.forEach((ticket: any, index: any) => {
        arrayOfIds.push(ticket.subID);
      });
      addToSentDeleteList(arrayOfIds);
    }
  }
};
