/**
 * ============================================================
 *  个人网站内容数据文件（中英双语）
 *  - localized：随语言切换的内容（zh / en）
 *  - ui：界面文案（zh / en）
 *  - 其余为语言无关的共享数据（联系方式、社交、技能）
 *  直接编辑此文件即可更新网站内容
 * ============================================================
 */

import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

export type Lang = 'zh' | 'en';

// ============================================================
// 内容类型定义
// ============================================================

export interface AboutIntro {
  paragraph1: string;
  paragraph2: string;
  photo: string;
}

export interface Activity {
  title: string;
  description: string;
}

export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface TimelinePeriod {
  period: string;
  left: TimelineEntry | null;
  right: TimelineEntry | TimelineEntry[] | null;
}

export interface IndieProduct {
  title: string;
  description: string;
  metrics: string;
  tags: string[];
  images?: string[];
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface LocalizedContent {
  aboutIntro: AboutIntro;
  activities: Activity[];
  values: string[];
  timelinePeriods: TimelinePeriod[];
  indieProducts: IndieProduct[];
  projects: Project[];
}

export interface UIStrings {
  nav: {
    about: string;
    products: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    namePrimary: string;
    nameSecondary: string;
    role: string;
    oneLiner: string;
  };
  viewProject: string;
  viewShots: string;
  hideShots: string;
  screenshot: string;
  contactHeadline: string;
  contactByline: [string, string];
  langToggle: string;
  resumeLabel: string;
  resumeUrl: string;
  phoneNote: string;
}

// ============================================================
// 语言无关的共享数据
// ============================================================

export const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'wjz000414@gmail.com',
    href: 'mailto:wjz000414@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(+86) 19921305351',
    href: 'tel:+8619921305351',
  },
];

export const socialLinks = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jinze-wang-855498251/',
  },
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/JinzeWang10',
  },
  {
    icon: Instagram,
    name: 'Instagram',
    href: 'https://www.instagram.com/jinze_wang1/',
  },
];

export const technicalSkills = [
  {
    category: 'AI & LLM 应用',
    skills: ['LLM 落地', 'AI Agent 编排', 'MCP', 'LLM API', 'Prompt Engineering', 'Vibe Coding'],
  },
  {
    category: '全栈开发',
    skills: ['Next.js', 'React', 'React Native / Expo', 'Django', 'Flask', 'Node.js', 'TypeScript'],
  },
  {
    category: '数据 & 后端',
    skills: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'MongoDB', 'Kafka', 'Spark', 'ETL'],
  },
  {
    category: '部署 & 工程化',
    skills: ['Linux 服务器部署', 'Nginx', '阿里云 ECS', 'Git', 'Vite', 'SQLite'],
  },
];

export const softSkills = [
  { name: '业务理解' },
  { name: '端到端交付' },
  { name: '客户 / 干系人沟通' },
  { name: '跨团队协作' },
  { name: '快速学习' },
  { name: '执行力' },
];

export const skillsQuote = {
  text: '"I think it\'s important to reason from first principles rather than by analogy."',
  author: 'Elon Musk',
};

// ============================================================
// 随语言切换的内容
// ============================================================

