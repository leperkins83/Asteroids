// GENERATE ASTEROIDS IN HTML DOCUMENT
function createAsteroids() {

for (var i = 0; i < 100; i++) {

  var asteroid = new Image();
  asteroid.id = "asteroid" + i.toString();
  asteroid.src = "asteroid.png";
  asteroid.style.height = (((Math.random() * 6) + 0)*30);
  asteroid.style.position = "absolute";
  asteroid.style.top = (((Math.random() * 6) + 0)*100);
  asteroid.style.right = -200;
  var asteroidPosition = asteroid.style.right;
  var asteroidID = asteroid.id;

  document.body.appendChild(asteroid);
}

};

module.exports = createAsteroids;
