'use strict';

const Homey = require('homey');
const SOTGBase = require('../base');

class Omnik extends SOTGBase.Driver {
    getBaseUrl() {
        return 'http://www.omnikportal.com:8080/OmnikApi/serverapi/';
    }
}

module.exports = Omnik;