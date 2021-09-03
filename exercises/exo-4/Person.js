export class Person {
    persons = [];

    firstname;
    familyName;
    sex;
    dateOfBirth;

    set(firstname, lastname, birthDate, gender){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthDate = birthDate;
        this.gender = gender;
        this.age = null;
    }

    add(firstname, lastname, birthDate, gender){
        currentPerson = new Person();
        currentPerson.set(firstname, lastname, birthDate, gender);
        this.persons.push(currentPerson);
    }

    get(){
        calculatedAge = this.getAgeFromDate(this.birthDate);
        return {
            [Sort.FIRSTNAME] : this.firstname, 
            [Sort.LASTNAME] : this.lastname, 
            [Sort.BIRTHDATE] : this.birthDate, 
            [Sort.AGE] : calculatedAge, 
            [Sort.GENDER] : this.gender
        };
    }

    listAll(prepareData = true){
        results = [];
        this.persons.foreach(person => results.push(person.get()));

        if(prepareData){
            this.arrayPrepareData(results);
        }
        
        return results;
    }

    listUnderAge(age){
        results = this.listAll(false);
        results = this.arraySearchForSubKeyValue(results, Sort.AGE, age, Operator.LOWER);
        this.arrayPrepareData(results);

        return results;
    }

    sortedList(sort, direction){
        results = this.listAll(false);
        this.arraySortByColumn(results, sort, direction);
        this.arrayPrepareData(results);

        return results;
    }

    customSearch(searchCriteria){
        results = this.listAll(false);
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

    getAgeFromDate(date){
        today = date("Y-m-d");
        diff = date_diff(date_create(date), date_create(today));
        return diff.format('%y.%d');
    }
    deleteColumn(array, key) {
        return array_walk(array, function (value) use (key) {
            unset(value[key]);
        });
    }
    arraySortByColumn(array, column, direction = Sort.ASC){
        sortColumn = array();
        array.foreach((key, row) => {
            sortColumn[key] = row[column];
        });
        array_multisort(sortColumn, direction, array);
    }

    arraySearchForSubKeyValue(array, key, value, operator){
        results = [];
    
        if (is_array(array)) {
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
    
            foreach (array as subarray) {
                results = array_merge(results, this.arraySearchForSubKeyValue(subarray, key, value, operator));
            }
        }
    
        return results;
    }

    arrayPrepareData(array){
        this.deleteColumn(array, Sort.AGE);
    }


}