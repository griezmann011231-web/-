const startDate = new Date("2026-05-25T00:00:00");
const storageKeys = {
  weeks: "fudan308.completedWeeks",
  knowledge: "fudan308.masteredKnowledge",
  note: "fudan308.wrongNote",
};

const sources = [
  {
    title: "复旦护理学院 308 护理综合考试科目及参考大纲",
    url: "https://nursing.fudan.edu.cn/a0/84/c38876a696452/page.htm",
    points: [
      "科目代码 308，科目名称护理综合。",
      "总分 300 分，护理学基础、内科护理学、外科护理学各 100 分。",
      "题型包括单项选择、多项选择、病例分析问答。",
      "参考教材列明护理学导论、基础护理学、内科护理学、外科护理学的人卫版教材。",
    ],
  },
  {
    title: "复旦大学研究生招生网 2026 年复试细则汇总",
    url: "https://gsao.fudan.edu.cn/ca/0d/c39215a772621/page.htm",
    points: [
      "院系代码 117 对应护理学院，并给出护理学院复试细则链接。",
      "正式报考和复试阶段应以研究生招生网的当年公告为准。",
    ],
  },
  {
    title: "复旦护理学院 2026 年推免生招生预报名通知",
    url: "https://nursing.fudan.edu.cn/5b/f4/c38876a744436/page.htm",
    points: [
      "学院介绍中说明复旦护理教育始于 1920 年。",
      "学院拥有临床教学实践基地、专科护理培训基地和证据应用基地等资源。",
    ],
  },
  {
    title: "复旦大学 2026 年硕士复试基本要求页面",
    url: "https://gsao.fudan.edu.cn/c8/9f/c15014a772255/page.htm",
    points: [
      "分数线与复试要求会按年度更新。",
      "本网页不写死分数线，避免使用过期阈值误导备考。",
    ],
  },
];

const examParts = [
  {
    name: "护理学基础",
    score: "100 分",
    detail: "护理学导论约 30%，基础护理学约 70%。",
    points: [
      "护理基本概念、护士角色、护理程序、护理诊断与目标。",
      "护患沟通、常用理论、Orem 自理理论、Roy 适应模式。",
      "院感、无菌隔离、生命体征、给药、输液输血、危重与临终护理。",
    ],
  },
  {
    name: "内科护理学",
    score: "100 分",
    detail: "按系统复习，重点是常见病病例判断与护理措施。",
    points: [
      "呼吸、循环、消化、泌尿、血液、内分泌、神经等系统。",
      "每种病用同一框架背：病因机制、表现、检查、诊断、治疗、护理、健康指导。",
      "特别注意常见并发症、病情监测重点、常用药副作用。",
    ],
  },
  {
    name: "外科护理学",
    score: "100 分",
    detail: "总论加各系统外科疾病，重点是围手术期和并发症处理。",
    points: [
      "消毒灭菌、麻醉、手术室、术前术后、休克、营养、感染、烧伤。",
      "甲状腺、乳房、腹部、肝胆胰、血管、颅脑、胸部、泌尿、骨科。",
      "病例题要能写出优先护理问题、观察重点和具体护理计划。",
    ],
  },
];

