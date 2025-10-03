export interface Variable {
  name: string;
  //   resolve(params: string[], context: ApplicationContext): string;
  resolve(params: string[], context: string): string;
}
