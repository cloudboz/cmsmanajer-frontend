import { API } from "utils/api";
import { useMutation } from "react-query";

const login = (body) => API.post("/login", body);
const register = (body) => API.post("/register", body);
const verify = (body) => API.post("/verify", body);

const useLogin = () => useMutation(login);
const useRegister = () => useMutation(register);

export { useLogin, useRegister, verify };
