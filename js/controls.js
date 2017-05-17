// declare & initialize controller variables



  document.addEventListener('controls', function(e){
    function keyDown(playerKeyPress)
    {
      var keyPressed = playerKeyPress.which;
      if (keyPressed == 38)
        upPressed = 1;
      if (keyPressed == 40)
        downPressed = 1;
      if (keyPressed == 37)
        leftPressed = 1;
      if (keyPressed == 39)
        rightPressed = 1;
    }

    function keyUp(playerKeyPress)
    {
      var keyPressed = playerKeyPress.which;
      if (keyPressed == 38)
        upPressed = 0;
      if (keyPressed == 40)
        downPressed = 0;
      if (keyPressed == 37)
        leftPressed = 0;
      if (keyPressed == 39)
        rightPressed = 0;
    }
  });

}


module.exports = controls;
