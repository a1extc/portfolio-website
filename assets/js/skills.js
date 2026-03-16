document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },

        title: {
            text: 'Programming Language Experience'
        },

        xAxis: {
            categories: ['Python', 'C++', 'C#', 'JavaScript', 'HTML/CSS', 'Racket', 'Matlab', 'R']
        },

        yAxis: {
            title: {
                text: 'Experience Level'
            }
        },

        series: [{
            name: 'Experience Level',
            data: [9, 6, 5, 6, 8, 6, 7, 6]  // Replace with your actual experience levels
        }]
    });
});


