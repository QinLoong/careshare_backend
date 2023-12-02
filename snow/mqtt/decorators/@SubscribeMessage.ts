import 'reflect-metadata';
import { META_KEYS } from './constants';
import { TopicsMap } from './types';

export function SubscribeMessage(topicName: string): MethodDecorator {
  if (!topicName) throw new Error('订阅的topicName不能为空');