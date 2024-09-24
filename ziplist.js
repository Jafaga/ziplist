"use strict";
/*
Justine Afaga
ICS 314
Professor Chad Morita
E19: Experience Functional Programming (Part 3)
September 23th, 2024
Time: 16:44
**used ChatGPT on this one**
*/
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i], list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    return list1.map((item, index) => [item, list2[index]]).reduce((acc, val) => acc.concat(val), []);
}
// Testing the functions and logging the results
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
