//Put all drivers into here
function main(event) {

  $(".welcomeHeader").click(toggleAllSections);
  $(".sectionHeader").click(toggleASection);
  $(".listItem").click(toggleProjectDescription);
  $(".menuItem").click(menuItemClicked);



}
$(document).ready(main);

//Toggle everything. Base decisions off of the first section
//If the first section is hidden, show all. Otherwise hide all
var toggleAllSections = function(event) {
  if($(".sectionContent:first").is(":visible")) {
    $(".sectionContent").slideUp();
  }
  else{
    $(".sectionContent").slideDown();
  }
}

//Toggle only the secetion whose header was selected
var toggleASection = function(event) {
  //for minimizing a section based on its header, the word Header in id can be replaced with Section to get sections ID
  var thisId = event.currentTarget.id;
  var childId = "#" + thisId.replace("Header","Section");
  $(childId).slideToggle();
}

//Toggle one of the items in the project list
var toggleProjectDescription = function(event) {
  var thisId = event.currentTarget.id;
  var childId = "#" + thisId.replace("Header","Desc");
  $(childId).slideToggle();
}

//when a menut item is clicked, expand it and all of its children
var menuItemClicked = function(event) {
  var thisId = event.currentTarget.id;
  var sectionId = "#" + thisId.replace("MenuItem","Section");
  //window.alert(thisId + " " + sectionId);
  $(".sectionContent").not(sectionId).slideUp();
  $(".listDesc").not(sectionId.replace("Section","List") + " >.listDesc").slideUp();
  $(sectionId).slideDown();
  $(sectionId.replace("Section","List") + " >.listDesc").slideDown();
}
