export interface EventHandler {
  handle(payload: any): void;
}