import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import AuthContext from "./AppContex";
import useAuthToken from "../hooks/useAuthToken";
import { IntlProvider } from "react-intl";
import enTranslations from "../languages/en.json";

interface AppProviderType {
  children: React.ReactNode;
}

interface AppStateType {
  isAuthenticated: boolean;
  locale: string;
}

const initialState: AppStateType = {
  isAuthenticated: false,
  locale: "en",
};

const reducer = (state: AppStateType, action: any) => {
  if (action !== "RESET") return { ...state, ...action };
  return initialState;
};

const AppProvider = ({ children }: AppProviderType) => {
  const translations: any = {
    en: enTranslations,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const isAuthenticated = useAuthToken();

  useEffect(() => {
    dispatch({
      isAuthenticated,
    });
  }, []);

  const messages: any = translations[state.locale || "en"];

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      <IntlProvider
        defaultLocale="en"
        locale={state.locale}
        messages={messages}
      >
        {children}
      </IntlProvider>
    </AuthContext.Provider>
  );
};

export default AppProvider;
