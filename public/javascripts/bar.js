var ctxBar = document.getElementById('myBarChart');
var data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Car Sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'red',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 862)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ]
        }],
       
    };

var options = {};

var myBarChart = new Chart(ctxBar, {
    type: 'bar',
    data: data,
    options: options
});