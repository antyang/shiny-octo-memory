/* var JSONdata = [{"id":1,"name":"San Francisco Bay Area","parent_id":null},{"id":2,"name":"San Jose","parent_id":3},{"id":3,"name":"South Bay","parent_id":1},{"id":4,"name":"San Francisco","parent_id":1},{"id":5,"name":"Manhattan","parent_id":6},{"id":6,"name":"New York","parent_id":null}] */

function makeObj(arr) {
  var result = {};
  arr.forEach(function(place) {
    var parentId = place.parent_id;

    if(parentId === null) {
      if(result[0]) {
        result[0].push(place);
      } else {
        result[0] = [place];
      }
    } else if(result[parentId]) {
      result[parentId].push(place);
    } else {
      result[parentId] = [place];
    }
  })
  Object.keys(result).forEach(function(id) {
    result[id].sort(function(a, b) {
      return a.name > b.name;
    });
  })
  return result;
}

function listPlaces(obj) {
  var traverse = function(obj, key, level) {
    if (!obj[key]) return;
    obj[key].forEach(function (place) {
      console.log('-'.repeat(level) + place.name);
      if (obj[place.id]) {
        traverse(obj, place.id, level + 1);
      }
    })
  }
  traverse(obj, 0, 0);
}

listPlaces(makeObj(JSONdata));