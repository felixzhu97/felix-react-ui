import * as ComponentLibrary from "./index";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";

describe("Component Library Exports", () => {
  it("exports Button component", () => {
    expect(ComponentLibrary.Button).toBeDefined();
    expect(ComponentLibrary.Button).toBe(Button);
  });

  it("exports Input component", () => {
    expect(ComponentLibrary.Input).toBeDefined();
    expect(ComponentLibrary.Input).toBe(Input);
  });

  it("exports Card component", () => {
    expect(ComponentLibrary.Card).toBeDefined();
    expect(ComponentLibrary.Card).toBe(Card);
  });

  it("exports ButtonProps type", () => {
    // TypeScript types are not available at runtime,
    // but we can test that the import doesn't throw
    expect(() => {
      type TestButtonProps = ComponentLibrary.ButtonProps;
      const props: TestButtonProps = {
        children: "test",
        type: "primary",
        size: "medium",
        disabled: false,
        loading: false,
      };
      expect(props).toBeDefined();
    }).not.toThrow();
  });

  it("exports InputProps type", () => {
    expect(() => {
      type TestInputProps = ComponentLibrary.InputProps;
      const props: TestInputProps = {
        size: "medium",
        status: "normal",
        disabled: false,
        allowClear: false,
      };
      expect(props).toBeDefined();
    }).not.toThrow();
  });

  it("exports CardProps type", () => {
    expect(() => {
      type TestCardProps = ComponentLibrary.CardProps;
      const props: TestCardProps = {
        bordered: true,
        hoverable: false,
        size: "default",
      };
      expect(props).toBeDefined();
    }).not.toThrow();
  });

  it("has correct number of exports", () => {
    const exports = Object.keys(ComponentLibrary);
    expect(exports).toHaveLength(3); // 3 components (types are not runtime exports)
    expect(exports).toContain("Button");
    expect(exports).toContain("Input");
    expect(exports).toContain("Card");
  });
});
