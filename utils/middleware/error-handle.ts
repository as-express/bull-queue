import { Request, Response, NextFunction } from 'express'
 
const errorHandler = (error: any, _: Request, res: Response, __: NextFunction) => {
  const status = error.statusCode || 500
  res.status(status).json({ message: error.message })
}

export default errorHandler