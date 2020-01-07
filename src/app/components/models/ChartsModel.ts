export class ChartsModel {
  charts = [
    {
      title: 'Sales vs Advertising',
      type: 'BubbleChart',
      data: [
        ['', 8, 12],
        ['', 4, 5.5],
        ['', 11, 14],
        ['', 3, 3.5],
        ['', 6.5, 7]
      ],
      columnNames: ['Id', 'Sales', 'Advertising'],
      options: {},
      width: 550,
      height: 400
    },
    {
      title: 'Stock price',
      type: 'CandlestickChart',
      data: [
        ['Mon', 20, 28, 38, 45],
        ['Tue', 31, 38, 55, 66],
        ['Wed', 50, 55, 77, 80],
        ['Thu', 77, 77, 66, 50],
        ['Fri', 68, 66, 22, 15]
      ],
      columnNames: ['Date', 'A', 'B', 'C', 'D'],
      options: {
        legend: 'none',
        candlestick: {
          fallingColor: { strokeWidth: 2, stroke: '#a52714' }, // red
          risingColor: { strokeWidth: 2, stroke: '#0f9d58' } // green
        }
      },
      width: 550,
      height: 400
    },
    {
      title: 'Rating our students',
      type: 'Histogram',
      data: [
        ['1', 80],
        ['2', 55],
        ['3', 68],
        ['4', 80],
        ['5', 54],
        ['6', 70],
        ['7', 85],
        ['8', 78],
        ['9', 70],
        ['10', 58],
        ['11', 90],
        ['12', 65],
        ['13', 88],
        ['14', 82],
        ['15', 65],
        ['16', 86],
        ['17', 45],
        ['18', 62],
        ['19', 84],
        ['20', 75],
        ['21', 82],
        ['22', 75],
        ['23', 58],
        ['24', 70],
        ['25', 85]
      ],
      columnNames: ['Student Roll No', 'rating'],
      options: {
        legend: 'none'
      },
      width: 550,
      height: 400
    },
    {
      title: 'Business activity of Cities',
      type: 'LineChart',
      data: [
        ['Jan', 7.0, -0.2, -0.9, 3.9],
        ['Feb', 6.9, 0.8, 0.6, 4.2],
        ['Mar', 9.5, 5.7, 3.5, 5.7],
        ['Apr', 14.5, 11.3, 8.4, 8.5],
        ['May', 18.2, 17.0, 13.5, 11.9],
        ['Jun', 21.5, 22.0, 17.0, 15.2],
        ['Jul', 25.2, 24.8, 18.6, 17.0],
        ['Aug', 26.5, 24.1, 17.9, 16.6],
        ['Sep', 23.3, 20.1, 14.3, 14.2],
        ['Oct', 18.3, 14.1, 9.0, 10.3],
        ['Nov', 13.9, 8.6, 3.9, 6.6],
        ['Dec', 9.6, 2.5, 1.0, 4.8]
      ],
      columnNames: ['Month', 'Tokyo', 'New York', 'Berlin', 'Paris'],
      options: {
        hAxis: {
          title: 'Month'
        },
        vAxis: {
          title: 'Index'
        },
        curveType: 'function',
        legend: { position: 'bottom' }
      },
      width: 550,
      height: 400
    },
    {
      title: 'The most popular topics in business courses, 2019',
      type: 'PieChart',
      data: [
        ['Marketing', 45.0],
        ['Project Management', 26.8],
        ['Sales', 12.8],
        ['QA', 8.5],
        ['HR', 6.2],
        ['Others', 0.7]
      ],
      columnNames: ['Browser', 'Percentage'],
      options: {
        slices: {
          1: { offset: 0.2 },
          3: { offset: 0.3 }
        }
      },
      width: 550,
      height: 400
    },
    {
      title: '',
      type: 'Sankey',
      data: [
        ['Brazil', 'Portugal', 5],
        ['Brazil', 'France', 1],
        ['Brazil', 'Spain', 1],
        ['Brazil', 'England', 1],
        ['Canada', 'Portugal', 1],
        ['Canada', 'France', 5],
        ['Canada', 'England', 1],
        ['Mexico', 'Portugal', 1],
        ['Mexico', 'France', 1],
        ['Mexico', 'Spain', 5],
        ['Mexico', 'England', 1],
        ['USA', 'Portugal', 1],
        ['USA', 'France', 1],
        ['USA', 'Spain', 1],
        ['USA', 'England', 5]
      ],
      columnNames: ['From', 'To', 'Weight'],
      options: {},
      width: 550,
      height: 400
    }
  ];
}