const weeks = [
  {
    phase: "定位",
    focus: "大纲定位与基线测评",
    tasks: [
      "通读 308 大纲，建立三科目录表，标出不会的章节。",
      "用 90 分钟做一套基础摸底题，不追求分数，只记录空白点。",
      "整理四本教材目录，把每章对应到基础、内科、外科三张表。",
    ],
    output: "完成个人大纲地图和第一版错题分类。",
  },
  {
    phase: "定位",
    focus: "护理学导论：概念、角色、护理程序",
    tasks: [
      "背清健康、疾病、护理、整体护理、专业护士角色等核心概念。",
      "用“评估-诊断-计划-实施-评价”复述护理程序。",
      "练 30 道护理程序和护理诊断单选/多选。",
    ],
    output: "能独立写出护理诊断的陈述方式和目标写法。",
  },
  {
    phase: "定位",
    focus: "护患沟通与护理理论",
    tasks: [
      "整理护患关系模式、分期、沟通层次和常见沟通错误。",
      "对比 Maslow、心理社会发展理论、压力理论、Orem、Roy。",
      "用一个慢病患者案例练“沟通问题+护理措施”。",
    ],
    output: "完成一页理论对比表和一题沟通病例答案。",
  },
  {
    phase: "基础",
    focus: "院感、无菌、隔离、出入院与安全",
    tasks: [
      "背医院感染分类、防控、消毒灭菌、无菌操作原则。",
      "整理隔离种类、职业暴露预防、病人安全风险。",
      "练习无菌技术、隔离技术、出入院护理的易混题。",
    ],
    output: "能把院感题按“感染源-传播途径-易感人群-防控”拆解。",
  },
  {
    phase: "基础",
    focus: "生命体征、氧疗、冷热疗法、饮食与排泄",
    tasks: [
      "掌握体温、脉搏、呼吸、血压的正常范围、异常表现和护理。",
      "整理缺氧分类、氧疗适应证、吸痰注意事项与并发症预防。",
      "复习冷热疗法、医院饮食、导尿、留置导尿和灌肠护理。",
    ],
    output: "完成生命体征异常处理表和氧疗/吸痰错题 40 道。",
  },
  {
    phase: "基础",
    focus: "给药、输液输血、标本、危重与临终护理",
    tasks: [
      "背给药原则、注射法、药物过敏试验和青霉素过敏处理。",
      "整理输液反应、输血反应、标本采集注意事项。",
      "复习洗胃、危重患者观察、临终护理、医疗护理文件原则。",
    ],
    output: "能用表格区分输液反应和输血反应。",
  },
  {
    phase: "内科",
    focus: "呼吸系统一：感染、支扩、肺结核",
    tasks: [
      "按病原/诱因、临床表现、检查、治疗、护理复习肺炎和肺脓肿。",
      "整理支气管扩张咯血护理和肺结核隔离、用药、健康指导。",
      "做 60 道呼吸系统选择题，错题按疾病归档。",
    ],
    output: "完成呼吸感染类疾病对比表。",
  },
  {
    phase: "内科",
    focus: "呼吸系统二：COPD、哮喘、肺心病、肺栓塞、呼衰",
    tasks: [
      "把 COPD、哮喘、肺心病的诱因、表现、急性加重护理分开背。",
      "掌握肺血栓栓塞、肺癌、呼吸衰竭和 ARDS 的判断线索。",
      "整理机械通气适应证、禁忌证、参数、并发症和撤机护理。",
    ],
    output: "完成 2 道呼吸衰竭/机械通气病例题。",
  },
  {
    phase: "内科",
    focus: "循环系统一：心衰、心律失常、心脏骤停、瓣膜病",
    tasks: [
      "背左心衰、右心衰、急性心衰表现和护理优先级。",
      "整理常见心律失常表现、危险信号和心电监护护理。",
      "复习心脏骤停处理、复苏后护理和瓣膜病护理。",
    ],
    output: "完成心衰护理措施清单和心律失常易混表。",
  },
  {
    phase: "内科",
    focus: "循环系统二：冠心病、高血压、心肌炎、介入护理",
    tasks: [
      "对比心绞痛与心肌梗死，重点背胸痛特点、检查、并发症、护理。",
      "整理高血压危险因素、分级、用药观察与健康教育。",
      "复习起搏、电复律、心导管、射频消融、冠脉介入护理。",
    ],
    output: "完成 1 道急性心梗病例分析。",
  },
  {
    phase: "内科",
    focus: "消化系统一：胃炎、溃疡、IBD、肝硬化",
    tasks: [
      "复习胃炎、消化性溃疡、溃疡性结肠炎、克罗恩病。",
      "掌握肝硬化失代偿表现、并发症、饮食与腹水护理。",
      "整理肝性脑病诱因、分期、护理和健康指导。",
    ],
    output: "完成肝硬化并发症护理表。",
  },
  {
    phase: "内科",
    focus: "消化系统二：胰腺炎、上消化道出血、内镜与穿刺护理",
    tasks: [
      "背急性胰腺炎病因、表现、禁食胃肠减压、疼痛与并发症护理。",
      "掌握上消化道大出血休克观察、止血、输血和再出血预防。",
      "复习腹腔穿刺、胃肠镜、肝穿刺的术前术后护理。",
    ],
    output: "完成 1 道上消化道出血病例题。",
  },
  {
    phase: "内科",
    focus: "泌尿系统：肾小球、肾病、尿感、AKI/CKD、透析",
    tasks: [
      "按水肿、蛋白尿、血尿、高血压、肾功能异常整理肾病线索。",
      "复习急慢性肾损伤、尿路感染、肾病综合征的护理。",
      "掌握血液透析、腹膜透析的适应证、并发症和护理要点。",
    ],
    output: "完成透析护理与肾病综合征错题 60 道。",
  },
  {
    phase: "内科",
    focus: "血液系统：贫血、出血、白血病、淋巴瘤、移植",
    tasks: [
      "对比缺铁性贫血、再障、白血病的表现、检查和护理。",
      "整理 ITP、过敏性紫癜、血友病、DIC 的出血特点和护理。",
      "复习造血干细胞移植、骨髓穿刺术的护理。",
    ],
    output: "完成血液系统疾病鉴别表。",
  },
  {
    phase: "内科",
    focus: "内分泌、风湿、传染病",
    tasks: [
      "复习糖尿病、低血糖、酮症酸中毒、高渗状态的识别和护理。",
      "整理甲状腺功能异常、系统性红斑狼疮、类风湿的护理重点。",
      "把病毒性肝炎、艾滋病、流行性乙脑等按隔离和健康教育复习。",
    ],
    output: "完成内分泌急症和传染病隔离表。",
  },
  {
    phase: "内科",
    focus: "神经系统与内科二轮小测",
    tasks: [
      "复习脑梗死、脑出血、蛛网膜下腔出血、TIA 的区别。",
      "掌握癫痫、帕金森、重症肌无力、腰穿、脑血管介入护理。",
      "做一套内科 100 分模拟，按系统统计失分。",
    ],
    output: "完成内科一轮总错题清单。",
  },
  {
    phase: "外科",
    focus: "外科总论：水电酸碱、休克、麻醉、手术室、围手术期",
    tasks: [
      "整理水电解质酸碱失衡的表现、处理和护理观察。",
      "掌握外科休克、麻醉前后、手术室无菌管理。",
      "背术前评估、术后一般护理和常见并发症预防处理。",
    ],
    output: "完成围手术期护理流程图。",
  },
  {
    phase: "外科",
    focus: "外科营养、感染、烧伤、甲状腺、乳房",
    tasks: [
      "对比肠内营养和肠外营养适应证、并发症和护理。",
      "复习外科感染、破伤风、烧伤面积/深度评估与补液护理。",
      "掌握甲亢围手术期、甲状腺术后并发症、乳腺疾病护理。",
    ],
    output: "完成烧伤和甲状腺术后并发症表。",
  },
  {
    phase: "外科",
    focus: "普通外科腹部：腹膜炎、疝、腹部损伤、胃十二指肠",
    tasks: [
      "复习急性化脓性腹膜炎、腹外疝、腹部损伤判断与护理。",
      "掌握溃疡病、胃癌术前术后护理和并发症观察。",
      "做 50 道普外腹部选择题。",
    ],
    output: "完成急腹症护理问题列表。",
  },
  {
    phase: "外科",
    focus: "肠道、阑尾、大肠肛管、肝胆胰",
    tasks: [
      "复习肠梗阻、肠瘘、急性阑尾炎和特殊阑尾炎。",
      "整理痔、肛瘘、肛裂、直肠肛管脓肿、大肠癌护理。",
      "掌握肝癌术后、TACE、胆石症、胆管炎、胰腺癌护理。",
    ],
    output: "完成肠梗阻和胆道感染病例题各 1 道。",
  },
  {
    phase: "外科",
    focus: "血管、颅脑、胸部、肺癌、食管癌",
    tasks: [
      "复习下肢深静脉血栓、静脉曲张、血栓闭塞性脉管炎。",
      "掌握颅内压增高、颅脑损伤、肋骨骨折、气胸、血胸护理。",
      "复习肺癌和食管癌围手术期护理。",
    ],
    output: "完成气胸/血胸和颅脑损伤护理对比表。",
  },
  {
    phase: "外科",
    focus: "泌尿外科与骨科",
    tasks: [
      "复习肾、膀胱、尿道损伤，尿石症，前列腺增生，肾癌，膀胱癌。",
      "掌握骨折、脱位、脊髓损伤、腰椎间盘突出、骨关节感染、骨肿瘤。",
      "做一套外科 100 分模拟，统计失分章节。",
    ],
    output: "完成外科一轮总错题清单。",
  },
  {
    phase: "整合",
    focus: "一轮总复盘：三科知识树",
    tasks: [
      "把基础、内科、外科错题按高频/中频/偶发分层。",
      "每科写一张 A3 知识树，标出病例题常考入口。",
      "重做所有红色错题，只保留仍不会的题进入二轮。",
    ],
    output: "形成二轮 20 个最薄弱知识点名单。",
  },
  {
    phase: "整合",
    focus: "病例分析模板周",
    tasks: [
      "每天写 2 道病例题，严格用“评估-诊断-目标-措施-依据-评价”。",
      "基础病例侧重护理程序，内科病例侧重病情判断，外科病例侧重并发症和围手术期。",
      "把答案改成条目式，避免大段叙述。",
    ],
    output: "完成 12 道病例分析标准答案。",
  },
  {
    phase: "整合",
    focus: "选择题专项：单选速度与多选陷阱",
    tasks: [
      "单选按 45 题 45 分钟训练，目标正确率 80% 以上。",
      "多选按 20 题训练，专门记录漏选、多选和绝对化选项。",
      "把易混概念做成正误判断卡。",
    ],
    output: "选择题错因统计：知识、审题、陷阱、速度。",
  },
  {
    phase: "模拟",
    focus: "整卷模拟 1-3 套",
    tasks: [
      "每套严格 3 小时，先选题后病例，留 35-45 分钟写问答。",
      "考后当天只做错题定位，不马上大量翻书。",
      "第二天回教材补对应章节，重做同类题。",
    ],
    output: "完成三套模拟的分数曲线和失分雷达图。",
  },
  {
    phase: "模拟",
    focus: "整卷模拟 4-6 套与查漏补缺",
    tasks: [
      "继续 3 套整卷模拟，目标是稳定时间分配和基础题正确率。",
      "每套找出 5 个仍然混乱的知识点，当晚整理成短卡片。",
      "病例题重点改“措施是否具体、优先级是否合理”。",
    ],
    output: "完成最终薄弱点 15 项清单。",
  },
  {
    phase: "冲刺",
    focus: "高危专题：急危重、并发症、呼吸循环、内分泌急症",
    tasks: [
      "集中背休克、呼衰、心梗、上消化道出血、DKA、术后并发症。",
      "每个专题写出观察指标、紧急处理、护理措施、健康教育。",
      "每天 90 道选择题加 1 道病例题。",
    ],
    output: "完成高危专题速查表。",
  },
  {
    phase: "冲刺",
    focus: "三科 100 个高频问答",
    tasks: [
      "基础、内科、外科各整理 30-35 个高频问答。",
      "每天口头复述 20 个，不会的立即回教材定位。",
      "做一套轻量模拟，保持手感，不再开新资料。",
    ],
    output: "形成考前背诵清单。",
  },
  {
    phase: "冲刺",
    focus: "考前稳定：错题回看、作息和答题顺序",
    tasks: [
      "只看错题本、知识树和高频问答，不再追求新题量。",
      "最后做 1 套整卷模拟，确认时间分配。",
      "固定考场策略：先稳选择题，再用模板写病例题。",
    ],
    output: "完成考前 48 小时清单和个人答题顺序。",
  },
];

