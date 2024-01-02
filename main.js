/********************密码访问*****************************************/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

function checkPassword() {
  var enteredPassword = document.getElementById("passwordInput").value;
  var correctPassword= [
                          "y94",/*音音专属网站 */

                       ];

  if (enteredPassword === correctPassword[0]) {
      alert("密码正确");
      window.location.href = 'y94/index.html';
  } else {
      alert("密码错误");
      document.getElementById("passwordInput").value = "";
  }
}
/******************背景*************************************************/
function effect(){
  window.onload = function () {
    
    C = Math.cos; // cache Math objects

    S = Math.sin;

    U = 0;

    w = window;

    j = document;

    d = j.getElementById("c");

    c = d.getContext("2d");

    W = d.width = w.innerWidth;

    H = d.height = w.innerHeight;

    c.fillRect(0, 0, W, H); // resize <canvas> and draw black rect (default)

    c.globalCompositeOperation = "lighter"; // switch to additive color application

    c.lineWidth = 0.2;

    c.lineCap = "round";

    var bool = 0, 

      t = 0; // theta

    d.onmousemove = function (e) {

      if(window.T) {

        if(D==9) { D=Math.random()*15; f(1); }

        clearTimeout(T);

      }		

      X = e.pageX; // grab mouse pixel coords

      Y = e.pageY;

      a=0; // previous coord.x

      b=0; // previous coord.y 

      A = X, // original coord.x

      B = Y; // original coord.y

      R=(e.pageX/W * 999>>0)/999;

      r=(e.pageY/H * 999>>0)/999;

      U=e.pageX/H * 360 >>0;

      D=9;

      g = 360 * Math.PI / 180;

      T = setInterval(f = function (e) { // start looping spectrum

        c.save();

        c.globalCompositeOperation = "source-over"; // switch to additive color application

        if(e!=1) {

          c.fillStyle = "rgba(0,0,0,0.02)";

          c.fillRect(0, 0, W, H); // resize <canvas> and draw black rect (default)

        }

        c.restore();

        i = 25; while(i --) {

          c.beginPath();

          if(D > 450 || bool) { // decrease diameter

            if(!bool) { // has hit maximum

              bool = 1;

            }

            if(D < 0.1) { // has hit minimum

              bool = 0;

            }

            t -= g; // decrease theta

            D -= 0.1; // decrease size

          }

          if(!bool) {

            t += g; // increase theta

            D += 0.1; // increase size

          }

          q = (R / r - 1) * t; // create hypotrochoid from current mouse position, and setup variables

          x = (R - r) * C(t) + D * C(q) + (A + (X - A) * (i / 25)) + (r - R); // center on xy coords

          y = (R - r) * S(t) - D * S(q) + (B + (Y - B) * (i / 25));

          if (a) { // draw once two points are set

            c.moveTo(a, b);

            c.lineTo(x, y)

          }

          c.strokeStyle = "hsla(" + (U % 360) + ",100%,50%,0.75)"; // draw rainbow hypotrochoid

          c.stroke();

          a = x; // set previous coord.x

          b = y; // set previous coord.y

        }

        U -= 0.5; // increment hue

        A = X; // set original coord.x

        B = Y; // set original coord.y

      }, 16);

    }

    j.onkeydown = function(e) { a=b=0; R += 0.05 }

    d.onmousemove({pageX:300, pageY:290})

  }
}
/**********************************************/