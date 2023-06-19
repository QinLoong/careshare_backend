const mosca = require('mosca');
const config = require('./config');

const { port, hardwareClientId, timeOver } = config;

const connector = new Set();

let isConnection = false;
let timeClient = false;

const server = new mosca.Server({ port });

function initTime() {
    setTimeout(() => {
      const message = [
        () => `{"s_year=${new Date().getFullYear()}"}`,
        () => `{"s_month=${new Date().getMonth()}"}`,
        () => `{"s_day=${new Date().getDate()}"}`,
        () => `{"s_weekday=${new Date().getDay()}"}`,
        () => `{"s_hour=${new Date().getHours()}"}`,
        () => `{"s_minute=${new Date().getMinutes()}"}`,
        () => `{"s_second=${new Date().getSeconds()}"}`,
      ];
      message.forEach((msg) => {
        server.publish({
          topic: 'cmd',
          payload: new Buffer(msg()),
        });
      });
    }, 500);
}

// server.on('ready', setup);

server.on('clientConnected', function (client) {
    if (!client) return;
    console.log('连接：', client.id);
  
    // 校准设备端时间
    if (hardwareClientId.includes(client.id)) initTime();
  
    connector.add(client.id);
  });

  server.on('clientDisconnected', function (client) {
    if (!client) return;
    console.log('断开连接：', client.id);
  
    connector.delete(client.id);
  });
  server.on('published', (packet, client) => {
    if (!packet || !client) return;
    console.log('发送端：', client.id);
    console.log('published', packet);
  /*   const { topic } = packet;
  const { id: clientId } = client; */
  const topic=packet.topic
  const id=client.id
  // 发射端为设备端
  if (hardwareClientId.includes(clientId)) {
    // 如果发射端为设备端，则判断下failMsgTopicMap是否有数据，有则进行发送
    isConnection = true;
    // globEventEmitter.emit('server', true, topic);
    server.publish({
      topic: 'server-connection',
      payload: new Buffer('1'),
    });