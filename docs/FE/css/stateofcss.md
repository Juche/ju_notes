# stateofcss

## 2019

---

[whatwg 官网](https://html.spec.whatwg.org/)
[whatwg github](https://github.com/whatwg)
[W3C 官网](https://www.w3.org/Style/CSS/)
[W3C github](https://github.com/w3c)
[ecma 官网](https://www.ecma-international.org/)
[ecma-tc39 官网](https://tc39.es/)
[ecma-tc39 github](https://github.com/tc39)

> Snapshot 是对今年 CSS 标准的总结
> 从 CR 开始的提案可以认为是可以使用的新特性，但是不一定所有浏览器都支持。

提案有不同的状态：

FPWD：First Public Working Draft，刚公开的草案
WD Working Draft：草案
CRD：Candidate Recommendation Draft，候选标准草案
CR：Candidate Recommendation：候选标准
PR：Proposed Recommendation：待发布标准
REC：Recommendation：标准
SPSD：Superseded Recommendation：可替代标准

stage0 strawman：任何讨论、想法、改变或者还没加到提案的特性都在这个阶段。只有 TC39 成员可以提交。
stage1 proposal（1）产出一个正式的提案。（2）发现潜在的问题，例如与其他特性的关系，实现难题。（3）提案包括详细的 API 描述，使用例子，以及关于相关的语义和算法。
stage2 draft （1）提供一个初始的草案规范，与最终标准中包含的特性不会有太大差别。草案之后，原则上只接受增量修改。（2）开始实验如何实现，实现形式包括 polyfill, 实现引擎（提供草案执行本地支持），或者编译转换（例如 babel）
stage3 candidate （1）候选阶段，获得具体实现和用户的反馈。此后，只有在实现和使用过程中出现了重大问题才会修改。（1）规范文档必须是完整的，评审人和 ECMAScript 的编辑要在规范上签字。（2）至少要在一个浏览器中实现，提供 polyfill 或者 babel 插件。
stage4 finished （1）已经准备就绪，该特性会出现在下个版本的 ECMAScript 规范之中。（2）需要通过有 2 个独立的实现并通过验收测试，以获取使用过程中的重要实践经验。
