import { http } from '@/utils/request';

export function getDesigner() {
  return http.get<any,{data:{content:string}}>(`/designer`);
}