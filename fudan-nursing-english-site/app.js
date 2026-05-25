const scoreParts = [
  ["10分", "英语知识运用", "护理学考研公共英语里的完形部分。重点是上下文逻辑、词义辨析、固定搭配和篇章衔接。"],
  ["40分", "阅读理解 A", "英语一最大分值区。训练文章会偏护理、医学、公共健康和科研阅读场景。"],
  ["10分", "阅读理解 B", "新题型。常见考查段落结构、句子衔接、标题匹配和排序。"],
  ["10分", "英译汉", "长难句翻译。先拆主干，再处理从句、非谓语、插入语和抽象名词。"],
  ["30分", "写作", "小作文 10 分，大作文 20 分。护理方向重点积累健康、老龄化、职业伦理、科研和公共服务表达。"],
];

const routines = [
  ["早晨 25 分钟", "背 10 个新词 + 复习昨天红色单词。只看英文先说中文，再反向拼写。"],
  ["中午 30 分钟", "拆 1 个长难句，写出主干、从句、修饰成分和译文。"],
  ["晚上 60 分钟", "做 1 组题：阅读一篇、完形 5 空、翻译 1 句或写作 1 段。"],
  ["睡前 15 分钟", "只看错题和红色单词，不开新内容，降低遗忘。"],
];

const knowledge = [
  {
    title: "单词不是只背中文",
    points: [
      "每个词至少记 3 件事：核心义、常见搭配、在句子里的语气。",
      "考研阅读常用熟词生义：practice 不一定是练习，也可以是实践；address 不只是地址，也可以是处理问题。",
      "她考护理学，所以要优先背 clinical、intervention、evidence、outcome、adherence 这类能在医学科研文章里反复出现的词。",
    ],
    task: "每天把最难的 3 个词各造 1 句，句子尽量贴近护理场景。",
  },
  {
    title: "长难句四步法",
    points: [
      "第一步找谓语动词，确定句子真正动作。",
      "第二步找主语和宾语，先得到最短主干。",
      "第三步括出从句、插入语、介词短语和非谓语。",
      "第四步按中文顺序重组，不要逐词硬翻。",
    ],
    task: "每天拆 3 句：1 句阅读句、1 句翻译句、1 句护理科研句。",
  },
  {
    title: "阅读主旨题",
    points: [
      "主旨题不要被例子、数字、人名带偏，例子通常是服务观点的。",
      "首段最后一句、转折后、结尾段往往是中心。",
      "正确选项通常概括性强，错误选项常常过窄、过绝对、偷换对象。",
    ],
    task: "每篇阅读做完后，用中文 20 字写出文章主旨。",
  },
  {
    title: "阅读细节题",
    points: [
      "先读题干定位关键词，再回原文找同义改写。",
      "选项和原文一模一样不一定对，可能是拼接错位。",
      "不要用背景知识替代原文，考研阅读只认文章给出的逻辑。",
    ],
    task: "每道错题写出定位句和错选项错在哪里。",
  },
  {
    title: "阅读态度题",
    points: [
      "态度题看评价性词汇：promising、limited、questionable、overstated、cautious。",
      "作者常见态度不是极端赞成或极端反对，而是谨慎支持、保留、批评某种过度说法。",
      "选项中的 indifferent、hostile、enthusiastic 这类词要特别谨慎。",
    ],
    task: "看到作者评价词，立刻标注正向、负向、中性或谨慎。",
  },
  {
    title: "完形填空",
    points: [
      "完形先看空前空后逻辑，不要先背选项中文。",
      "转折看 however/nevertheless/whereas；因果看 therefore/thus/because；递进看 moreover/furthermore。",
      "名词空看搭配，动词空看主宾，形容词空看作者态度。",
    ],
    task: "每次做完形只复盘 5 个空，但要讲清每个空为什么选它。",
  },
  {
    title: "新题型",
    points: [
      "排序题先找总起段，再看 this/these/such/therefore/however 的承接。",
      "小标题题看段落功能，不看某个孤立细节。",
      "句子填空要检查前后代词、时态、逻辑关系和关键词复现。",
    ],
    task: "每组选项给自己写一句“为什么这个位置需要它”。",
  },
  {
    title: "英译汉",
    points: [
      "先译主干，再处理定语从句、状语从句、非谓语和插入成分。",
      "被动语态不必都译成“被”，要符合中文表达。",
      "of 结构要灵活：quality of care 是护理质量，不是护理的质量也可以但不够自然。",
    ],
    task: "翻译后检查四件事：否定、比较、因果、指代有没有漏。",
  },
  {
    title: "小作文",
    points: [
      "小作文先定身份、对象、目的和语气。",
      "建议信、邀请信、通知、道歉信、申请信是高频类型。",
      "不要堆高级词，清楚、礼貌、具体最重要。",
    ],
    task: "每周写 2 篇 100 词左右的小作文，重点改格式和语气。",
  },
  {
    title: "大作文",
    points: [
      "第一段描述图画或图表，第二段解释原因/意义，第三段建议或总结。",
      "护理相关素材可准备：老龄化、慢病管理、健康教育、医患沟通、技术辅助护理。",
      "表达要稳，不要写自己无法控制的复杂句。",
    ],
    task: "每周背 10 个主题表达，并写 1 篇 160-200 词短文。",
  },
];

