function zipList(list1, list2) {
    var result = [];
    for (var i = 0; i < list1.length; i++) {
        result.push(list1[i], list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    return list1.map(function (item, index) { return [item, list2[index]]; }).reduce(function (acc, val) { return acc.concat(val); }, []);
}
// Testing the functions and logging the results
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
