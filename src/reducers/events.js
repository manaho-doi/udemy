import _ from 'lodash';
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    // READ_EVENTとUPDATE_EVENTは処理が同じなので
    // 並列で書くだけでOK
    case READ_EVENT:
    case CREATE_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      console.log(action.response.data);
      return { ...events, [data.id]: data };
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
