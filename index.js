const client = require('./clinte');



async function getValue() {
  try {
    const value = await client.get('user:3');
    console.log('Value from Redis:', value);

  } catch (error) {
    console.error('Error getting value from Redis:', error);
    throw error;
  } 
}

getValue()