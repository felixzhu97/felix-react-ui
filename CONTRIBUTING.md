# 贡献指南

感谢你对 Felix UI 的关注！我们欢迎任何形式的贡献。

## 🤝 如何贡献

### 报告问题

如果你发现了 bug 或有新的功能建议，请：

1. 搜索现有的 [Issues](https://github.com/your-username/felix-react-ui/issues) 确保问题未被重复报告
2. 创建一个新的 Issue 并提供：
   - 清晰的问题描述
   - 重现步骤
   - 期望的行为
   - 实际的行为
   - 你的环境信息（操作系统、浏览器、Node.js 版本等）

### 提交代码

1. **Fork** 本仓库
2. 创建你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建一个 **Pull Request**

## 📋 开发指南

### 环境要求

- Node.js >= 16
- npm >= 8

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/your-username/felix-react-ui.git
cd felix-react-ui

# 安装依赖
npm install

# 启动开发模式
npm run dev

# 启动 Storybook
npm run storybook
```

### 开发流程

1. **创建组件**

   ```bash
   mkdir src/components/YourComponent
   touch src/components/YourComponent/index.tsx
   touch src/components/YourComponent/YourComponent.css
   touch src/components/YourComponent/YourComponent.stories.tsx
   touch src/components/YourComponent/YourComponent.test.tsx
   ```

2. **编写代码**

   - 组件实现：`index.tsx`
   - 样式文件：`YourComponent.css`
   - 文档示例：`YourComponent.stories.tsx`
   - 单元测试：`YourComponent.test.tsx`

3. **测试**

   ```bash
   # 运行所有测试
   npm test

   # 运行特定测试
   npm test YourComponent

   # 生成覆盖率报告
   npm test -- --coverage
   ```

4. **代码检查**

   ```bash
   # ESLint 检查
   npm run lint

   # 自动修复格式问题
   npm run lint:fix

   # TypeScript 类型检查
   npx tsc --noEmit
   ```

5. **构建验证**
   ```bash
   npm run build
   ```

## 📝 代码规范

### 组件规范

- 使用 **TypeScript** 编写
- 使用 **React.FC** 或函数组件
- 导出组件的 **Props 接口**
- 提供完整的 **JSDoc 注释**

```tsx
import React from "react";
import "./YourComponent.css";

export interface YourComponentProps {
  /**
   * 组件标题
   */
  title: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
}

const YourComponent: React.FC<YourComponentProps> = ({
  title,
  disabled = false,
}) => {
  return (
    <div
      className={`felix-your-component ${
        disabled ? "felix-your-component--disabled" : ""
      }`}
    >
      {title}
    </div>
  );
};

export default YourComponent;
```

### CSS 规范

- 使用 **BEM** 命名规范
- 组件前缀统一使用 `felix-`
- 使用 CSS 变量进行主题定制

```css
.felix-your-component {
  /* 基础样式 */
}

.felix-your-component--disabled {
  /* 修饰符样式 */
}

.felix-your-component__element {
  /* 元素样式 */
}
```

### 测试规范

- 为每个组件编写单元测试
- 测试覆盖率应达到 **80%** 以上
- 使用 **Jest** 和 **React Testing Library**

```tsx
import { render, screen } from "@testing-library/react";
import YourComponent from "./index";

describe("YourComponent", () => {
  it("renders correctly", () => {
    render(<YourComponent title="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    render(<YourComponent title="Test" disabled />);
    expect(screen.getByText("Test")).toHaveClass(
      "felix-your-component--disabled"
    );
  });
});
```

### Storybook 文档

- 为每个组件编写 Stories
- 提供多种使用场景的示例
- 包含完整的 Args 配置

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import YourComponent from "./index";

const meta: Meta<typeof YourComponent> = {
  title: "Components/YourComponent",
  component: YourComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Component",
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Component",
    disabled: true,
  },
};
```

## 🔄 Pull Request 流程

### PR 要求

- **标题清晰**：简洁描述更改内容
- **描述详细**：解释更改的原因和影响
- **关联 Issue**：如果适用，请关联相关的 Issue
- **测试通过**：确保所有测试通过
- **文档更新**：如果需要，更新相关文档

### PR 模板

```markdown
## 📝 更改说明

简要描述这个 PR 的更改内容。

## 🔗 关联 Issue

Closes #123

## 📋 更改类型

- [ ] 🐛 Bug 修复
- [ ] ✨ 新功能
- [ ] 💥 破坏性更改
- [ ] 📚 文档更新
- [ ] 🎨 样式更新
- [ ] ♻️ 代码重构
- [ ] ⚡ 性能优化
- [ ] ✅ 测试更新

## 🧪 测试

- [ ] 单元测试已通过
- [ ] 集成测试已通过
- [ ] 手动测试已完成

## 📝 检查清单

- [ ] 代码遵循项目规范
- [ ] 自我审查已完成
- [ ] 添加了必要的注释
- [ ] 更新了相关文档
- [ ] 没有引入新的警告
```

## ❓ 需要帮助？

如果你在贡献过程中遇到任何问题，请随时：

- 在 [Discussions](https://github.com/your-username/felix-react-ui/discussions) 中提问
- 联系维护者
- 查看现有的 [Issues](https://github.com/your-username/felix-react-ui/issues) 和 [Pull Requests](https://github.com/your-username/felix-react-ui/pulls)

感谢你的贡献！🎉
