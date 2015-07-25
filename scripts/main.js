//Put all drivers into here
function main(event) {

  $(".welcomeHeader").click(homeClicked);
  $(".sectionHeader").click(sectionHeaderClicked);
  $(".listItem").click(toggleProjectDescription);
  $(".menuItem").click(menuItemClicked);



}
$(document).ready(main);

//When the homepage name is clicked, reset everything to default
//That is, open all the sections but minimize all the lists
var homeClicked = function(event) {
  $(".sectionContent").slideDown();
  $(".listDesc").slideUp();
}

//When a section header is clicked, minimize the other sections and expand this one
var sectionHeaderClicked = function(event) {
  //for minimizing a section based on its header, the word Header in id can be replaced with Section to get sections ID
  var thisId = event.currentTarget.id;
  var childId = "#" + thisId.replace("Header","Section");
  $(".sectionContent").not(childId).slideUp();
  $(".listDesc").not(childId+"* .listDesc").slideUp();
  $(childId).slideDown();
  $(childId + "* .listDesc").slideDown();
}

//Toggle one of the items in the project list
var toggleProjectDescription = function(event) {
  var thisId = event.currentTarget.id;
  var childId = "#" + thisId.replace("Header","Desc");
  $(childId).slideToggle();
}

//when a menu item is clicked, expand it and all of its children
var menuItemClicked = function(event) {
  var thisId = event.currentTarget.id;
  var sectionId = "#" + thisId.replace("MenuItem","Section");
  $(".sectionContent").not(sectionId).slideUp();
  $(".listDesc").not(sectionId + "* .listDesc").slideUp();
  $(sectionId).slideDown();
  $(sectionId + "* .listDesc").slideDown();
}
