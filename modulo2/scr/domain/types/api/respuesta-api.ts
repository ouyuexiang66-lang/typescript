export interface RespuestaAPI<T> {
  success: boolean;
  data: T;
  error?: string;
  timestamp: number;
}