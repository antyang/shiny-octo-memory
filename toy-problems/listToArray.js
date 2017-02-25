function listToArray(list) {
  var result = [];
  while(list){
    result.push(list.value);
    list = list.next;
  }
  return result;

  // clever
  return !list ? [] : [list.value].concat(listToArray(list.next));
}

var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
var list2 = {value: "foo", next: {value: "bar", next: null}};

console.log(listToArray(list1)); // [1, 2, 3]);
console.log(listToArray(list2)); // ["foo", "bar"]);