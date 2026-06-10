const timelineItems = document.querySelectorAll(".timeline-item");

if (timelineItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          document.body.dataset.theme = entry.target.dataset.accent || "mist";
        }
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-10% 0px -10% 0px"
    }
  );

  timelineItems.forEach((item) => observer.observe(item));
}

const orbs = document.querySelectorAll(".background-orb");

window.addEventListener("scroll", () => {
  const depth = window.scrollY * 0.02;
  orbs.forEach((orb, index) => {
    const direction = index % 2 === 0 ? 1 : -1;
    orb.style.transform = `translate3d(${depth * direction}px, ${depth * -0.3 * direction}px, 0)`;
  });
});
