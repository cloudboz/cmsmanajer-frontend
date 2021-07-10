import React from "react";
import getCookie from "utils/getCookie";
import { API, setToken } from "utils/api";
import { useUser } from "context/auth";

import Router, { useRouter } from "next/router";

export default function withAuth(Component) {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const { user: state } = useUser();
    const router = useRouter();

    React.useEffect(async () => {
      try {
        const token = getCookie({}, "token");
        setToken(token);
        const {
          data: { data: user },
        } = await API.get("/profile");
        console.log(state);
        setIsLoggedIn(true);
      } catch (error) {
        Router.replace("/login");
      }
    }, []);

    // If user is not logged in, return login component
    if (!isLoggedIn) {
      return <h1>Loading</h1>;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}
