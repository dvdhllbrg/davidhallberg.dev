const quotes = [{
  person: 'Dieter Rams',
  text: 'Indifference towards people and the reality in which they live is actually the one and only cardinal sin in design.'
}, {
  person: 'Sara Wachter-Boettcher',
  source: 'Technically Wrong',
  text: 'When designers use clean aesthetics to cover over a complex reality [...] they\'re just hiding the flaws in their model, and hoping you won’t ask too many difficult questions.'
}, {
  person: 'William Morris',
  text: 'There is no excuse for doing anything which is not strikingly beautiful.'
}, {
  person: 'Ray Eames',
  text: 'What works good is better than what looks good, because what works good lasts.'
}, {
  person: 'Edward R. Tufte',
  source: 'The Visual Display of Quantitative Information',
  text: 'Graphical excellence is that which gives to the viewer the greatest number of ideas in the shortest time with the least ink in the smallest space.'
}, {
  person: 'Charlotte Perriand',
  source: 'A Life of Creation',
  text: 'Everything changes so quickly, and what is state of the art one moment won’t be the next. Adaptation has to be ongoing - we have to know and accept this.'
}, {
  person: 'Victor Papanek',
  text: 'The only important thing about design is how it relates to people.'
}, {
  person: 'Eileen Gray',
  text: 'To create, one must first question everything.'
}, {
  person: 'Scott McCloud',
  source: 'Understanding Comics',
  text: 'Art, as I see it, is any human activity which doesn’t grow out of either of our species\' two basic instincts: survival and reproduction.'
}, {
  person: 'Susan Kare',
  text: 'Good design\'s not about what medium you\'re working in, it\'s about thinking hard about what you want to do and what you have to work with before you start.'
}];

function addQuote() {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quoteText').textContent = quote.text;
  document.getElementById('quotePerson').textContent = quote.person;

  if (quote.source) {
    document.getElementById('quoteSrc').textContent = quote.source;
  } else {
    document.getElementById('quoteSrc').remove();
  }
}

function addTableOfContents() {
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
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('quoteText')) {
    addQuote();
  }

  if (document.getElementById('toc')) {
    addTableOfContents();
  }
});
