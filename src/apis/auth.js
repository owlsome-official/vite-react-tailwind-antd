
import Axios, { HttpStatusCode } from "utils/axios.service";
import {
  API_SIGN_IN,
  API_SIGN_OUT, SERVER_INTERNAL_ERROR_TEXT
} from "utils/constants";

// Usage: const [ redirectUrl, errMsg ] = SignIn("username", "password")
const SignIn = async (username = "", password = "") => {
  try {
    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();
    let response = await Axios.post(
      API_SIGN_IN,
      {
        username,
        password,
      },
      { cancelToken: source.token }
    );
    const { token } = response.data.response_data;
    console.log(token)

    return [token, ""];
  } catch (error) {
    console.error(error);
    const { status } = error?.response;
    switch (status) {
      case HttpStatusCode.BadRequest:
        return ["", BAD_REQUEST_TEXT];

      default:
        break;
    }
    return ["", SERVER_INTERNAL_ERROR_TEXT];
  }
};

// Usage: const isAccepted = SignOut()
const SignOut = async () => {
  try {
    await Axios.post(API_SIGN_OUT, {});
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  SignIn,
  SignOut,
};
