// https://medium.com/cleverprogrammer/amazon-clone-using-react-the-ultimate-guide-fba2b36f3458

export const initialState = {
  user: null,
  token: null,
  themeMode: 'light',
  alertMessage: null,
  alertType: 'none',
  alertOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      if (action && action.ththemeModeeme) sessionStorage.setItem('themeMode', action.themeMode);
      return {
        ...state,
        themeMode: action.themeMode,
      };
    default:
      return state;
  }
};

export default reducer;
