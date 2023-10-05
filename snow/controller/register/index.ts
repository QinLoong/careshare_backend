import { Request, Response, NextFunction, Router } from 'express';
import { getAllFiles } from '../utils';
import { RouteDefinition } from '../types';
import { getInjectionsPerRequest, Injector } from '../decorators/injector';
import { META_KEYS } from '../decorators/constants';
import { errorLog, requestLog, resopseLog } from '../../logger/httpLogger';
import path from 'path';

const app = Router();

export function useController(controllerDir: string) {
  const controllers = getAllFiles(path.join(__dirname, `../../../${controllerDir}`), []);
  
  controllers.forEach((c) => {
    const obj = require(c.path);
    const controller = obj.default || class {};