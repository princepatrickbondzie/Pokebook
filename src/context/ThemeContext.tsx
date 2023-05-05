import React, { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext({
  currentTheme: "",
  changeTheme: (theme: string) => {},
});

const themes = {
  primary: "#E85382",
  secondary: "#39BADF",
  tertiary: "#E1A725",
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("currentTheme");
    return storedTheme !== null ? JSON.parse(storedTheme) : themes.primary;
  });

  React.useEffect(() => {
    localStorage.setItem("currentTheme", JSON.stringify(currentTheme));
  }, [currentTheme]);

  const changeTheme = (theme: string) => {
    switch (theme) {
      case "primary":
        setCurrentTheme(themes.primary);
        break;
      case "secondary":
        setCurrentTheme(themes.secondary);
        break;
      case "tertiary":
        setCurrentTheme(themes.tertiary);
        break;

      default:
        setCurrentTheme(themes.primary);
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
