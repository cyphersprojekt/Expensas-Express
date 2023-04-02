import {createLogger, format, transports} from 'winston';

const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5
}

export const logger = createLogger({
    format: format.combine(format.timestamp(), format.json()),
    levels: logLevels,
    transports: [new transports.Console(),
                new transports.File({filename: 'logs/error.log', level: 'error'}),
                new transports.File({filename: 'logs/warn.log', level: 'warn'}),
                new transports.File({filename: 'logs/fatal.log', level: 'fatal'})]
})