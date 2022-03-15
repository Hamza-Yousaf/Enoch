export const deleteDraftTicketsFunction = (
  isDeleteDraftTickets: boolean,
  setDraftTickets: any,
  draftTickets: any,
  draftDeleteList: any,
  addToDraftDeleteList: any,
  deleteDraftTickets: any,
  showDeleteConfirmModal: any,
  showDeleteConfirmModalValue: any
) => {
  if (isDeleteDraftTickets === true) {
    if (showDeleteConfirmModalValue === true) {
      setDraftTickets(() => {
        return draftTickets.filter((ticket: any) => {
          return !draftDeleteList.includes(ticket.subID);
        });
      });
      addToDraftDeleteList([]);
      deleteDraftTickets(false);
      showDeleteConfirmModal(false);
    } else if (showDeleteConfirmModalValue === false) {
      deleteDraftTickets(false);
      showDeleteConfirmModal(true);
    }
  }
};
