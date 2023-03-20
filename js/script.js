// Created by: Bonnie Zhu
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked() {
  // input
  const firstName = document.getElementById("Name").value
  const userAge = parseInt(document.getElementById("Age").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + firstName + ", age " + userAge + "."
}
