const UPDATE_DETAILS_INDEX = 'details/UPDATE_DETAILS_INDEX';

const initialState = 1;

const detailsReducer = (action, state = initialState) => {
  switch (action.type) {
    case UPDATE_DETAILS_INDEX:
      return action.payload;
    default:
      return state;
  }
};

export const updateDetailsIndex = (index) => ({
  type: UPDATE_DETAILS_INDEX,
  payload: index,
});

export default detailsReducer;
