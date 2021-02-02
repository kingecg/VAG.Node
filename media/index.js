const NodeMediaServer = require('node-media-server');
 
let config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};
let nms
// var nms = new NodeMediaServer(config)
const start = (lconfig)=>{
  config = Object.assign({},config,lconfig)
  nms = new NodeMediaServer(config)
  nms.run()
}
module.exports = {
  start
}