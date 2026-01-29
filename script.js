const links = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('section');

function show(page) {
  pages.forEach(p => {
    p.classList.remove('active','show');
    if (p.id === page) {
      p.classList.add('active');
      setTimeout(() => p.classList.add('show'), 50);
    }
  });

  window.scrollTo(0,0);

  if (page === 'career') drawChart();
}

links.forEach(l => l.addEventListener('click', () => {
  show(l.dataset.page);
}));

show('home');

let chartBuilt = false;
function drawChart() {
  if (chartBuilt) return;
  chartBuilt = true;

  new Chart(document.getElementById('careerChart'), {
    type:'line',
    data:{
      labels:['2019','2020','2021','2022','2023','2024','2025','2026'],
      datasets:[{
        data:[30,50,75,110,150,190,230,280],
        borderWidth:3,
        tension:.4
      }]
    }
  });
}
