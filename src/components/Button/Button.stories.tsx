import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "主要按钮",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "次要按钮",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    children: "危险按钮",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "小按钮",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "大按钮",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "禁用按钮",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "加载中",
  },
};
