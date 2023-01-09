
import { DATA } from '../../Types/Index';

const initialState = {
  saveddata:null
};

const _dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA:
      return { ...state, saveddata: payload };
    default:
      return state;
  }
};

export default _dataReducer;
