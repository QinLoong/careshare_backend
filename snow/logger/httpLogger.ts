import { Request, Response, NextFunction, Router } from 'express';
import Logger from '.';

export const requestLog = (request: Request, className: string, methodName: string) => {
  //   const logMsg = `\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<${request.url}响应开始<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  //   当前类名: ${className}
  //   当前方法名: ${methodName}
  //   当前请求: ${request.method} - ${request.url}
  //   IP: ${request.ip}
  //   当前Params参数: ${JSON.stringify(request.params)}
  //   当前Query参数: ${JSON.stringify(request.query)}
  //   当前请求体: ${JSON.stringify(request.body)}
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<${request.url}响应开始<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`;
  
  //   Logger.info(logMsg);
    return Date.now();
  };