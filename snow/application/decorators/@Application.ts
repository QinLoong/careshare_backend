import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { useController } from '../../controller';
import Logger from '../../logger';
import fs from 'fs';