export const localized: Record<Lang, LocalizedContent> = {
  zh: {
    aboutIntro: {
      paragraph1:
        '你好，我是王金泽（Jinze Wang）。24 年毕业于宾夕法尼亚大学，数据科学硕士。我是一名 Forward Deployed Engineer 取向的工程师——既能写全栈代码、把系统从 0 搭到上线，也能坐到业务方面前听懂他们真正的问题，再用工程 + AI 把方案端到端落地成能用、有人用的产品。技术对我来说是杠杆，驱动我前进的是创造价值、解决问题、推动事情向前的成就感。',
      paragraph2:
        '享受用第一性原理洞察问题、用各种技术找到解法，再亲手把方案落地、推到真实用户面前的全过程。热爱足球、羽毛球。',
      photo: '/intro_to_me/images/wjz1.jpg',
    },
    activities: [
      { title: '学习者', description: '始终保持好奇心，喜欢搞清楚事物运行的底层逻辑。' },
      { title: '思考者', description: '习惯质疑假设，追问：有没有更好的方案？这个方案为什么重要？' },
      { title: '创造者', description: '享受从零到一的过程——通过实验、迭代和创新，把想法变成现实。' },
    ],
    values: [
      '持续追问，找到更好的解法',
      '想得更深 > 干得更多',
      '真实的落地效果比理论上的优雅更重要',
    ],
    timelinePeriods: [
      {
        period: '2024 - 至今',
        left: {
          title: 'PICC',
          subtitle: '全职 · 数据工程师 / 内部平台项目负责人',
          period: '2024.08 – 至今',
          location: '北京',
          achievements: [
            '独立设计实现「运维度量」绩效系统并取代原有手工 Excel 测算，已固化为常态化季度评估机制：单次度量 600+ 名内外部运维人员，横跨 7 个处室、17 条技术线、53 项指标，结果用于人员绩效评估与外部人员等级调整',
            '指标方向由领导确定，口径细则由我逐一与十余位技术线负责人对齐谈定——合理诉求即迭代评分模型，多数分歧以数据推动各方就统一口径达成共识',
            '打通 SQL / Jira / Excel 多源异构数据，统一到「人 × 岗位 × 指标」粒度，实现加权评分、逐层聚合、自动校验与多维分析报告，全链路一人端到端交付',
            '自研「事件会诊速览」并上线公司内网：事件触发时接入监控聚合数据，经确定性特征抽取 → 受约束内网大模型生成只陈述事实的现象简报 → 无头 Chromium 渲染 PNG 会诊看板，抽取 / 解读 / 渲染 三层解耦',
            '自研 NLU 自动拉群 Agent 并上线内网：自然语言解析自动把对应系统的运维 / 开发经理拉入事件处置群，含模糊匹配与失败兜底',
            '主导设计事件根因分析（RCA）Agent：三阶段流水线（并行多源采集 → LLM 多轮假设验证 → Top 3 嫌疑根因 + 证据链）辅助值班分诊；核心是知识沉淀飞轮——复盘真实根因、误判反馈与调查轨迹结构化回流，持续生长故障模式 / 案例知识库并反哺 Agent。当前处于 V1 研发、故障库初始数据采集阶段',
          ],
        },
        right: null,
      },
      {
        period: '2022 - 2024',
        left: {
          title: 'University of Pennsylvania',
          subtitle: '数据科学硕士',
          period: '2022.08 – 2024.05',
          location: 'Philadelphia, PA',
          achievements: [
            'GPA: 3.93/4.0',
            '助教：MUSA550 - Geospatial Data Science in Python',
            'UPenn 设计学院研究助理，负责地理空间数据处理与分析',
            '核心课程：数据库与信息系统、大数据分析、深度学习、应用机器学习、互联网与 Web 系统',
          ],
        },
        right: {
          title: 'Souscout',
          subtitle: '数据工程师实习',
          period: '2023.05 – 2023.08',
          location: 'New York, NY',
          achievements: [
            '使用 Selenium 抓取足球数据，通过多进程优化将运行时间减少 60%',
            '设计球员实体匹配逻辑，使用特征向量、规则和相似度评分',
            '应用 OpenAI API 过滤弱匹配，生成高质量的球员映射数据',
          ],
        },
      },
      {
        period: '2018 - 2022',
        left: {
          title: '上海科技大学',
          subtitle: '计算机科学学士',
          period: '2018.09 – 2022.07',
          location: '上海',
          achievements: [
            'GPA: 3.7/4.0',
            '优秀学生、三好学生、优秀毕业生',
            '校足球队主力中锋、金靴奖',
            '核心课程：数据结构与算法、线性代数、操作系统、计算机视觉、计算机体系结构、人工智能',
          ],
        },
        right: [
          {
            title: 'Orka',
            subtitle: '软件工程师实习',
            period: '2022.02 – 2022.06',
            location: '上海',
            achievements: [
              '使用 Django REST framework 和 React 开发维护公司网站后端',
              '使用 Django/PostgreSQL 构建 RESTful API',
              '应用 Celery 处理多个后端任务，响应时间减少 50%',
            ],
          },
          {
            title: 'Deloitte',
            subtitle: '数据科学家实习',
            period: '2021.08 – 2021.11',
            location: '上海',
            achievements: [
              '参与企业风险评估自动查询系统项目',
              '使用 Logistic Regression、Decision Tree 和 XGBoost 预测财务风险',
              '使用 python-docx 自动生成报告，每季度节省 20 小时人工',
            ],
          },
          {
            title: '中原证券',
            subtitle: '金融分析师实习',
            period: '2021.02 – 2021.04',
            location: '河南',
            achievements: ['参与郑州名扬窗饰材料有限公司 IPO 项目', '负责准备招股说明书等必要材料'],
          },
        ],
      },
    ],
    indieProducts: [
      {
        title: '小包 ReadyToGo · 行李打包助手',
        description:
          '完全离线的 iOS 出行打包清单 App。一次性问清楚你是谁、这趟去哪、干什么，再给出一份可直接打勾的清单。8 页横向滑动选择器（证件 / 衣物 / 洗漱 / 电子 / 药品 …），衣物子系统支持数量与性别差异；行程返程后自动归档，历史行程可一键复用。无账号、无云同步、无网络请求，所有数据存本地 SQLite。',
        metrics: '已上线 App Store · 完全离线 · 零广告零注册',
        tags: ['React Native', 'Expo SDK 54', 'TypeScript', 'SQLite', 'Zustand', 'iOS'],
        images: ['/intro_to_me/images/小包.png'],
        link: 'https://apps.apple.com/us/app/%E5%B0%8F%E5%8C%85-%E8%A1%8C%E6%9D%8E%E6%89%93%E5%8C%85%E6%B8%85%E5%8D%95/id6762072006',
      },
      {
        title: '心理量表测评平台',
        description:
          '自主设计并开发的趣味心理测评平台，提供趣味测试与专业心理测评，支持量化测评、维度分布分析与数据统计。平台已具备产品级稳定性，可直接用于心理服务、教育、内容创作者的量表挂载与推广。',
        metrics: '总用户 5,000+ · 累计测评 8,000+ 次 · 日活 ~20',
        tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
        images: ['/intro_to_me/images/心理测评2.png', '/intro_to_me/images/心理测评1.png'],
        link: 'https://knowyourself.com.cn',
      },
      {
        title: '小红书全自动化运营系统',
        description:
          '基于 MCP（Model Context Protocol）构建小红书账号全自动运营流水线：自动生成图文内容、定时发帖、评论互动，将流量精准引导至心理测评网站，实现从内容创作到用户转化的闭环。已上线小红书店铺并持续引流变现。',
        metrics: '累计销售 ¥800+ · 全自动运行',
        tags: ['MCP', 'AI Agent', 'Automation', 'Growth Hacking', 'Python'],
        link: 'https://www.xiaohongshu.com/shop/691ebeb8c2678f0015c613d1?instation_link=xhsdiscover%3A%2F%2Fshop_detail%3Fseller_id%3D691ebeb8c2678f0015c613d1%26general_param%3D%257B%2522source%2522%3A%2522share%2522%257D%26source%3Dshare&page_instance=3957&back_chain_id=shop_homepage_share',
      },
      {
        title: 'Polymarket 盯盘机器人',
        description:
          '在服务器上部署自动扫描程序，定时扫描 Polymarket 市场中的异常价格挂单信号与超高概率信号，通过飞书群回调实时通知，人工研判后进行交易，捕获低风险套利机会。',
        metrics: '实盘收益率 10%+ · 全自动运行',
        tags: ['Python', 'Automation', 'Web3', 'Quantitative Trading'],
        images: ['/intro_to_me/images/polymarket自动扫描.jpg'],
      },
      {
        title: '「八戒」戒断助手 App',
        description:
          '使用 Vibe Coding 方式快速搭建的 iOS 戒断类应用，帮助用户记录并克服各类成瘾习惯（手机、游戏、烟酒等）。支持戒断打卡、进度可视化、激励提醒等核心功能。',
        metrics: '已上线 App Store',
        tags: ['iOS', 'Swift', 'Vibe Coding', 'App Store', 'Mobile'],
        images: ['/intro_to_me/images/八戒.png'],
        link: 'https://apps.apple.com/us/app/%E5%85%AB%E6%88%92-%E6%88%92%E6%96%AD%E5%8A%A9%E6%89%8B/id6757436622',
      },
    ],
    projects: [
      {
        title: '员工绩效分析模型',
        description:
          '参与设计并独立实现员工绩效度量模型，使用 Pandas / NumPy / SQL 构建数据计算链路；从 数据库建模、后端接口到前端展示全流程深度参与，实现可解释性强、可灵活扩展的指标体系。对接 多源异构系统（SQL / Jira / Excel）；覆盖数据抽取、清洗标准化、指标生产、存储、可视化输出，全流程延迟控制在分钟级。',
        tags: ['Python', 'Pandas', 'SQL', 'Data Analysis', 'KPI System'],
      },
      {
        title: '量化交易策略与回测系统',
        description:
          '围绕沪深 300 构建端到端量化交易体系。使用多源数据（行情、财务、技术指标）进行自动化抓取与清洗，构建数十维特征矩阵。采用随机森林模型进行选股并输出多维概率评分，结合阈值策略生成交易信号。依托 Backtrader 构建回测框架，实现仓位动态调整、滑点与交易成本模拟、风险控制（如最大回撤约束）。',
        tags: ['Python', 'Backtrader', 'Scikit-learn', 'Pandas', 'Machine Learning'],
        link: 'https://github.com/JinzeWang10/quant-learning',
      },
      {
        title: '食品分类深度学习模型',
        description:
          '使用 Pandas 进行数据预处理，通过 NLTK 进行文本处理和 BERT tokenizer 向量化。基于 PySpark 进行网格搜索，处理时间减少 70%。使用 PyTorch 构建 CNN 模型，精确率达 89%，F1 分数 0.84。',
        tags: ['PyTorch', 'CNN', 'PySpark', 'BERT', 'NLP', 'Machine Learning'],
      },
      {
        title: 'Mini-Google 搜索引擎',
        description:
          '构建基于 Java Sockets 的动态 Web Server，实现可扩展的 路由系统、会话管理、异常处理机制，并集成 TLS/HTTPS 以支持安全通信；完成从协议解析到请求处理的端到端实现。设计分布式 Key-Value Store，采用 内存 + 磁盘的混合持久化 架构；实现类 RDD 的数据抽象层，支持 MapReduce 风格的分布式算子，具备故障恢复与水平扩展能力。开发分布式 Web Crawler，实现大规模网页抓取调度、URL 去重、任务分发等核心模块；基于抓取结果实现 PageRank 排序与检索功能，并将整体系统部署运行在 AWS 上。',
        tags: ['Java', 'Distributed Systems', 'MapReduce', 'AWS', 'PageRank'],
      },
      {
        title: '足球趣知 Web App',
        description:
          '对三组交叉数据集进行探索性分析，设计 ER 图并将表规范化至 3NF，存储于 AWS。编写复杂 SQL 查询并通过执行计划优化性能。使用 React 和 Node.js 构建全栈应用，支持搜索与筛选功能。',
        tags: ['React', 'Node.js', 'AWS', 'SQL', 'Database Design', '3NF'],
      },
      {
        title: '多标签特征交互学习',
        description:
          '构建高阶非线性多标签学习模型，利用结构化稀疏性识别有意义的特征交互并提升泛化能力。通过张量分解降低过拟合，应用 L21 范数正则化。在真实数据集上验证了模型的有效性。',
        tags: ['Machine Learning', 'Feature Engineering', 'Structured Sparsity', 'Research'],
      },
      {
        title: '分布式监控系统',
        description:
          '使用 Python、SNMP、Kafka 和 Flask 构建分布式监控系统，实现告警处理、性能分析和实时数据查询服务。',
        tags: ['Python', 'Kafka', 'Flask', 'SNMP', 'Monitoring'],
      },
      {
        title: 'Uber 数据管道',
        description:
          '为 Uber 出行数据构建端到端数据管道：原始数据存储于 GCP Storage，创建 Compute Engine 虚拟机并部署 Mage 进行数据转换，通过 SSH 连接，将处理后的数据加载至 BigQuery，最终在 Looker Studio 上构建分析仪表盘。',
        tags: ['GCP', 'Google Compute Engine', 'Mage', 'BigQuery', 'Looker Studio', 'ETL'],
      },
      {
        title: '自动化 ETL 数据管道',
        description:
          '开发跨异构系统的自动化 ETL 管道，实现数据提取、清洗、指标计算和可视化，重构底层数据架构解决跨系统一致性问题。',
        tags: ['ETL', 'Python', 'Data Engineering', 'SQL'],
      },
      {
        title: '企业风险评估系统',
        description:
          '使用 Selenium 抓取财务数据，应用 Logistic Regression、Decision Tree 和 XGBoost 预测财务风险，使用 python-docx 自动生成报告。',
        tags: ['Machine Learning', 'XGBoost', 'Selenium', 'Automation'],
      },
    ],
  },

  en: {
    aboutIntro: {
      paragraph1:
        "Hi, I'm Jinze Wang. I graduated from the University of Pennsylvania in 2024 with an M.S. in Data Science. I'm a Forward Deployed Engineer–oriented engineer: I can write full-stack code and take systems from zero to production, but I can also sit down with business teams, understand the problem they actually have, and use engineering + AI to deliver an end-to-end solution that works and that people actually use. Technology is my leverage; what drives me is the satisfaction of creating value, solving problems, and moving things forward.",
      paragraph2:
        'I enjoy the whole arc — using first principles to see into a problem, finding a solution across whatever technologies fit, then building it with my own hands and putting it in front of real users. I love football and badminton.',
      photo: '/intro_to_me/images/wjz1.jpg',
    },
    activities: [
      { title: 'Learner', description: 'Endlessly curious — I like to understand the underlying logic of how things work.' },
      { title: 'Thinker', description: 'I question assumptions and keep asking: is there a better way? Why does this matter?' },
      { title: 'Builder', description: 'I love going from zero to one — turning ideas into reality through experiments, iteration and creation.' },
    ],
    values: [
      'Keep asking until you find a better solution',
      'Thinking deeper > doing more',
      'Real-world impact matters more than theoretical elegance',
    ],
    timelinePeriods: [
      {
        period: '2024 - Present',
        left: {
          title: 'PICC',
          subtitle: 'Full-time · Data Engineer / Internal Platform Project Lead',
          period: 'Aug 2024 – Present',
          location: 'Beijing',
          achievements: [
            'Independently designed and built the "Ops Metrics" performance system, replacing the previous manual Excel calculation — now a standardized quarterly mechanism: a single run covers 600+ in-house and outsourced ops staff across 7 divisions, 17 tech lines and 53 metrics, with results used for performance reviews and outsourced-staff grade adjustments',
            'Leadership set the metric direction; I defined the detailed criteria by aligning one-on-one with 10+ tech-line owners — iterating the scoring model on reasonable requests and using data to drive consensus on a unified standard',
            'Integrated heterogeneous SQL / Jira / Excel sources to a unified "person × role × metric" granularity, with weighted scoring, layered aggregation, automatic validation and multi-dimensional analytical reports — delivered end-to-end single-handedly',
            'Built "Incident Diagnosis Snapshot" (deployed on the company intranet): on trigger it ingests aggregated monitoring data through deterministic feature extraction → a constrained intranet LLM that states facts only → headless-Chromium-rendered PNG dashboards, with extraction / interpretation / rendering fully decoupled',
            'Built an NLU Auto-Grouping Agent (deployed on intranet): natural-language parsing automatically pulls the relevant systems\' ops/dev managers into the incident-handling group, with fuzzy matching and failure fallback',
            'Leading the design of an Incident RCA Agent: a three-stage pipeline (parallel multi-source collection → multi-round LLM hypothesis testing → Top 3 suspected root causes + evidence chain) to assist on-call triage; centered on a knowledge-precipitation flywheel — post-mortem ground-truth root causes, misjudgment feedback and investigation traces flow back to continuously grow failure-pattern / case knowledge bases that feed the Agent. Currently in V1 development, collecting initial failure-base data',
          ],
        },
        right: null,
      },
      {
        period: '2022 - 2024',
        left: {
          title: 'University of Pennsylvania',
          subtitle: 'M.S. in Data Science',
          period: 'Aug 2022 – May 2024',
          location: 'Philadelphia, PA',
          achievements: [
            'GPA: 3.93/4.0',
            'TA: MUSA550 - Geospatial Data Science in Python',
            'Research Assistant at the Weitzman School of Design — geospatial data processing & analysis',
            'Core courses: Databases & Information Systems, Big Data Analytics, Deep Learning, Applied Machine Learning, Internet & Web Systems',
          ],
        },
        right: {
          title: 'Souscout',
          subtitle: 'Data Engineer Intern',
          period: 'May 2023 – Aug 2023',
          location: 'New York, NY',
          achievements: [
            'Scraped football data with Selenium; cut runtime by 60% via multiprocessing',
            'Designed player entity-matching logic using feature vectors, rules and similarity scoring',
            'Applied the OpenAI API to filter weak matches and produce high-quality player mapping data',
          ],
        },
      },
      {
        period: '2018 - 2022',
        left: {
          title: 'ShanghaiTech University',
          subtitle: 'B.S. in Computer Science',
          period: 'Sep 2018 – Jul 2022',
          location: 'Shanghai',
          achievements: [
            'GPA: 3.7/4.0',
            'Outstanding Student, Merit Student, Outstanding Graduate',
            'Varsity football starting striker, Golden Boot',
            'Core courses: Data Structures & Algorithms, Linear Algebra, Operating Systems, Computer Vision, Computer Architecture, Artificial Intelligence',
          ],
        },
        right: [
          {
            title: 'Orka',
            subtitle: 'Software Engineer Intern',
            period: 'Feb 2022 – Jun 2022',
            location: 'Shanghai',
            achievements: [
              'Developed and maintained the company website backend with Django REST framework and React',
              'Built RESTful APIs with Django / PostgreSQL',
              'Used Celery for multiple backend tasks, cutting response time by 50%',
            ],
          },
          {
            title: 'Deloitte',
            subtitle: 'Data Scientist Intern',
            period: 'Aug 2021 – Nov 2021',
            location: 'Shanghai',
            achievements: [
              'Worked on an automated enterprise risk-assessment query system',
              'Predicted financial risk with Logistic Regression, Decision Tree and XGBoost',
              'Auto-generated reports with python-docx, saving 20 hours per quarter',
            ],
          },
          {
            title: 'Zhongyuan Securities',
            subtitle: 'Financial Analyst Intern',
            period: 'Feb 2021 – Apr 2021',
            location: 'Henan',
            achievements: [
              'Participated in the IPO project of Zhengzhou Mingyang Window Decoration Materials Co.',
              'Prepared the prospectus and other required materials',
            ],
          },
        ],
      },
    ],
    indieProducts: [
      {
        title: 'ReadyToGo · Packing Assistant',
        description:
          "A fully offline iOS travel-packing checklist app. It asks once who you are, where you're going and what for, then gives you a checklist you can tick off directly. Eight horizontally-swiping pickers (documents / clothing / toiletries / electronics / meds …), with the clothing subsystem supporting quantities and gender differences; trips auto-archive on return and past trips can be reused in one tap. No account, no cloud sync, no network requests — all data lives in local SQLite.",
        metrics: 'Live on the App Store · Fully offline · No ads, no sign-up',
        tags: ['React Native', 'Expo SDK 54', 'TypeScript', 'SQLite', 'Zustand', 'iOS'],
        images: ['/intro_to_me/images/小包.png'],
        link: 'https://apps.apple.com/us/app/%E5%B0%8F%E5%8C%85-%E8%A1%8C%E6%9D%8E%E6%89%93%E5%8C%85%E6%B8%85%E5%8D%95/id6762072006',
      },
      {
        title: 'Psychometric Assessment Platform',
        description:
          'A self-designed and self-built psychometric platform offering both fun quizzes and professional assessments, with quantified scoring, dimension-distribution analysis and statistics. The platform is production-stable and ready for psychological services, education and content creators to host and promote their own scales.',
        metrics: '5,000+ users · 8,000+ assessments · ~20 DAU',
        tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
        images: ['/intro_to_me/images/心理测评2.png', '/intro_to_me/images/心理测评1.png'],
        link: 'https://knowyourself.com.cn',
      },
      {
        title: 'Xiaohongshu Fully-Automated Operations System',
        description:
          'A fully automated operations pipeline for a Xiaohongshu account built on MCP (Model Context Protocol): auto-generating image-text content, scheduling posts, interacting in comments, and funneling traffic precisely to the psychometric site — closing the loop from content creation to user conversion. Live storefront, continuously driving traffic and revenue.',
        metrics: '¥800+ cumulative sales · Fully autonomous',
        tags: ['MCP', 'AI Agent', 'Automation', 'Growth Hacking', 'Python'],
        link: 'https://www.xiaohongshu.com/shop/691ebeb8c2678f0015c613d1?instation_link=xhsdiscover%3A%2F%2Fshop_detail%3Fseller_id%3D691ebeb8c2678f0015c613d1%26general_param%3D%257B%2522source%2522%3A%2522share%2522%257D%26source%3Dshare&page_instance=3957&back_chain_id=shop_homepage_share',
      },
      {
        title: 'Polymarket Watch Bot',
        description:
          'A server-deployed scanner that periodically scans Polymarket for abnormal price orders and ultra-high-probability signals, notifying in real time via Feishu group callbacks; trades are placed after manual review to capture low-risk arbitrage opportunities.',
        metrics: '10%+ live return · Fully autonomous',
        tags: ['Python', 'Automation', 'Web3', 'Quantitative Trading'],
        images: ['/intro_to_me/images/polymarket自动扫描.jpg'],
      },
      {
        title: '"Bajie" Habit-Quitting App',
        description:
          'An iOS habit-quitting app built quickly with Vibe Coding, helping users record and overcome various addictions (phone, gaming, smoking, alcohol, etc.). Core features include quit check-ins, progress visualization and motivational reminders.',
        metrics: 'Live on the App Store',
        tags: ['iOS', 'Swift', 'Vibe Coding', 'App Store', 'Mobile'],
        images: ['/intro_to_me/images/八戒.png'],
        link: 'https://apps.apple.com/us/app/%E5%85%AB%E6%88%92-%E6%88%92%E6%96%AD%E5%8A%A9%E6%89%8B/id6757436622',
      },
    ],
    projects: [
      {
        title: 'Employee Performance Analytics Model',
        description:
          'Co-designed and independently implemented an employee performance metrics model, building the data-computation pipeline with Pandas / NumPy / SQL; involved end-to-end from database modeling and backend APIs to frontend display, producing a highly interpretable, flexibly extensible metric system. Integrated heterogeneous sources (SQL / Jira / Excel); covering extraction, cleaning/standardization, metric production, storage and visualization, with end-to-end latency kept to minutes.',
        tags: ['Python', 'Pandas', 'SQL', 'Data Analysis', 'KPI System'],
      },
      {
        title: 'Quantitative Trading Strategy & Backtesting System',
        description:
          'An end-to-end quant trading system around the CSI 300. Automatically scrapes and cleans multi-source data (quotes, financials, technical indicators) to build a feature matrix of dozens of dimensions. Uses a random-forest model for stock selection with multi-dimensional probability scoring and threshold-based signals. Built a backtesting framework on Backtrader with dynamic position sizing, slippage and transaction-cost simulation, and risk controls such as max-drawdown constraints.',
        tags: ['Python', 'Backtrader', 'Scikit-learn', 'Pandas', 'Machine Learning'],
        link: 'https://github.com/JinzeWang10/quant-learning',
      },
      {
        title: 'Food Classification Deep-Learning Model',
        description:
          'Preprocessed data with Pandas, text processing with NLTK and vectorization with a BERT tokenizer. Ran grid search on PySpark, cutting processing time by 70%. Built a CNN with PyTorch reaching 89% precision and an F1 of 0.84.',
        tags: ['PyTorch', 'CNN', 'PySpark', 'BERT', 'NLP', 'Machine Learning'],
      },
      {
        title: 'Mini-Google Search Engine',
        description:
          'Built a dynamic web server on Java Sockets with a scalable routing system, session management and exception handling, plus TLS/HTTPS for secure communication — an end-to-end implementation from protocol parsing to request handling. Designed a distributed key-value store with hybrid memory + disk persistence; implemented an RDD-like data abstraction supporting MapReduce-style distributed operators with fault recovery and horizontal scaling. Developed a distributed web crawler with large-scale crawl scheduling, URL dedup and task distribution; implemented PageRank ranking and retrieval over the crawled results, deployed end-to-end on AWS.',
        tags: ['Java', 'Distributed Systems', 'MapReduce', 'AWS', 'PageRank'],
      },
      {
        title: 'Football Trivia Web App',
        description:
          'Performed exploratory analysis on three cross-referenced datasets, designed an ER diagram and normalized tables to 3NF, stored on AWS. Wrote complex SQL queries and optimized performance via execution plans. Built a full-stack app with React and Node.js supporting search and filtering.',
        tags: ['React', 'Node.js', 'AWS', 'SQL', 'Database Design', '3NF'],
      },
      {
        title: 'Multi-Label Feature-Interaction Learning',
        description:
          'Built a high-order nonlinear multi-label learning model leveraging structured sparsity to identify meaningful feature interactions and improve generalization. Reduced overfitting via tensor decomposition and applied L21-norm regularization. Validated effectiveness on real-world datasets.',
        tags: ['Machine Learning', 'Feature Engineering', 'Structured Sparsity', 'Research'],
      },
      {
        title: 'Distributed Monitoring System',
        description:
          'Built a distributed monitoring system with Python, SNMP, Kafka and Flask, providing alert handling, performance analysis and real-time data querying.',
        tags: ['Python', 'Kafka', 'Flask', 'SNMP', 'Monitoring'],
      },
      {
        title: 'Uber Data Pipeline',
        description:
          'Built an end-to-end data pipeline for Uber trip data: raw data in GCP Storage, a Compute Engine VM running Mage for transformation (connected via SSH), processed data loaded into BigQuery, and an analytics dashboard in Looker Studio.',
        tags: ['GCP', 'Google Compute Engine', 'Mage', 'BigQuery', 'Looker Studio', 'ETL'],
      },
      {
        title: 'Automated ETL Data Pipeline',
        description:
          'Developed an automated ETL pipeline across heterogeneous systems for extraction, cleaning, metric computation and visualization, re-architecting the underlying data model to resolve cross-system consistency issues.',
        tags: ['ETL', 'Python', 'Data Engineering', 'SQL'],
      },
      {
        title: 'Enterprise Risk Assessment System',
        description:
          'Scraped financial data with Selenium, predicted financial risk with Logistic Regression, Decision Tree and XGBoost, and auto-generated reports with python-docx.',
        tags: ['Machine Learning', 'XGBoost', 'Selenium', 'Automation'],
      },
    ],
  },
};

