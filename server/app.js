/**
 * Main application file
 */

'use strict';

console.log("In SlotServer")

// Expose app
exports = module.exports = {
    init :require('./api/init'),
    spin :require('./api/spin')
};
