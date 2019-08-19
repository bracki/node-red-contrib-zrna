module.exports = function(RED) {
  function GainInvNode(config) {
    RED.nodes.createNode(this,config);
  }
  RED.nodes.registerType("GainInv",GainInvNode);
}
