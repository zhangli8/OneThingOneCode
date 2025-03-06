import { http } from '@/utils/request';

export function getSchool() {
  return http.get<any,{data:{
      title: string,
      content:string
}}>(`/school`);
}