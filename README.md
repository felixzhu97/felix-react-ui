# Felix UI

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](./LICENSE)
[![npm version](https://img.shields.io/npm/v/felix-react-ui?style=flat-square&logo=npm)](https://www.npmjs.com/package/felix-react-ui)
[![Build and Test](https://img.shields.io/github/actions/workflow/status/felixzhu97/felix-react-ui/ci.yml?branch=main&style=flat-square&logo=github&label=Build%20and%20Test)](https://github.com/felixzhu97/felix-react-ui/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-passing-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](./CONTRIBUTING.md)

一个基于 React + TypeScript 的现代化组件库，提供简洁、美观、易用的基础组件。

## 特性

- 🎨 **现代设计** - 简洁美观的设计风格
- 📦 **开箱即用** - 丰富的基础组件
- 🛡 **TypeScript** - 完整的类型定义
- 📚 **文档完善** - 详细的使用文档和示例
- 🎭 **主题定制** - 支持主题定制
- 📱 **响应式** - 移动端友好

## 安装

```bash
npm install felix-react-ui
# 或
yarn add felix-react-ui
# 或
pnpm add felix-react-ui
```

## 使用

### 导入组件和样式

```tsx
import React from "react";
import { Button, Input, Card } from "felix-react-ui";
import "felix-react-ui/dist/index.css";

function App() {
  return (
    <div>
      <Button type="primary" onClick={() => console.log("clicked")}>
        点击我
      </Button>

      <Input placeholder="请输入内容" allowClear />

      <Card title="卡片标题" extra={<Button type="secondary">更多</Button>}>
        <p>这是卡片内容</p>
      </Card>
    </div>
  );
}

export default App;
```

### 全局样式导入（推荐）

在你的应用入口文件（如 `src/index.js` 或 `src/main.js`）中导入样式：

```tsx
// src/index.js 或 src/main.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 全局导入 Felix UI 样式
import "felix-react-ui/dist/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### 按需导入样式

如果你使用的构建工具支持，也可以只导入特定组件的样式：

```tsx
import { Button } from "felix-react-ui";
// 按需导入样式
import "felix-react-ui/dist/components/Button/Button.css";
```

## 组件

### Button 按钮

```tsx
import { Button } from "felix-react-ui";

<Button type="primary" size="large">
  主要按钮
</Button>;
```

**Props:**

- `type`: 按钮类型 (`primary` | `secondary` | `danger`)
- `size`: 按钮大小 (`small` | `medium` | `large`)
- `disabled`: 是否禁用
- `loading`: 是否加载中
- `onClick`: 点击事件

### Input 输入框

```tsx
import { Input } from "felix-react-ui";

<Input placeholder="请输入" allowClear prefix={<SearchIcon />} />;
```

**Props:**

- `size`: 输入框大小 (`small` | `medium` | `large`)
- `status`: 输入框状态 (`normal` | `error` | `warning`)
- `label`: 标签文本
- `error`: 错误信息
- `allowClear`: 是否显示清除按钮
- `prefix`: 前缀图标
- `suffix`: 后缀图标

### Card 卡片

```tsx
import { Card } from "felix-react-ui";

<Card
  title="卡片标题"
  extra={<a href="#">更多</a>}
  cover={<img src="..." />}
  actions={[
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ]}
>
  卡片内容
</Card>;
```

**Props:**

- `title`: 卡片标题
- `extra`: 卡片右上角的操作区域
- `cover`: 卡片封面
- `actions`: 卡片操作组
- `bordered`: 是否有边框
- `hoverable`: 是否可悬浮
- `size`: 卡片大小 (`default` | `small`)

## 开发

```bash
# 安装依赖
npm install

# 启动开发模式
npm run dev

# 构建组件库
npm run build

# 运行测试
npm run test

# 启动 Storybook
npm run storybook

# 代码检查
npm run lint
```

## 发布

```bash
# 构建
npm run build

# 发布到 npm
npm publish
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License