const wordBankRaw = `
clinical|临床的|clinical practice 临床实践|Clinical evidence should guide nursing decisions.|护理医学
intervention|干预；介入措施|nursing intervention 护理干预|The intervention reduced patients' anxiety.|护理医学
assessment|评估|risk assessment 风险评估|Accurate assessment is the first step in care planning.|护理医学
diagnosis|诊断|nursing diagnosis 护理诊断|A diagnosis must be supported by patient data.|护理医学
symptom|症状|respiratory symptom 呼吸症状|Shortness of breath is a common symptom.|护理医学
prognosis|预后|poor prognosis 预后不良|Early treatment may improve the prognosis.|护理医学
chronic|慢性的|chronic disease 慢性病|Chronic illness requires long-term self-management.|护理医学
acute|急性的|acute pain 急性疼痛|Acute symptoms should be assessed immediately.|护理医学
infection|感染|infection control 感染控制|Hand hygiene is central to infection control.|护理医学
isolation|隔离|protective isolation 保护性隔离|Isolation measures reduce cross-infection.|护理医学
screening|筛查|early screening 早期筛查|Screening helps identify high-risk patients.|护理医学
administer|给药；实施|administer medication 给药|Nurses administer medication according to prescriptions.|护理医学
dosage|剂量|adjust the dosage 调整剂量|Dosage errors may cause adverse outcomes.|护理医学
adverse|不良的|adverse reaction 不良反应|Patients should report adverse reactions promptly.|护理医学
monitor|监测|monitor vital signs 监测生命体征|Nurses monitor vital signs after surgery.|护理医学
rehabilitation|康复|cardiac rehabilitation 心脏康复|Rehabilitation improves functional recovery.|护理医学
palliative|姑息的；缓和的|palliative care 姑息护理|Palliative care focuses on quality of life.|护理医学
holistic|整体的|holistic nursing 整体护理|Holistic nursing considers physical and psychological needs.|护理医学
adherence|依从性|treatment adherence 治疗依从性|Education can improve medication adherence.|护理医学
vulnerable|脆弱的；易受伤害的|vulnerable groups 弱势群体|Older adults are vulnerable to medication errors.|护理医学
evidence|证据|evidence-based nursing 循证护理|Evidence-based nursing combines research and clinical expertise.|科研阅读
prevalence|患病率；流行程度|prevalence of diabetes 糖尿病患病率|The prevalence of chronic disease is rising.|科研阅读
incidence|发生率|incidence rate 发生率|The incidence of falls declined after training.|科研阅读
mortality|死亡率|mortality rate 死亡率|Timely care may reduce mortality.|科研阅读
morbidity|发病率；疾病负担|morbidity burden 疾病负担|Preventive care can lower morbidity.|科研阅读
outcome|结果；结局|patient outcome 患者结局|Patient outcomes are used to evaluate care quality.|科研阅读
trial|试验|randomized trial 随机试验|The trial compared two care models.|科研阅读
cohort|队列|cohort study 队列研究|A cohort study followed nurses for ten years.|科研阅读
survey|调查|cross-sectional survey 横断面调查|The survey measured burnout among nurses.|科研阅读
qualitative|定性的|qualitative interview 定性访谈|Qualitative studies explore patient experiences.|科研阅读
quantitative|定量的|quantitative analysis 定量分析|Quantitative data can reveal trends.|科研阅读
variable|变量|control variable 控制变量|Age was treated as a variable.|科研阅读
bias|偏倚；偏见|selection bias 选择偏倚|Bias may weaken the conclusion.|科研阅读
significant|显著的；重要的|statistically significant 统计学显著|The difference was statistically significant.|科研阅读
correlation|相关性|positive correlation 正相关|Correlation does not prove causation.|科研阅读
causal|因果的|causal relationship 因果关系|The study did not establish a causal link.|科研阅读
implication|含义；启示|clinical implication 临床启示|The findings have implications for nursing education.|科研阅读
whereas|然而；鉴于|whereas + 对比句|Some patients improved, whereas others showed no change.|逻辑态度
nevertheless|然而；不过|nevertheless + 转折|The evidence is limited; nevertheless, it is useful.|逻辑态度
therefore|因此|therefore + 结论|The sample was small; therefore, conclusions should be cautious.|逻辑态度
moreover|此外|moreover + 递进|Moreover, nurses need communication skills.|逻辑态度
undermine|削弱|undermine confidence 削弱信心|Poor evidence may undermine the argument.|逻辑态度
reinforce|加强；强化|reinforce the idea 强化观点|The results reinforce the need for training.|逻辑态度
highlight|强调；突出|highlight a problem 突出问题|The report highlights nurse burnout.|逻辑态度
challenge|质疑；挑战|challenge an assumption 质疑假设|The author challenges the traditional view.|逻辑态度
assumption|假设|basic assumption 基本假设|The argument rests on a weak assumption.|逻辑态度
account for|解释；占比|account for the result 解释结果|Workload may account for the high turnover.|逻辑态度
attribute|归因于|attribute A to B 把 A 归因于 B|Researchers attributed the change to better training.|逻辑态度
consistent|一致的|consistent with 与...一致|The finding is consistent with previous studies.|逻辑态度
controversial|有争议的|controversial issue 争议问题|The policy remains controversial.|逻辑态度
feasible|可行的|feasible solution 可行方案|Community-based care is feasible in many regions.|写作替换
substantial|大量的；实质性的|substantial improvement 显著改善|The reform brought substantial benefits.|写作替换
beneficial|有益的|beneficial effect 有益影响|Regular exercise is beneficial to older adults.|写作替换
detrimental|有害的|detrimental effect 有害影响|Excessive workload is detrimental to care quality.|写作替换
alleviate|减轻|alleviate pain 缓解疼痛|Timely support can alleviate stress.|写作替换
deteriorate|恶化|health deteriorates 健康恶化|Without treatment, the condition may deteriorate.|写作替换
enhance|提升|enhance efficiency 提高效率|Training can enhance nurses' confidence.|写作替换
address|处理；解决|address a problem 解决问题|Hospitals should address staff shortages.|写作替换
promote|促进|promote health 促进健康|Nursing education promotes healthy behavior.|写作替换
ensure|确保|ensure safety 确保安全|Clear procedures ensure patient safety.|写作替换
allocate|分配|allocate resources 分配资源|Hospitals must allocate resources fairly.|写作替换
implement|实施|implement a policy 实施政策|The ward implemented a new safety protocol.|写作替换
evaluate|评估|evaluate effectiveness 评估有效性|The study evaluated the effectiveness of training.|科研阅读
participant|参与者|study participant 研究参与者|Participants completed a questionnaire.|科研阅读
randomize|随机分配|randomize patients 随机分配患者|Patients were randomized into two groups.|科研阅读
valid|有效的；合理的|valid conclusion 有效结论|A small sample may limit valid conclusions.|科研阅读
reliable|可靠的|reliable measure 可靠测量|Reliable data are essential for research.|科研阅读
ethical|伦理的|ethical issue 伦理问题|Ethical approval was obtained before the trial.|科研阅读
confidential|保密的|confidential information 保密信息|Patient information must remain confidential.|护理医学
consent|同意；知情同意|informed consent 知情同意|Researchers obtained informed consent.|护理医学
compliance|依从；合规|patient compliance 患者依从性|Poor compliance may reduce treatment effects.|护理医学
discharge|出院；排出|discharge planning 出院计划|Discharge planning should begin early.|护理医学
ward|病区|surgical ward 外科病区|The patient was transferred to the surgical ward.|护理医学
triage|分诊|emergency triage 急诊分诊|Triage helps identify urgent cases.|护理医学
procedure|程序；操作|clinical procedure 临床操作|The procedure must follow safety rules.|护理医学
protocol|方案；规程|care protocol 护理规程|A protocol standardizes nursing practice.|护理医学
complication|并发症|postoperative complication 术后并发症|Early mobilization reduces complications.|护理医学
respiratory|呼吸的|respiratory failure 呼吸衰竭|Respiratory symptoms require close observation.|护理医学
cardiovascular|心血管的|cardiovascular disease 心血管病|Cardiovascular risk increases with age.|护理医学
immune|免疫的|immune response 免疫反应|Stress may affect immune function.|护理医学
nutritional|营养的|nutritional support 营养支持|Nutritional support is part of recovery.|护理医学
mobility|活动能力|limited mobility 活动受限|Limited mobility increases fall risk.|护理医学
cognitive|认知的|cognitive decline 认知下降|Cognitive decline affects self-care.|护理医学
anxiety|焦虑|reduce anxiety 减轻焦虑|Clear communication can reduce anxiety.|护理医学
fatigue|疲劳|chronic fatigue 慢性疲劳|Fatigue is common among night-shift nurses.|护理医学
burnout|职业倦怠|nurse burnout 护士职业倦怠|Burnout may harm patient safety.|护理医学
workload|工作负荷|heavy workload 工作负荷重|Heavy workload can reduce care quality.|护理医学
shortage|短缺|staff shortage 人员短缺|Staff shortages challenge hospitals.|写作替换
resource|资源|medical resources 医疗资源|Resources should be used efficiently.|写作替换
equity|公平|health equity 健康公平|Health equity is a public concern.|写作替换
access|获得；机会|access to care 获得医疗服务|Rural patients may lack access to care.|写作替换
efficiency|效率|improve efficiency 提高效率|Digital tools can improve efficiency.|写作替换
sustainable|可持续的|sustainable system 可持续体系|A sustainable health system needs prevention.|写作替换
community|社区|community nursing 社区护理|Community nursing supports older adults.|写作替换
preventive|预防性的|preventive care 预防护理|Preventive care reduces long-term costs.|写作替换
approximately|大约|approximately 30 percent 约 30%|Approximately half of patients completed the program.|逻辑态度
primarily|主要地|primarily because 主要因为|The change was primarily driven by aging.|逻辑态度
merely|仅仅|merely a symptom 仅仅是症状|The problem is not merely financial.|逻辑态度
considerable|相当大的|considerable pressure 相当大的压力|Nurses face considerable pressure.|写作替换
inevitable|不可避免的|inevitable result 必然结果|Some change is inevitable.|逻辑态度
potential|潜在的|potential benefit 潜在好处|The policy has potential benefits.|逻辑态度
long-term|长期的|long-term care 长期护理|Long-term care requires family support.|护理医学
short-term|短期的|short-term effect 短期影响|The short-term effect was modest.|科研阅读
`;

