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

/**
 * 数据库异常：适用于数据库操作发生的异常
 */
export class DatabaseError extends Error {
  code: number
  constructor(message?: string) {
    super();
    this.code = 403;
    this.name = 'DatabaseError';
    this.message = message || '数据库异常';
  }
}