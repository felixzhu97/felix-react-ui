import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./index";

describe("Input", () => {
  it("renders correctly with basic props", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Input label="Username" placeholder="Enter username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("applies correct size classes", () => {
    const { rerender } = render(<Input size="small" data-testid="input" />);
    let input = screen.getByTestId("input");
    expect(input).toHaveClass("felix-input--small");

    rerender(<Input size="large" data-testid="input" />);
    input = screen.getByTestId("input");
    expect(input).toHaveClass("felix-input--large");
  });

  it("applies correct status classes", () => {
    const { rerender } = render(<Input status="error" data-testid="input" />);
    let input = screen.getByTestId("input");
    expect(input).toHaveClass("felix-input--error");

    rerender(<Input status="warning" data-testid="input" />);
    input = screen.getByTestId("input");
    expect(input).toHaveClass("felix-input--warning");
  });

  it("handles disabled state", () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText("Disabled input");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("felix-input--disabled");
  });

  it("displays error message", () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
    expect(screen.getByText("This field is required")).toHaveClass(
      "felix-input-error"
    );
  });

  it("handles controlled input", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <Input
        value="test value"
        onChange={handleChange}
        placeholder="Controlled input"
      />
    );

    const input = screen.getByPlaceholderText("Controlled input");
    expect(input).toHaveValue("test value");

    await user.clear(input);
    await user.type(input, "new value");
    expect(handleChange).toHaveBeenCalled();
  });

  it("renders with prefix", () => {
    render(<Input prefix="@" placeholder="Username" />);
    expect(screen.getByText("@")).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Username");
    expect(input).toHaveClass("felix-input--with-prefix");
  });

  it("renders with suffix", () => {
    render(<Input suffix="📧" placeholder="Email" />);
    expect(screen.getByText("📧")).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Email");
    expect(input).toHaveClass("felix-input--with-suffix");
  });

  it("handles clear functionality", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <Input
        allowClear
        value="clear me"
        onChange={handleChange}
        placeholder="Clearable input"
      />
    );

    expect(screen.getByDisplayValue("clear me")).toBeInTheDocument();
    expect(screen.getByText("×")).toBeInTheDocument();

    await user.click(screen.getByText("×"));
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "" }),
      })
    );
  });

  it("does not show clear button when allowClear is false", () => {
    render(<Input defaultValue="some value" placeholder="No clear button" />);
    expect(screen.queryByText("×")).not.toBeInTheDocument();
  });

  it("does not show clear button when value is empty", () => {
    const handleChange = jest.fn();
    render(
      <Input
        allowClear
        value=""
        onChange={handleChange}
        placeholder="Empty value"
      />
    );
    expect(screen.queryByText("×")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Input className="custom-class" data-testid="input" />);
    const inputWrapper = screen
      .getByTestId("input")
      .closest(".felix-input-wrapper");
    expect(inputWrapper).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Ref test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.placeholder).toBe("Ref test");
  });

  it("handles all standard input props", () => {
    render(
      <Input type="email" maxLength={50} required placeholder="Email input" />
    );

    const input = screen.getByPlaceholderText("Email input");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("maxLength", "50");
    expect(input).toBeRequired();
  });

  it("renders complete structure with all elements", () => {
    render(
      <Input
        label="Complete Input"
        prefix="🔍"
        suffix="📁"
        allowClear
        value="test"
        onChange={() => {}}
        error="Error message"
        placeholder="Complete input"
      />
    );

    expect(screen.getByText("Complete Input")).toBeInTheDocument(); // label
    expect(screen.getByText("🔍")).toBeInTheDocument(); // prefix
    expect(screen.getByText("📁")).toBeInTheDocument(); // suffix
    expect(screen.getByText("×")).toBeInTheDocument(); // clear button
    expect(screen.getByText("Error message")).toBeInTheDocument(); // error
    expect(screen.getByDisplayValue("test")).toBeInTheDocument(); // input value
  });
});
