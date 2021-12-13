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

/// ////// convert data into json formate

const developerJsonData = JSON.stringify(developersData);
console.log(developerJsonData);

/// ////// save json data into locale storage

localStorage.setItem('developersData', developerJsonData);

/// /  get data from locale storage and conver them into regular array and object
const developerData = JSON.parse(localStorage.getItem('developersData'));
console.log(developerData);
