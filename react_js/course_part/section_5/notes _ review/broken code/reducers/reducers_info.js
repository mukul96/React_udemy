import {
  INFOFETCHED
} from '../actions/actions_info'

const info = (state = [], action) => {
  switch (action.type) {
    case INFO_FETCHED:
      state = action.payload;
      break;
    default:
      return state
  }
}

export default info
