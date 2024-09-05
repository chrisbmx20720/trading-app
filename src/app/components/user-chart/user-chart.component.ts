import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.css']
})
export class UserChartComponent implements OnInit {
  chart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    Chart.register(...registerables);

    const data = this.getData();
    const labels = data.dates;
    const prices = data.prices;
    const sma = this.calculateSMA(prices);
    const { upperBand, lowerBand } = this.calculateBands(prices, sma);

    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Precio',
            data: prices,
            borderColor: 'blue',
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Banda Superior',
            data: upperBand,
            borderColor: 'red',
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Banda Inferior',
            data: lowerBand,
            borderColor: 'green',
            borderWidth: 1,
            fill: false
          }
        ]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            }
          }
        }
      }
    });
  }

  getData() {
    return {
      dates: [
        '2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05',
        '2024-08-06', '2024-08-07', '2024-08-08', '2024-08-09', '2024-08-10',
        '2024-08-11', '2024-08-12', '2024-08-13', '2024-08-14', '2024-08-15',
        '2024-08-16', '2024-08-17', '2024-08-18', '2024-08-19', '2024-08-20'
      ],
      prices: [
        100, 105, 102, 108, 110,
        115, 120, 125, 122, 118,
        117, 119, 123, 127, 126,
        128, 130, 135, 140, 138
      ]
    };
  }

  calculateSMA(prices: number[]) {
    const period = 20;
    let sma: (number | null)[] = [];
    for (let i = 0; i < prices.length; i++) {
      if (i >= period - 1) {
        const sum = prices.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
        sma.push(sum / period);
      } else {
        sma.push(null);
      }
    }
    return sma;
  }

  calculateBands(prices: number[], sma: (number | null)[]) {
    const period = 20;
    const numStdDev = 2;
    let upperBand: (number | null)[] = [];
    let lowerBand: (number | null)[] = [];

    for (let i = 0; i < prices.length; i++) {
      if (i >= period - 1) {
        const slice = prices.slice(i - period + 1, i + 1);
        const mean = sma[i];
        if (mean !== null) {
          const variance = slice.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / period;
          const stdDev = Math.sqrt(variance);
          upperBand.push(mean + numStdDev * stdDev);
          lowerBand.push(mean - numStdDev * stdDev);
        } else {
          upperBand.push(null);
          lowerBand.push(null);
        }
      } else {
        upperBand.push(null);
        lowerBand.push(null);
      }
    }

    return { upperBand, lowerBand };
  }
}
