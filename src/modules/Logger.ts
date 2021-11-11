import { blue, greenBright, red, yellowBright } from 'chalk'

export class Logger {
    /** For Info Messages  */ 
    static info(...args: any[]) {
        console.log(blue("[INFO]: "), args)
    }

    /** For Error Messages */
    static error(...args: any[]) {
        console.error(red("[ERROR]: "), ...args)
    }

    /** For Warning Messages */
    static warn(...args: any[]) {
        console.warn(yellowBright("[WARNING]: "), ...args)
    }

    /** For Success Messages */
    static success(...args: any[]) {
        console.log(greenBright("[SUCCESS]: "), ...args)
    }
}