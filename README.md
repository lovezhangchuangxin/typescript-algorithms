# Typescript 算法和数据结构

## 简介

本项目的初步想法是用 Typescript 实现一些常见的算法和数据结构，以及在知名算法网站（如 leetcode）上刷题。

_那为什么选用 Typescript 而不是 Javascript 呢？_

- Typescript 是 Javascript 的超集。当你学会了 Typescript，你也就学会了 Javascript。

- 得益于 Typescript 的类型系统，我们可以更好地理解算法和数据结构。很多错误都可以在编译阶段被发现，减少调试花费的时间和精力。~~你也不想因为长时间找不到 bug 而被劝退吧 🐶~~

## 如何食用

1. 安装依赖

   建议与本项目保持一致，使用 yarn 而不是 npm

   ```bash
   yarn
   # or npm i
   ```

2. 运行测试

   ```bash
   yarn test
   # or npm test
   ```

   如果只想运行某个文件的测试，可以使用 `yarn test <filename>`，例如 `yarn test 1.two-sum.test.ts`。
   你甚至不必输入完整的文件名，只要输入文件名的一部分即可，例如 `yarn test two-sum`。
