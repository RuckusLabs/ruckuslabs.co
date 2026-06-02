// Service Accordion Module

export function initServiceAccordion() {
  document.querySelectorAll('.service-item').forEach(details => {
    const summary = details.querySelector('summary');
    if (!summary) return;

    summary.addEventListener('click', (e) => {
      e.preventDefault();

      const body = details.querySelector('.service-body');
      const chevron = details.querySelector('.service-chevron');

      if (details.open) {
        // Closing: animate body + chevron back, then remove [open]
        body.style.gridTemplateRows = '0fr';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
        body.addEventListener('transitionend', () => {
          body.style.gridTemplateRows = '';
          if (chevron) chevron.style.transform = '';
          details.open = false;
        }, { once: true });
      } else {
        // Opening: set [open], freeze at 0fr, force layout, then release to 1fr
        details.open = true;
        body.style.gridTemplateRows = '0fr';
        body.getBoundingClientRect(); // force synchronous layout commit
        body.style.gridTemplateRows = '';
      }
    });
  });
}