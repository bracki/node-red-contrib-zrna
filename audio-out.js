module.exports = function(RED) {
  function AudioOutNode(config) {
    RED.nodes.createNode(this,config);
  }
  RED.nodes.registerType("AudioOut",AudioOutNode);
}
