import { http } from '@/utils/request';
import { GetDesignerModel } from './types';

export function getDesigner() {
  return http.get<any,{data:GetDesignerModel}>(`/designer`);
}

