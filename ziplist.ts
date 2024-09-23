function zipList(list1: any[], list2: any[]): any[] {
    const result: any[] = [];
    for (let i = 0; i < list1.length; i++) {
      result.push(list1[i], list2[i]);
    }
    return result;
  }
  
  function zipListTheFunctionalWay(list1: any[], list2: any[]): any[] {
    return list1.map((item: any, index: number) => [item, list2[index]]).reduce((acc, val) => acc.concat(val), []);
  }
  
  // Testing the functions and logging the results
  console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
  console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
  