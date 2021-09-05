import { array_diff_key } from "../../libs/Array";
import { Sort } from "./CustomCriteria";
import { Person } from "./Person";

export const assertArraySimilar = (expected: Array<any>,  array: Array<any>) => {
    const diffItemZero = array_diff_key(array, expected).length === 0;
    expect(diffItemZero).toBeTrue();

    expected.forEach( (value, key) => {
        if (Array.isArray(value)) {
            assertArraySimilar(value, array[key]);
        } else {
            expect(array).toContain(value);
        }
    });
}

export function addMatcher_toEqualPersonValue(){
    jasmine.addMatchers({
      toEqualPersonValue: () => {
        const checkIfObjectPerson = object => object.hasOwnProperty("firstname") && object.hasOwnProperty("familyName");
        const checkArray = (array1, array2) => true;
        return {
          compare: function(actualPerson: any, exceptPerson: any) {
            // console.log("actualPerson:", checkIfObjectPerson(actualPerson), ", exceptPerson:", checkIfObjectPerson(exceptPerson));
            var result = {pass:false, message:''};
            if(checkIfObjectPerson(actualPerson) && checkIfObjectPerson(exceptPerson)){
              if(actualPerson.lastname == exceptPerson.lastname){
                result.pass = true;
                result.message = "Test Ook"
              }else{
                result.pass = false;
                result.message = "Test faillls"
              }
            }else if(Array.isArray(actualPerson) && Array.isArray(exceptPerson)){
              if(checkArray(actualPerson, exceptPerson)){
                result.pass = true;
                result.message = "Test Ook"
              }else{
                result.pass = false;
                result.message = "Test faillls"
              }
            }else{
                result.pass = false;
                result.message = "test faillls"
            }
            return result;
          }
        }
      }
    });
}