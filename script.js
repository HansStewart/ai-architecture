const sections = document.querySelectorAll('[data-animate]');
const cardsBySection = document.querySelectorAll('.agent-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  }
);

sections.forEach((section) => observer.observe(section));

cardsBySection.forEach((section) => {
  const cards = section.querySelectorAll('.workflow-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      cards.forEach((other) => {
        if (other !== card) other.classList.add('is-muted');
      });
    });

    card.addEventListener('mouseleave', () => {
      cards.forEach((other) => other.classList.remove('is-muted'));
    });
  });
});
