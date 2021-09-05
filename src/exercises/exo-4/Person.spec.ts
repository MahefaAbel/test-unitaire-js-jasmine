import { addMatcher_toEqualPersonValue, assertArraySimilar } from "./custom.matchers";
import { CustomCriteria, Direction, Sort } from "./CustomCriteria";
import { Person } from "./Person";
import { customSearchProvider, listUnderAgeProvider, setUp, sortedListByProvider, testData } from "./person.fixture";

const person: Person = setUp();

describe("Person", () => {
    beforeEach(() => {
        addMatcher_toEqualPersonValue();
    });

    it("devrait creer de l'argent de 100 MGA", () => {
        // console.log("Person::it::1>listAll", person.listAll());
        // @ts-ignore
        expect(person.listAll()).toEqualPersonValue(testData);
    });

    it("devrait creer de l'argent de 100 MGA", () => {
        const age = 12;
        const results = person.listUnderAge(age);
        const expected = listUnderAgeProvider();
        // @ts-ignore
        expect(results).toEqualPersonValue(expected);
    });

    it("devrait creer de l'argent de 100 MGA", () => {
        const direction = "";
        const sort = "";
        const results = person.sortedList(sort, direction);
        const expected = sortedListByProvider();
        // @ts-ignore
        expect(results).toEqualPersonValue(expected);
    });

    it("devrait creer de l'argent de 100 MGA", () => {
        const expected = customSearchProvider();
        const customCriteria = new CustomCriteria('be', null, null, null, null, Sort.FIRSTNAME, Direction.ASC);
        const results = person.customSearch(customCriteria);
        console.log("Person.spec>it:39, results:", results);
        // assertArraySimilar(expected, results);
    });

});