import api from './client';

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  refreshToken?: string;
  user?: {
    id: string;
    name?: string;
    email?: string;
  };
};

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/auth/login', payload);
  if (data.token) {
    localStorage.setItem('accessToken', data.token);
  }
  if (data.refreshToken) {
    localStorage.setItem('refreshToken', data.refreshToken);
  }
  return data;
}
