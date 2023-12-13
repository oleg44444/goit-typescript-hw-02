/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, B extends object>(objA: T, objB: B): object {
  return Object.assign(objA, objB);
}

export {};
