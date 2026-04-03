// Typing Animation
const text = "Web Developer | Learner";
let i = 0;

function typingEffect() {
  let element = document.getElementById("typing");
  if (!element) return;

  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 60);
  }
}
typingEffect();


// Counter Animation
function counter(id, target) {
  let count = 0;
  let speed = 100;

  let interval = setInterval(() => {
    count++;
    let el = document.getElementById(id);
    if (el) {
      el.innerText = count;
    }

    if (count >= target) {
      clearInterval(interval);
    }
  }, speed);
}

counter("exp", 1);
counter("projectsDone", 3);
counter("Languages", 5);


// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
