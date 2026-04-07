// TYPING EFFECT (LOOP + SMOOTH)
const texts = ["Frontend Developer", "Full Stack Developer", "UI Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      type();
    }, 1200);
  } else {
    setTimeout(type, 60);
  }
})();


// SMOOTH COUNTER (EASE EFFECT)
function animateCounter(id, target) {
  let count = 0;
  let speed = 30;

  let update = () => {
    let increment = Math.ceil(target / 50);
    count += increment;

    if (count >= target) {
      document.getElementById(id).innerText = target + "+";
    } else {
      document.getElementById(id).innerText = count + "+";
      requestAnimationFrame(update);
    }
  };

  update();
}

// Run when visible (PRO LEVEL 🔥)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter("exp", 1);
      animateCounter("projectsDone", 6);
      animateCounter("Languages", 7);
    }
  });
});

observer.observe(document.querySelector(".stats"));


// SMOOTH SCROLL WITH OFFSET (BETTER UX)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    let target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth"
    });
  });
});


// NAVBAR SCROLL EFFECT (PREMIUM LOOK)
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(255,255,255,0.8)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "transparent";
  }
});


// FADE-IN ANIMATION ON SCROLL
const fadeElements = document.querySelectorAll(".card, .section");

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

fadeElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  fadeObserver.observe(el);
});