const wordBank = wordBankRaw
  .trim()
  .split("\n")
  .map((line) => {
    const [word, meaning, phrase, sentence, category] = line.split("|");
    return { word, meaning, phrase, sentence, category };
  });

const examples = [
  {
    type: "阅读",
    title: "护理质量评价",
    passage:
      "In many hospitals, the quality of nursing care is no longer judged only by whether a task is completed. Increasingly, administrators look at patient experience, recovery after discharge and the ability of nurses to communicate risk clearly. This shift does not make technical skill less important; rather, it places skill within a broader understanding of care.",
    question: "What is the main idea of the paragraph?",
    options: ["Nursing care is becoming less technical.", "Hospitals are broadening the way nursing quality is evaluated.", "Administrators now ignore bedside tasks.", "Communication is the only measure of good nursing."],
    answer: "B。中心是护理质量评价标准扩大了。A 把技术说成不重要，C 和 D 都过于绝对。",
    analysis: "主旨题要抓 no longer only 和 increasingly，这两个结构说明评价标准发生扩展。",
  },
  {
    type: "阅读",
    title: "循证护理态度题",
    passage:
      "Evidence-based nursing is often praised as a solution to uncertainty, but its value depends on how carefully evidence is interpreted. A small trial may suggest a useful direction, yet it cannot automatically become a universal rule for every ward and every patient.",
    question: "The author's attitude toward evidence-based nursing is best described as:",
    options: ["cautiously supportive", "openly hostile", "entirely indifferent", "blindly enthusiastic"],
    answer: "A。作者认可循证护理价值，但提醒小样本试验不能直接变成普遍规则。",
    analysis: "but、depends on、cannot automatically 都显示作者是谨慎支持，不是反对。",
  },
  {
    type: "阅读",
    title: "老龄化与社区护理",
    passage:
      "As populations age, hospitals alone cannot meet every long-term care need. Community nurses, family caregivers and digital follow-up systems are increasingly expected to share the burden. The change is not simply a matter of saving beds; it reflects a broader attempt to keep older adults independent for as long as possible.",
    question: "Why is community care becoming more important?",
    options: ["Because hospitals have become unnecessary.", "Because older adults need support beyond hospital treatment.", "Because digital systems can replace nurses.", "Because families no longer provide care."],
    answer: "B。原文说 hospitals alone cannot meet every long-term care need，说明院外长期支持更重要。",
    analysis: "细节题定位 As populations age 和 long-term care need。A/C/D 都把原文扩大或反向改写。",
  },
  {
    type: "阅读",
    title: "护士职业倦怠",
    passage:
      "Burnout among nurses is sometimes treated as a personal weakness, but research suggests that it often reflects organizational problems: excessive workload, limited autonomy and insufficient support. Asking individual nurses to be more resilient may help, but it cannot substitute for changes in staffing and management.",
    question: "Which statement would the author most likely agree with?",
    options: ["Burnout is mainly a failure of personality.", "Resilience training is useless in all cases.", "Workplace conditions should be addressed to reduce burnout.", "Staffing and management rarely matter."],
    answer: "C。作者承认个人韧性有帮助，但强调不能替代组织层面改变。",
    analysis: "but research suggests 和 cannot substitute for 是关键。正确选项往往是原文观点的概括。",
  },
  {
    type: "阅读",
    title: "技术辅助护理",
    passage:
      "Digital monitoring can alert nurses to early signs of deterioration, but alarms are useful only when they are accurate and clinically meaningful. Too many false alarms may train staff to ignore warnings, creating a new risk rather than reducing an old one.",
    question: "What problem does the paragraph highlight?",
    options: ["Technology should be removed from hospitals.", "False alarms may weaken the value of digital monitoring.", "Nurses are unable to use digital tools.", "Clinical judgment is always inferior to machines."],
    answer: "B。段落不是否定技术，而是指出误报太多会削弱预警价值。",
    analysis: "but 后面是重点，rather than reducing an old one 表示技术可能制造新风险。",
  },
  {
    type: "词汇",
    title: "熟词生义：address",
    passage: "Hospitals should address staff shortages before asking nurses to improve efficiency.",
    question: "The word 'address' is closest in meaning to:",
    options: ["write an address", "deal with", "announce", "measure"],
    answer: "B。address 在考研阅读中常表示处理、应对问题。",
    analysis: "看到 address + problem/shortage/issue，优先理解为“处理”。",
  },
  {
    type: "词汇",
    title: "核心词：alleviate",
    passage: "The new training program was designed to alleviate nurses' stress during night shifts.",
    question: "The word 'alleviate' is closest in meaning to:",
    options: ["reduce", "measure", "ignore", "explain"],
    answer: "A。alleviate 表示减轻、缓解，常搭配 pain、stress、burden。",
    analysis: "写作里可用 alleviate pressure/burden 替换 reduce pressure。",
  },
  {
    type: "完形",
    title: "转折逻辑",
    passage: "Older patients may know that exercise is beneficial; ___, many of them avoid it because they fear falling.",
    question: "Choose the best word for the blank.",
    options: ["therefore", "however", "similarly", "for example"],
    answer: "B。前句说知道有益，后句说仍然避免，构成转折。",
    analysis: "完形先判断逻辑。beneficial 与 avoid 是反向关系。",
  },
  {
    type: "完形",
    title: "因果逻辑",
    passage: "The sample was small; ___, the researchers avoided making broad claims about all hospitals.",
    question: "Choose the best word for the blank.",
    options: ["therefore", "whereas", "meanwhile", "otherwise"],
    answer: "A。样本小导致结论谨慎，是因果关系。",
    analysis: "therefore 后面常接结论。whereas 表对比，meanwhile 表同时，otherwise 表否则。",
  },
  {
    type: "完形",
    title: "搭配辨析",
    passage: "Clear discharge instructions can improve patients' ___ to medication after they leave hospital.",
    question: "Choose the best word for the blank.",
    options: ["adherence", "infection", "mortality", "bias"],
    answer: "A。adherence to medication 是“用药依从性”。",
    analysis: "名词空优先看固定搭配，to medication 与 adherence 最匹配。",
  },
  {
    type: "完形",
    title: "态度词",
    passage: "The author is not against digital nursing tools, but he remains ___ about claims that they can replace human judgment.",
    question: "Choose the best word for the blank.",
    options: ["skeptical", "identical", "nutritional", "random"],
    answer: "A。skeptical about 表示对某说法持怀疑态度。",
    analysis: "not against...but... 表示不是完全反对，而是对过度说法保持怀疑。",
  },
  {
    type: "新题型",
    title: "句子填空",
    passage:
      "Patient education is not a single conversation before discharge. ___. When information is repeated and adjusted to the patient's condition, adherence is more likely to improve.",
    question: "Which sentence best fits the blank?",
    options: ["It should be treated as a continuous process.", "It eliminates the need for follow-up care.", "It is unrelated to medication use.", "It mainly benefits hospital administrators."],
    answer: "A。空后说信息要反复并按病情调整，说明健康教育是持续过程。",
    analysis: "前句 not a single conversation 和后句 repeated 构成同义复现。",
  },
  {
    type: "新题型",
    title: "标题匹配",
    passage:
      "This paragraph discusses how nurses explain medication schedules, warning signs and follow-up appointments in plain language so that patients can manage their recovery at home.",
    question: "Choose the best heading.",
    options: ["Improving Discharge Communication", "The Cost of Medical Devices", "The History of Nursing Schools", "A Debate on Hospital Architecture"],
    answer: "A。段落核心是出院沟通，不是设备成本或护理教育史。",
    analysis: "标题题看段落功能：explain medication schedules、warning signs、follow-up appointments 都服务 discharge communication。",
  },
  {
    type: "新题型",
    title: "排序线索",
    passage:
      "Sentence A: Such problems can be reduced when nurses receive enough support. Sentence B: Many new nurses feel stressed when they enter busy wards. Sentence C: This support includes mentoring, feedback and reasonable workloads.",
    question: "Best order?",
    options: ["B-A-C", "C-A-B", "A-C-B", "B-C-A"],
    answer: "A。先提出新护士压力问题 B，再说这些问题可被支持减少 A，最后解释 support 包括什么 C。",
    analysis: "Such problems 指代前文压力问题；This support 指代 A 中 support。",
  },
  {
    type: "翻译",
    title: "让步从句",
    passage:
      "Although technology can help nurses monitor patients more efficiently, it cannot replace the clinical judgment that comes from careful observation and communication.",
    question: "请翻译这句话。",
    answer: "虽然技术可以帮助护士更高效地监测患者，但它不能取代来自细致观察和沟通的临床判断。",
    analysis: "Although 引导让步；主句是 it cannot replace the clinical judgment；that 从句修饰 judgment。",
  },
  {
    type: "翻译",
    title: "定语从句",
    passage:
      "A care plan that ignores the patient's family situation may look complete on paper but fail in daily life.",
    question: "请翻译这句话。",
    answer: "一份忽视患者家庭情况的护理计划，纸面上可能看起来完整，但在日常生活中可能无法真正执行。",
    analysis: "that ignores... 修饰 care plan；look complete 与 fail 构成转折。",
  },
  {
    type: "翻译",
    title: "抽象名词",
    passage:
      "The effectiveness of a public health policy depends not only on its scientific basis but also on public trust.",
    question: "请翻译这句话。",
    answer: "一项公共卫生政策是否有效，不仅取决于其科学依据，也取决于公众信任。",
    analysis: "effectiveness of... 可转译为“是否有效”，比“有效性”更自然。",
  },
  {
    type: "翻译",
    title: "非谓语结构",
    passage:
      "Designed to reduce medication errors, the new protocol requires two nurses to check high-risk drugs before administration.",
    question: "请翻译这句话。",
    answer: "这项新规程旨在减少用药错误，要求两名护士在给高风险药物前进行核对。",
    analysis: "Designed to... 是目的/背景，可译成“旨在”。before administration 是给药前。",
  },
  {
    type: "阅读",
    title: "科研结论边界",
    passage:
      "A survey of one hospital can reveal useful local problems, but it should not be mistaken for evidence about all nurses in the country. The value of the survey lies in generating questions, not in settling them.",
    question: "What does the author emphasize?",
    options: ["Local surveys have no value.", "One survey should not be overgeneralized.", "All national conclusions are impossible.", "Questions are less important than answers."],
    answer: "B。作者强调单个医院调查有价值，但不能过度推广。",
    analysis: "but it should not be mistaken for evidence about all nurses 是核心定位句。",
  },
  {
    type: "阅读",
    title: "健康公平",
    passage:
      "When medical resources are concentrated in large urban hospitals, rural patients may delay treatment until their condition becomes severe. Improving health equity therefore requires not only more hospitals, but also better transportation, community education and digital follow-up.",
    question: "According to the paragraph, health equity requires:",
    options: ["only building more city hospitals", "multiple forms of support beyond hospital construction", "reducing digital follow-up", "asking rural patients to avoid treatment"],
    answer: "B。原文 not only more hospitals, but also... 表明需要多种支持。",
    analysis: "not only...but also 是考研阅读高频结构，后半部分通常不可忽略。",
  },
];

