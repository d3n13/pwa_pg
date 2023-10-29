export function sum(...args: number[]) {
  return args.reduce((sum, arg) => arg + sum, 0);
}
