// Task - 1
function concat(a: string, b: string): string {
  return a + b
}

console.log(concat('Hello ', 'World'));

// Task - 2
interface MyHomeTaskInterface {
  howIDoIt: string,
  simeArray: Array<string | number>,
  withData?: Array<MyHomeTaskInterface>
}

const MyHomeTask: MyHomeTaskInterface = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", 23]
  }]
}

console.log(MyHomeTask)

// Task - 3
interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (sum: U, current: T, index?: number, array?: T[]) => U, initialValue: U): U;
}

const testArr: MyArray<number> = [1, 2, 3, 4, 5]

console.log(testArr.reduce((sum, current) => sum + current, 0))
