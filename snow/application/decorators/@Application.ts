import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { useController } from '../../controller';
import Logger from '../../logger';
import fs from 'fs';
import { isFunction } from '../../utils';
import { Configuration } from '../../configuration';

/**
 * 启动注解
 * @param controllerScan controller扫码路径，default: src/controller
 */

export function Application(controllerScanPath = './src/controller'): ClassDecorator {
  return (target: Function) => {
    const configuration = new Configuration();
    const { rootPath = '/', port = '3000' } = configuration.getConfig();
    const app = express();
    app.use(cors());
    app.use('/static', express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(rootPath, useController(controllerScanPath));