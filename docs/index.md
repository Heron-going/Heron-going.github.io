---
title: 首页
hide:
  - navigation
  - toc
---

<div class="home-notebook" markdown>

<div class="notebook-intro" markdown>

# Heron-going 的笔记

记录嵌入式开发中学到的东西，以及遇到的问题和解决过程。主要涉及 STM32、FreeRTOS 和 micro-ROS。

</div>

<div class="note-toolbar" markdown>

<div class="note-filters" role="group" aria-label="按主题筛选笔记" hidden>
  <button type="button" data-note-filter="all" aria-pressed="true">全部</button>
  <button type="button" data-note-filter="stm32" aria-pressed="false">STM32</button>
  <button type="button" data-note-filter="micro-ros" aria-pressed="false">micro-ROS</button>
</div>

[笔记目录 →](notes.md)

</div>

<section class="note-group" data-note-topic="stm32" markdown="block">

## STM32

<div class="note-row" markdown>

### [鸿蒙 Windows 虚拟机开发与调试](embedded/stm32/环境搭建/鸿蒙虚拟机开发/鸿蒙虚拟机开发.md)

记录 Keil 编译、FlyMcu 烧录，以及 OpenOCD 与 VS Code 调试的配置过程。

</div>

<div class="note-row" markdown>

### [GPIO](embedded/stm32/外设/GPIO/GPIO.md)

整理 STM32F103 的八种 GPIO 工作模式，以及推挽、开漏输出的区别。

</div>

<div class="note-row" markdown>

### [外部中断](embedded/stm32/外设/外部中断/外部中断.md)

从 PC5 的下降沿到中断入口，记录 HAL 回调与按键消抖的处理。

</div>

</section>

<section class="note-group" data-note-topic="micro-ros" markdown="block">

## micro-ROS

<div class="note-row" markdown>

### [micro-ROS 简介](embedded/micro-ROS/micro-ROS简介.md)

了解 Client 与 Agent 的关系，以及单片机如何接入 ROS 2。

</div>

<div class="note-row" markdown>

### [详细配置指南](embedded/micro-ROS/详细配置指南/详细配置指南.md)

整理 STM32CubeMX、WSL、Docker 和静态库的配置步骤。

</div>

<div class="note-row" markdown>

### [嵌入战队模板](embedded/micro-ROS/嵌入战队模板/嵌入战队模板.md)

记录接入已有工程时，启动文件、串口、堆栈和构建配置的调整。

</div>

<div class="note-row" markdown>

### [自定义消息](embedded/micro-ROS/自定义消息/自定义消息.md)

编译自定义消息包，并在单片机和电脑端使用。

</div>

<div class="note-row" markdown>

### [中间件配置](embedded/micro-ROS/中间件配置/中间件配置.md)

整理通信缓冲区、实体内存池和运行时参数的配置。

</div>

<div class="note-row" markdown>

### [网口传输](embedded/micro-ROS/网口传输/网口传输.md)

记录以太网配置，以及如何验证与 Agent 的通信。

</div>

<div class="note-row" markdown>

### [自定义静态库](embedded/micro-ROS/自定义静态库/自定义静态库.md)

配置交叉编译工具链，为目标工程重新生成静态库。

</div>

</section>

<p class="note-filter-status" role="status"></p>

</div>
