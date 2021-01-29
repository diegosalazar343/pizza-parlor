**Describe: isPizza()** <br>
Test: "Customer selects a base pizza size, every pizza size will have a base price". <br>
Expect:(isPizza(small)).toEqual($2);

Test: "Customer selects pizza toppings, depending on what they pick the order is increased in price". <br>
Expect(isPizza("base pizza price", "small" , "ham" , "chicken" , "bacon", "jalepenos")).toEqual("5" + "$2" + "$1" + "$1" + "$2" + "$1");

Test: "Those totals are added together using a calculator prototype method and then displayed on screen". <br>
Expect(isPizza("base pizza price", "small" , "ham" , "chicken" , "bacon", "jalepenos")).toEqual("5" + "$2" + "$1" + "$1" + "$2" + "$1"= "$12");
