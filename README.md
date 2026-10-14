<div align="center">

# 掌上吾理

**武汉理工大学校园生活助手 —— 课表、成绩、考试、校园服务，一触即达**

<p>  
  <a href="https://github.com/TokenTeam/iwut/stargazers">  
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/TokenTeam/iwut?style=flat-square\&logo=github">  
  </a>  
  <a href="https://github.com/TokenTeam/iwut/blob/main/LICENSE">  
    <img alt="License" src="https://img.shields.io/github/license/TokenTeam/iwut?style=flat-square">  
  </a>  
  <img alt="Version" src="https://img.shields.io/github/package-json/v/TokenTeam/iwut?style=flat-square">  
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/TokenTeam/iwut?style=flat-square">  
</p>

<p>  
  <img alt="Expo" src="https://img.shields.io/badge/dynamic/json?style=flat-square\&label=expo\&query=%24.dependencies.expo\&url=https%3A%2F%2Fraw.githubusercontent.com%2FTokenTeam%2Fiwut%2Fmain%2Fpackage.json\&logo=expo\&logoColor=white">  
  <img alt="React Native" src="https://img.shields.io/badge/dynamic/json?style=flat-square\&label=react-native\&query=%24.dependencies%5B%22react-native%22%5D\&url=https%3A%2F%2Fraw.githubusercontent.com%2FTokenTeam%2Fiwut%2Fmain%2Fpackage.json\&logo=react\&logoColor=white">  
  <img alt="Bun" src="https://img.shields.io/badge/runtime-bun-black?style=flat-square\&logo=bun">  
  <img alt="Platform" src="https://img.shields.io/badge/platform-iOS%20%7C%20Android-blue?style=flat-square">  
</p>

</div>

## 📖 项目简介

