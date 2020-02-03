"use strict";

const itemTemplate = document.querySelector('#itemTemplate');
const title = document.querySelector('#title');
const completedEl = document.querySelector('#completed')


fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
  response.json().then(function (data) {
    data.map(data => {
      renderTitle([data.title]),
        renderCompleted([data.completed])
      console.log(data)
    })
  });
});


function renderTitle(data) {
  const titleEl = document.createElement('tr');
  titleEl.innerHTML = data;

  title.append(titleEl);
};

function renderCompleted(data) {
  const completed = document.createElement('tr');
  completed.innerHTML = data;
  completedEl.append(completed)

}