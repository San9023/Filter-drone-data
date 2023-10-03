const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

// const mqtt = require('mqtt');
// const client = mqtt.connect('mqtt://mqtt-broker-url'); // Replace with your MQTT broker URL

client.on('connect', () => {
  console.log('MQTT connected');

  // Function to publish random values for short-distance drones
  function publishRandomShortDistanceValues() {
    const battery = Math.random() * 100; // Random battery level between 0 and 100
    const altitude = Math.random() * 1000; // Random altitude between 0 and 1000 meters
    const speed = Math.random() * 50; // Random speed between 0 and 50 m/s
    const latitude = Math.random() * 90; // Random latitude between -90 and 90
    const longitude = Math.random() * 180; // Random longitude between -180 and 180

    client.publish('drones/short-distance/drone1/battery', battery.toString());
    client.publish('drones/short-distance/drone1/altitude', altitude.toString());
    client.publish('drones/short-distance/drone1/speed', speed.toString());
    client.publish('drones/short-distance/drone1/lat&long', `${latitude},${longitude}`);
  }

  // Function to publish random values for long-distance drones
  function publishRandomLongDistanceValues() {
    const battery = Math.random() * 100; // Random battery level between 0 and 100
    const altitude = Math.random() * 5000; // Random altitude between 0 and 5000 meters
    const speed = Math.random() * 100; // Random speed between 0 and 100 m/s
    const latitude = Math.random() * 90; // Random latitude between -90 and 90
    const longitude = Math.random() * 180; // Random longitude between -180 and 180

    client.publish('drones/long-distance/drone2/battery', battery.toString());
    client.publish('drones/long-distance/drone2/altitude', altitude.toString());
    client.publish('drones/long-distance/drone2/speed', speed.toString());
    client.publish('drones/long-distance/drone2/lat&long', `${latitude},${longitude}`);
  }

  // Publish random values periodically for short-distance drones
  setInterval(publishRandomShortDistanceValues, 5000); // Every 5 seconds

  // Publish random values periodically for long-distance drones
  setInterval(publishRandomLongDistanceValues, 10000); // Every 10 seconds
});

// Handle incoming messages and other MQTT logic as in the previous example.