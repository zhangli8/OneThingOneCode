import { useAppStore } from '@/stores/app';
import Request, {type HttpError} from 'luch-request';


export const http = new Request({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 60 * 1,
});

http.interceptors.request.use(
  (config) => {
    const s = useAppStore()
    if (s.token) {
      config.header = {
        ...config.header,
        Authorization: `Bearer ${s.token}`,
      };
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.data?.error?.status === 404) {
      return Promise.reject(response.data);
    }
    return response.data;
  },
  async (error: HttpError<{ msg?: string } | undefined>) => {
    const {data} = error;

    setTimeout(() => {
      uni.showToast({
        title: data?.msg ?? error.errMsg,
        icon: 'none',
        position: 'bottom',
      });
    }, 100);

    return Promise.reject(error);
  }
);