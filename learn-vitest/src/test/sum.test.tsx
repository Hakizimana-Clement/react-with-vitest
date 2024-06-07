import sum from "../sum";

describe("Test sum function", () => {
  it("should returns 0 with no numbers", () => {
    expect(sum()).toBe(0);
  });

  it("should returns same number with one number", () => {
    expect(sum(2)).toBe(2);
  });

  it("should returns sum with multiple numbers", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
