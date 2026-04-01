/**
 * ============================================================
 *  个人网站内容数据文件
 *  所有页面内容都在这里，直接编辑此文件即可更新网站内容
 * ============================================================
 */

import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

// ============================================================
// About（关于我）
// ============================================================

export const aboutIntro = {
  paragraph1: '你好，我是王金泽（Jinze Wang）。24 年毕业于宾夕法尼亚大学，数据科学硕士，目前从事数据工程师工作。对我来说，技术是杠杆，驱动我前进的是创造价值、解决问题、推动事情向前发展的成就感。',
  paragraph2: '享受通过数据分析与第一性原理洞察问题，通过各种技术寻找解决方案，寻找各种途径将方案落地的全过程。热爱足球、羽毛球。',
  photo: './images/wjz1.jpg',
};

export const activities = [
  {
    title: '学习者',
    description: '始终保持好奇心，喜欢搞清楚事物运行的底层逻辑。',
  },
  {
    title: '思考者',
    description: '习惯质疑假设，追问：有没有更好的方案？这个方案为什么重要？',
  },
  {
    title: '创造者',
    description: '享受从零到一的过程——通过实验、迭代和创新，把想法变成现实。',
  },
];

export const values = [
  '持续追问，找到更好的解法',
  '想得更深 > 干得更多',
  '真实的落地效果比理论上的优雅更重要',
];

// ============================================================
// Experience（经历）
// ============================================================

export const timelinePeriods = [
  {
    period: '2024 - 至今',
    left: {
      title: 'PICC',
      subtitle: '数据工程师（全职）',
      period: '2024.08 – 至今',
      location: '北京',
      achievements: [
        '管理内部 KPI 平台，负责需求分析、跨团队协调和项目执行',
        '使用 Pandas 构建员工绩效模型，参与数据库和前端设计',
        '开发跨异构系统的自动化 ETL 管道',
        '使用 Python、SNMP、Kafka 和 Flask 构建分布式监控系统',
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
        'GPA: 3.95/4.0',
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
        achievements: [
          '参与郑州名扬窗饰材料有限公司 IPO 项目',
          '负责准备招股说明书等必要材料',
        ],
      },
    ],
  },
];

// ============================================================
// Indie Products（独立产品）
// ============================================================

export const indieProducts = [
  {
    title: '心理量表测评平台',
    description:
      '自主设计并开发的趣味心理测评平台，提供趣味测试与专业心理测评，支持量化测评、维度分布分析与数据统计。平台已具备产品级稳定性，可直接用于心理服务、教育、内容创作者的量表挂载与推广。',
    metrics: '总用户 5,000+ · 累计测评 8,000+ 次 · 日活 ~20',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    images: ['./images/心理测评2.png', './images/心理测评1.png'],
    link: 'https://knowyourself.com.cn',
  },
  {
    title: '小红书全自动化运营系统',
    description:
      '基于 MCP（Model Context Protocol）构建小红书账号全自动运营流水线：自动生成图文内容、定时发帖、评论互动，将流量精准引导至心理测评网站，实现从内容创作到用户转化的闭环。已上线小红书店铺并持续引流变现。',
    metrics: '日均盈利 ¥5 · 累计盈利 ¥300+ · 全自动运行',
    tags: ['MCP', 'AI Agent', 'Automation', 'Growth Hacking', 'Python'],
    link: 'https://www.xiaohongshu.com/shop/691ebeb8c2678f0015c613d1?instation_link=xhsdiscover%3A%2F%2Fshop_detail%3Fseller_id%3D691ebeb8c2678f0015c613d1%26general_param%3D%257B%2522source%2522%3A%2522share%2522%257D%26source%3Dshare&page_instance=3957&back_chain_id=shop_homepage_share',
  },
  {
    title: 'Polymarket 盯盘机器人',
    description:
      '在服务器上部署自动扫描程序，定时扫描 Polymarket 市场中的异常价格挂单信号与超高概率信号，通过飞书群回调实时通知，人工研判后进行交易，捕获低风险套利机会。',
    metrics: '实盘收益率 10%+ · 全自动运行',
    tags: ['Python', 'Automation', 'Web3', 'Quantitative Trading'],
    images: ['./images/polymarket自动扫描.jpg'],
  },
  {
    title: '「八戒」戒断 App',
    description:
      '使用 Vibe Coding 方式快速搭建的 iOS 戒断类应用，帮助用户记录并克服各类成瘾习惯（手机、游戏、烟酒等）。支持戒断打卡、进度可视化、激励提醒等核心功能。',
    metrics: '软著申请中 · App Store 审核中',
    tags: ['iOS', 'Swift', 'Vibe Coding', 'App Store', 'Mobile'],
    images: ['./images/八戒app宣传.png'],
  },
];

// ============================================================
// Projects（工作 & 学术项目）
// ============================================================

export const projects = [
  {
    title: '员工绩效分析模型',
    description:
      '参与设计并独立实现员工绩效度量模型，使用 Pandas / NumPy / SQL 构建数据计算链路；从 数据库建模、后端接口到前端展示全流程深度参与，实现可解释性强、可灵活扩展的指标体系。对接 多源异构系统（OA、考勤、业务系统）；覆盖数据抽取、清洗标准化、指标生产、存储、可视化输出，全流程延迟控制在分钟级。',
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
];

// ============================================================
// Skills（技能）
// ============================================================

export const technicalSkills = [
  {
    category: 'Data Scraping',
    skills: ['Selenium', 'BeautifulSoup', '多线程爬取', 'API & 异构数据源采集'],
  },
  {
    category: 'Data Manipulation',
    skills: ['SQL', 'Pandas', 'Spark'],
  },
  {
    category: 'Machine Learning',
    skills: ['Scikit-learn', 'PyTorch', 'PySpark MLlib'],
  },
  {
    category: 'Database Management',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
];

export const softSkills = [
  { name: '快速学习' },
  { name: '跨团队协作' },
  { name: '问题解决能力' },
  { name: '创新思维' },
  { name: '执行力' },
  { name: '抗压能力' },
];

export const skillsQuote = {
  text: '"I think it\'s important to reason from first principles rather than by analogy."',
  author: 'Elon Musk',
};

// ============================================================
// Contact（联系方式）
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
