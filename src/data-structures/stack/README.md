# 栈

> 栈是一种操作受限的[线性表](../list/README.md)，只能在表尾进行插入删除操作。

我们称栈的表头端为栈底，表尾端为栈顶。不含元素的空表称为空栈。

不妨设 S 为某个线性表，那么 S 可以表示为：

<p align="center">S = (a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub>)</p>

a<sub>1</sub> 是栈底元素，a<sub>n</sub> 是栈顶元素。

## 栈特点

栈是一种后进先出（LIFO, Last In First Out）的线性表，即最后插入的元素最先被删除。

同线性表一样，栈是一种逻辑结构，其对应的存储结构不一定是连续的。常见的实现有：顺序栈，链栈。

## 栈基本操作

设 S 表示栈。定义 [Stack 抽象类](./Stack.ts)，它包含如下抽象方法：

- init()：初始化栈，构造一个空的栈 S。用构造函数实现。
- size()：返回 S 的长度。
- isEmpty()：判断 S 是否为空。
- clear()：清空 S。
- push(e)：将元素 e 压入栈顶。
- pop()：删除并返回栈顶元素。
- peek()：返回栈顶元素。
- toString()：打印栈。
