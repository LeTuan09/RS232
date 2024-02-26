const { SerialPort, ReadlineParser } = require("./lib/rs232");

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

module.exports = { connectSerialPort, ReadDataString }


