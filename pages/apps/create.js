import CreateApp from "containers/app/create";
import getCookie from "utils/getCookie";
import { API, setToken } from "utils/api";

export default CreateApp;

export const getServerSideProps = async (context) => {
  try {
    const token = getCookie(context.req);

    setToken(token);
    const {
      data: { data: user },
    } = await API.get("/profile");

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.error(error.message);
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
      props: { user: null },
    };
  }
};
