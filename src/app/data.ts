import { Student, Subject } from "./models";
export const mockStudents: Student[] = [
    {
        student_id: 1,
        name: 'morgan',
        email: 'morgan@gmail.com',
        date_joined: new Date(),
        address: 'karlibach',
        city: 'Tel Aviv',
        country: 'Israel',
        zip: 56577
    },
    {
        student_id: 2,
        name: 'david',
        email: 'david@gmail.com',
        date_joined: new Date(1671531200000),
        address: 'rashi',
        city: 'Tel Aviv',
        country: 'Israel',
        zip: 1111
    },
    {
        student_id: 3,
        name: 'ron',
        email: 'ron@gmail.com',
        date_joined: new Date(1672231200000),
        address: 'Herzl',
        city: 'ashdod',
        country: 'Israel',
        zip: 56577
    }
]



export const mockSubjects: Subject[] = [
    {
        row_id: 1,
        student_name: '',
        student_id: 1,
        subject_name: 'Algebra',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 2,
        student_name: '',
        student_id: 1,
        subject_name: 'English',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 3,
        student_name: '',
        student_id: 1,
        subject_name: 'History',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 4,
        student_name: '',
        student_id: 1,
        subject_name: 'Literature',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 5,
        student_name: '',
        student_id: 1,
        subject_name: 'Biology',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 6,
        student_name: '',
        student_id: 1,
        subject_name: 'Chemistry',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 7,
        student_name: '',
        student_id: 2,
        subject_name: 'Algebra',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 8,
        student_name: '',
        student_id: 2,
        subject_name: 'English',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 9,
        student_name: '',
        student_id: 2,
        subject_name: 'History',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 10,
        student_name: '',
        student_id: 2,
        subject_name: 'Literature',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 11,
        student_name: '',
        student_id: 2,
        subject_name: 'Biology',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 12,
        student_name: '',
        student_id: 2,
        subject_name: 'Chemistry',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 13,
        student_name: '',
        student_id: 3,
        subject_name: 'Algebra',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },

    {
        row_id: 14,
        student_name: '',
        student_id: 3,
        subject_name: 'English',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 15,
        student_name: '',
        student_id: 3,
        subject_name: 'History',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 16,
        student_name: '',
        student_id: 3,
        subject_name: 'Literature',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 17,
        student_name: '',
        student_id: 3,
        subject_name: 'Biology',
        grade: 100,
        date: getRandomDate(),
        selected: false
    },
    {
        row_id: 18,
        student_name: '',
        student_id: 3,
        subject_name: 'Chemistry',
        grade: 100,
        date: getRandomDate(),
        selected: false
    }
]

function getRandomDate(start = new Date(2000, 0, 1), end = new Date()) {
    const startTime = start.getTime();
    const endTime = end.getTime();
    const randomTime = startTime + Math.random() * (endTime - startTime);
    return new Date(randomTime);
}