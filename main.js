(() => {
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');
  const clock = document.querySelector('#monitor-clock');
  const state = document.querySelector('#build-state');
  if (!button || !navigation) return;
  const setMenu = (open) => { button.setAttribute('aria-expanded', String(open)); button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); navigation.classList.toggle('is-open', open); };
  button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { setMenu(false); button.focus(); } });
  document.addEventListener('click', (event) => { if (!navigation.contains(event.target) && !button.contains(event.target)) setMenu(false); });
  if (clock && state) { const states = ['BUILDING A BETTER FLOW', 'CHECKING THE EDGE CASES', 'READY FOR THE NEXT SIGNAL']; let seconds = 0; window.setInterval(() => { seconds += 1; const h = String(Math.floor(seconds / 3600)).padStart(2, '0'); const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0'); const s = String(seconds % 60).padStart(2, '0'); clock.textContent = `${h}:${m}:${s}`; if (seconds % 5 === 0) state.textContent = states[(seconds / 5) % states.length]; }, 1000); }
})();
