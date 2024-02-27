
const { ByteLengthParser } = require('@serialport/parser-byte-length')
const { CCTalkParser } = require('@serialport/parser-cctalk')
const { DelimiterParser } = require('@serialport/parser-delimiter')
const { InterByteTimeoutParser } = require('@serialport/parser-inter-byte-timeout')
const { PacketLengthParser } = require('@serialport/parser-packet-length')
const { ReadyParser } = require('@serialport/parser-ready')
const { RegexParser } = require('@serialport/parser-regex')
const { SlipEncoder, SlipDecoder } = require('@serialport/parser-slip-encoder')
const { SpacePacketParser } = require('@serialport/parser-spacepacket')
const { SerialPort } = require("serialport");
const { ReadlineParser } = require('@serialport/parser-readline');

module.exports = { SerialPort, ReadlineParser }
