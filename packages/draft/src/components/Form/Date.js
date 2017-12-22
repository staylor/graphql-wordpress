import React, { Component, Fragment } from 'react';
import Select from 'components/Form/Select';

/* eslint-disable react/prop-types */

const monthChoices = [
  { value: 0, label: 'January' },
  { value: 1, label: 'February' },
  { value: 2, label: 'March' },
  { value: 3, label: 'April' },
  { value: 4, label: 'May' },
  { value: 5, label: 'June' },
  { value: 6, label: 'July' },
  { value: 7, label: 'August' },
  { value: 8, label: 'September' },
  { value: 9, label: 'October' },
  { value: 10, label: 'November' },
  { value: 11, label: 'December' },
];

const dayChoices = ({ month = 1, year }) => {
  const monthNum = parseInt(month, 10);
  let days = 31;
  if (monthNum === 2) {
    days = 28;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      days = 29;
    }
  } else if ([4, 6, 9, 11].includes(monthNum)) {
    days = 30;
  }
  return [...Array(days).keys()].map(i => (i < 9 ? `0${i + 1}` : i + 1));
};

const yearChoices = currentYear => {
  const start = currentYear - 100;
  const end = currentYear + 10;
  return [...Array(end - start).keys()].map(i => start + i);
};

const hourChoices = [
  {
    label: 'AM',
    choices: [
      { label: '12', value: '00' },
      { label: '01', value: '01' },
      { label: '02', value: '02' },
      { label: '03', value: '03' },
      { label: '04', value: '04' },
      { label: '05', value: '05' },
      { label: '06', value: '06' },
      { label: '07', value: '07' },
      { label: '08', value: '08' },
      { label: '09', value: '09' },
      { label: '10', value: '10' },
      { label: '11', value: '11' },
    ],
  },
  {
    label: 'PM',
    choices: [
      { label: '12', value: '12' },
      { label: '01', value: '13' },
      { label: '02', value: '14' },
      { label: '03', value: '15' },
      { label: '04', value: '16' },
      { label: '05', value: '17' },
      { label: '06', value: '18' },
      { label: '07', value: '19' },
      { label: '08', value: '20' },
      { label: '09', value: '21' },
      { label: '10', value: '22' },
      { label: '11', value: '23' },
    ],
  },
];

const minuteChoices = ['00', '05', 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

export default class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.currentYear = new Date().getFullYear();
    if (props.date) {
      const d = new Date(props.date);
      const day = d.getDate();
      const month = d.getMonth();
      const hour = d.getHours();
      const minute = d.getMinutes();
      this.state = {
        month,
        day: day < 10 ? `0${day}` : day,
        year: d.getFullYear(),
        hour: hour < 10 ? `0${hour}` : hour,
        minutes: minute < 10 ? `0${minute}` : minute,
      };
    } else {
      this.state = {
        month: monthChoices[0].value,
        day: '01',
        year: this.currentYear,
        hour: '20',
        minutes: '00',
      };
    }
  }

  changeDate() {
    this.props.onChange(
      new Date(
        this.state.year,
        parseInt(this.state.month, 10),
        parseInt(this.state.day, 10),
        parseInt(this.state.hour, 10),
        parseInt(this.state.minutes, 10)
      ).getTime()
    );
  }

  setProp = (prop, value) => {
    this.setState({ [prop]: value }, () => this.changeDate());
  };

  setDay = day => this.setProp('day', day);
  setYear = year => this.setProp('year', year);
  setMonth = month => this.setProp('month', month);
  setHour = hour => this.setProp('hour', hour);
  setMinutes = minutes => this.setProp('minutes', minutes);

  componentDidMount() {
    this.changeDate();
  }

  componentDidUpdate() {
    this.changeDate();
  }

  render() {
    return (
      <Fragment>
        <Select onChange={this.setMonth} choices={monthChoices} value={this.state.month} />
        <Select
          onChange={this.setDay}
          choices={dayChoices({
            month: this.state.month,
            year: this.state.year,
          })}
          value={this.state.day}
        />
        <Select
          onChange={this.setYear}
          choices={yearChoices(this.currentYear)}
          value={this.state.year}
        />{' '}
        at <Select onChange={this.setHour} groups={hourChoices} value={this.state.hour} />
        <Select
          onChange={this.setMinutes}
          choices={minuteChoices}
          value={this.state.minutes}
        />{' '}
        {parseInt(this.state.hour, 10) < 12 ? 'AM' : 'PM'}
      </Fragment>
    );
  }
}
