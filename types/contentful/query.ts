import { CONTENT_TYPE } from './index';

export interface IQuery {
  [key: string]: any;
  content_type?: CONTENT_TYPE;
  limit?: number;
  skip?: number;
  include?: number;
  locale?: string;
}
