import { AnyAction, Reducer } from 'redux';
import { EffectsCommandMap } from 'dva';
import { GetCurrUser } from '@/services/global';
import { globalModalState } from '@/models/data';

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: globalModalState) => T) => T },
) => void;

export interface GlobalModelType {
  namespace: string;
  state: globalModalState;
  effects: {
    GetCurrUser: Effect;
  };
  reducers: {
    saveUser: Reducer<globalModalState>;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    currUser: "",
  },
  effects: {
    *GetCurrUser({ payload }, { all, call, put }) {
      const response = yield call(GetCurrUser);
      const { Status, Data } = response;
      if(Status === 1){
        yield put({
          type: 'saveProject',
          payload: Data
        });
      }
    },
  },

  reducers: {
    saveUser(state, action) {
      return {
        ...state,
        currUser: action.payload,
      };
    },

  },
};

export default GlobalModel;
