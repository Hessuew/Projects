export default {
  y2: {
    id: "PH",
    type: "linear",
    position: "right",
    ticks: {
      beginAtZero: false
    },
    gridLines: {
      display: false
    }
  },
  datagroup: {
    labels: ["", "", ""],
    datasets: []
  },
  dataset: {
    label: "", // The label for the dataset which appears in the legend and tooltips.
    borderColor: "blue",
    pointBackgroundColor: "white",
    borderWidth: 1,
    pointBorderColor: "blue",
    backgroundColor: "transparent",
    fill: false,
    data: [], // Datapoints. \[20, 10\] OR  data: \[{x: 10,y: 20}, {x: 15,y: 10}\]
    borderColor: "#249EBF", // The color of the line. Color/Color\[\]
      backgroundColor: '#249EBF',
    borderWidth: 1, // The width of the line in pixels.
    borderDash: [], // An Array of numbers that specify distances to alternately draw a line and a gap
    borderDashOffset: 0, // Dashed line offset
    borderCapStyle: "round", // Line end style
    borderJoinStyle: "round", // Line joint style.
    cubicInterpolationMode: "default", // Algorithm used to interpolate a smooth curve from the discrete data points.
    fill: false, // How to fill the area under the line. https://www.chartjs.org/docs/latest/charts/area.html
    lineTension: 0.1, // Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.
    pointBackgroundColor: "transparent", // The fill color for points. Color/Color\[\]
    pointBorderColor: "#249EBF", // The border color for points. Color/Color\[\]
    pointBorderWidth: 2, // The width of the point border in pixels. Number/Number\[\]
    pointRadius: 4, // The radius of the point shape. If set to 0, the point is not rendered. Number/Number\[\]
    pointStyle: "circle", // "circle", "cross", "crossRot", "dash", "line", "rect", "rectRounded", "rectRot", "star", "triangle". String/String\[\]/Image/Image\[\]
    pointRotation: 0, // The rotation of the point in degrees. Number/Number\[\]
    pointHitRadius: 2, // The pixel size of the non-displayed point that reacts to mouse events. Number/Number\[\]
    pointHoverBackgroundColor: "green", // Point background color when hovered. Color/Color\[\]
    pointHoverBorderColor: "green", // Point border color when hovered.
    pointHoverBorderWidth: 2, // Border width of point when hovered.
    pointHoverRadius: 3, // The radius of the point when hovered.
    showLine: true, // If false, the line is not drawn for this dataset.
    spanGaps: true, //If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line
    steppedLine: false // If the steppedLine value is set to anything other than false, lineTension will be ignored.
  },
  options: {
    animation: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [
        {
          id: "Virtaus",
          type: "linear",
          position: "left",
          ticks: {
            beginAtZero: false
          },
          gridLines: {
            display: true
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: true
          }
        }
      ]
    },
    legend: {
      display: true,
      position: "top", // top, bottom, left, right
      fullWidth: true, // Marks that this box should take the full width of the canvas (pushing down other boxes).
      //onCLick: () => { }, // A callback that is called when a click event is registered on a label item
      //onHover: () => { }, // A callback that is called when a 'mousemove' event is registered on top of a label item
      labels: {
        boxWidth: 10, //width of coloured box
        fontSize: 14,
        fontStyle: "normal",
        fontColor: "black",
        fontFamily: "Montserrat",
        padding: 10, // Padding between rows of colored boxes.
        // generateLabels: ,// Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box.
        filter: null, // Filters legend items out of the legend. Receives 2 parameters, a Legend Item and the chart data.
        usePointStyle: false // Label style will match corresponding point style (size is based on fontSize, boxWidth is not used in this case).
      }
    },
    responsive: true,
    maintainAspectRatio: false
  },
  placeholder: {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        yAxisID:"",
        label: "Datasetti ", // The label for the dataset which appears in the legend and tooltips.
        borderColor: "blue",
        pointBackgroundColor: "white",
        borderWidth: 1,
        pointBorderColor: "blue",
        backgroundColor: "transparent",
        fill: false,
        data: [1, 5, 23, 6, 8], // Datapoints. \[20, 10\] OR  data: \[{x: 10,y: 20}, {x: 15,y: 10}\]
        borderColor: "#249EBF", // The color of the line. Color/Color\[\]
        borderWidth: 1, // The width of the line in pixels.
        borderDash: [], // An Array of numbers that specify distances to alternately draw a line and a gap
        borderDashOffset: 0, // Dashed line offset
        borderCapStyle: "round", // Line end style
        borderJoinStyle: "round", // Line joint style.
        cubicInterpolationMode: "default", // Algorithm used to interpolate a smooth curve from the discrete data points.
        fill: false, // How to fill the area under the line. https://www.chartjs.org/docs/latest/charts/area.html
        lineTension: 0.1, // Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.
        pointBackgroundColor: "transparent", // The fill color for points. Color/Color\[\]
        pointBorderColor: "#249EBF", // The border color for points. Color/Color\[\]
        pointBorderWidth: 2, // The width of the point border in pixels. Number/Number\[\]
        pointRadius: 4, // The radius of the point shape. If set to 0, the point is not rendered. Number/Number\[\]
        pointStyle: "circle", // "circle", "cross", "crossRot", "dash", "line", "rect", "rectRounded", "rectRot", "star", "triangle". String/String\[\]/Image/Image\[\]
        pointRotation: 0, // The rotation of the point in degrees. Number/Number\[\]
        pointHitRadius: 2, // The pixel size of the non-displayed point that reacts to mouse events. Number/Number\[\]
        pointHoverBackgroundColor: "green", // Point background color when hovered. Color/Color\[\]
        pointHoverBorderColor: "green", // Point border color when hovered.
        pointHoverBorderWidth: 2, // Border width of point when hovered.
        pointHoverRadius: 3, // The radius of the point when hovered.
        showLine: true, // If false, the line is not drawn for this dataset.
        spanGaps: true, //If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line
        steppedLine: false // If the steppedLine value is set to anything other than false, lineTension will be ignored.
      }
    ]
  }
};
