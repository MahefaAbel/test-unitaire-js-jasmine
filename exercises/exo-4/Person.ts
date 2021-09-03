import { DateUtils } from "../../libs/DateUtils";
import { Operator, Sort } from "./CustomCriteria";
import { array_multisort } from "../../libs/Array";

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
        let results: Person[] = this.listAll(false);
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

    public getAgeFromDate(date): number{
        const today = new Date("Y-m-d");
        const diff = DateUtils.dateDiff(new Date(date), new Date(today));
        // return diff.format('%y.%d');
        return diff;
    }
    public deleteColumn(array, key): void {
        return array.map(value => delete value[key] );
    }
    public arraySortByColumn(array, column, direction = Sort.ASC): void{
        const sortColumn = array();
        array.foreach((key, row) => {
            sortColumn[key] = row[column];
        });
        array_multisort(sortColumn, direction, array);
    }

    public arraySearchForSubKeyValue(array: Person[], key: string, value: any, operator: string): Person[]{
        let results: Person[] = [];
    
        if (Array.isArray(array)) {
            if(array[key] !== "undefined"){
                switch (operator){
                    case Operator.LOWER:
                        if(array[key] < value){
                            results.concat(array);
                        }
                        break;
                    case Operator.LOWEROREQUAL:
                        if(array[key] <= value){
                            results.concat(array);
                        }
                        break;
                    case Operator.GREATEST:
                        if(array[key] > value){
                            results.concat(array);
                        }
                        break;
                    case Operator.GREATESTOREQUAL:
                        if(array[key] >= value){
                            results.concat(array);
                        }
                        break;
                    case Operator.EQUALS:
                        if(array[key] == value){
                            results.concat(array);
                        }
                        break;
                    case Operator.STARTWITH:
                        if(array[key].strtolower().indexOf(value.strtolower()) === 0){
                            results.concat(array);
                        }
                        break;
                    default:
                        break;
                }
            }
    
            array.forEach((subarray: Person) => {
                // results = results.concat(this.arraySearchForSubKeyValue(subarray, key, value, operator));
            });
        }
    
        return results;
    }

    public arrayPrepareData(array){
        this.deleteColumn(array, Sort.AGE);
    }


}