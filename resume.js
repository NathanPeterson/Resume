var currentTab = 'about';

$(document).ready(function(){
  showTabContent(currentTab);

  $('.nav li').click(function() {
    hideTabContent(currentTab);
    var idName = this.id.split('-').pop();
    showTabContent(idName);
  })
})


function hideTabContent(previousTab){
  $('#tab-' + previousTab).removeClass('active');
  $('#' + previousTab).addClass('hidden');
}

function showTabContent(contentId){
  $('#tab-' + contentId).addClass('active');
  $('#' + contentId).removeClass('hidden');
  currentTab = contentId;
}
