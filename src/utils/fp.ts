
// String manipulators
export const getString = (str: string) => str;
export const toLocaleUpperCase = (str: string) => str.toLocaleLowerCase();
export const toLocaleLowerCase = (str: string) => str.toLocaleLowerCase();

export const makeStrong = (str: string) => document.createElement('strong').innerHTML = str;

// Helpers
export const compose = (...fns: Function[]) => (y: number | string) => fns.reduce((x, f) => f(x), y);


// Array
export const map = (fn: (...args: any) => any) => (a: any[]) => a.map(fn);

