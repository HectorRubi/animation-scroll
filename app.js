const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("🚀 ~ file: app.js ~ line 3 ~ entries.forEach ~ entry", entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
