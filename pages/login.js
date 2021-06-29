import Login from "containers/auth/login";
import getCookie from "utils/getCookie";
import { API, setToken } from "utils/api";

export default Login;

export const getServerSideProps = async (context) => {
  try {
    const token = getCookie(context.req);

    setToken(token);
    const {
      data: { data: user },
    } = await API.get("/profile");

    return {
      redirect: {
        destination: "/servers",
        permanent: false,
      },
      props: {
        user,
      },
    };
  } catch (error) {
    // console.error(error.message);
    return { props: { user: null } };
  }
};
