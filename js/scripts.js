/*  Tests
Create a pizza object constructor with properties for toppings and size.

Create a prototype method for the cost of a pizza depending on the selections chosen. */

function Pizza(size, meatToppings, veggieToppings) {
  this.size = size;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.pizzaPrice = 4;
}
