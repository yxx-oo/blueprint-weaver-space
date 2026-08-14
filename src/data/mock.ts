export type TaskStatus = "running" | "done" | "failed" | "draft";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  project: string;
  updatedAt: string;
  summary: string;
}

export interface Project {
  id: string;
  name: string;
  desc: string;
  emoji: string;
  members: number;
  tasks: number;
  updatedAt: string;
}

export interface Skill {
  id: string;
  name: string;
  desc: string;
  emoji: string;
  author: string;
  installs: string;
  installed: boolean;
  category: string;
}

export interface Colleague {
  id: string;
  name: string;
  role: string;
  emoji: string;
  desc: string;
  tags: string[];
}

export interface Connector {
  id: string;
  name: string;
  desc: string;
  emoji: string;
  connected: boolean;
}

export const statusLabel: Record<TaskStatus, string> = {
  running: "进行中",
  done: "已完成",
  failed: "已失败",
  draft: "草稿",
};

export const projects: Project[] = [
  {
    id: "growth-2026",
    name: "增长实验室",
    desc: "投放素材、落地页与转化数据的统一协作空间",
    emoji: "🚀",
    members: 6,
    tasks: 14,
    updatedAt: "10 分钟前",
  },
  {
    id: "product-docs",
    name: "产品文档中心",
    desc: "需求评审、PRD 撰写与版本说明自动同步",
    emoji: "📘",
    members: 4,
    tasks: 9,
    updatedAt: "1 小时前",
  },
  {
    id: "data-weekly",
    name: "数据周报",
    desc: "每周自动拉取指标、生成图表并推送到企业群",
    emoji: "📊",
    members: 3,
    tasks: 22,
    updatedAt: "昨天",
  },
  {
    id: "customer-voice",
    name: "客户之声",
    desc: "工单与访谈记录聚类，输出问题清单",
    emoji: "💬",
    members: 8,
    tasks: 31,
    updatedAt: "2 天前",
  },
];

export const tasks: Task[] = [
  {
    id: "2018542616813531136",
    title: "整理本周投放数据并生成周报",
    status: "running",
    project: "数据周报",
    updatedAt: "刚刚",
    summary: "正在读取 3 个数据源，准备生成图表与结论。",
  },
  {
    id: "2018542616813531137",
    title: "把 PRD v2.3 的改动同步到文档中心",
    status: "done",
    project: "产品文档中心",
    updatedAt: "35 分钟前",
    summary: "已更新 6 个章节，生成变更对照表。",
  },
  {
    id: "2018542616813531138",
    title: "分析 Q2 客户访谈中的高频问题",
    status: "done",
    project: "客户之声",
    updatedAt: "2 小时前",
    summary: "聚类出 12 类问题，输出优先级建议。",
  },
  {
    id: "2018542616813531139",
    title: "为落地页生成 5 版首屏文案",
    status: "failed",
    project: "增长实验室",
    updatedAt: "昨天",
    summary: "连接器授权过期，任务中断。",
  },
];

export const skills: Skill[] = [
  {
    id: "ppt",
    name: "演示文稿生成",
    desc: "根据大纲或文档一键生成结构清晰的演示文稿",
    emoji: "🎞️",
    author: "官方",
    installs: "12.4w",
    installed: true,
    category: "办公",
  },
  {
    id: "sheet",
    name: "表格分析师",
    desc: "上传表格自动清洗、透视并给出结论",
    emoji: "📈",
    author: "官方",
    installs: "8.1w",
    installed: true,
    category: "数据",
  },
  {
    id: "research",
    name: "深度调研",
    desc: "多轮联网检索，输出带引用的调研报告",
    emoji: "🔎",
    author: "官方",
    installs: "20.3w",
    installed: false,
    category: "研究",
  },
  {
    id: "code-review",
    name: "代码评审",
    desc: "接入仓库后对 PR 做风险与规范检查",
    emoji: "🧑‍💻",
    author: "研发效能",
    installs: "3.6w",
    installed: false,
    category: "研发",
  },
  {
    id: "meeting",
    name: "会议纪要",
    desc: "录音转写、要点提炼与待办拆分",
    emoji: "🎧",
    author: "官方",
    installs: "15.9w",
    installed: true,
    category: "办公",
  },
  {
    id: "poster",
    name: "海报设计",
    desc: "按品牌规范生成多尺寸营销素材",
    emoji: "🎨",
    author: "设计中心",
    installs: "5.2w",
    installed: false,
    category: "设计",
  },
];

