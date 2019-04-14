var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var list = 0;
while (list < ingredients.length) {
  console.log(ingredients[list]);
  list++;
}

for (var list = 0; list < ingredients.length; list++) {
  console.log(ingredients[list]);
}

for (var i = ingredients.length -1; i >= 0; i--) {
  console.log(ingredients[i]);
}