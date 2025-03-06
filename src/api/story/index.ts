import { http } from '@/utils/request';

export function getStory() {
  return http.get<any,{data:{
      title: string;
      content:string
}}>(`/story`);
}