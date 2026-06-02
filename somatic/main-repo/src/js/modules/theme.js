// Theme Toggle Module

export function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  // Apply saved preference before first paint flicker
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.dataset.theme = saved;

  btn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = current === 'dark' || (!current && systemDark);
    const next = isDark ? 'light' : 'dark';

    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
}