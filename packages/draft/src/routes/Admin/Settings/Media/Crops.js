import React, { Component, Fragment } from 'react';
import Input from 'components/Form/Input';
import { fieldNumberClass } from 'components/Form/styled';
import { SecondaryButton } from 'styles/utils';
import { Table, Cell, CellHeading } from './styled';

/* eslint-disable react/prop-types */

export default class Crops extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state.crops =
      props.settings.crops && props.settings.crops.length > 0 ? props.settings.crops : [{}];
  }

  componentWillReceiveProps(nextProps) {
    const crops =
      nextProps.settings.crops && nextProps.settings.crops.length > 0
        ? nextProps.settings.crops
        : [{}];
    this.setState({ crops });
  }

  addCrop = e => {
    e.preventDefault();

    const crops = [...this.state.crops];
    crops.push({});
    this.setState({ crops }, () => {
      this.props.onUpdate(crops);
    });
  };

  bindOnChange = (prop, i) => value => {
    const crops = [...this.state.crops];
    crops[i] = { ...crops[i] };
    crops[i][prop] = value;
    this.setState({ crops }, () => {
      this.props.onUpdate(crops);
    });
  };

  render() {
    const { crops } = this.state;
    return (
      <Fragment>
        <SecondaryButton onClick={this.addCrop}>Add Crop</SecondaryButton>
        <Table>
          <thead>
            <tr>
              <CellHeading>Name</CellHeading>
              <CellHeading>Dimensions</CellHeading>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop, i) => (
              <tr key={i.toString(16)}>
                <Cell>
                  <Input
                    size={20}
                    type="text"
                    name={`crops[${i}][name]`}
                    onChange={this.bindOnChange('name', i)}
                    value={crop.name || ''}
                  />
                </Cell>
                <Cell>
                  <Input
                    className={fieldNumberClass}
                    size={4}
                    type="number"
                    name={`crops[${i}][width]`}
                    onChange={this.bindOnChange('width', i)}
                    value={crop.width || 0}
                  />{' '}
                  x{' '}
                  <Input
                    className={fieldNumberClass}
                    size="4"
                    type="number"
                    name={`crops[${i}][height]`}
                    onChange={this.bindOnChange('height', i)}
                    value={crop.height || 0}
                  />
                </Cell>
              </tr>
            ))}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}
