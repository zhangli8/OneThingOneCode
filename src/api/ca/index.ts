import { http } from '@/utils/request';
import { CaImgModel } from './types';


export function getCaImg() {
  return http.get<any,{data:CaImgModel}>(`/ca?populate=img`);
}