<<<<<<< HEAD
$(document).ready(function() {

    $('#tasksList').html(localStorage.getItem('tasksList'));

    $('.addTodos').submit(function(e) {
        e.preventDefault();

        const $item = $('#taskInput').val();

        if ($item) {
            $('#tasksList').append("<li class='task'>" + $item + "<span class='remove'>x</span></li>");

            localStorage.setItem('tasksList', $('#tasksList').html());

            $('#taskInput').val("");
        }

    });

    $(document).on('click', '.task', function() {

        $(this).toggleClass('done');

        localStorage.setItem('tasksList', $('#tasksList').html());
    });

    $(document).on('click', '.remove', function() {
        $(this).parent().remove();

        localStorage.setItem('tasksList', $('#tasksList').html());
    });

});
=======
const $tasksList = $("#tasksList");
const $taskInput = $("#taskInput");

$(document).ready(function() {
  $tasksList.html(localStorage.setItem("todoListData", JSON.stringify($tasksList)));

  $(".addTodos").submit(function(e) {
    e.preventDefault();

    const item = $taskInput.val();

    if (item) {
      $tasksList.append("<li class='task'>" + item + "<span class='remove'>x</span></li>");

      localStorage.setItem("todoListData", JSON.stringify($tasksList));

      $taskInput.val("");
    }
  });

  $(document).on("click", ".task", function() {
    $(this).toggleClass("done");

    localStorage.setItem("todoListData", JSON.stringify($tasksList));
  });

  $(document).on("click", ".remove", function() {
    $(this)
      .parent()
      .remove();

    localStorage.setItem("todoListData", JSON.stringify($tasksList));
  });
});
>>>>>>> 0fb28823b839c13b2046a29dcb6df89b2d0b5e0c
