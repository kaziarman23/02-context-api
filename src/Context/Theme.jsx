import { createContext, useContext } from "react";

export const themeContext = createContext({
    ThemeMood: "light",
    lightTheme: () => {},
    darkTheme: () => {},
});

export const themeProvider = themeContext.Provider;

export default function useTheme() {
    return useContext(themeContext);
}
