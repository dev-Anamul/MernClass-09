const student = [
    {
        Roll: 12,
        Name: 'Rakib Adnan',
        Loc: 'Bogura',
        Gender: 'Male',
        marks: {
            Bn: 33,
            En: 40,
            Math: 45,
            S: 85,
            SS: 78,
            Rel: 85,
        },
    },
    {
        Roll: 87,
        Name: 'Priyaka das',
        Loc: 'Magura',
        Gender: 'Female',
        marks: {
            Bn: 75,
            En: 74,
            Math: 87,
            S: 52,
            SS: 40,
            Rel: 30,
        },
    },
    {
        Roll: 32,
        Name: 'Uttam Kimar',
        Loc: 'Natore',
        Gender: 'Male',
        marks: {
            Bn: 85,
            En: 49,
            Math: 76,
            S: 75,
            SS: 94,
            Rel: 65,
        },
    },
    {
        Roll: 98,
        Name: 'Mamun Islam',
        Loc: 'Rangpur',
        Gender: 'Male',
        marks: {
            Bn: 65,
            En: 85,
            Math: 76,
            S: 78,
            SS: 52,
            Rel: 75,
        },
    },
    {
        Roll: 65,
        Name: 'Abu sayeed',
        Loc: 'Cumilla',
        Gender: 'Male',
        marks: {
            Bn: 95,
            En: 62,
            Math: 89,
            S: 63,
            SS: 75,
            Rel: 61,
        },
    },
    {
        Roll: 121,
        Name: 'Yameen Hossain',
        Loc: 'Bogura',
        Gender: 'Male',
        marks: {
            Bn: 85,
            En: 65,
            Math: 41,
            S: 45,
            SS: 52,
            Rel: 40,
        },
    },
    {
        Roll: 85,
        Name: 'Soniya Bariki',
        Loc: 'Netrokona',
        Gender: 'Female',
        marks: {
            Bn: 39,
            En: 50,
            Math: 78,
            S: 49,
            SS: 40,
            Rel: 45,
        },
    },
    {
        Roll: 22,
        Name: 'Ratna Akter',
        Loc: 'Dhunot',
        Gender: 'Female',
        marks: {
            Bn: 51,
            En: 45,
            Math: 85,
            S: 74,
            SS: 41,
            Rel: 42,
        },
    },
    {
        Roll: 25,
        Name: 'Sayeem',
        Loc: 'Kuri-Gram',
        Gender: 'Male',
        marks: {
            Bn: 77,
            En: 65,
            Math: 45,
            S: 42,
            SS: 65,
            Rel: 74,
        },
    },
    {
        Roll: 15,
        Name: 'Humayra',
        Loc: 'Rajshahi',
        Gender: 'Female',
        marks: {
            Bn: 65,
            En: 88,
            Math: 65,
            S: 72,
            SS: 58,
            Rel: 60,
        },
    },
];

/// // conver student data into json formate
const studentData = JSON.stringify(student);
console.log(studentData);

/// /// save student data into locale storage
localStorage.setItem('students', studentData);

/// /// get students data from locale storage and parse data into regular array and object
const parseData = JSON.parse(localStorage.getItem('students'));
console.log(parseData);
