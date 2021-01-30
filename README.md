# _Pizza Parlor_

#### _Pizza Parlor for Epicodus, 1.29.2021_

#### _By Diego Salazar_

## Description
_This project was intended to display our knowledge and skills that we developed in week four. For example, in this project I seperated business and user interface logic, introduced a constructor and displayed my knowledge using prototypes to create the application._

## Behavior
| Behavior | Input | Output |
| --------------| :-----------:|-----:|
| User selects size small | small | $2f |
| User selects pizza toppings, depending on what they pick the order is increased in price. | base pizza price, small , ham , chicken , bacon, jalepenos | 5 + $2 + $1 + $1 + $2 + $1 |
| User puts in the number 2 and recieves back the word Boop! | base pizza price, small , ham , chicken , bacon, jalepenos | $5 + $2 + $1 + $1 + $2 + $1 = $12 |

**Describe: isPizza()** <br>
Test: "Customer selects a base pizza size, every pizza size will have a base price". <br>
Expect:(isPizza(small)).toEqual($2);

Test: "Customer selects pizza toppings, depending on what they pick the order is increased in price". <br>
Expect(isPizza("base pizza price", "small" , "ham" , "chicken" , "bacon", "jalepenos")).toEqual("5" + "$2" + "$1" + "$1" + "$2" + "$1");

Test: "Those totals are added together using a calculator prototype method and then displayed on screen". <br>
Expect(isPizza("base pizza price", "small" , "ham" , "chicken" , "bacon", "jalepenos")).toEqual("5" + "$2" + "$1" + "$1" + "$2" + "$1"= "$12");

## Setup
* Clone this project github repo.
* To clone the repository first you must navigate to the main page of the repository.
* Above the list of files, click Code.
* To clone the repository click the clipboard icon.
* Now Open Terminal
* Change the current working directory to the location where you want the cloned directory.
* Type git clone, and then paste the URL you copied earlier. It should look like this: $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.
* Finally press enter to create your local clone.
* Open the link in your browser.
* Run the application by selecting what items you want on your pizza!

## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery

## Legal
* Copyright (c) 2021 **_Diego Salazar_**
* This software is licensed under the MIT license.
