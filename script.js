// const bulletPoints = [
//   "🔭 Pursuing B.Tech in CS at GRIET, Hyderabad.",
//   "⚙️ Built projects across AI, ML, full-stack development, networking, IoT, and cybersecurity.",
//   "⚡ Gaining hands-on experience in data science and cloud computing.",
//   "🚨 Fun fact: I once used Twilio to make an ESP32 talk to a fire station.",
//   "🌱 Interested in solving real-world problems through software development in impact-driven environments."
// ];

// const listContainer = document.getElementById("typewriter-list");
// let line = 0;
// let char = 0;
// let li;

// function typeLine() {
//   if (line >= bulletPoints.length) return;

//   if (!li) {
//     li = document.createElement("li");
//     listContainer.appendChild(li);
//   }

//   li.textContent += bulletPoints[line][char];
//   char++;

//   if (char < bulletPoints[line].length) {
//     setTimeout(typeLine, 30);
//   } else {
//     line++;
//     char = 0;
//     li = null;
//     setTimeout(typeLine, 500); // delay before next bullet
//   }
// }

// window.addEventListener("DOMContentLoaded", typeLine);




















const text = "Pursuing B.Tech in CS at GRIET, Hyderabad. Built projects across AI, ML, full-stack development, networking, IoT, and cybersecurity. Gaining hands-on experience in data science and cloud computing. Fun fact: I once used Twilio to make an ESP32 talk to a fire station. Interested in solving real-world problems through software development in impact-driven environments.";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("about-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;
