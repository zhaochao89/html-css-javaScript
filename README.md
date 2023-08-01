> CSS（`Cascading Style Sheets`，层叠样式表）是为 web 内容添加样式的代码。
> 和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。CSS 是一门`样式表语言`，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。
> CSS 样式冲突的解决规则：
> 1、后面的样式会替换样式表中较早出现的冲突样式。这就是层叠规则。
> 2、类选择器的样式优先级高于标签选择器：一个类被认为是更具体的，因此它比元素选择器优先级更高，所以它取消了其他冲突的样式声明。

> 选择器列表是将多个选择器组合起来，在它们之间加上一个逗号。
> 当你使用选择器列表时，如果任何一个选择器无效 (存在语法错误)，那么整条规则都会被忽略。

```
h1, .special {
  color: blue;
}

```

### 选择器

#### 标签属性选择器

> 这组选择器根据一个元素上的某个标签的属性的存在以选择元素的不同方式：

```
a[title] {
}
```

> 或者根据一个有特定值的标签属性是否存在来选择：

```
a[href="https://example.com"]
{
}
```

#### 伪类与伪元素

> 这组选择器包含了伪类，用来样式化一个元素的特定状态。例如:hover 伪类会在鼠标指针悬浮到一个元素上的时候选择这个元素：

```
a:hover {
}
```

### `display`属性

> 可以改变盒子的外部显示类型是块级还是内联，这将会改变它与布局中的其他元素的显示方式。
> `display: inline-block`：不会切换到新行，但是对高度和宽度设置生效，不会造成样式重叠。
> 对内联盒子如`span`、`a`等很有用。

### 内边距和外边距

> `margin`外边距：可以为负值
> `padding`内边距：不能为负，必须是 0 或正的值