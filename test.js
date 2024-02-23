const { connectSerialPort, ReadDataString } = require('./index');

async function readData() {
    const rs232 = await connectSerialPort({
        path: 'COM4',
        baudRate: 9600,
        parity: "none",
        dataBits: 8,
        stopBits: 1,
        flowControl: false
    });
    ReadDataString(rs232, (err, data) => {
        console.log(data)
    });

}

readData()
