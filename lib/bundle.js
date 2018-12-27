/**
 * Provides API endpoints for working with book bundles
 */
'use strict';
const rp = require('request-promise');

module.exports = (app, es) => {
    const url = `http://${es.host}:${es.port}/${es.bundles_index}/bundle`;
}