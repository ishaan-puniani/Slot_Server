/**
 * Main application file
 */

'use strict';


require('./api/thing')(app);


// Expose app
exports = module.exports = app;
