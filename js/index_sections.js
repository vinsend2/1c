$(document).ready(function () {

  $('.index_sections li.parent > a').on('click', function () {

    var ul = $(this).parent('li');

    $(ul).toggleClass('open');

    return false;
  });

});