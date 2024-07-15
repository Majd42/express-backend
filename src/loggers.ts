import debug from 'debug'

export const dbLogger = debug('app:db')
export const routeLogger = debug('app:route')
export const modelLogger = debug("app:model")
export const controllerLogger = debug("app:controller")
export const middlewareLogger = debug("app:middleware")
export const serviceLogger = debug("app:service")