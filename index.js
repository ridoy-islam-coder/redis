const client = require('./clinte');



async function getValue() {
  try {
//    await client.set('msg:6', 'Hello, Redis!');

    // await client.expire('msg:6', 10); // Set expiration time of 10 seconds
    // await client.lpush('msg:2', 'Hello, Redis!');
    // const value = await client.lrange('msg:2', 0, -1);

    const value=await client.hset('baik:1', 'field1', 'Hello, Redis!');

    await client.hget('baik', 'field1');

    console.log('Value from Redis:', value);

  } catch (error) {
    console.error('Error getting value from Redis:', error);
    throw error;
  } 
}

getValue()