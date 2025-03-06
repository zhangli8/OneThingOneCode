
import { http } from '@/utils/request';
import { CreateStudentInfoQuery, StudentInfoModel } from './types';

export function getStudentInfo(id: number | string) {
  return http.get<any,{data:StudentInfoModel}>(`/students/${id}`);
}

export function createStudentInfo(code: string, data: CreateStudentInfoQuery) {
  return http.put<any,{data:StudentInfoModel}>(`/students/${code}`, {"data":data});
}