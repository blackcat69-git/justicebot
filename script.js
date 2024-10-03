const ctx = document.getElementById('courtStatsChart').getContext('2d');
const courtStatsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Civil Cases', 'Criminal Cases', 'Appeals', 'Disposed Cases'],
        datasets: [{
            label: 'Number of Cases',
            data: [1200, 1500, 800, 700],
            backgroundColor: ['#006bb3', '#0099ff', '#33ccff', '#80d4ff'],
            borderColor: '#004d80',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
