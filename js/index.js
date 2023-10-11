
let strings = [
  'Python Django',
  'Python Flask',
  'Dart Flutter',
  'Html / Css / Javascript',
  'C# .Net',
  'C# .Net Core',
  'C# .Net WPF',
]
document.addEventListener('DOMContentLoaded', () => {
  let typed_q = new Typed('#typed_q', {
    strings: strings,
    typeSpeed: 20,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
  });
});
