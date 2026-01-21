import axios, { AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

type RetryConfig = InternalAxiosRequestConfig & { _retryCount?: number };

const MAX_RETRIES = 2;
const RETRY_STATUSES = new Set([408, 429, 502, 503, 504]);

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'https://api.example.com',
  timeout: 10_000,
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['X-Request-Id'] = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryConfig | undefined;
    const status = error.response?.status;

    const shouldRetry = originalRequest && (status ? RETRY_STATUSES.has(status) : true) && (originalRequest._retryCount ?? 0) < MAX_RETRIES;

    if (shouldRetry) {
      originalRequest._retryCount = (originalRequest._retryCount ?? 0) + 1;
      const delay = 300 * originalRequest._retryCount;
      await new Promise((resolve) => setTimeout(resolve, delay));
      return api(originalRequest);
    }

    throw error;
  },
);

export default api;
