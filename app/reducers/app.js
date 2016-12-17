import { ADD, SUBTRACT } from '../actions/actionApp';
import { MULT } from '../actions/actions'

const app = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 5;
    case 'SUBTRACT':
      return state - 2;
    case 'MULT':
      return state * state;
    default:
      return state;
  }
}

export default app;