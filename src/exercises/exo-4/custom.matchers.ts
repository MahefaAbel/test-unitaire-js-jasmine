import { array_diff_key } from "../../libs/Array";
import { Sort } from "./CustomCriteria";
import { Person } from "./Person";

export function assertArraySimilar(expected: Array<any>,  array: Array<any>)
{
    this.assertTrue(array_diff_key(array, expected).length === 0);

    expected.forEach( (value, key) => {
        if (Array.isArray(value)) {
            this.assertArraySimilar(value, array[key]);
        } else {
            this.assertContains(value, array);
        }
    });
}

export function addMatcher_toEqualPersonValue(){
    jasmine.addMatchers({
      toEqualPersonValue: () => {
        return {
          compare: function(actualPerson: Person, exceptPerson: {[Sort.FIRSTNAME], [Sort.LASTNAME], [Sort.AGE], [Sort.BIRTHDATE], [Sort.GENDER]}) {
            var result = {pass:false,message:''};
            if (actualPerson.familyName > exceptPerson.lastname){
                result.pass = true;
                result.message = "test is passed"
            } else {
                result.pass = false;
                result.message = "test fails"
            }
            return result;
          }
        }
      }
    });
}