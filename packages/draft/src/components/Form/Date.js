// @flow
import React, { Component, Fragment } from 'react';
import Select from 'components/Form/Select';
import type { Groups } from 'components/Form/Select';

const FEBRUARY = 1;
const APRIL = 3;
const JUNE = 5;
const SEPTEMBER = 8;
const NOVEMBER = 10;

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

const dayChoices = ({ month = 1, year }): Array<string> => {
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);
  let days = 31;
  if (monthNum === FEBRUARY) {
    days = 28;
    if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0) {
      days = 29;
    }
  } else if ([APRIL, JUNE, SEPTEMBER, NOVEMBER].includes(monthNum)) {
    days = 30;
  }
  return [...Array(days).keys()].map(i => (i < 9 ? `0${i + 1}` : `${i + 1}`));
};

const yearChoices = (currentYear: number): Array<number> => {
  const start = currentYear - 100;
  const end = currentYear + 10;
  return [...Array(end - start).keys()].map(i => start + i);
};

const hourChoices: Groups = [
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

const minuteChoices = [...Array(60).keys()].map(i => (i < 10 ? `0${i}` : `${i}`));

type Props = {
  date: number | null,
  onChange: (value: any) => void,
};

type State = {
  month: string,
  day: string,
  year: string,
  hour: string,
  minutes: string,
};

export default class DatePicker extends Component<Props, State> {
  yearChoices: Array<number>;

  constructor(props: Props) {
    super(props);

    const d = props.date ? new Date(props.date) : new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const hour = d.getHours();
    const minute = d.getMinutes();
    this.state = {
      month: `${month}`,
      day: `${day < 10 ? `0${day}` : day}`,
      year: `${d.getFullYear()}`,
      hour: `${hour < 10 ? `0${hour}` : hour}`,
      minutes: `${minute < 10 ? `0${minute}` : minute}`,
    };
    this.yearChoices = yearChoices(d.getFullYear());
  }

  changeDate() {
    const date = new Date(
      parseInt(this.state.year, 10),
      parseInt(this.state.month, 10),
      parseInt(this.state.day, 10),
      parseInt(this.state.hour, 10),
      parseInt(this.state.minutes, 10)
    );
    this.props.onChange(date.getTime());
  }

  setProp = (prop: string, value: any) => {
    this.setState({ [prop]: value }, () => this.changeDate());
  };

  setDay = (day: string) => {
    this.setProp('day', day);
  };
  setYear = (year: string) => {
    this.setProp('year', year);
  };
  setMonth = (month: string) => {
    this.setProp('month', month);
  };
  setHour = (hour: string) => {
    this.setProp('hour', hour);
  };
  setMinutes = (minutes: string) => {
    this.setProp('minutes', minutes);
  };

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
        <Select onChange={this.setYear} choices={this.yearChoices} value={this.state.year} /> at{' '}
        <Select onChange={this.setHour} groups={hourChoices} value={this.state.hour} />
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
