const firebaseConfig = {
  apiKey: "AIzaSyC7oXrReg6I2OHXZ9Qt0-L8xhOggWSBEoQ",
  authDomain: "esp32iot-c9fe7.firebaseapp.com",
  databaseURL: "https://esp32iot-c9fe7-default-rtdb.firebaseio.com",
  projectId: "esp32iot-c9fe7",
  storageBucket: "esp32iot-c9fe7.appspot.com",
  messagingSenderId: "21380468220",
  appId: "1:21380468220:web:fd22945e4ad02c31743679"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
var IoTApp = document.getElementById('IoTApp')
var dbRef = firebase.database()
 

let dbSensor = dbRef.ref("ESP32IoTApp/Sensor_BMP/");

dbSensor.on('value', function(snapshot) {
  const data = snapshot.val();
  
  // Mostrar los datos del sensor en la interfaz
  document.getElementById('tempSensor').textContent = data.Temperatura ? data.Temperatura.toFixed(2) : '--';
  document.getElementById('presSensor').textContent = data.Presión ? data.Presión.toFixed(2) : '--';
  document.getElementById('altSensor').textContent = data.Altitud ? data.Altitud.toFixed(2) : '--';
  
  console.log("Datos del sensor:", data);
});