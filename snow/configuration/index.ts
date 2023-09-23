import path from 'path';
import fs from 'fs';

export interface ConfigOptions {
  port?: number;
  rootPath?: string;
  database?: DatabaseOptions;
}

export interface DatabaseOptions {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export class Configuration {
  private config: ConfigOptions;