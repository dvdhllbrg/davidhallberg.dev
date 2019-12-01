document.addEventListener('DOMContentLoaded', () => {
  const sections = document.getElementsByClassName('sectionHeader');
  const links = document.querySelectorAll('#toc li a');

  if (links.length > 0) {
    const makeActive = link => links[link].classList.add('active');

    const removeActive = link => links[link].classList.remove('active');

    const removeAllActive = () => [...Array(sections.length).keys()].forEach(link => removeActive(link));

    let currentActive = -1;
    const sectionMargin = 200;
    window.addEventListener('scroll', () => {
      const current = sections.length - [...sections].reverse().findIndex(s => window.scrollY >= s.offsetTop - sectionMargin) - 1;

      if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
      }
    });
  }
});
