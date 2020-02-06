"use strict";

const itemTemplate = document.querySelector('#itemTemplate');
const title = document.querySelector('#title');
const completedEl = document.querySelector('#completed')


fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    response.json()
      .then(function (data) {
        data.forEach(data => {
          renderTitle(data.title),
            renderCompleted(data.completed)
        })
      });
  });


function renderTitle(data) {
  const titleEl = document.createElement('li');
  titleEl.innerHTML = data;

  title.append(titleEl);
};

function renderCompleted(data) {
  const completed = document.createElement('li');
  completed.innerHTML = data;
  completedEl.append(completed)
}