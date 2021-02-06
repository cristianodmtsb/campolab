import { Maybe } from 'utils/functors';

export default state =>
  Maybe.of(state)
    .map(state => state.suportTicket)
    .map(suportTicket => suportTicket.ticketCalls)
    .get([]);