const phases = [
  { name: "定位", weeks: "1-3 周", text: "读大纲、建目录、找薄弱点。" },
  { name: "基础", weeks: "4-6 周", text: "拿下护理学基础的高频操作和概念。" },
  { name: "内科", weeks: "7-16 周", text: "按系统建立疾病护理框架。" },
  { name: "外科", weeks: "17-22 周", text: "围手术期、总论和各系统外科病种。" },
  { name: "整合", weeks: "23-25 周", text: "病例模板、错题分层、选择题专项。" },
  { name: "模拟冲刺", weeks: "26-30 周", text: "整卷模拟、高危专题和考前稳定。" },
];

const knowledgeItems = [
  {
    category: "基础",
    title: "护理学导论与护理程序",
    tags: ["概念", "护理诊断", "护理目标"],
    framework:
      "先背核心概念：健康、疾病、护理、整体护理、专业护士角色。护理程序固定为评估、诊断、计划、实施、评价；护理诊断要包含问题、相关因素、症状体征，目标要具体、可测量、有时间限制。",
    highYield: [
      "护理诊断和医疗诊断的区别。",
      "护理目标的主语通常是患者，避免写成护士要做什么。",
      "病例题先从评估资料中提取异常，再对应护理问题。",
    ],
    drills: "每天用 1 个病例练习从主诉、生命体征、检查结果中列出 3 个护理诊断。",
  },
  {
    category: "基础",
    title: "护患关系、沟通与护理理论",
    tags: ["沟通", "Maslow", "Orem", "Roy"],
    framework:
      "护患关系按建立、工作、结束阶段复习；沟通包括语言、非语言、倾听、共情、反馈。理论部分把 Maslow 需要层次、心理社会发展、压力理论、Orem 自理理论、Roy 适应模式做成对比表。",
    highYield: [
      "有效沟通强调开放式提问、澄清、复述、情感回应。",
      "常见错误包括打断、过早建议、否定患者感受、使用专业术语过多。",
      "Orem 常考自理缺陷和护理系统，Roy 常考适应方式。",
    ],
    drills: "把一句生硬宣教改写成共情式表达，再写出对应护理措施。",
  },
  {
    category: "基础",
    title: "院感、消毒灭菌、无菌与隔离",
    tags: ["医院感染", "无菌", "职业暴露"],
    framework:
      "医院感染按感染源、传播途径、易感人群、防控措施记。消毒和灭菌要区分概念、适用物品和常见方法；无菌操作要背操作前、中、后的原则；隔离技术要能对应疾病传播方式。",
    highYield: [
      "无菌物品一经污染或疑似污染即不可使用。",
      "职业暴露题常考针刺伤后的即时处理和上报流程。",
      "隔离题要先判断空气、飞沫、接触还是血液体液传播。",
    ],
    drills: "用表格对比清洁、消毒、灭菌和无菌技术的适用场景。",
  },
  {
    category: "基础",
    title: "生命体征、氧疗、吸痰与冷热疗法",
    tags: ["体温", "血压", "氧疗", "吸痰"],
    framework:
      "生命体征要同时掌握正常范围、影响因素、测量注意、异常表现和护理。氧疗先判断缺氧类型和适应证，再写流量、浓度、湿化、管道安全；吸痰强调无菌、负压、时间和缺氧观察。",
    highYield: [
      "慢性阻塞性肺疾病伴二氧化碳潴留通常强调低流量持续吸氧。",
      "吸痰前后观察 SpO2、心率、面色、痰液性状。",
      "冷热疗法禁忌部位和时间限制容易出多选题。",
    ],
    drills: "做氧疗和吸痰各 20 道题，错题标出是适应证、操作还是并发症。",
  },
  {
    category: "基础",
    title: "给药、过敏试验、输液输血与标本",
    tags: ["三查七对", "青霉素", "输血反应"],
    framework:
      "给药以三查七对、给药途径和药效影响因素为主线。过敏试验重点背青霉素阳性判断、过敏性休克表现和抢救。输液输血要分清反应类型、先停什么、保留什么、通知谁、观察什么。",
    highYield: [
      "输血前双人核对，输血中先慢后快，严密观察前 15 分钟。",
      "发热反应、过敏反应、溶血反应、循环负荷过重的表现不同。",
      "血、尿、便、痰、咽拭子标本要记采集时机和污染避免。",
    ],
    drills: "把输液反应和输血反应用“表现-处理-预防”三列表背熟。",
  },
  {
    category: "基础",
    title: "饮食、排泄、危重抢救、临终与文书",
    tags: ["导尿", "灌肠", "洗胃", "护理文件"],
    framework:
      "饮食按基本饮食、治疗饮食、试验饮食和特殊饮食区分；排泄掌握导尿、留置导尿、灌肠护理。危重护理重点是病情观察、抢救配合、洗胃适应证禁忌证。文书强调客观、及时、准确、完整。",
    highYield: [
      "留置导尿重点防感染、保持引流通畅、观察尿量和颜色。",
      "洗胃题常考禁忌证、常用溶液和并发症。",
      "护理记录不能随意涂改，抢救记录要补记并注明时间。",
    ],
    drills: "用 10 分钟写一题危重患者护理观察要点，训练条目化表达。",
  },
  {
    category: "内科",
    title: "呼吸系统：感染、COPD、哮喘、肺结核、呼衰",
    tags: ["COPD", "哮喘", "肺结核", "机械通气"],
    framework:
      "呼吸系统按症状体征、通气/换气障碍、感染控制、氧疗和气道管理复习。肺炎看病原和感染表现；COPD 看慢性咳痰喘、急性加重和低流量吸氧；哮喘看诱因、发作、支气管舒张剂；呼衰看血气和机械通气。",
    highYield: [
      "咯血护理、窒息预防、体位引流和痰液观察常被组合考。",
      "肺结核重点是隔离、规律全程联合用药、药物副作用观察。",
      "机械通气护理要写管道固定、气道湿化、VAP 预防、撤机观察。",
    ],
    drills: "每个疾病用 6 行写完：诱因、表现、检查、治疗、护理、健康指导。",
  },
  {
    category: "内科",
    title: "循环系统：心衰、心梗、高血压、心律失常",
    tags: ["心衰", "心肌梗死", "高血压", "电复律"],
    framework:
      "循环系统先抓胸痛、呼吸困难、水肿、心律改变和血压异常。心衰按左/右/急性区分；心梗按胸痛、心电图、心肌标志物和并发症复习；高血压按危险因素、分级、用药与健康指导复习。",
    highYield: [
      "急性左心衰护理优先半卧位、吸氧、镇静、利尿、扩血管及严密观察。",
      "心梗病例题要关注疼痛、心律失常、休克、心衰和再灌注护理。",
      "介入术后观察穿刺点、肢体循环、出血和造影剂相关问题。",
    ],
    drills: "每天口述一个胸痛病例的评估和优先护理措施。",
  },
  {
    category: "内科",
    title: "消化系统：溃疡、肝硬化、肝性脑病、胰腺炎、消化道出血",
    tags: ["肝硬化", "出血", "胰腺炎"],
    framework:
      "消化系统按疼痛部位、出血、腹水、黄疸、营养和意识改变复习。溃疡看节律性疼痛和并发症；肝硬化看门脉高压和肝功能减退；胰腺炎看腹痛、淀粉酶、禁食胃肠减压；消化道出血看休克和再出血。",
    highYield: [
      "上消化道出血先评估循环状态，观察呕血黑便、血压脉搏和尿量。",
      "肝性脑病要避免诱因，限制蛋白要结合病情阶段。",
      "急性胰腺炎护理强调禁食、胃肠减压、疼痛、液体、并发症观察。",
    ],
    drills: "写 1 题肝硬化腹水护理和 1 题上消化道出血抢救配合。",
  },
  {
    category: "内科",
    title: "泌尿系统：肾炎、肾病综合征、尿感、AKI/CKD、透析",
    tags: ["蛋白尿", "水肿", "透析"],
    framework:
      "泌尿系统抓水肿、血尿、蛋白尿、高血压、尿量和肌酐。肾病综合征重点是大量蛋白尿、低蛋白血症、水肿、高脂血症；AKI/CKD 要能写液体、饮食、感染、电解质和透析护理。",
    highYield: [
      "透析护理常考血管通路、低血压、失衡综合征、感染预防。",
      "尿路感染健康教育重点饮水、排尿、会阴清洁和疗程依从性。",
      "肾病饮食题要结合蛋白、钠、水、钾、磷限制。",
    ],
    drills: "用一张表区分急性肾炎、慢性肾炎、肾病综合征和尿路感染。",
  },
  {
    category: "内科",
    title: "血液、内分泌、风湿与传染病",
    tags: ["贫血", "白血病", "糖尿病", "隔离"],
    framework:
      "血液病抓贫血、出血、感染三条线；内分泌重点糖尿病急慢性并发症和甲状腺功能异常；风湿免疫关注疼痛、皮肤黏膜、肾损害和用药；传染病按病原、传播途径、隔离和健康教育复习。",
    highYield: [
      "白血病护理重点防感染、防出血、化疗反应和心理支持。",
      "糖尿病题常考低血糖、酮症酸中毒、足部护理、胰岛素使用。",
      "病毒性肝炎、艾滋病等要把隔离措施和职业防护写清楚。",
    ],
    drills: "把糖尿病急症做成“诱因-表现-处理-护理”卡片。",
  },
  {
    category: "内科",
    title: "神经系统：脑血管病、癫痫、帕金森、重症肌无力",
    tags: ["脑梗死", "脑出血", "癫痫", "腰穿"],
    framework:
      "神经系统先判断意识、瞳孔、肌力、语言、吞咽和颅压。脑血管病要区分 TIA、脑梗死、脑出血、蛛网膜下腔出血；癫痫重点发作期安全和用药；帕金森看运动症状和生活护理。",
    highYield: [
      "脑出血急性期重点卧床、降颅压、血压管理和再出血观察。",
      "癫痫发作时保护安全，不强行撬口，不强压肢体。",
      "腰穿术后护理、脑血管介入护理和吞咽误吸预防常考。",
    ],
    drills: "练 2 道脑卒中病例，分别写急性期观察和康复期健康指导。",
  },
  {
    category: "外科",
    title: "外科总论：水电酸碱、休克、麻醉、围手术期",
    tags: ["休克", "麻醉", "术前", "术后"],
    framework:
      "外科总论是外科病例题底盘。水电酸碱抓表现和监测；休克抓微循环、补液、血压、尿量和意识；麻醉抓术前评估、术后苏醒和并发症；围手术期抓术前准备、术后观察和并发症预防。",
    highYield: [
      "术后并发症按时间线记：出血、肺部、切口、尿潴留、深静脉血栓等。",
      "休克护理必须写生命体征、尿量、意识、皮肤温度和补液反应。",
      "手术室无菌管理和器械物品处理常出细节多选。",
    ],
    drills: "用一个术后发热病例练习判断原因和护理措施。",
  },
  {
    category: "外科",
    title: "外科营养、感染、烧伤、甲状腺与乳房",
    tags: ["肠内营养", "破伤风", "烧伤", "甲亢术后"],
    framework:
      "营养支持要区分肠内和肠外；感染按局部、全身、特异性感染复习；烧伤按面积、深度、休克期、感染期、修复期处理；甲状腺和乳房重点围手术期并发症和功能/心理护理。",
    highYield: [
      "烧伤补液、创面护理、感染预防和疼痛护理是病例重点。",
      "甲状腺术后观察呼吸困难、出血、喉返神经损伤、低钙抽搐、甲状腺危象。",
      "肠外营养注意无菌、导管、血糖、电解质和肝功能。",
    ],
    drills: "写甲状腺术后 24 小时观察要点，要求按危险程度排序。",
  },
  {
    category: "外科",
    title: "普通外科腹部：腹膜炎、疝、胃肠、阑尾、大肠肛管",
    tags: ["急腹症", "肠梗阻", "阑尾炎", "大肠癌"],
    framework:
      "腹部外科先判断疼痛位置、腹膜刺激征、呕吐、排便排气、休克和影像检查。腹膜炎、腹外疝、腹部损伤、溃疡病、胃癌、肠梗阻、肠瘘、阑尾炎、大肠癌都按术前术后护理复习。",
    highYield: [
      "肠梗阻四大表现：痛、吐、胀、闭，要关注水电解质紊乱和绞窄风险。",
      "急性阑尾炎注意转移性右下腹痛和特殊人群表现。",
      "胃肠术后重点胃肠减压、吻合口、出血、感染、营养和活动。",
    ],
    drills: "把急腹症病例按“是否休克、是否腹膜炎、是否梗阻”三步判断。",
  },
  {
    category: "外科",
    title: "肝胆胰、周围血管、颅脑、胸部",
    tags: ["胆石症", "DVT", "颅内压", "气胸"],
    framework:
      "肝胆胰重点肝癌、TACE、胆道感染、胆石症、胰腺癌；周围血管重点 DVT、静脉曲张、血栓闭塞性脉管炎；颅脑抓颅内压增高和损伤观察；胸部抓肋骨骨折、气胸、血胸、肺癌、食管癌。",
    highYield: [
      "急性化脓性胆管炎注意寒战高热、黄疸、腹痛、休克和意识改变。",
      "DVT 护理强调制动、抬高、禁按摩、抗凝观察和肺栓塞预防。",
      "气胸护理要能判断闭合性、开放性、张力性及紧急处理。",
    ],
    drills: "写 1 题张力性气胸紧急护理和 1 题 DVT 预防宣教。",
  },
  {
    category: "外科",
    title: "泌尿外科与骨科",
    tags: ["尿石症", "前列腺增生", "骨折", "脊髓损伤"],
    framework:
      "泌尿外科抓血尿、疼痛、排尿困难、尿潴留和术后引流；骨科抓疼痛、畸形、功能障碍、神经血管状态、固定、牵引和康复。骨折、脱位、脊柱脊髓损伤、腰椎间盘突出、骨关节感染都要能写护理措施。",
    highYield: [
      "骨折护理重点疼痛、肿胀、末梢循环、固定有效性、并发症和功能锻炼。",
      "脊髓损伤要观察呼吸、感觉运动、尿便、压疮和心理问题。",
      "前列腺术后注意膀胱冲洗、血尿、引流通畅和尿失禁训练。",
    ],
    drills: "用一个下肢骨折病例写 DVT、压疮、肺部感染和功能锻炼预防。",
  },
];

