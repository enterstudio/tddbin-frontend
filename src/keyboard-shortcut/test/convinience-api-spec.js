var Shortcut = require('../shortcut');
var ShortcutProcessor = require('../shortcut-processor');
var keyboardEventUtil = require('../keyboard-event-util');
var browserEventUtil = require('../browser-event-util');
var util = require('./util');

var noop = function() {};

describe('registering multiple shortcuts', function() {
  it('shall work', function() {
    // TODO simplify the necessary mocking for every shortcut test
    spyOn(browserEventUtil, 'onWindowBlur');
    new util.KeyPressEmulation(keyboardEventUtil);
    var processor = new ShortcutProcessor();
    spyOn(processor, 'registerShortcut');

    var shortcutMap = [
      new Shortcut(['Meta', 'S'], noop),
      new Shortcut(['Ctrl', 'S'], noop)
    ];
    processor.registerShortcuts(shortcutMap);

    expect(processor.registerShortcut).toHaveBeenCalledWith(shortcutMap[0]);
    expect(processor.registerShortcut).toHaveBeenCalledWith(shortcutMap[1]);
  });
});