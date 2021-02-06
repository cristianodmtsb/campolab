import { Maybe } from 'utils/functors';

export default state =>
  Maybe.of(state)
    .map(state => state.suportTicket)
    .map(suportTicket => ({
      isLoadingTickets: suportTicket.isLoadingTickets,
      isCreatingTicket: suportTicket.isCreatingTicket,
      isClosingTicket: suportTicket.isCreatingTicket,
      isLoadingCategories: suportTicket.isLoadingCategories,
    }))
    .get({
      isLoadingTickets: false,
      isCreatingTicket: false,
      isClosingTicket: false,
      isLoadingCategories: false,
    });
