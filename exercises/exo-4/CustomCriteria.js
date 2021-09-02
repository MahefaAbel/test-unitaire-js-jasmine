export class CustomCriteria {
    // familyName;
    // firstname;
    // age;
    // ageOperator;
    // sortField;
    // sortDirection;

    public firstname;
    public lastname;
    public gender;
    public age;
    public ageOperator;
    public sort;
    public direction;

    __construct(firstname, lastname, gender, age, ageOperator, sort, direction){
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.age = age;
        this.ageOperator = ageOperator;
        this.sort = sort;
        this.direction = direction;
    }

}

abstract class Sort{
    const LASTNAME = 'lastname';
    const FIRSTNAME = 'firstname';
    const GENDER = 'gender';
    const AGE = 'age';
    const BIRTHDATE = 'birthDate';
}

abstract class Direction{
    const ASC = SORT_ASC;
    const DESC = SORT_DESC;
}

abstract class Gender{
    const MALE = 'H';
    const FEMALE = 'F';
}

abstract class Operator{
    const LOWER = '<';
    const LOWEROREQUAL = '<=';
    const GREATEST = '>';
    const GREATESTOREQUAL = '>=';
    const EQUALS = '=';
    const STARTWITH = 'startWith';
}
