/**
 * API endpoints for searching
 */

 'use strict';

 const request = require('request');

 module.export = (app, es) => {
     const url = `http://${es.port}/${es.books_index}/book/_search`;
 };