// ============================================================
// 界面文案
// ============================================================

export const ui: Record<Lang, UIStrings> = {
  zh: {
    nav: {
      about: '关于',
      products: '产品',
      experience: '经历',
      projects: '项目',
      contact: '联系',
    },
    hero: {
      namePrimary: '王金泽',
      nameSecondary: 'JINZE WANG',
      role: 'Forward Deployed Engineer — 独立开发者 — Builder',
      oneLiner: '听懂业务问题，用工程 + AI 把它端到端落地成有人用的产品。',
    },
    viewProject: '查看项目',
    viewShots: '查看截图',
    hideShots: '收起截图',
    screenshot: '截图',
    contactHeadline: '聊聊.',
    contactByline: ['坐标北京', '远程可'],
    langToggle: 'EN',
    resumeLabel: '下载简历',
    resumeUrl: '/intro_to_me/Jinze-Wang-Resume-CN.pdf',
    phoneNote: '手机 / 微信',
  },
  en: {
    nav: {
      about: 'About',
      products: 'Products',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      namePrimary: 'Jinze Wang',
      nameSecondary: '王金泽',
      role: 'Forward Deployed Engineer — Indie Developer — Builder',
      oneLiner: 'Understand the real business problem; use engineering + AI to ship it end-to-end into a product people actually use.',
    },
    viewProject: 'View',
    viewShots: 'View screenshots',
    hideShots: 'Hide screenshots',
    screenshot: 'screenshot',
    contactHeadline: "Let's talk.",
    contactByline: ['Based in Beijing', 'Open to remote'],
    langToggle: '中',
    resumeLabel: 'Download Résumé',
    resumeUrl: '/intro_to_me/Jinze-Wang-Resume-EN.pdf',
    phoneNote: 'Phone / WeChat',
  },
};
