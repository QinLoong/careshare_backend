import fs from 'fs';
import path from 'path';

interface FileInfo {
  name: string;
  path: string;
}

export function getAllFiles(dirPath: string, arrayOfFiles: FileInfo[]): FileInfo[] {