//Business
function Pizza (size, meatToppings, veggieToppings) {
  this.size = size;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.pizzaPrice = 4;
}


Pizza.prototype.cost = function() {
  if(this.size === "small") {
    this.pizzaPrice += 2;
  } else if(this.size === "medium"){
    this.pizzaPrice += 3;
  } else if (this.size === "large") {
    this.pizzaPrice += 4;
  } else if (this.size === "extra-large"){
    this.pizzaPrice += 5;
  };
  if (this.meatToppings.length >= 1 && this.meatToppings.length <=3) {
    this.pizzaPrice += 2;
  } else if (this.meatToppings.length >= 4 && this.meatToppings.length <= 7) {
    this.pizzaPrice += 6;
  };
  if (this.veggieToppings.length >= 1 && this.veggieToppings.length <= 5) {
    this.pizzaPrice += 4;
  } else if (this.veggieToppings.length >= 6 && this.veggieToppings.length <= 11) {
    this.pizzaPrice += 9;
  };
};

//User
$(document).ready(function() {
  $("form#pizza-submit").submit(function(event){
    event.preventDefault();

    let meat = $("input:checkbox[name=meat]:checked");
    let meatToppings = meat;
    let veggies = $("input:checkbox[name=veggies]:checked");
    let veggieToppings = veggies;
    const size = $("#size").val();

    newPizza = new Pizza(size, meatToppings, veggieToppings);
    newPizza.cost();
    $("#order").text('Your order comes out to be $' + newPizza.pizzaPrice + '.00');
  });
});
