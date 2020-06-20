import React, { useContext } from 'react';
import { colorComplement } from './utils/color-list';

interface ThemeColors {
  primaryColor: string;
  secondaryColor: string;
}

const initialState: ThemeColors = {
  primaryColor: 'indigo',
  secondaryColor: 'orange',
};

export enum ActionTypes {
  SetTheme = 'SetTheme',
}

export type ContextActions = {
  type: ActionTypes.SetTheme;
  value: string;
};

const initialContext: {
  themeColors: ThemeColors;
  setThemeColor: React.Dispatch<ContextActions>;
} = {
  themeColors: initialState,
  setThemeColor: () => {},
};

const ThemeContext = React.createContext(initialContext);

const reducer = (state: ThemeColors, action: ContextActions) => {
  switch (action.type) {
    case ActionTypes.SetTheme:
      return {
        ...state,
        primaryColor: action.value,
        secondaryColor: colorComplement(action.value),
      };
    default:
      return state;
  }
};

export function ThemeProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const themeColors = state;
  const setThemeColor = dispatch;

  return (
    <ThemeContext.Provider value={{ themeColors, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeColor = (): {
  themeColors: ThemeColors;
  setThemeColor: React.Dispatch<ContextActions>;
} => useContext(ThemeContext);
