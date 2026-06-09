export interface StepHandler {
  execute(
    input: any,
    config?: Record<string, any>
  ): Promise<any>;
}