const writings = [
  {
    title: "小作文：建议信",
    prompt: "Your nursing school plans to open a workshop on stress management. Write an email to the organizer and give two suggestions.",
    structure: ["说明写信目的：I am writing to offer several suggestions...", "建议 1：加入真实案例讨论。", "建议 2：安排同伴支持和时间管理训练。", "结尾：表达期待和感谢。"],
    model:
      "Dear Sir or Madam,\n\nI am writing to offer some suggestions for the planned workshop on stress management. First, it would be helpful to include case discussions based on real clinical situations, because students need practical ways to deal with pressure during ward practice. Second, the workshop could introduce peer support, sleep management and time-planning strategies. These topics are closely related to nursing students' daily challenges.\n\nI hope these suggestions will be useful. Thank you for your time and effort.\n\nYours sincerely,\nLi Ming",
  },
  {
    title: "小作文：通知",
    prompt: "Write a notice for a lecture on evidence-based nursing.",
    structure: ["标题：Notice。", "时间地点讲清楚。", "内容包括讲座主题、主讲人、参加对象。", "结尾说明报名或注意事项。"],
    model:
      "Notice\n\nA lecture on evidence-based nursing will be held in Room 302 at 7:00 p.m. this Friday. The lecture will introduce how clinical evidence can be used in patient assessment, nursing intervention and outcome evaluation. All nursing students are welcome to attend. Please arrive ten minutes early and bring a notebook.\n\nStudent Union",
  },
  {
    title: "大作文：老龄化与护理",
    prompt: "A chart shows that the demand for community nursing services has increased steadily among older adults.",
    structure: ["第一段：描述趋势。", "第二段：分析原因：老龄化、慢病、家庭照护压力。", "第三段：提出建议：社区护理、健康教育、数字随访。"],
    model:
      "The chart indicates a steady increase in the demand for community nursing services among older adults. This trend deserves attention because it reflects a broader change in public health needs.\n\nSeveral factors may explain the rise. As the population ages, more people live with chronic diseases and require long-term support rather than short hospital treatment. At the same time, many families find it difficult to provide professional care at home. Community nurses can fill this gap by offering health education, regular assessment and timely referral.\n\nTo respond to this trend, more resources should be allocated to community-based care. Training programs, digital follow-up systems and cooperation between hospitals and communities can help older adults remain independent and safe.",
  },
  {
    title: "大作文：医护沟通",
    prompt: "A picture shows a nurse explaining medication instructions patiently to an anxious patient.",
    structure: ["第一段：描述图画。", "第二段：说明沟通意义：安全、依从、信任。", "第三段：提出建议：通俗表达、确认理解、关注情绪。"],
    model:
      "In the picture, a nurse is explaining medication instructions to a worried patient with patience and clarity. The scene highlights the importance of communication in modern health care.\n\nGood communication is not a minor skill. It can reduce patients' anxiety, improve medication adherence and prevent avoidable errors. For nursing students, professional knowledge must be combined with the ability to explain risks and instructions in plain language.\n\nTherefore, nursing education should give more attention to communication training. Nurses should learn to listen carefully, avoid unnecessary technical terms and check whether patients have truly understood the information.",
  },
];

