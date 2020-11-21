import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./pages/home";
import React, { useEffect, useState } from "react";
import Terms from "./pages/terms";
import Shared from "./pages/shared";
import { GlobalStyles } from "./css/global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./css/theme";

const AppRoute = () => {
  const [theme, settheme] = useState("light");
  const selectedTheme = theme !== "light" ? lightTheme : darkTheme;

  const switchTheme = (mode) => {
    switch (mode) {
      case "light":
        localStorage.setItem("theme", "dark");
        settheme("dark");
        break;
      case "dark":
        localStorage.setItem("theme", "light");
        settheme("light");
        break;
      default:
        break;
    }
  };

  const setTheme = () => {
    settheme(localStorage.getItem("theme"));
    if (theme !== null) {
      switchTheme(theme === "light" ? "dark" : "light");
    }
  };

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/(:engine)" component={Home} />
          <Route
            theme={theme}
            switchTheme={switchTheme}
            path="/shared/:referralID"
            component={Shared}
          />
          <Route path="/terms" component={Terms} />
          <Route
            theme={theme}
            switchTheme={switchTheme}
            path="/"
            component={Home}
          />
          <Route path="/search" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoute;
