var catsArray = [
  {name: 'Boba', favouriteFood: 'Sock fluff', pic: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'},
  {name: 'Barnaby', favouriteFood: 'Tuna', pic: 'https://pbs.twimg.com/media/C1hFLZaWEAYjIwb.jpg:large'},
  {name: 'Max', favouriteFood: 'Whiskas Temptations', pic: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'},
  {name: 'Garfield', favouriteFood: 'Salmon', pic: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1280px-Garfield_the_Cat.svg.png'}
];

var app = function() {
  
  // var cats = document.querySelector('#cats');
  
  // var catUl = document.createElement('ul');
  // catUl.classList.add('cat');

  // var nameLi = document.createElement('li');
  // nameLi.innerText = "Garfield";
  
  // var foodLi = document.createElement('li');
  // foodLi.innerText = "salmon";

  // var catPic = document.createElement('img');
  // catPic.style.width = '500px';
  // catPic.style.display = 'block';
  // catPic.src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1280px-Garfield_the_Cat.svg.png";

  // foodLi.appendChild(catPic);
  // nameLi.appendChild(foodLi);
  // catUl.appendChild(nameLi);
  // cats.appendChild(catUl);

  var createCatUl = function() {
    var catUl = document.createElement('ul');
    catUl.classList.add('cat');
    return catUl;
  };

  var createNameLi = function(catsName) {
    var nameLi = document.createElement('li');
    nameLi.innerText = "Name: " + catsName;
    return nameLi;
  };

  var createFoodLi = function(catsFood) {
    var foodLi = document.createElement('li');
    foodLi.innerText = "Favourite food: " + catsFood;
    return foodLi;
  };

  var createCatsPic = function(catsPic) {
    var catPic = document.createElement('img');
    catPic.style.width = '500px';
    catPic.style.display = 'block';
    catPic.src = catsPic;
    return catPic;
  };

  var appendElementToPage = function(catPic, foodLi, nameLi, catUl, cats) {
    foodLi.appendChild(catPic);
    nameLi.appendChild(foodLi);
    catUl.appendChild(nameLi);
    cats.appendChild(catUl);
  };

  var addCats = function(array) {
    var cats = document.querySelector('#cats');

    for (var i = 0; i < array.length; i++) {
      var catUl = createCatUl();
      var nameLi = createNameLi(array[i].name);
      var foodLi = createFoodLi(array[i].food);
      var catPic = createCatsPic(array[i].pic);
      appendElementToPage(catPic, foodLi, nameLi, catUl, cats);
    }
  };

  addCats(catsArray);

  var background = document.getElementsByTagName('body');
  background[0].style.backgroundColor = 'salmon';

};

window.onload = app;