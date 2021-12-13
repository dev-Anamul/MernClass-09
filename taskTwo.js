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

/// //// convert family data into json
const familyJson = JSON.stringify(family);
console.log(familyJson);

/// //// save json data into locale storage
localStorage.setItem('familyData', familyJson);

/// /// get data from locale storage and parse them into regular array and object
const familyData = JSON.parse(localStorage.getItem('familyData'));
console.log(familyData);
