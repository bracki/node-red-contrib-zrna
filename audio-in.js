module.exports = function(RED) {
  function AudioInNode(config) {
    RED.nodes.createNode(this,config);
  }
  RED.nodes.registerType("AudioIn",AudioInNode);
}