let currentDay = Number(localStorage.getItem("englishSite.day")) || 1;
let activeType = "all";

function byId(id) {
  return document.getElementById(id);
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function setView(view) {
  document.querySelectorAll(".view").forEach((item) => item.classList.toggle("active", item.id === view));
  document.querySelectorAll(".nav, .bottom").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderScores() {
  byId("scoreGrid").innerHTML = scoreParts
    .map(([score, title, text]) => `<article class="score-card"><strong>${score}</strong><h3>${title}</h3><p>${text}</p></article>`)
    .join("");
}

function renderRoutines() {
  byId("routineGrid").innerHTML = routines
    .map(([title, text]) => `<article class="routine-card"><h3>${title}</h3><p>${text}</p></article>`)
    .join("");
}

function renderDaySelect() {
  byId("daySelect").innerHTML = Array.from({ length: 30 }, (_, index) => `<option value="${index + 1}">Day ${index + 1}</option>`).join("");
  byId("daySelect").value = String(currentDay);
}

function dailyWords(day) {
  const start = ((day - 1) * 8) % wordBank.length;
  const newWords = Array.from({ length: 8 }, (_, index) => wordBank[(start + index) % wordBank.length]);
  const reviewStart = Math.max(0, start - 8);
  const reviewWords = Array.from({ length: 2 }, (_, index) => wordBank[(reviewStart + index) % wordBank.length]);
  return [...newWords, ...reviewWords.map((word) => ({ ...word, category: `复习：${word.category}` }))];
}

function renderWords() {
  byId("dayLabel").textContent = currentDay;
  byId("wordGrid").innerHTML = dailyWords(currentDay)
    .map(
      (item) => `
        <article class="word-card">
          <header>
            <h3>${item.word}</h3>
            <span class="tag">${item.category}</span>
          </header>
          <p><strong>${item.meaning}</strong></p>
          <p>${item.phrase}</p>
          <p class="passage">${item.sentence}</p>
        </article>`
    )
    .join("");
}

function renderKnowledge() {
  byId("knowledgeGrid").innerHTML = knowledge
    .map(
      (item) => `
        <article class="knowledge-card">
          <h3>${item.title}</h3>
          ${list(item.points)}
          <p><strong>训练：</strong>${item.task}</p>
        </article>`
    )
    .join("");
}

function renderExamples() {
  const data = examples.filter((item) => activeType === "all" || item.type === activeType);
  byId("exampleGrid").innerHTML = data
    .map(
      (item) => `
        <article class="example-card">
          <span class="type-tag">${item.type}</span>
          <h3>${item.title}</h3>
          <p class="passage">${item.passage}</p>
          <p><strong>${item.question}</strong></p>
          ${item.options ? `<div class="options">${item.options.map((option, index) => `<div class="option">${String.fromCharCode(65 + index)}. ${option}</div>`).join("")}</div>` : ""}
          <details>
            <summary>查看答案和解析</summary>
            <p class="analysis"><strong>答案：</strong>${item.answer}</p>
            <p class="analysis"><strong>解析：</strong>${item.analysis}</p>
          </details>
        </article>`
    )
    .join("");
}

function renderWriting() {
  byId("writingGrid").innerHTML = writings
    .map(
      (item) => `
        <article class="writing-card">
          <h3>${item.title}</h3>
          <p class="passage">${item.prompt}</p>
          <h4>写作结构</h4>
          ${list(item.structure)}
          <details>
            <summary>查看范文</summary>
            <pre class="model">${item.model}</pre>
          </details>
        </article>`
    )
    .join("");
}

function attachEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.jump));
  });

  byId("daySelect").addEventListener("change", (event) => {
    currentDay = Number(event.target.value);
    localStorage.setItem("englishSite.day", String(currentDay));
    renderWords();
  });

  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeType = button.dataset.type;
      document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
      renderExamples();
    });
  });

  const notes = byId("notes");
  notes.value = localStorage.getItem("englishSite.notes") || "";
  notes.addEventListener("input", () => localStorage.setItem("englishSite.notes", notes.value));
}

renderScores();
renderRoutines();
renderDaySelect();
renderWords();
renderKnowledge();
renderExamples();
renderWriting();
attachEvents();
