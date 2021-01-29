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

  if(this.size = "small") {
    this.pizzaPrice += 2;
  } else if(this.size ="medium"){
    this.pizzaPrice +=3;
  } else if (this.size = "large") {
    this.pizzaPrice += 4;
  } else {
    this.pizzaPrice +=5;
  }

}
