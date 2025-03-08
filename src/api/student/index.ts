
import { http } from '@/utils/request';
import { CreateStudentInfoQuery, StudentInfoModel, UpdateBoundStatusQuery } from './types';

export function getStudentInfo(id: number | string) {
  return http.get<any,{data:StudentInfoModel}>(`/students/${id}`);
}

export function createStudentInfo(code: string, data: CreateStudentInfoQuery) {
  return http.put<any,{data:StudentInfoModel}>(`/students/${code}`, {"data":data});
}

export function updateBoundStatus(code: string | string, data: UpdateBoundStatusQuery) {
  return http.put<any,{data:UpdateBoundStatusQuery}>(`/students/${code}`, {"data":data});
}