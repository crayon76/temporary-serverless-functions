// domain/.netlify/functions/1-hello
// exports

// const person = { name: 'john' };

exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: 'Our First Netlify Function Example',
    // body: JSON.stringify(person),

    // statusCode: 400,
    // body: 'Resource Not Found',
  };
};

// exports.handler = (event, context, callback) => {
//   callback(null, { statusCode: 200, body: 'Hello World!' });
// };
