# 发布指南

本文档说明如何将 Felix UI 组件库发布到 npm。

## 发布前准备

### 1. 更新版本号

编辑 `package.json` 中的版本号：

```json
{
  "version": "1.0.1"
}
```

或使用 npm 命令：

```bash
# 补丁版本 (1.0.0 -> 1.0.1)
npm version patch

# 次要版本 (1.0.0 -> 1.1.0)
npm version minor

# 主要版本 (1.0.0 -> 2.0.0)
npm version major
```

### 2. 更新项目信息

确保 `package.json` 中的以下信息正确：

```json
{
  "name": "felix-ui",
  "author": "your-name",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-username/felix-ui.git"
  },
  "keywords": ["react", "components", "ui", "typescript"]
}
```

### 3. 构建项目

```bash
npm run build
```

确保构建成功且没有错误。

### 4. 运行测试

```bash
npm test
```

### 5. 检查代码质量

```bash
npm run lint
```

## 发布步骤

### 1. 登录 npm

如果还没有登录 npm：

```bash
npm login
```

输入你的 npm 用户名、密码和邮箱。

### 2. 检查发布内容

```bash
npm pack --dry-run
```

这会显示将要发布的文件列表，确保没有包含不必要的文件。

### 3. 发布到 npm

```bash
npm publish
```

如果这是第一次发布，使用：

```bash
npm publish --access public
```

### 4. 验证发布

访问 https://www.npmjs.com/package/felix-ui 确认包已成功发布。

## 发布后验证

### 1. 安装测试

在一个新的项目中测试安装：

```bash
mkdir test-felix-ui
cd test-felix-ui
npm init -y
npm install felix-ui
```

### 2. 使用测试

创建一个测试文件验证组件是否正常工作：

```jsx
import React from "react";
import { Button } from "felix-ui";

function App() {
  return <Button type="primary">测试按钮</Button>;
}

export default App;
```

## 版本管理

### 语义化版本

遵循 [语义化版本规范](https://semver.org/lang/zh-CN/)：

- **主版本号**：不兼容的 API 修改
- **次版本号**：向下兼容的功能性新增
- **修订号**：向下兼容的问题修正

### 发布类型

- `patch`：bug 修复
- `minor`：新功能添加
- `major`：破坏性改动

## 常见问题

### 1. 发布失败

如果发布失败，检查：

- 是否已登录 npm
- 包名是否已被使用
- 版本号是否重复
- 网络连接是否正常

### 2. 权限问题

如果提示权限不足：

```bash
npm publish --access public
```

### 3. 撤销发布

如果需要撤销发布（72 小时内）：

```bash
npm unpublish felix-ui@1.0.0
```

**注意**：撤销发布会影响所有依赖该版本的项目，请谨慎使用。

## 自动化发布

可以使用 GitHub Actions 自动化发布流程。创建 `.github/workflows/publish.yml`：

```yaml
name: Publish to NPM

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
          registry-url: "https://registry.npmjs.org"
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

需要在 GitHub 仓库的 Settings > Secrets 中添加 `NPM_TOKEN`。
