import { Request, Response, NextFunction, Router } from 'express';
import { getAllFiles } from '../utils';
import { RouteDefinition } from '../types';
import { getInjectionsPerRequest, Injector } from '../decorators/injector';
import { META_KEYS } from '../decorators/constants';
import { errorLog, requestLog, resopseLog } from '../../logger/httpLogger';
import path from 'path';