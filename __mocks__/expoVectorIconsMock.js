const React = require('react');
const { Text } = require('react-native');

module.exports = new Proxy(
  {},
  {
    get: (target, prop) => {
      const IconMock = ({ name, ...rest }) =>
        React.createElement(Text, rest, `Icon: ${name || prop}`);
      return IconMock;
    },
  }
);
