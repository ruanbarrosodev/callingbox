import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export function ValidateResult(req: Request, res: Response, next: NextFunction): void {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      errors: errors.array().map((err: any) => ({
        field: err.param,
        message: err.msg,
      })),
    });
    return; 
  }

  next();
}
