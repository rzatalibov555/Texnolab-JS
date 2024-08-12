

// () - function
// [] - Array
// {} - object


// const car = ['mercedes', '2.5', 'Fuel', 'blue']


const person = {
    name: "Brad",
    surname: "Pitt",
    age: 1963,
    eyeColor: "brown",
    profile_photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQI2C5ck-n3qzCGKchZvh8BFBlGVoX6BM9jv-IK4M9qSbM-U_1Y",

}

// let text = "";
// for (let x in person) {
//     text += person[x] + " <br>";
// };

// document.getElementById("demo").innerHTML = text;

const car = {
    name: "Mercedes",
    model: "benz",
    motor: "2.5",
    fuel: "Benzin",
    color: "blue",
    year: 2024,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }

}

// console.log(`${car.year} ${car.myCars.car1}`)

// document.getElementById("demo").innerHTML = person.surname

// car.speed = "360"
// console.log(car.speed)

// delete car.year
// console.log(car)


// function all_info(){
//     return `I love ${car.name} ${car.model} ${person.name} ${person.surname}`
// }

// console.log(all_info())


// let myvar = car.all_info
// document.write(myvar())


// console.log(person.name)
// console.log(person["age"])



// console.log(car.model)

// console.log(car)
// console.log(car.model)
// car.country = "Germany"
// car.model = "S class"

// console.log(car.model)

// const car2 = new Object();
// car2.country = "Germany"
// car2.model = "S class"
// console.log(car2.model)


// console.log(`My name is ${person.name} ${person.surname}. I'am ${2024 - person.age} years old. I have a car ${car.name} ${car.model} ${car.year}.`)
// document.getElementById('image').src = person.profile_photo
// document.getElementById('name').innerHTML = person.name+ " "+ person.surname
// document.getElementById('age').innerHTML = `Age: ${2024 - person.age}`


/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 380,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  /* ---- stats.js config ---- */
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);