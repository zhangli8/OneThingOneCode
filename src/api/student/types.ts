import { StudentGenderType } from "@/enums/student";

export interface StudentInfoModel {
    name: string;
    grade: string;
    phone_number: number;
    bound_userinfo: boolean;
    verification_code: string;
    gender:StudentGenderType;
    product: string;
    specification: string;
    fabric: string;
    manufacturer: string;
}

export interface CreateStudentInfoQuery {
    name: string;
    grade: string;
    phone_number: string;
    gender:StudentGenderType;
}

export interface UpdateBoundStatusQuery {
    bound_userinfo: boolean;
}
