const ctx = document.getElementById('canvas').getContext('2d');
const meuGrafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        datasets: [{
            label: 'Histórico de Gastos',
            data: [1510,1550,1300,1800,1400,1800,1200,1100,1550,1490,1600,1990],
            backgroundColor: [
                'rgba(14, 230, 79, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(154, 102, 255, 1)',
                'rgba(256, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',

            ],
            borderColor: [
                'rgba(14, 230, 79, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(154, 102, 255, 1)',
                'rgba(256, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 8
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});