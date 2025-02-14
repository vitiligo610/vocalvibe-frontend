import axios from "axios";
import { AuthResponse, UserCredentials } from "./defifnitions";

const BACKEND_URL = process.env.BACKEND_URL;

export const loginUser = async (credentials: UserCredentials) => {
  const res: AuthResponse = await axios.post(`${BACKEND_URL}/login`, {
    ...credentials,
  });

  return res;
};
