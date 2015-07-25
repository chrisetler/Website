//Put all drivers into here
function main(event) {
  $(".welcomeHeader").click(toggleAllSections);
  $(".sectionHeader").click(toggleASection);
  $(".listItem").click(toggleProjectDescription);
}
$(document).ready(main);

//Toggle everything. Base decisions off of the first section (the about section)
//If about is hidden, show all. Else hide all
var toggleAllSections = function(event) {
  if($("#aboutSection").is(":visible")) {
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
