enum WeekDays {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
}

const type1: any = ""; /** @any -> any type (not recommended) */
const type2: number[] = [1, 2, 3]; /** @array -> (number[] == Array<number>) */
const type3: boolean = true; /** @boolean -> (true | false) */
const type4 = WeekDays.sunday; /** @enum -> predefined constants */
const type5 = (): never => {
  /** @never -> will never occur */
  throw new Error("error");
};
const type6: null = null; /** @null -> empty or doesn't exist */
const type7: number = 10; /** @number -> (10, 10.5, -10...) */
const type8: object = {}; /** @object -> { name: "", age: 0 } */
const type9: string = ""; /** @string -> "John Doe" */
const type10: [string, number] = ["", 0]; /** @tuple -> fixed array */
const type11: undefined = undefined; /** @undefined -> not assigned any value */
const type12: unknown = ""; /** @unknow -> type-safe counterpart of any */
const type13 = (): void => console.log(""); /** @void -> without return */
