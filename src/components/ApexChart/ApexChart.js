import React from "react";
import ReactApexChart from "react-apexcharts";
import "./apexchart.scss"

class ApexChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [76, 53, 67],
			options: {
				chart: {
					height: 350,
					type: 'radialBar',
				},
				plotOptions: {
					radialBar: {
						dataLabels: {
							name: {
								fontSize: '24px',
							},
							value: {
								fontSize: '18px',
								color: 'white'
							},
							total: {
								show: false,
								label: 'Total',
								formatter: function (w) {
									return 300;
								},
							},
						},
					},
				},
				labels: ['Delivery', 'To Go', 'Dine In'],
        colors: ['#65b0f6', '#ffb572' , '#ff7ca3' ]
			},
		};
	}

	render() {
		return (
			<div id='chart'>
				<ReactApexChart
					options={this.state.options}
					series={this.state.series}
					type='radialBar'
					height={350}
				/>
			</div>
		);
	}
}
export default ApexChart;