const studyModes = [
  {
    title: "轻量日 3.5 小时",
    text: "适合上课或实习很累的日子。",
    items: ["教材精读 60 分钟", "选择题 40 道", "错题复盘 40 分钟", "睡前背诵 20 分钟"],
  },
  {
    title: "标准日 5.5 小时",
    text: "计划默认强度，能稳定推进一轮和二轮。",
    items: ["新知识 2 小时", "章节题 80 道", "病例题 1 道", "错题回教材 60 分钟"],
  },
  {
    title: "冲刺日 7.5 小时",
    text: "周末或考前使用，避免连续多天硬撑。",
    items: ["整卷或半卷模拟", "错题定位 90 分钟", "薄弱专题 2 小时", "口述背诵 40 分钟"],
  },
];

const caseTemplate = [
  "判断最危险问题",
  "提取异常评估资料",
  "写护理诊断",
  "写可测量目标",
  "列具体护理措施",
  "补健康指导与评价",
];

const practiceItems = [
  {
    title: "单项选择",
    text: "目标是稳和快。第一轮不计时，第二轮开始 45 题 45 分钟。",
    items: ["先定位考点，再看选项差异。", "错题必须回到教材原句或表格。", "连续错 3 次的知识点进入红色清单。"],
  },
  {
    title: "多项选择",
    text: "多选更容易丢分，关键是减少漏选和想当然。",
    items: ["标出绝对化词语：一定、全部、只能、均。", "每个选项都要能说出依据。", "按疾病、操作、并发症分类统计错因。"],
  },
  {
    title: "病例问答",
    text: "病例题不是默写教材，答案要贴住题干信息。",
    items: ["先写优先级最高的护理问题。", "措施要具体到观察指标、频率、体位、用药观察。", "结尾补健康教育和评价标准。"],
  },
];

