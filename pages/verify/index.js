import VerifyEmail from "containers/auth/verify";
import getCookie from "utils/getCookie";
import { API, setToken } from "utils/api";
import redirect from "utils/redirect";

VerifyEmail.getInitialProps = async (context) => {
  try {
    const token = getCookie(context.req);

    setToken(token);
    const {
      data: { data: user },
    } = await API.get("/profile");

    if (user?.verified) {
      redirect(context, "/servers");
    }

    return { user };
  } catch (error) {}
};

export default VerifyEmail;
