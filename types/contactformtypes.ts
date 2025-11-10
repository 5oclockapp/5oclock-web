export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export enum FormStatus {
  Idle = "IDLE",
  Loading = "LOADING",
  Success = "SUCCESS",
  Error = "ERROR",
}
