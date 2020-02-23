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
