// Created by: Bonnie Zhu
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked() {
  // input
  const streetname = document.getElementById("street name").value
  const streetnumber = parseInt(document.getElementById("street number").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + streetname + ", streetnumber"  + streetnumber + "."
}
