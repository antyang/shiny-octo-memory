function transform(obj) {
  var result = {};
  for (var key in input) {
    var key2 = JSON.parse(key.replace(/\'/g, '"'));
    var out = key2.reduce(function(acc, val, index) {
      if(index === key2.length-1) {
        return acc[val] = input[key];
      }
      if(acc[val] === undefined && !containsKey(acc, val)) {
        return acc[val] = {};
      } else {
        return acc[val];
      }
    }, result)
  }
  return result;
}

function containsKey(obj, props) {
  var splited = props.split('.');
  var temp = obj;
  for(var index in splited) {
    if(typeof temp[splited[index]] === 'undefined') return false;
    temp = temp[splited[index]];
  }
  return true;
}

var input = {
  "['Model', 'Female', 'White']": [
    {
      "name": "Jane",
      "height": "5"
    },
    {
      "name": "Kira",
    }
  ],
  "['Model', 'Female', 'Asian']": [
    {
      "name": "Jacky",
      "height": "6"
    },
    {
      "name": "Mira",
    }
  ],
  "['Model', 'Male']": [
    {
      "name": "Jack",
    }
  ],
  "['Photographer', 'Lifestyle']": [
    {
      "name": "Jake",
    }
  ],
  "['Photographer', 'Landscape']": [
    {
      "name": "Peter",
    }
  ],
  "['Creative Director']": [
    {
      "name": "Oliver"
    }
  ]
}

var output = {
  "Model": {
    "Female": {
      "White": [
        {
          "name": "Jane",
          "height": "5"
        },
        {
          "name": "Kira"
        }
      ],
      "Asian": [
        {
          "name": "Jacky",
          "height": "6"
        },
        {
          "name": "Mira",
        }
      ]
    },
    "Male": [
      {
        "name": "Jack"
      }
    ]
  },
  "Photographer": {
    "Lifestyle": [
      {
        "name": "Jake"
      }
    ],
    "Landscape": [
      {
        "name": "Peter"
      }
    ]
  },
  "Creative Director": [
    {
      "name": "Oliver"
    }
  ]
}

console.log(JSON.stringify(transform(input), null, 2));