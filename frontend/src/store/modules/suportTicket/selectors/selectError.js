import { Maybe } from 'utils/functors';

export default state =>
  Maybe.of(state)
    .map(state => state.suportTicket)
    .map(suportTicket => suportTicket.error)
    .get({ msg: '', hasError: false });
