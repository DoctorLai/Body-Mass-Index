function getBMI(h, w) {
  var bmi = w / h / h;
  var s = '';
  var table = [ {
    "lower": 0,
    "upper": 16,
    "value": "Underweight"
  },  {
    "lower": 16,
    "upper": 17,
    "value": "Skinny"
  },  {
    "lower": 17,
    "upper": 18.5,
    "value": "Slim"
  },  {
    "lower": 18.5,
    "upper": 25,
    "value": "Healthy weight"
  },  {
    "lower": 25,
    "upper": 30,
    "value": "A bit overweight"
  },  {
    "lower": 30,
    "upper": 35,
    "value": "Overweight"
  },  {
    "lower": 35,
    "upper": 40,
    "value": "Obese"
  },  {
    "lower": 40,
    "upper": Number.MAX_VALUE,
    "value": "Obese too much"
  }];
  var len = table.length;
  for (var i = 0; i < len; i ++) {
    var upper = table[i].upper;
    var lower = table[i].lower;
    if ((bmi > lower) && (bmi < = upper)) {
      return {"BMI": bmi, "class":table[i].value};
   }
  }    
  return {"BMI": bmi, "class":null};
}
