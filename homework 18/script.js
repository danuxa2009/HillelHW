$(document).ready(function () {

  $('#tasksList').html(localStorage.getItem('tasksList'));

  $('.addTodos').submit(function (e) {
    e.preventDefault();

    const $item = $('#taskInput').val();

    if ($item) {
      $('#tasksList').append("<li class='task'>" + $item + "<span class='remove'>x</span></li>");

      localStorage.setItem('tasksList', $('#tasksList').html());

      $('#taskInput').val("");
    }

  });

  $(document).on('click', '.task', function () {
    if ($(this).addClass('task')) {
      $(this).toggleClass('done');
    }

    localStorage.setItem('tasksList', $('#tasksList').html());
  });

  $(document).on('click', '.remove', function () {
    $(this).parent().remove();

    localStorage.setItem('tasksList', $('#tasksList').html());
  });

});