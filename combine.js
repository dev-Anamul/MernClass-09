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

const developersData = [
    {
        Id: 100,
        Name: 'Rakib Adnan',
        Skill: 'MERN Stack',
        Loc: 'Bogura',
        Gender: 'Male',
    },
    {
        Id: 130,
        Name: 'Mamun Islam',
        Skill: 'PHP',
        Loc: 'Dhaka',
        Gender: 'Male',
    },
    {
        Id: 540,
        Name: 'Arif Hassan',
        Skill: 'GoLang',
        Loc: 'Dinajpur',
        Gender: 'Male',
    },
    {
        Id: 120,
        Name: 'Rehena khatun',
        Skill: 'Java',
        Loc: 'Kustia',
        Gender: 'Female',
    },
    {
        Id: 250,
        Name: 'Ripa khatun',
        Skill: 'Node.js',
        Loc: 'Adam-dighi',
        Gender: 'Female',
    },
    {
        Id: 140,
        Name: 'Kohinur Islam',
        Skill: 'Laravel',
        Loc: 'Koigari',
        Gender: 'Female',
    },
    {
        Id: 540,
        Name: 'Abu Raihan',
        Skill: 'Django',
        Loc: 'Sherpur',
        Gender: 'Male',
    },
    {
        Id: 650,
        Name: 'Abu Sufian',
        Skill: 'WordPress',
        Loc: 'Barishal',
        Gender: 'Male',
    },
    {
        Id: 320,
        Name: 'Humayun ahmed',
        Skill: 'Python',
        Loc: 'Asulia',
        Gender: 'Male',
    },
    {
        Id: 120,
        Name: 'Sumaya Tasnim',
        Skill: 'JavaScript',
        Loc: 'Cox-bazar',
        Gender: 'Female',
    },
];

const family = [
    {
        Name: 'Nur Islam',
        rel: 'Father',
        loc: 'Bogura',
        phn: '01300536029',
    },
    {
        Name: 'Dewara Begum',
        rel: 'Mother',
        loc: 'Bogura',
        phn: '01721949231',
    },
    {
        Name: 'Abu bakkar',
        rel: 'Elder brother',
        loc: 'Bogura',
        phn: '01722135335',
    },
    {
        Name: 'Mamun',
        rel: 'Friends',
        loc: 'Bogura',
        phn: '01749254632',
    },
    {
        Name: 'Abu sayeed',
        rel: 'Friends',
        loc: 'Saudi arabia',
        phn: '01718986532',
    },
    {
        Name: 'Anamul Haque',
        rel: 'Friends',
        loc: 'Savar Dhaka',
        phn: '01718986235',
    },
    {
        Name: 'Arif',
        rel: 'Friends',
        loc: 'Jahangirnagar',
        phn: '01718986541',
    },
    {
        Name: 'Shovon',
        rel: 'Friends',
        loc: 'Faridpur',
        phn: '01718982541',
    },
    {
        Name: 'Nasir',
        rel: 'Friends',
        loc: 'Chandpur',
        phn: '01718986254',
    },
    {
        Name: 'Shampa Akter',
        rel: 'Friends',
        loc: 'Chandpur',
        phn: '01718986325',
    },
];

/// //// combine data array
const combineData = [student, developersData, family];

/// /////// convert data into
const combineJson = JSON.stringify(combineData);
console.log(combineJson);

/// //// save json data into local storage
localStorage.setItem('combineData', combineJson);

/// //// get json data from locale storage and convert theme into regular array and object
const combineLocalData = JSON.parse(localStorage.getItem('combineData'));
console.log(combineLocalData);
