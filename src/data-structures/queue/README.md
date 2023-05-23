# 队列

> 队列是一种特殊的线性表，它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作。

不妨设 Q 为某个队列，那么 Q 可以表示为：

<p align="center">Q = (a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub>)</p>

其中 a<sub>1</sub> 是队头元素，a<sub>n</sub> 是队尾元素。

## 队列特点

队列的特点是：先进先出（FIFO，First In First Out）。

## 队列基本操作

设 Q 表示队列。定义 [Queue 抽象类](./Queue.ts)，它包含如下抽象方法：

- init()：初始化队列，构造一个空的队列 Q。用构造函数实现。
- size()：返回 Q 的长度。
- isEmpty()：判断 Q 是否为空。
- clear()：清空 Q。
- enqueue(e)：在队列的末尾插入新元素 e。
- dequeue()：删除队列的第一个元素，并返回该元素。
- front()：返回队列的第一个元素。
- toArray()：返回队列的数组形式。
- toString()：打印队列。
