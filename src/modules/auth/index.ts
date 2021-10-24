import { createAction, handleActions } from "redux-actions";
//import { setToken } from "~/lib/api/client";
import { UtilStorage } from "../../lib/util/UtilStorage";

const RESTORE_TOKEN = "auth/RESTORE_TOKEN";

export const changeToken = createAction(
  RESTORE_TOKEN,
  (token: string | null) => token
);

type AuthState = {
  userToken: string | null;
  isLoading: boolean;
};

const initialState: AuthState = {
  userToken: null,
  isLoading: true,
};

const auth = handleActions<AuthState, any>(
  {
    [RESTORE_TOKEN]: (
      state: AuthState,
      { payload: token }: { payload: string | null }
    ) => {
      UtilStorage.setToken(token);
      //setToken(token);
      return {
        ...state,
        userToken: token,
        isLoading: false,
      };
    },
  },
  initialState
);

export default auth;
