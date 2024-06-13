import { assert } from "chai";
import * as calculator from "../calculator/calculator.js";

describe("TDD calculator operations", () => {
  // describe from mocha
  it("Test: should add two values", () => {
    // it from mocha
    const result = calculator.add(5, 5);
    assert.equal(result, 10); // assert from chai
  });

  it("Test: should subtract two values", () => {
    const result = calculator.subtract(10, 5);
    assert.equal(result, 5);
  });

  it("Test: should multiply two values", () => {
    const result = calculator.multiply(10, 5);
    assert.equal(result, 50);
  });

  it("Test: should divide two values", () => {
    const result = calculator.divide(18, 2);
    assert.equal(result, 9);
  });
});
