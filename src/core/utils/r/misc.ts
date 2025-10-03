export function guadRange(value: number, min: number, max: number) {
  return Math.max(Math.min(value, max), min);
}

export function swap<T>(arr: T[], oldIndex: number, newIndex: number) {
  const newArray = [...arr];
  const temp = arr[newIndex];
  newArray[newIndex] = newArray[oldIndex];
  newArray[oldIndex] = temp;
  return newArray;
}

export function move<T>(arr: T[], oldIndex: number, newIndex: number) {
  const newArray = [...arr];
  newArray.splice(newIndex, 0, newArray.splice(oldIndex, 1)[0]);
  return newArray;
}

export function moveItems<T>(arr: T[], oldIndex: number, newIndex: number, count: number) {
  const newArray = [...arr];
  newArray.splice(newIndex, 0, ...newArray.splice(oldIndex, count));
  return newArray;
}

export function replaceAtIndex<T>(arr: T[], index: number, newItem: T) {
  return arr.map((item, i) => (index === i ? newItem : item));
}

export function roundDecimal(n: number, round: number): number {
  return Math.round(n * Math.pow(10, round)) / Math.pow(10, round);
}

export function permute<T>(args: T[][]) {
  if (args.length === 0) return [];
  var r: T[][] = [],
    max = args.length - 1;
  function helper(arr, i) {
    for (var j = 0, l = args[i].length; j < l; j++) {
      var a = arr.slice(0); // clone arr
      a.push(args[i][j]);
      if (i == max) r.push(a);
      else helper(a, i + 1);
    }
  }
  helper([], 0);
  return r;
}
