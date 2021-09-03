export class Person {
    private persons: Person[] = [];
    private currentPerson: Person;

    public firstname: string;
    public familyName: string;
    public gender: string;
    public age: number;
    public dateOfBirth: number;

    public constructor(firstname: string, familyName: string, dateOfBirth: number, gender: string){
        this.firstname = firstname;
        this.familyName = familyName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.age = null;
    }

    public add(firstname: string, familyName: string, dateOfBirth: number, gender: string): void{
        this.currentPerson = new Person(firstname, familyName, dateOfBirth, gender);
        this.persons.push(this.currentPerson);
    }

    public get(): Person{
        this.age = this.getAgeFromDate(this.dateOfBirth);

        // return {
        //     [Sort.FIRSTNAME] : this.firstname, 
        //     [Sort.LASTNAME] : this.familyName, 
        //     [Sort.dateOfBirth] : this.dateOfBirth, 
        //     [Sort.AGE] : calculatedAge, 
        //     [Sort.GENDER] : this.gender
        // };

        return this;
    }

    public listAll(prepareData = true): Person[]{
        const results: Person[] = [];
        this.persons.forEach(person => results.push(person.get()));

        if(prepareData){
            this.arrayPrepareData(results);
        }
        
        return results;
    }

    public listUnderAge(age): Person[]{
        let results = this.listAll(false);
        results = this.arraySearchForSubKeyValue(results, Sort.AGE, age, Operator.LOWER);
        this.arrayPrepareData(results);

        return results;
    }

    public sortedList(sort, direction): Person[]{
        const results: Person[] = this.listAll(false);
        this.arraySortByColumn(results, sort, direction);
        this.arrayPrepareData(results);

        return results;
    }

    public customSearch(searchCriteria): Person[]{
        let results: Person[] = this.listAll(false);
        if(searchCriteria.firstname != null){
            results = this.arraySearchForSubKeyValue(results, Sort.FIRSTNAME, searchCriteria.firstname, Operator.STARTWITH);
        }

        if(searchCriteria.lastname != null){
            results = this.arraySearchForSubKeyValue(results, Sort.LASTNAME, searchCriteria.lastname, Operator.STARTWITH);
        }

        if(searchCriteria.gender != null){
            results = this.arraySearchForSubKeyValue(results, Sort.GENDER, searchCriteria.gender, Operator.EQUALS);
        }

        if(searchCriteria.age != null && searchCriteria.ageOperator != null){
            results = this.arraySearchForSubKeyValue(results, Sort.AGE, searchCriteria.age, searchCriteria.ageOperator);
        }

        if(searchCriteria.sort != null && searchCriteria.direction != null){
            this.arraySortByColumn(results, searchCriteria.sort, searchCriteria.direction);
        }

        this.arrayPrepareData(results);

        return results;
    }

    public getAgeFromDate(date): string{
        const today = date("Y-m-d");
        const diff = date_diff(date_create(date), date_create(today));
        return diff.format('%y.%d');
    }
    public deleteColumn(array, key): void {
        return array_walk(array, function (value) use (key) {
            unset(value[key]);
        });
    }
    public arraySortByColumn(array, column, direction = Sort.ASC): void{
        const sortColumn = array();
        array.foreach((key, row) => {
            sortColumn[key] = row[column];
        });
        array_multisort(sortColumn, direction, array);
    }

    public arraySearchForSubKeyValue(array, key, value, operator): Person[]{
        let results: Person[] = [];
    
        if (Array.isArray(array)) {
            if(isset(array[key])){
                switch (operator){
                    case Operator.LOWER:
                        if(array[key] < value){
                            results[] = array;
                        }
                        break;
                    case Operator.LOWEROREQUAL:
                        if(array[key] <= value){
                            results[] = array;
                        }
                        break;
                    case Operator.GREATEST:
                        if(array[key] > value){
                            results[] = array;
                        }
                        break;
                    case Operator.GREATESTOREQUAL:
                        if(array[key] >= value){
                            results[] = array;
                        }
                        break;
                    case Operator.EQUALS:
                        if(array[key] == value){
                            results[] = array;
                        }
                        break;
                    case Operator.STARTWITH:
                        if(strpos(strtolower(array[key]), strtolower(value))===0){
                            results[] = array;
                        }
                        break;
                    default:
                        break;
                }
            }
    
            array.forEach(subarray => {
                results = array_merge(results, this.arraySearchForSubKeyValue(subarray, key, value, operator));
            });
        }
    
        return results;
    }

    public arrayPrepareData(array){
        this.deleteColumn(array, Sort.AGE);
    }


}