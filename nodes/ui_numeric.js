module.exports = function(RED) {
    var ui = require('../ui')(RED);

    function NumericNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        var tab = RED.nodes.getNode(config.tab);
        var group = RED.nodes.getNode(config.group);
        if (!tab || !group) { return; }

        var done = ui.add({
            node: node,
            tab: tab,
            group: group,
            control: {
                type: 'numeric',
                label: config.label,
                order: config.order,
                format: config.format,
                value: config.min,
                min: config.min,
                max: config.max,
                width: config.width || group.config.width || 6,
                height: config.height || 1
            },
            beforeSend: function (msg) {
                msg.topic = config.topic;
            },
            convert: ui.toNumber.bind(this, config)
        });
        node.on("close", done);
    }
    RED.nodes.registerType("ui_numeric", NumericNode);
};