export const colleagues: Colleague[] = [
  {
    id: "analyst",
    name: "数据小析",
    role: "数据分析专家",
    emoji: "🧠",
    desc: "擅长指标拆解、异常归因与可视化呈现",
    tags: ["SQL", "看板", "归因"],
  },
  {
    id: "writer",
    name: "文案阿文",
    role: "内容创作专家",
    emoji: "✍️",
    desc: "品牌语气一致的长短文与投放素材撰写",
    tags: ["文案", "投放", "品牌"],
  },
  {
    id: "pm",
    name: "需求老王",
    role: "产品助理",
    emoji: "📋",
    desc: "把零散讨论整理为可评审的需求文档",
    tags: ["PRD", "评审", "排期"],
  },
  {
    id: "ops",
    name: "运维小安",
    role: "研发运维",
    emoji: "🛠️",
    desc: "巡检、告警归并与变更记录整理",
    tags: ["巡检", "告警", "脚本"],
  },
];

export const connectors: Connector[] = [
  { id: "docs", name: "腾讯文档", desc: "读取与写入在线文档、表格", emoji: "📄", connected: true },
  { id: "wecom", name: "企业微信", desc: "把任务结果推送到群聊", emoji: "💼", connected: true },
  { id: "feishu", name: "飞书", desc: "同步多维表格与云文档", emoji: "🐦", connected: false },
  { id: "figma", name: "Figma", desc: "读取设计稿与切图信息", emoji: "🎯", connected: false },
  { id: "linear", name: "Linear", desc: "同步任务与迭代进度", emoji: "🧭", connected: false },
  { id: "drive", name: "我的网盘", desc: "上传文件作为任务上下文", emoji: "🗂️", connected: true },
];

export const quickPrompts = [
  { emoji: "📊", label: "生成本周数据周报" },
  { emoji: "📝", label: "把会议录音整理成纪要" },
  { emoji: "🔍", label: "调研竞品最新动态" },
  { emoji: "🎞️", label: "根据文档做一份演示稿" },
];

export const discoverItems = [
  {
    id: "d1",
    title: "用一句话跑通「数据 → 图表 → 周报」",
    desc: "连接数据源后自动生成结论式周报，支持定时推送。",
    tag: "热门",
    emoji: "📈",
  },
  {
    id: "d2",
    title: "客户访谈自动聚类模板",
    desc: "上传访谈记录，输出问题清单与优先级建议。",
    tag: "模板",
    emoji: "💬",
  },
  {
    id: "d3",
    title: "研发日报自动汇总",
    desc: "抓取仓库提交与工单变更，生成团队日报。",
    tag: "自动化",
    emoji: "⚙️",
  },
  {
    id: "d4",
    title: "品牌素材批量出图",
    desc: "按品牌规范一次生成多尺寸投放素材。",
    tag: "设计",
    emoji: "🎨",
  },
];

export const libraryFiles = [
  { id: "f1", name: "Q2 投放数据.xlsx", size: "2.4 MB", from: "我的网盘", updatedAt: "今天 09:12" },
  { id: "f2", name: "产品需求文档 v2.3.docx", size: "860 KB", from: "腾讯文档", updatedAt: "昨天 18:40" },
  { id: "f3", name: "客户访谈记录合集.md", size: "312 KB", from: "本地上传", updatedAt: "3 天前" },
  { id: "f4", name: "品牌视觉规范.pdf", size: "12.1 MB", from: "本地上传", updatedAt: "上周" },
];

export const taskMessages = [
  { role: "user" as const, content: "帮我整理本周的投放数据，生成一份带结论的周报。" },
  {
    role: "assistant" as const,
    content:
      "好的，我会分三步完成：\n1. 从「腾讯文档」和「我的网盘」读取本周投放数据；\n2. 清洗并按渠道、素材维度做透视；\n3. 生成图表并给出投放建议。",
  },
  {
    role: "tool" as const,
    content: "读取数据源 · 腾讯文档 / Q2 投放数据.xlsx（3 张表，共 8,214 行）",
  },
  { role: "tool" as const, content: "执行分析 · 按渠道聚合 ROI，识别 2 个异常波动" },
  {
    role: "assistant" as const,
    content:
      "本周整体 ROI 1.82（环比 +12%）。信息流渠道贡献了 63% 的转化，但素材 A3 的 CTR 连续三天下滑，建议下线并用 A7 替换。周报初稿已生成，可在右侧预览。",
  },
];
