/*  Tests
Create a pizza object constructor with properties for toppings and size.

Create a prototype method for the cost of a pizza depending on the selections chosen. */

function Pizza(size, meatToppings, veggieToppings) {
  this.size = size;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.pizzaPrice = 4;
}


Pizza.prototype.cost = function(){

  if(this.size === 2) {
    this.pizzaPrice += 2;
  } else if(this.size === 3){
    this.pizzaPrice +=3;
  } else if (this.size === 4) {
    this.pizzaPrice += 4;
  } else if (this.size === 5) {
    this.pizzaPrice +=5;
  }
  if(this.meatToppings === 2){
    this.pizzaPrice += 2;
  } else if (this.meatToppings === 4){
    this.pizzaPrice += 4;
  } else if (this.meatToppings === 5) {
    this.pizzaPrice += 5;
  } else if (this.meatToppings = 1){
    this.pizzaPrice += 1;
  } else if (this.meatToppings === 7) {
    this.pizzaPrice += 7;
  }
  if(this.veggieToppings = 1) {
    this.pizzaPrice += 1;
  } else if(this.veggieToppings = 2) {
    this.pizzaPrice += 2;
  } else if (this.veggieToppings = 3){
    this.pizzaPrice +=3;
  } else if (this.veggieToppings = 15){
    this.pizzaPrice +=15;
  }
  return this.pizzaPrice;
  console.log(pizzaPrice);
}
/*Pizza.prototype.fullOrder = function() {
  return this.size + this.meatToppings + this.veggieToppings;
}*/

$(document).ready(function() {
  $("form#pizza-submit").submit(function(event){
    event.preventDefault();

    let size = $("#size").val();
    let meatToppings = $("input:checkbox[name=meat]:checked");
    let veggieToppings = $("input:checkbox[name=veggies]:checked");

    let newPizza = new Pizza(size, meatToppings, veggieToppings);
    $("#order").text(`Hey your pizza order is ${newPizza} and will cost ${newPizza.pizzaPrice}.00`);
  });
});
