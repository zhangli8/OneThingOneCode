
import { http } from '@/utils/request';
import { StudentInfoModel } from './types';

export function getStudentInfo(id: number | string) {
  return http.get<any,{data:StudentInfoModel}>(`/students/${id}`);
}