掌上吾理（iwut）是一款面向武汉理工大学学生的开源客户端，基于 React Native / Expo 构建，将**课表、成绩、考试安排**与**校园常用服务**收进一个 App。
> 更多应用截图与使用说明见 [官网](https://iwut.tokenteam.net)。

## ✨ 功能特性

### 📅 课程表

- **周视图课表**：自动定位当前周与今天，课程格一眼定位
- **一键导入**：本科 / 研究生课表、实验课程直连教务系统；未绑定账号时也可手动导入
- **课程管理**：多时段、多教师、多周次自由编辑，时段冲突自动提示
- **细节拉满**：中课显示开关、非本周课程淡化显示、周末课表滚动查看
- **数据互通**：课程数据可通过 JSON 文件 / 分享码导出与导入，方便备份与分享

### 🏠 首页

- 分时段问候语，假期模式自动切换
- 今日 / 明日课程一览，课程倒计时（还有几分钟上课、下课）
- 近期考试倒计时与应用内公告

### 📝 考试安排

- 一键从教务系统同步全部考试
- 未开始 / 已完成 / 未安排分组管理
- 时间、地点、座位号与倒计时一览

### 📊 成绩查询

- 一键同步全部成绩，按学期筛选
- 课程、分数、学分清晰呈现

### 🧰 校园服务

- **学习工具**：成绩查询、考试安排、自习室查询
- **生活服务**：IC 空间预约、图书馆管家、智寻卡片、电费查询、网络缴费
- **校园资讯**：校园公告
- 校园网环境自动识别，保存账号后一键连接

### 🔔 提醒与通知

- **课前提醒**：提前 1–120 分钟自定义，通知栏倒计时实时刷新
- **iOS 实时活动**：灵动岛 / 锁屏实时显示下一节课倒计时
- **考试提醒**：考试前一晚 + 考前一小时双重提醒
- **Android 上课免打扰**：按课程表时间自动切换免打扰模式

### 🎨 个性化

- **10 套精选配色**：默认、马卡龙、森林、星空、日落、海洋、樱花、薄荷、莫兰迪、霓虹
- **自定义配色**：支持剪贴板 / 扫码导入导出，可为单门课程指定颜色
- **课表外观**：背景图透明度与模糊、课程格子 / 定位格子透明度自由调节
- 深色 / 浅色 / 跟随系统，简体中文 / English 一键切换，支持触感反馈

### 🖥️ 桌面小组件

- iOS WidgetKit 与 Android 桌面小组件
- 桌面即可查看今日课表，显示语言跟随应用设置

### 🗓️ 系统日历同步

- 一键将课表写入系统日历（本地日历或第三方日历）
- 支持随时移除同步，与系统日历互不打扰

### 🔐 隐私优先

- 账号与课表 / 成绩 / 考试数据仅保存在本机
- 敏感操作（系统日历写入、屏幕录制类权限等）均需明确授权

### ⚙️ 更多

- 新手引导：登录、导入课表一步到位，一键开启在理工大的学习生活
- 在线更新（OTA）：检查新版本、重要版本强制升级
- 崩溃监控（Sentry）与日志导出，问题反馈直达 GitHub Issues

## 🛠️ 技术栈

| 分类   | 技术                                             |
| ---- | ---------------------------------------------- |
| 框架   | React Native 0.86 · Expo SDK 57 · TypeScript 6 |
| 导航   | expo-router（Typed Routes）                      |
| 状态管理 | Zustand + MMKV                                 |
| 样式   | NativeWind                                     |
| 原生能力 | 自研 Swift / Kotlin 模块（实时活动、桌面小组件、校园网、诊断）        |
| 数据获取 | WebView + 脚本注入直连教务系统                           |
| 热更新  | Expo Updates                                   |
| 监控   | Sentry                                         |
| 包管理  | Bun                                            |

## 📂 目录结构

```
├── app/              # expo-router 页面（首页 / 课表 / 功能 / 我的、设置、扫码等）
├── components/       # 通用组件（课表网格、底部面板等）
├── modules/          # 自研原生模块（通知、小组件、校园网、诊断）
├── services/         # 业务服务（导入、日历同步、通知、更新等）
├── store/            # Zustand 状态管理
├── hooks/            # 通用 Hooks
├── lib/              # 工具库（i18n、日期、网络等）
└── assets/           # 图标与静态资源
```

## 🚀 快速开始

> 更详细的开发指引可参阅 [Expo Docs](https://docs.expo.dev/develop/)。

```bash
bun install --frozen-lockfile
cp .env.local.example .env.local
```

在有 Dev Client 的前提下，启动 Metro 热重载：

```bash
bun run start
```

或在已安装 Xcode / Android Studio 的环境下直接构建运行：

```bash
bun run ios
# 使用 --device 来选择设备
bun run ios --device

bun run android
```

提交代码前请进行检查：

```bash
bun run check
```

> [!TIP]  
> 若对原生代码、Expo 配置插件或依赖中的原生模块进行了修改，请重新构建 Dev Client 后再启动 Metro 热重载，仅执行 `bun start` 不会让这些改动生效。

## 📥 下载

访问 [官网](https://iwut.tokenteam.net) 获取最新版本。

开发者可通过以下方式获取 Expo Dev Client：

|    平台   |                                        获取方式                                       |
| :-----: | :-------------------------------------------------------------------------------: |
| Android | [下载最新 Dev Client APK](https://download.tokenteam.dev/iwut/latest/development.apk) |
|   iOS   |                                参考上方说明自行构建，或与开发团队联系                                |

## 💬 反馈与贡献

- **反馈**：推荐通过 [GitHub Issues](https://github.com/TokenTeam/iwut/issues) 提交（公开讨论、便于跟踪处理进度），也可在应用内「我的 → 关于 → 反馈」提交
- **贡献**：欢迎提交 Pull Request。提交前请运行 `bun run check` 确保检查通过，并遵循仓库现有代码风格

## 📄 许可

使用、修改或再分发本项目表示您已阅读并同意[用户协议](./docs/legal/USER_AGREEMENT.zh-CN.md)与[隐私政策](./docs/legal/PRIVACY_POLICY.zh-CN.md)。

本项目基于 GNU Affero General Public License v3.0 或后续版本授权发布，如果您修改并通过网络向用户提供本项目的版本，应按 AGPLv3 的要求向这些用户提供对应源代码，详情请参阅 [LICENSE](./LICENSE)。

陕ICP备2025063787号-4A

## 📈 项目活动

![Repobeats analytics image](https://repobeats.axiom.co/api/embed/1b080c2f466837eaa8bb39eace229f2f952a07f2.svg)
