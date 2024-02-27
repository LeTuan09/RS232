const { SerialPort, ReadlineParser } = require("./lib/protocol"); // RS232
const ModbusRTU = require('modbus-serial') // TCP/IP
const client = new ModbusRTU();

// Connect and read serial port
const connectSerialPort = ({ path = "", baudRate = 9600, parity = "", dataBits = 8, stopBits = 1, flowControl = false }) => {
    return new Promise((resolve, reject) => {
        try {
            const port = new SerialPort({ path: path, baudRate: baudRate, parity: parity, dataBits: dataBits, stopBits: stopBits, flowControl: flowControl });
            resolve(port);
        } catch (error) {
            reject(error);
        }
    })
}

const ReadDataString = (port, callback) => {
    const parser = port.pipe(new ReadlineParser({ decodeStrings: true, delimiter: '\r\n' }));
    if (!parser) callback(null);
    var preData = '';
    parser.on('data', (data) => {
        if (preData !== data) {
            preData = data;
            callback(data)
        }
    })
}
// end

// Connect and read data TCP/IP 
const ConnectTCP_IP = (ip, id, { port = 502 }) => {
    return new Promise(async (resolve, reject) => {
        try {
            await client.connectTCP(ip, { port: port });
            await client.setID(id)
            console.log("Connected");
            resolve(true)
        } catch (error) {
            console.log("Connect failed" + error);
            client.close();
            reject(false);
        }
    })
}

const ReaDataTCP = async (addr, sl, callback) => {
    try {
        var data = await client.readHoldingRegisters(addr, sl);
        callback(null, data)
    } catch (error) {
        callback(error, null)
    }
}

module.exports = { connectSerialPort, ReadDataString, ConnectTCP_IP, ReaDataTCP }


