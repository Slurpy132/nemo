let moonPulse = 0;

function goNext() {
    window.location.href="confession.html";
}

function goStar() {
    window.location.href="star.html";
}

let stars = [];

    function setup() {
      let cnv = createCanvas(windowWidth, windowHeight * 0.4);
      cnv.parent("starfield");
      for (let i = 0; i < 250; i++) {
        stars.push({
          x: random(width),
          y: random(height),
          size: random(1, 4),
          brightness: random(150, 255),
          twinkle: random(1, 5)
        });
      }
    }

    function draw() {
      background(0, 0, 0);
      noStroke();
      for (let star of stars) {
        fill(star.brightness);
        ellipse(star.x, star.y, star.size);
        star.brightness += random(-2, 2);
        star.brightness = constrain(star.brightness, 150, 255);
      }

        moonPulse += 0.05;

      drawMoon();
    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight * 0.4);
    }

    document.getElementById("no").addEventListener("click", function () {
      this.style.display = "none";
      document.getElementById("nono").innerHTML = "You can't say no ;)";

    });

    document.getElementById("yes").addEventListener("click", function () {
      document.getElementById("nextPage").style.display = "inline-block";
      this.style.display = "none";
      document.getElementById("no").style.display = "none";
      document.getElementById("nono").innerHTML = "YAAAAAYYYYYYYYYYY 😝😝";
    });

    function drawMoon() {

    let moonX;
    let moonY;
    let pulseBase;

    if (windowWidth < 600) {
        moonX = windowWidth - 60;  
        moonY = 100;               
        pulseBase = 40;         
    } else if (windowWidth < 1024) {
        moonX = windowWidth - 100;
        moonY = 135;
        pulseBase = 60;            
    } else {
        moonX = windowWidth - 100;
        moonY = 150;
        pulseBase = 60;
    }

    let pulse = sin(moonPulse) * 20 + pulseBase;

    noStroke();
    fill(255, 235, 150, 70);
    ellipse(moonX, moonY, pulse + 40, pulse + 40);

    fill(255, 235, 150, 120);
    ellipse(moonX, moonY, pulse + 20, pulse + 20);

    fill(255, 250, 210); 
    ellipse(moonX, moonY, pulse, pulse);
}



