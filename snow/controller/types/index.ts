export enum HttpMethods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  OPTIONS = 'options',
  DELETE = 'delete',
}

export interface RouteDefinition {
  requestMethod: HttpMethods;
  path: string;
  methodName: string;
}