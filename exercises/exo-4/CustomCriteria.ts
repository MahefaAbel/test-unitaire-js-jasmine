
export class CustomCriteria {
    public firstname;
    public lastname;
    public gender;
    public age;
    public ageOperator;
    public sort;
    public direction;

    public constructor(firstname, lastname, gender, age, ageOperator, sort, direction){
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.age = age;
        this.ageOperator = ageOperator;
        this.sort = sort;
        this.direction = direction;
    }

}

export enum Sort{
    LASTNAME = 'lastname',
    FIRSTNAME = 'firstname',
    GENDER = 'gender',
    AGE = 'age',
    BIRTHDATE = 'birthDate',
    ASC = 'ASC'
}

export enum Direction{
    ASC = "SORT_ASC",
    DESC = "SORT_DESC",
}

export enum Gender{
    MALE = 'H',
    FEMALE = 'F',
}

export enum Operator{
    LOWER = '<',
    LOWEROREQUAL = '<=',
    GREATEST = '>',
    GREATESTOREQUAL = '>=',
    EQUALS = '=',
    STARTWITH = 'startWith',
}
