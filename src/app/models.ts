export interface Student {
    student_id: number;
    name: string;
    email: string;
    date_joined: Date;
    address: string;
    city: string;
    country: string;
    zip: number;
}

export interface Subject {
    row_id: number;
    student_id: number;
    student_name: string;
    subject_name: string;
    grade: number;
    date: Date;
    selected: boolean;
}

export interface StudentIdToName {
    [key: number]: string;
}

export class Details {
    row_id: number | undefined;
    student_id: number | undefined;
    name: string | undefined;
    email: string | undefined;
    date_joined: Date | undefined;
    address: string | undefined;
    city: string | undefined;
    country: string | undefined;
    zip: number | undefined;
    subject_name: string | undefined;
    grade: number | undefined;
    constructor(student?: Student, subject?: Subject) {
        this.row_id = subject?.row_id || undefined;
        this.student_id = student?.student_id || undefined;
        this.name = student?.name || undefined;
        this.email = student?.email || undefined;
        this.date_joined = student?.date_joined || undefined;
        this.address = student?.address || undefined;
        this.city = student?.city || undefined;
        this.country = student?.country || undefined;
        this.zip = student?.zip || undefined;
        this.subject_name = subject?.subject_name || undefined;
        this.grade = subject?.grade || undefined;
    }

}
