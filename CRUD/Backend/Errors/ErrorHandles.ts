import { NextFunction, Request, Response } from "express";
import { StatusCodeResponse } from "../Enums/StatusResponse";
import { MessageResponse } from "../Enums/MessageResponse";

class ErrorHandler extends Error {
  statusCode: number;
  stack?: string | undefined;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;

    this.stack =
      process.env.ENTORNO === "Development" ? "Development" : "Production";
  }
}

const handleError = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { statusCode, message, stack } = err;

  switch (statusCode) {
    case 302:
      res.status(statusCode).json({
        status: MessageResponse.FOUND,
        statusCode: StatusCodeResponse.FOUND,
        message,
        stack,
      });
      break;
    case 404:
      res.status(statusCode).json({
        status: MessageResponse.NOT_FOUND,
        statusCode: StatusCodeResponse.NOT_FOUND,
        message,
        stack,
      });

      break;
    case 500:
      res.status(statusCode).json({
        status: MessageResponse.INTERNAL_SERVER_ERROR,
        statusCode: StatusCodeResponse.INTERNAL_SERVER_ERROR,
        message,
        stack,
      });
      break;

    case 400:
      res.status(statusCode).json({
        status: MessageResponse.BAD_REQUEST,
        statusCode: StatusCodeResponse.BAD_REQUEST,
        message,
        stack,
      });
      break;
    case 401:
      res.status(statusCode).json({
        status: MessageResponse.UNAUTHORIZED,
        statusCode: StatusCodeResponse.UNAUTHORIZED,
        message,
        stack,
      });
      break;

    default:
      res.status(statusCode).json({
        status: MessageResponse.DEFAULT,
        statusCode,
        message,
        stack,
      });
      break;
  }
};

export { ErrorHandler, handleError };
