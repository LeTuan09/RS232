# rs232-tuanzin

Supports communication with devices via (COM) port on Windows

## Installation

```bash
  npm install rs232-tuanzin
```

## Usage/Examples

```javascript

const { connectSerialPort, ReadDataString } = require('rs232-tuanzin');

async function connectAndReadData() {
    const port = await connectSerialPort({ port: 'COM3',baudRate: 9600 }); // default parity = "", dataBits = 8, stopBits = 1, flowControl = false
    ReadDataString(port, (data) => {
        // Only returns data when there is a change
        console.log(data);
    })
}

// run
connectAndReadData()
```
