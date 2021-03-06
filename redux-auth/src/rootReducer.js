import { SET_CURRENT_USER } from './actions';

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
  puppies: ['Lassie','Fluffykins','Wiener Dog']
};

export default function (state = DEFAULT_STATE, action){
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!(Object.keys(action.user).length),
        user: action.user
      };
    default: return state;
  }
}