const caseQuestions = [
  {
    title: "COPD 急性加重伴呼吸困难",
    prompt:
      "患者长期咳嗽咳痰，近 3 天气促明显，口唇发绀，PaCO2 升高。请写主要护理问题、氧疗原则和病情观察重点。",
    answer:
      "抓低效呼吸型态/气体交换受损；通常强调低流量持续吸氧，观察呼吸频率、SpO2、意识、痰液、血气、二氧化碳潴留表现；配合排痰、体位、用药和感染控制。",
  },
  {
    title: "急性心肌梗死胸痛入院",
    prompt:
      "患者突发持续胸骨后压榨样疼痛，大汗，心电图提示 ST 段抬高。请写急性期护理措施和并发症观察。",
    answer:
      "先卧床休息、吸氧、心电监护、建立静脉通路、遵医嘱镇痛和再灌注治疗；观察心律失常、心源性休克、心衰、疼痛变化、生命体征和出入量。",
  },
  {
    title: "肝硬化合并上消化道出血",
    prompt:
      "患者呕血、黑便、面色苍白、血压下降。请写抢救配合、护理观察和健康指导。",
    answer:
      "优先维持循环，禁食、平卧或侧卧防误吸，建立通路、备血输血、遵医嘱止血；观察呕血黑便、血压、脉搏、尿量、意识；稳定后指导避免粗糙饮食、用药依从和出血先兆识别。",
  },
  {
    title: "甲状腺术后呼吸困难",
    prompt:
      "甲状腺大部切除术后 4 小时出现颈部肿胀、呼吸费力。请写可能原因和紧急护理。",
    answer:
      "高度警惕切口内出血压迫气管。立即通知医生，保持呼吸道通畅，准备拆线清除血肿和气管切开物品，吸氧，严密观察生命体征和切口渗血。",
  },
  {
    title: "肠梗阻患者腹痛腹胀",
    prompt:
      "患者阵发性腹痛、呕吐、腹胀、停止排便排气。请写护理问题、术前护理和观察重点。",
    answer:
      "关注疼痛、体液不足、营养失衡、潜在绞窄。护理包括禁食、胃肠减压、补液纠正电解质、观察腹痛性质、呕吐物、腹膜刺激征、生命体征和尿量。",
  },
  {
    title: "下肢骨折术后康复",
    prompt:
      "患者下肢骨折内固定术后卧床。请写并发症预防、患肢观察和功能锻炼指导。",
    answer:
      "观察疼痛、肿胀、皮温、皮色、感觉运动和末梢循环；预防 DVT、压疮、肺部感染和便秘；按医嘱进行踝泵、股四头肌等长收缩和逐步负重训练。",
  },
];

