export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  accessToken: string;
}

export interface AuthResponse {
  user: User;
  success: boolean;
}
