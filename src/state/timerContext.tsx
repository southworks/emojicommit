import React, { useContext } from 'react';

interface Timer {
  lastTime: number;
}

const initialState: Timer = {
  lastTime: new Date().getTime(),
};

export enum ActionTypes {
  SetlastTime = 'SetlastTime',
}

export type ContextActions = {
  type: ActionTypes.SetlastTime;
};

const initialContext: {
  timer: Timer;
  setlastTime: React.Dispatch<ContextActions>;
} = {
  timer: initialState,
  setlastTime: () => {},
};

const TimerContext = React.createContext(initialContext);

const reducer = (state: Timer, action: ContextActions) => {
  switch (action.type) {
    case ActionTypes.SetlastTime:
      return {
        ...state,
        lastTime: new Date().getTime(),
      };
    default:
      return state;
  }
};

export function TimerProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const timer = state;
  const setlastTime = dispatch;

  return (
    <TimerContext.Provider value={{ timer, setlastTime }}>
      {children}
    </TimerContext.Provider>
  );
}

export const useTimer = (): {
  timer: Timer;
  setlastTime: React.Dispatch<ContextActions>;
} => useContext(TimerContext);
