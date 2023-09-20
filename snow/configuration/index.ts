import path from 'path';
import fs from 'fs';

export interface ConfigOptions {
  port?: number;
  rootPath?: string;
  database?: DatabaseOptions;
}
