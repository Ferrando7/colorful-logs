var logger = {};

/**
 * Debug log
 * @param {*} message 
 */
logger.debug = function (message) {
    loggerBuilder('\x1b[1m\x1b[34m%s\x1b[0m', 'DEBUG', message);
}

/**
 * Info log
 * @param {*} message 
 */

logger.info = function (message) {
    loggerBuilder('\x1b[1m\x1b[37m%s\x1b[0m', 'INFO', message);
}

/**
 * Warn log
 * @param {*} message 
 */
logger.warn = function (message) {
    loggerBuilder('\x1b[1m\x1b[33m%s\x1b[0m', 'WARN', message);
}

/**
 * Error log
 * @param {*} message 
 */
logger.error = function (message) {
    loggerBuilder('\x1b[1m\x1b[31m%s\x1b[0m', 'ERROR', message);
}


/**
 * Success log
 * @param {*} message 
 */
logger.success = function (message) {
    loggerBuilder('\x1b[1m\x1b[32m%s\x1b[0m', 'SUCCESS', message);
}


/**
 * 
 * @param {*} color Set the color of the log
 * @param {*} log Type of the logged message(ERROR,WARN,SUCCESS...)
 * @param {*} message Message of the log
 */
function loggerBuilder(color, log, message) {
    console.log(color, log, normalizeLogs(log), new Date().toLocaleString(), message);
}

function normalizeLogs(log) {
    let logLengh = log.length;
    if (logLengh == 4) {
        return "   "
    } else if (logLengh == 5) {
        return "  "
    }
    else {
        return "";
    }
}

module.exports = logger;
