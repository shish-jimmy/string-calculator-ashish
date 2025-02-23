export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterMatch = parts[0].match(/\[(.*?)\]/g);

    if(delimiterMatch){
        const delimiterArray = delimiterMatch.map((match) => match.slice(1, -1).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
        delimiter = new RegExp([...delimiterArray, ",","/", "\n"].join("|"));
    }else{
        delimiter = new RegExp(parts[0].slice(2).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));

    }
 
    numbers = parts[1];
  }

  let numArray = numbers.split(delimiter).map((num) => parseInt(num));
  const negativeNumbers = numArray.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
  }
  return numArray.filter(n=>n <= 1000).reduce((sum, num) => sum + num, 0);
}
