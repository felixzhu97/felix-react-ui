import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("Card", () => {
  it("renders correctly with basic content", () => {
    render(<Card>Basic card content</Card>);
    expect(screen.getByText("Basic card content")).toBeInTheDocument();
  });

  it("renders with title", () => {
    render(<Card title="Card Title">Content</Card>);
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders with extra content", () => {
    render(
      <Card title="Title" extra={<button>Extra Button</button>}>
        Content
      </Card>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Extra Button")).toBeInTheDocument();
  });

  it("renders with cover", () => {
    render(
      <Card cover={<img src="test.jpg" alt="Cover" />}>Content with cover</Card>
    );
    expect(screen.getByAltText("Cover")).toBeInTheDocument();
    expect(screen.getByText("Content with cover")).toBeInTheDocument();
  });

  it("renders with actions", () => {
    const actions = [
      <button key="edit">Edit</button>,
      <button key="delete">Delete</button>,
    ];
    render(<Card actions={actions}>Card with actions</Card>);

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Card with actions")).toBeInTheDocument();
  });

  it("applies correct size classes", () => {
    const { rerender } = render(<Card size="small">Small card</Card>);
    let card = screen.getByText("Small card").closest(".felix-card");
    expect(card).toHaveClass("felix-card--small");

    rerender(<Card size="default">Default card</Card>);
    card = screen.getByText("Default card").closest(".felix-card");
    expect(card).toHaveClass("felix-card--default");
  });

  it("applies bordered class by default", () => {
    render(<Card>Bordered card</Card>);
    const card = screen.getByText("Bordered card").closest(".felix-card");
    expect(card).toHaveClass("felix-card--bordered");
  });

  it("removes bordered class when bordered is false", () => {
    render(<Card bordered={false}>Not bordered card</Card>);
    const card = screen.getByText("Not bordered card").closest(".felix-card");
    expect(card).not.toHaveClass("felix-card--bordered");
  });

  it("applies hoverable class when hoverable is true", () => {
    render(<Card hoverable>Hoverable card</Card>);
    const card = screen.getByText("Hoverable card").closest(".felix-card");
    expect(card).toHaveClass("felix-card--hoverable");
  });

  it("does not apply hoverable class by default", () => {
    render(<Card>Normal card</Card>);
    const card = screen.getByText("Normal card").closest(".felix-card");
    expect(card).not.toHaveClass("felix-card--hoverable");
  });

  it("applies custom className", () => {
    render(<Card className="custom-card">Custom card</Card>);
    const card = screen.getByText("Custom card").closest(".felix-card");
    expect(card).toHaveClass("custom-card");
  });

  it("applies custom style", () => {
    const customStyle = { backgroundColor: "red", padding: "20px" };
    render(<Card style={customStyle}>Styled card</Card>);
    const card = screen.getByText("Styled card").closest(".felix-card");
    expect(card).toHaveStyle("background-color: red");
    expect(card).toHaveStyle("padding: 20px");
  });

  it("renders complete card structure", () => {
    const actions = [<button key="action">Action</button>];
    render(
      <Card
        title="Complete Title"
        extra={<span>Extra</span>}
        cover={<div>Cover Content</div>}
        actions={actions}
        bordered
        hoverable
        size="default"
      >
        Complete card body
      </Card>
    );

    expect(screen.getByText("Complete Title")).toBeInTheDocument();
    expect(screen.getByText("Extra")).toBeInTheDocument();
    expect(screen.getByText("Cover Content")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Complete card body")).toBeInTheDocument();

    const card = screen.getByText("Complete card body").closest(".felix-card");
    expect(card).toHaveClass("felix-card--default");
    expect(card).toHaveClass("felix-card--bordered");
    expect(card).toHaveClass("felix-card--hoverable");
  });

  it("renders header only when title or extra is provided", () => {
    const { rerender } = render(<Card>No header</Card>);
    expect(screen.queryByText("felix-card__header")).not.toBeInTheDocument();

    rerender(<Card title="With title">Has header</Card>);
    const cardWithTitle = screen.getByText("With title").closest(".felix-card");
    expect(
      cardWithTitle?.querySelector(".felix-card__header")
    ).toBeInTheDocument();
  });

  it("renders body only when children are provided", () => {
    render(<Card title="Title only" />);
    expect(screen.getByText("Title only")).toBeInTheDocument();

    const card = screen.getByText("Title only").closest(".felix-card");
    expect(card?.querySelector(".felix-card__body")).not.toBeInTheDocument();
  });

  it("renders actions only when actions array is provided and not empty", () => {
    const { rerender } = render(<Card>No actions</Card>);
    const cardNoActions = screen.getByText("No actions").closest(".felix-card");
    expect(
      cardNoActions?.querySelector(".felix-card__actions")
    ).not.toBeInTheDocument();

    rerender(<Card actions={[]}>Empty actions</Card>);
    const cardEmptyActions = screen
      .getByText("Empty actions")
      .closest(".felix-card");
    expect(
      cardEmptyActions?.querySelector(".felix-card__actions")
    ).not.toBeInTheDocument();

    rerender(
      <Card actions={[<button key="test">Test</button>]}>With actions</Card>
    );
    const cardWithActions = screen
      .getByText("With actions")
      .closest(".felix-card");
    expect(
      cardWithActions?.querySelector(".felix-card__actions")
    ).toBeInTheDocument();
  });

  it("handles ReactNode title correctly", () => {
    const titleNode = <h2>Custom Title Component</h2>;
    render(<Card title={titleNode}>Content</Card>);
    expect(screen.getByText("Custom Title Component")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("handles ReactNode extra correctly", () => {
    const extraNode = (
      <div>
        <span>Complex</span> <strong>Extra</strong>
      </div>
    );
    render(<Card extra={extraNode}>Content</Card>);
    expect(screen.getByText("Complex")).toBeInTheDocument();
    expect(screen.getByText("Extra")).toBeInTheDocument();
  });

  it("handles ReactNode cover correctly", () => {
    const coverNode = (
      <div>
        <img src="test.jpg" alt="Test" />
        <span>Caption</span>
      </div>
    );
    render(<Card cover={coverNode}>Content</Card>);
    expect(screen.getByAltText("Test")).toBeInTheDocument();
    expect(screen.getByText("Caption")).toBeInTheDocument();
  });
});
