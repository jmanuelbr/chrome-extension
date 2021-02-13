import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import Chartist from "chartist";
import PropTypes from 'prop-types';

export default class WeatherTemperatureChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [],
        series: []
      },
      options: {}
    };
  }

  addLabel(position, data) {
    // if x and y exist concat them otherwise output only the existing value
    let value =
        data.value.x !== undefined && data.value.y
            ? data.value.x + ", " + data.value.y
            : data.value.y || data.value.x;

    let element = data.group
        .elem(
            "text",
            {
              x: position.x,
              y: position.y - 10, // Y offset
              style: "text-anchor: middle"
            },
            "ct-label"
        )
        .text(Math.round(value) + "°");

    element.animate({
      opacity: {
        begin: 50,
        dur: 500,
        from: 0,
        to: 1,
        easing: "easeOutQuart"
      }
    });
  }

  onDrawHandler(data) {
    if (data.type === "point") {
      let circle = new Chartist.Svg(
          "circle",
          {
            cx: [data.x],
            cy: [data.y]
          },
          "ct-circle"
      );

      const positonCalculator = function(data) {
        return {
          x: data.x,
          y: data.y
        };
      };
      this.addLabel(positonCalculator(data), data, "temperature");

      circle.animate({
        opacity: {
          begin: 200,
          dur: 500,
          from: 0,
          to: 1,
          easing: "easeOutQuart"
        }
      });
      data.element.replace(circle);
    }
    if (data.type === "line" || data.type === "area") {
      data.element.animate({
        d: {
          begin: data.index,
          dur: 600,
          from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
          to: data.path.clone().stringify(),
          easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    }
  }

  componentDidMount() {
    const todayArray = this.props.data;
    Array.prototype.updateNullDays = function(hoursAdded) {
      for (let i = 0; i < hoursAdded - 1; i++) {
        this[i] = null;
      }
    };

    let hoursList = []; // X axe labels
    let temperatureList = []; // Y axe labels temperature
    let allTemperatureList = []; // Useful to calculate max and min temperature for Y axe
    let seriesList = []; // Array of arrays for all given days
    let numHoursAdded = 0;
    let nullDays = [];
    const todayArrayLength = todayArray.length - 1;

    todayArray.map((hourData, key) => {
      const hour = new Date(hourData.time * 1000).getHours();
      temperatureList.push(hourData.temperature);
      hoursList.push(hour + "h");
      allTemperatureList.push(hourData.temperature);
      numHoursAdded++;
      if (hour == 0 || key == todayArrayLength) {
        // break each day into 1 section to depict them in different colors
        seriesList.push(nullDays.concat(temperatureList));
        nullDays.updateNullDays(numHoursAdded);
        const lastElement = temperatureList[temperatureList.length - 1];
        temperatureList = [];
        temperatureList.push(lastElement);
      }
    });

    const maxTemperature = Math.round(Math.max(...allTemperatureList)) + 5;
    const minTemperature = Math.round(Math.min(...allTemperatureList));
    const options = {
      high: maxTemperature,
      low: minTemperature < 0 ? minTemperature : 0,
      showArea: true,
      showPoint: true,
      chartPadding: {
        left: -10
      }
    };

    this.setState(state => {
      state.data.labels = hoursList;
      state.data.series = seriesList;
      state.options = options;
      return state;
    });
  }

  render() {
    return (
        <ChartistGraph
            data={this.state.data}
            options={this.state.options}
            type={"Line"}
            listener={{
              draw: e => this.onDrawHandler(e)
            }}
        />
    );
  }
}

WeatherTemperatureChart.propTypes = {
  data: PropTypes.array
};