/**
 * 参数异常：适用于接口或者方法调用参数少传或者错传的情况
 */
export class ParamsError extends Error {
  code: number;
  constructor(message?: string) {
    super();
    this.code = 403;
    this.name = 'ParamsError';
    this.message = message || '参数异常';
  }
}