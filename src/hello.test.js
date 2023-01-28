// import { helloFunction } from "./hello.js";

// test("Testing jest config", () => {
//   expect(true).toBe(true);
//   expect(helloFunction().toBe('hola'));
// });
import { suma } from "./hello.js";

test("sumar 1 + 2 es igual a 3", () => {
  expect(suma(1, 2)).toBe(3);
});
