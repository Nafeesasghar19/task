
import { DATA } from '../../Types/Index';
export const Setdata = payload => dispatch => {
  dispatch({ type: DATA, payload });
};

