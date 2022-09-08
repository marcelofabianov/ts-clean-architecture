import Tracker from '../tracker';

export default interface ErrorInterface {
  name: string;
  message: string;
  statusCode: number;
  tracker?: Tracker;
}
