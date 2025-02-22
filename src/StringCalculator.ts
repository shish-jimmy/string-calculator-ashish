export function add(numbers: string): number {
    if(!numbers) return 0;
  return numbers.split(/,|\n/).reduce((sum, num) => sum + parseInt(num), 0);
}
