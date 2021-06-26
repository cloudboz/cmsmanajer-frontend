import cookie from "cookie";
import Cookies from "js-cookie";

function getTokenCookie(data) {
  const tkn = Cookies.get("token");
  const x = cookie.parse(data?.headers?.cookie || "");

  let token = undefined;
  if (Object.keys(x).length > 0) {
    token = x.token;
  } else {
    token = tkn;
  }

  return token;
}

export default getTokenCookie;
