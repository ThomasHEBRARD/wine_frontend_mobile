/* eslint "no-console": "off" */

import { captureMessage } from '@sentry/browser';
import moment from 'moment';

class Logger {
    constructor() {
        this.timestamp = moment().format('DD/MM/YYYY hh:mm:ss');
    }

    error(msg) {
        captureMessage(msg);
        console.error(`[${this.timestamp}] ERROR: ${msg}`);
    }

    warn(msg) {
        console.warn(`[${this.timestamp}] WARN: ${msg}`);
    }

    info(msg) {
        console.info(`[${this.timestamp}] INFO: ${msg}`);
    }

    debug(msg) {
        const IS_DEBUG_ENABLE = Boolean(process.env.DEBUG);
        if (IS_DEBUG_ENABLE === true) {
            console.log(`[${this.timestamp}] DEBUG: ${msg}`);
        }
    }
}

export default new Logger();
