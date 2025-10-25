import { Request, Response, NextFunction, RequestHandler } from 'express'
import { HttpError } from './types'

export const asyncHandler = <T extends RequestHandler>(fn: T): T => {
  return ((req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }) as T
}

export const errorHandler = (
  err: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction
): any => {
  // Log opcional solo cuando hay error
  console.error(err.stack)
  res.status(err.status !== undefined ? err.status : 500).json({
    message: err.message !== undefined ? err.message : '',
    timeStamp: new Date().toISOString()
  })
}
