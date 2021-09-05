import { Direction, Gender, Operator, Sort } from "./CustomCriteria";
import { Person } from "./Person";

export const testData = 
[
    {[Sort.FIRSTNAME] : 'Jean', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1957-04-22', [Sort.GENDER] : Gender.MALE},
    {[Sort.FIRSTNAME] : 'Soa', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1977-05-09', [Sort.GENDER] : Gender.FEMALE},
    {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
    {[Sort.FIRSTNAME] : 'Jean-Yves', [Sort.LASTNAME] : 'RAMIARAMANANA', [Sort.BIRTHDATE] : '1980-08-16', [Sort.GENDER] : Gender.MALE},
    {[Sort.FIRSTNAME] : 'Yvette', [Sort.LASTNAME] : 'RANDRIANARISOA', [Sort.BIRTHDATE] : '1954-11-17', [Sort.GENDER] : Gender.FEMALE},
    {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
    {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
    {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
    {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
    {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
];

export function setUp() : Person
{
    const person = new Person();
    testData.forEach( value => { 
        person.add(value[Sort.FIRSTNAME], value[Sort.LASTNAME], value[Sort.BIRTHDATE], value[Sort.GENDER]);
    });
    return person;
}

export function listUnderAgeProvider(){
    return [
        [10, 
            [
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
            ]
        ],
        [30, 
            [
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
            ]
        ], 
        [40,
            [
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
            ]
        ]
    ];
}

export function sortedListByProvider(){
    return [
        [Sort.FIRSTNAME, Direction.ASC, 
            [
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1957-04-22', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean-Yves', [Sort.LASTNAME] : 'RAMIARAMANANA', [Sort.BIRTHDATE] : '1980-08-16', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Soa', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1977-05-09', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Yvette', [Sort.LASTNAME] : 'RANDRIANARISOA', [Sort.BIRTHDATE] : '1954-11-17', [Sort.GENDER] : Gender.FEMALE},
            ]
        ],
        [Sort.FIRSTNAME, Direction.DESC,
            [
                {[Sort.FIRSTNAME] : 'Yvette', [Sort.LASTNAME] : 'RANDRIANARISOA', [Sort.BIRTHDATE] : '1954-11-17', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Soa', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1977-05-09', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Jean-Yves', [Sort.LASTNAME] : 'RAMIARAMANANA', [Sort.BIRTHDATE] : '1980-08-16', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1957-04-22', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
            ]
        ],
        [Sort.LASTNAME, Direction.ASC,
            [
                {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Jean', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1957-04-22', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Soa', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1977-05-09', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean-Yves', [Sort.LASTNAME] : 'RAMIARAMANANA', [Sort.BIRTHDATE] : '1980-08-16', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Yvette', [Sort.LASTNAME] : 'RANDRIANARISOA', [Sort.BIRTHDATE] : '1954-11-17', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
            ]
        ],
        [Sort.LASTNAME, Direction.DESC,
            [
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Yvette', [Sort.LASTNAME] : 'RANDRIANARISOA', [Sort.BIRTHDATE] : '1954-11-17', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean-Yves', [Sort.LASTNAME] : 'RAMIARAMANANA', [Sort.BIRTHDATE] : '1980-08-16', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1957-04-22', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Soa', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1977-05-09', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
            ]
        ],
        [Sort.GENDER, Direction.ASC, 
            [                    
                {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Soa', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1977-05-09', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Yvette', [Sort.LASTNAME] : 'RANDRIANARISOA', [Sort.BIRTHDATE] : '1954-11-17', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1957-04-22', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean-Yves', [Sort.LASTNAME] : 'RAMIARAMANANA', [Sort.BIRTHDATE] : '1980-08-16', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
            ]
        ],
        [Sort.GENDER, Direction.DESC,
            [
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1957-04-22', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean-Yves', [Sort.LASTNAME] : 'RAMIARAMANANA', [Sort.BIRTHDATE] : '1980-08-16', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Soa', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1977-05-09', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Yvette', [Sort.LASTNAME] : 'RANDRIANARISOA', [Sort.BIRTHDATE] : '1954-11-17', [Sort.GENDER] : Gender.FEMALE},
            ]
        ],
        [Sort.AGE, Direction.ASC, 
            [
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jean-Yves', [Sort.LASTNAME] : 'RAMIARAMANANA', [Sort.BIRTHDATE] : '1980-08-16', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Soa', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1977-05-09', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Jean', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1957-04-22', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Yvette', [Sort.LASTNAME] : 'RANDRIANARISOA', [Sort.BIRTHDATE] : '1954-11-17', [Sort.GENDER] : Gender.FEMALE},
            ]
        ],
        [Sort.AGE, Direction.DESC,
            [
                {[Sort.FIRSTNAME] : 'Yvette', [Sort.LASTNAME] : 'RANDRIANARISOA', [Sort.BIRTHDATE] : '1954-11-17', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Jean', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1957-04-22', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Soa', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1977-05-09', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Jean-Yves', [Sort.LASTNAME] : 'RAMIARAMANANA', [Sort.BIRTHDATE] : '1980-08-16', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Mercia', [Sort.LASTNAME] : 'DUPOND', [Sort.BIRTHDATE] : '2000-01-01', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Marc', [Sort.LASTNAME] : 'TATANDRAZA', [Sort.BIRTHDATE] : '2013-01-13', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Marine', [Sort.LASTNAME] : 'LEBLANC', [Sort.BIRTHDATE] : '2021-07-15', [Sort.GENDER] : Gender.FEMALE},
            ]
        ],
    ];
}

export function customSearchProvider(){
    return [
        ['be', null, null, null, null, Sort.FIRSTNAME, Direction.ASC,
            [
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
            ]
        ],
        ['jE', null, Gender.FEMALE, null, null, null, null,
            [
                {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
            ]
        ],
        [null, 'RA', null, 40, Operator.LOWEROREQUAL, Sort.FIRSTNAME, Direction.DESC,
            [
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
            ]
        ],
        [null, 'ra', null, null, null, Sort.AGE, Direction.DESC,
            [
                {[Sort.FIRSTNAME] : 'Yvette', [Sort.LASTNAME] : 'RANDRIANARISOA', [Sort.BIRTHDATE] : '1954-11-17', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Jean', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1957-04-22', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Soa', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1977-05-09', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Jeanne', [Sort.LASTNAME] : 'RAKOTO', [Sort.BIRTHDATE] : '1978-09-14', [Sort.GENDER] : Gender.FEMALE},
                {[Sort.FIRSTNAME] : 'Jean-Yves', [Sort.LASTNAME] : 'RAMIARAMANANA', [Sort.BIRTHDATE] : '1980-08-16', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Andry', [Sort.LASTNAME] : 'RAKOTONIRINA', [Sort.BIRTHDATE] : '1999-09-19', [Sort.GENDER] : Gender.MALE},
                {[Sort.FIRSTNAME] : 'Bernard', [Sort.LASTNAME] : 'RANDRIA', [Sort.BIRTHDATE] : '2011-11-11', [Sort.GENDER] : Gender.MALE},
            ]
        ],
    ];
}