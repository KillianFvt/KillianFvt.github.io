
let strings = [
  'Python <img src=\"src/img/python.png\" style="display: inline; height: 2rem" alt="tech_icon">',
  'Python Django <img src=\"src/img/django.png\" style="display: inline; height: 2rem" alt="tech_icon">',
  'Python Flask <img src=\"src/img/flask.webp\" style="display: inline; height: 2rem" alt="tech_icon">',
  'Dart Flutter <img src=\"src/img/flutter.png\" style="display: inline; height: 2rem" alt="tech_icon">',
  'Html / Css / Javascript <img src=\"src/img/HCJ.png\" style="display: inline; height: 2rem" alt="tech_icon">',
  'C# .Net Core <img src=\"src/img/dotnet.webp\" style="display: inline; height: 2rem" alt="tech_icon">',
  'C# .Net WPF <img src=\"src/img/dotnet.webp\" style="display: inline; height: 2rem" alt="tech_icon">',
]

let typed_q = document.getElementById('typed_q');

document.addEventListener('DOMContentLoaded', () => {
  let typed_q_anim = new Typed(typed_q, {
    strings: strings,
    typeSpeed: 20,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
    smartBackspace: true,
  });
});

let projDoorA = document.getElementsByClassName('projDoorA')[0];
let projDoorB = document.getElementsByClassName('projDoorB')[0];

let projDoorTxt = document.getElementById('projDoorTxt');

projDoorTxt.addEventListener('click', () => {

  projDoorA.style.left = '10%';
  projDoorA.style.width = '100%';
  projDoorA.style.height = '150%';

  projDoorB.style.right = '10%';
  projDoorB.style.width = '100%';
  projDoorB.style.height = '150%';

  setTimeout(() => {
    window.location.href = 'projects.html';
  } , 250);

});

