import { classnames } from "./classnames";

describe("classnames", () => {
  test("with only first param", () => {
    expect(classnames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expected = "someClass class1 class2";
    expect(classnames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with additional mods", () => {
    const expected = "someClass class1 class2 hovered scrollable";
    expect(
      classnames("someClass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with additional false mod", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classnames("someClass", { hovered: true, scrollable: false }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with additional undefined mod", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classnames("someClass", { hovered: true, scrollable: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
