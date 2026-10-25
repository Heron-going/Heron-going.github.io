---
title: 首页
hide:
  - navigation
  - toc
---

<div class="home-hero" markdown>

<div class="hero-copy" markdown>

<span class="eyebrow">Heron-going / ENGINEERING NOTES</span>

# 嵌入式开发，<br>从原理到跑通。

记录 STM32、FreeRTOS 与 micro-ROS 的学习和实践。把环境配置、消息通信和调试过程，整理成可以回头查阅的工程笔记。

<div class="hero-actions" markdown>

[开始阅读 →](embedded/micro-ROS/index.md){ .md-button .md-button--primary }
[全部笔记](notes.md){ .md-button }

</div>

<div class="hero-tags"><span>STM32</span><span>FreeRTOS</span><span>ROS 2</span></div>

</div>

<div class="hero-map" aria-label="STM32 通过 micro-ROS Client 和 Agent 与 ROS 2 通信">
  <span class="map-caption">从单片机到机器人系统</span>
  <div class="map-node"><span class="map-label">01 / DEVICE</span><strong>STM32</strong><span>FreeRTOS · micro-ROS Client</span></div>
  <div class="map-connector" aria-hidden="true">↕</div>
  <div class="map-node"><span class="map-label">02 / BRIDGE</span><strong>micro-ROS Agent</strong><span>串口 / 以太网</span></div>
  <div class="map-connector" aria-hidden="true">↕</div>
  <div class="map-node"><span class="map-label">03 / ROBOTICS</span><strong>ROS 2</strong><span>话题 · 服务 · 节点</span></div>
</div>

</div>

## 从这里开始

<p class="section-lead">第一次阅读建议按顺序完成下面三步：理解架构、跑通基础例程，再将 micro-ROS 接入已有工程。</p>

<div class="grid cards entry-cards" markdown>

-   <span class="card-number">01 / 认识架构</span>

    **先理解 Client 与 Agent 如何配合**

    认识 micro-ROS 的基本架构，弄清单片机、代理端与 ROS 2 各自负责什么，再开始配置环境。

    [阅读 micro-ROS 简介 →](embedded/micro-ROS/micro-ROS简介.md)

-   <span class="card-number">02 / 动手配置</span>

    **完成配置，跑通第一个通信例程**

    按指南准备 STM32CubeMX、WSL 与 Docker，编译静态库并启动 Agent，验证单片机与 ROS 2 的通信。

    [打开详细配置指南 →](embedded/micro-ROS/详细配置指南/详细配置指南.md)

-   <span class="card-number">03 / 工程集成</span>

    **把跑通的例程接入工程模板**

    基础通信成功后，再处理启动文件、构建配置、串口和堆栈，将 micro-ROS 集成到战队模板中。

    [继续阅读嵌入战队模板 →](embedded/micro-ROS/嵌入战队模板/嵌入战队模板.md)

</div>

<div class="home-bottom" markdown>

**完成基础集成后，继续逐步扩展**

先用[自定义消息](embedded/micro-ROS/自定义消息/自定义消息.md)传递自己的数据，再通过[中间件配置](embedded/micro-ROS/中间件配置/中间件配置.md)理解通信缓冲区与资源上限。接着阅读[网口传输](embedded/micro-ROS/网口传输/网口传输.md)，验证以太网通信；需要独立调整工具链、重新生成目标板的库时，再看[自定义静态库](embedded/micro-ROS/自定义静态库/自定义静态库.md)。

</div>
