export interface IFailure<FailureType extends string> {
  type: FailureType;
  reason: string;
}
