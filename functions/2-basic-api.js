// const items = [{ name: 'susan' }, { name: 'anna' }];
const items = require('../assets/data');

exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
    // body: 'Our Basic API Example',
  };
};