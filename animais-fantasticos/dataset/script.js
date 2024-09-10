const div = document.querySelector("div");

div.dataset.height = 1000;

delete div.dataset.width;

div.dataset.totalHeight = 2000;
console.log(div.dataset);
