---
title: 首页
hide:
  - navigation
  - toc
---

<div class="home-hero" markdown>

<div class="hero-copy" markdown>

<span class="eyebrow">ORANGEBOOT / ENGINEERING NOTES</span>

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

<p class="section-lead">按你的进度，找到下一步要解决的问题。</p>

<div class="grid cards entry-cards" markdown>

-   <span class="card-number">01 / 认识架构</span>

    **第一次接触 micro-ROS**

    从 Client-Agent 架构开始，了解 STM32 如何接入 ROS 2。

    [阅读 micro-ROS 简介 →](embedded/micro-ROS/micro-ROS简介.md)

-   <span class="card-number">02 / 动手配置</span>

    **让第一个工程跑起来**

    配置 STM32CubeMX、构建静态库，再启动代理端验证通信。

    [打开详细配置指南 →](embedded/micro-ROS/详细配置指南/详细配置指南.md)

-   <span class="card-number">03 / 扩展通信</span>

    **尝试以太网传输**

    配置网口与代理端，把已经跑通的通信扩展到以太网。

    [查看网口传输笔记 →](embedded/micro-ROS/网口传输/网口传输.md)

</div>

<div class="home-bottom" markdown>

**继续深入 micro-ROS**

把基础配置接到实际工程里：[嵌入战队模板](embedded/micro-ROS/嵌入战队模板/嵌入战队模板.md) · [自定义消息](embedded/micro-ROS/自定义消息.md) · [中间件配置](embedded/micro-ROS/中间件配置/中间件配置.md)

</div>
