import React from 'react-native';

const Dimensions = React.Dimensions;
const { width, height } = Dimensions.get('window');
const units = {
    vw: width / 100, vh: height / 100
};

units.vmin = Math.min(units.vw, units.vh);
units.vmax = Math.max(units.vw, units.vh);

module.exports = units;