let completedWeeks = loadJson(storageKeys.weeks, {});
let masteredKnowledge = loadJson(storageKeys.knowledge, {});
let selectedWeek = getCurrentWeek();
let activeKnowledgeFilter = "all";
let searchTerm = "";

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function dateLabel(date) {
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function weekRange(weekNumber) {
  const start = addDays(startDate, (weekNumber - 1) * 7);
  const end = addDays(start, 6);
  return `${dateLabel(start)} - ${dateLabel(end)}`;
}

function getCurrentWeek() {
  const now = new Date();
  const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  if (diff < 0) return 1;
  return Math.min(weeks.length, Math.floor(diff / 7) + 1);
}

function byId(id) {
  return document.getElementById(id);
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderMetrics() {
  const weekDone = Object.values(completedWeeks).filter(Boolean).length;
  const knowledgeDone = Object.values(masteredKnowledge).filter(Boolean).length;
  const metrics = [
    { value: "300", label: "专业课满分，基础/内科/外科各 100 分" },
    { value: `${weekDone}/30`, label: "周计划完成进度，勾选后自动保存" },
    { value: `${knowledgeDone}/${knowledgeItems.length}`, label: "知识模块掌握数，适合每周日复盘" },
    { value: "120+4", label: "90 道单选、30 道多选、4 道病例问答" },
  ];
  byId("metricGrid").innerHTML = metrics
    .map((item) => `<article class="metric-card"><strong>${item.value}</strong><span>${item.label}</span></article>`)
    .join("");
}

function renderExamGrid() {
  byId("examGrid").innerHTML = examParts
    .map(
      (part) => `
        <article class="exam-card">
          <header>
            <h3>${part.name}</h3>
            <div class="score">${part.score}</div>
          </header>
          <div class="body">
            <p>${part.detail}</p>
            ${list(part.points)}
          </div>
        </article>`
    )
    .join("");
}

function renderDashboardWeek() {
  const week = weeks[selectedWeek - 1];
  byId("dashboardWeek").innerHTML = `
    <h3>第 ${selectedWeek} 周：${week.focus}</h3>
    <p>${weekRange(selectedWeek)} ｜ 阶段：${week.phase}</p>
    ${list(week.tasks)}
    <p><strong>本周产出：</strong>${week.output}</p>
  `;
}

function renderWeekSelector() {
  byId("weekSelector").innerHTML = weeks
    .map((week, index) => `<option value="${index + 1}">第 ${index + 1} 周：${week.focus}</option>`)
    .join("");
  byId("weekSelector").value = String(selectedWeek);
}

function renderToday() {
  const week = weeks[selectedWeek - 1];
  byId("todayFocus").innerHTML = `
    <p><strong>第 ${selectedWeek} 周 ｜ ${weekRange(selectedWeek)}</strong></p>
    <p>${week.focus}</p>
    ${list(week.tasks)}
    <p><strong>本周交付物：</strong>${week.output}</p>
  `;
  const blocks = [
    {
      time: "第一段",
      title: "新知识精读",
      text: `围绕“${week.focus}”读教材或讲义，读完立刻合上书复述框架。`,
    },
    {
      time: "第二段",
      title: "题目训练",
      text: "做选择题或病例题，错题只标错因，不急着抄答案。",
    },
    {
      time: "第三段",
      title: "回教材修补",
      text: `把错题回到对应章节，最后更新“${week.output}”。`,
    },
  ];
  byId("dailyBlocks").innerHTML = blocks
    .map(
      (block) => `
        <div class="daily-block">
          <time>${block.time}</time>
          <div><strong>${block.title}</strong><span>${block.text}</span></div>
        </div>`
    )
    .join("");
}

function renderModes() {
  byId("modeGrid").innerHTML = studyModes
    .map(
      (mode) => `
        <article class="mode-card">
          <h3>${mode.title}</h3>
          <p>${mode.text}</p>
          ${list(mode.items)}
        </article>`
    )
    .join("");
}

function renderPhases() {
  byId("phaseStrip").innerHTML = phases
    .map(
      (phase) => `
        <article class="phase-card">
          <h3>${phase.name}</h3>
          <p><strong>${phase.weeks}</strong></p>
          <p>${phase.text}</p>
        </article>`
    )
    .join("");
}

function renderWeekGrid() {
  const completed = Object.values(completedWeeks).filter(Boolean).length;
  byId("completedWeeks").textContent = `${completed} / ${weeks.length} 周完成`;
  byId("weekGrid").innerHTML = weeks
    .map((week, index) => {
      const number = index + 1;
      const checked = completedWeeks[number] ? "checked" : "";
      const completeClass = completedWeeks[number] ? " complete" : "";
      return `
        <article class="week-card${completeClass}">
          <header>
            <div>
              <span class="eyebrow">第 ${number} 周 ｜ ${weekRange(number)}</span>
              <h3>${week.focus}</h3>
            </div>
            <span class="pill">${week.phase}</span>
          </header>
          ${list(week.tasks)}
          <p><strong>产出：</strong>${week.output}</p>
          <label class="check-row">
            <input type="checkbox" data-week="${number}" ${checked} />
            本周已完成
          </label>
        </article>`;
    })
    .join("");
}

function renderKnowledge() {
  const normalized = searchTerm.trim().toLowerCase();
  const filtered = knowledgeItems.filter((item) => {
    const byCategory = activeKnowledgeFilter === "all" || item.category === activeKnowledgeFilter;
    const haystack = `${item.category} ${item.title} ${item.tags.join(" ")} ${item.framework} ${item.highYield.join(" ")} ${item.drills}`.toLowerCase();
    return byCategory && (!normalized || haystack.includes(normalized));
  });

  byId("knowledgeGrid").innerHTML =
    filtered
      .map((item, index) => {
        const realIndex = knowledgeItems.indexOf(item);
        const checked = masteredKnowledge[realIndex] ? "checked" : "";
        return `
          <article class="knowledge-card" data-category="${item.category}">
            <header>
              <h3>${item.title}</h3>
              <div class="tag-row">
                <span class="tag">${item.category}</span>
                ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
            </header>
            <div class="body">
              <p>${item.framework}</p>
              <div>
                <strong>高频抓手</strong>
                ${list(item.highYield)}
              </div>
              <p><strong>训练：</strong>${item.drills}</p>
              <div class="master-row">
                <label>
                  <input type="checkbox" data-knowledge="${realIndex}" ${checked} />
                  已掌握
                </label>
              </div>
            </div>
          </article>`;
      })
      .join("") || `<div class="notice">没有找到匹配的知识点。换一个关键词试试。</div>`;
}

function renderPractice() {
  byId("caseTemplate").innerHTML = caseTemplate.map((step) => `<li>${step}</li>`).join("");
  byId("practiceGrid").innerHTML = practiceItems
    .map(
      (item) => `
        <article class="practice-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          ${list(item.items)}
        </article>`
    )
    .join("");

  byId("caseGrid").innerHTML = caseQuestions
    .map(
      (item) => `
        <article class="case-card">
          <h3>${item.title}</h3>
          <p>${item.prompt}</p>
          <details>
            <summary>查看答题抓手</summary>
            <div>${item.answer}</div>
          </details>
        </article>`
    )
    .join("");
}

function renderProgressSummary() {
  const weekDone = Object.values(completedWeeks).filter(Boolean).length;
  const knowledgeDone = Object.values(masteredKnowledge).filter(Boolean).length;
  const categoryRows = ["基础", "内科", "外科"].map((category) => {
    const total = knowledgeItems.filter((item) => item.category === category).length;
    const done = knowledgeItems.filter((item, index) => item.category === category && masteredKnowledge[index]).length;
    return progressLine(category, done, total);
  });
  byId("progressSummary").innerHTML = [
    progressLine("周计划", weekDone, weeks.length),
    progressLine("知识模块", knowledgeDone, knowledgeItems.length),
    ...categoryRows,
  ].join("");
}

function progressLine(title, done, total) {
  const percent = total ? Math.round((done / total) * 100) : 0;
  return `
    <div class="progress-line">
      <strong><span>${title}</span><span>${done}/${total}</span></strong>
      <div class="bar" aria-label="${title} ${percent}%"><span style="width:${percent}%"></span></div>
    </div>`;
}

function renderSources() {
  byId("sourceGrid").innerHTML = sources
    .map(
      (source) => `
        <article class="source-card">
          <h3>${source.title}</h3>
          <p><a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a></p>
          ${list(source.points)}
        </article>`
    )
    .join("");
}

function setView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  document
    .querySelectorAll(".nav-button, .mobile-nav-button")
    .forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function attachEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.jump));
  });

  byId("weekSelector").addEventListener("change", (event) => {
    selectedWeek = Number(event.target.value);
    renderToday();
    renderDashboardWeek();
  });

  byId("weekGrid").addEventListener("change", (event) => {
    if (!event.target.matches("[data-week]")) return;
    completedWeeks[event.target.dataset.week] = event.target.checked;
    saveJson(storageKeys.weeks, completedWeeks);
    renderWeekGrid();
    renderMetrics();
    renderProgressSummary();
  });

  byId("knowledgeGrid").addEventListener("change", (event) => {
    if (!event.target.matches("[data-knowledge]")) return;
    masteredKnowledge[event.target.dataset.knowledge] = event.target.checked;
    saveJson(storageKeys.knowledge, masteredKnowledge);
    renderKnowledge();
    renderMetrics();
    renderProgressSummary();
  });

  byId("knowledgeSearch").addEventListener("input", (event) => {
    searchTerm = event.target.value;
    renderKnowledge();
  });

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeKnowledgeFilter = button.dataset.filter;
      document
        .querySelectorAll(".filter-button")
        .forEach((item) => item.classList.toggle("active", item === button));
      renderKnowledge();
    });
  });

  const note = byId("wrongNote");
  note.value = localStorage.getItem(storageKeys.note) || "";
  note.addEventListener("input", () => {
    localStorage.setItem(storageKeys.note, note.value);
  });
}

function renderAll() {
  renderMetrics();
  renderExamGrid();
  renderDashboardWeek();
  renderWeekSelector();
  renderToday();
  renderModes();
  renderPhases();
  renderWeekGrid();
  renderKnowledge();
  renderPractice();
  renderProgressSummary();
  renderSources();
}

renderAll();
attachEvents();
