const text = "A CSE student at GRIET, Hyderabad. I’m passionate about solving problems with technology and enjoy exploring data structures, algorithms, and creating innovative solutions. I believe in learning, growing, and making a positive impact through my work.😊";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("about-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;
