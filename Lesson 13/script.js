const timer = new Promise(function() {
  setTimeout(() => console.log("timeout"), 2000);
});

timer.then(()=>);
