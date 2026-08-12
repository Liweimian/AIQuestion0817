const topics = [
  { id:"t1", title:"龙岗易错二练：有理数符号与运算", focus:"错因诊断、针对变式、二次过关", reason:"龙岗易错二练", questions:15, minutes:20, difficulty:"中等", source:"龙岗区易错专题", usage:386, tag:"special", tone:"sage" },
  { id:"t2", title:"2026 深圳南山区初一上期末数学真题", focus:"本地命题风格与阶段难度参考", reason:"深圳区级真题", highlight:"精品", questions:22, minutes:40, difficulty:"中等", source:"南山区初一上期末真题", usage:1206, tag:"paper", tone:"cream" },
  { id:"t3", title:"深圳情境数学：代数式建模专项题单", focus:"深圳真实情境改编，考点不变、题面更新", reason:"深圳情境题", highlight:"名师推荐", questions:12, minutes:25, difficulty:"中等", source:"深圳情境题专题", usage:842, tag:"special", tone:"lilac" },
  { id:"t4", title:"2024—2026 深圳期末真题汇编：轴对称", focus:"把分散真题整理成可直接使用的课内专题", reason:"真题汇编", highlight:"精品", questions:24, minutes:35, difficulty:"较难", source:"深圳初一下期末真题", usage:1532, tag:"paper", tone:"mist" },
  { id:"t5", title:"2025—2026 深圳期末真题汇编：全等三角形", focus:"按考点重组近两年深圳区级真题", reason:"真题汇编", highlight:"精品", questions:18, minutes:30, difficulty:"中等", source:"深圳初一下期末真题", usage:613, tag:"special", tone:"sage" },
  { id:"t6", title:"初一期末高频易错周测题单", focus:"名校周测，适合分层选题与命题参考", reason:"名校资源", highlight:"精品", questions:18, minutes:30, difficulty:"较难", source:"深圳外国语学校龙岗学校", usage:1089, tag:"paper", tone:"cream" },
  { id:"t7", title:"整式运算高频易错巩固题单", focus:"整式运算常见错误归纳", reason:"热门系列", questions:14, minutes:20, difficulty:"中等", source:"全品学练考", usage:522, tag:"workbook", tone:"lilac" },
  { id:"t8", title:"七上正负数与数轴：概念理解过关题单", focus:"理解实际意义，准确判断", reason:"七上第1章", questions:16, minutes:20, difficulty:"简单", source:"区教研精选", usage:762, tag:"chapter", tone:"sage" },
  { id:"t9", title:"有理数运算基础过关与易错自测", focus:"贴近教材知识链与能力层级", reason:"本地教辅", highlight:"精品", questions:20, minutes:25, difficulty:"中等", source:"多维导学案", usage:1143, tag:"workbook", tone:"cream" },
  { id:"t10", title:"整式加减高频易错：去括号与合并同类项", focus:"合并同类项与化简", reason:"七上第3章", questions:18, minutes:20, difficulty:"简单", source:"龙岗区教研室", usage:908, tag:"chapter", tone:"lilac" },
  { id:"t11", title:"一元一次方程应用：审题建模专项", focus:"顺序解题方法与实际应用", reason:"本校老师共建", questions:22, minutes:25, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"李老师", school:"启航实验学校", tone:"amber" }, usage:1221, tag:"school", tone:"mist" },
  { id:"t12", title:"几何初步：图形语言与概念辨析", focus:"直线、射线和线段", reason:"七上第4章", questions:14, minutes:15, difficulty:"简单", source:"龙岗区实验学校", author:{ name:"赵老师", school:"龙岗区实验学校", tone:"mint" }, usage:669, tag:"school", tone:"sage" },
  { id:"t13", title:"有理数混合运算：方法进阶与提速", focus:"综合运算与技巧提升", reason:"七上第5章", questions:20, minutes:25, difficulty:"中等", source:"区教研精选", usage:1015, tag:"chapter", tone:"cream" },
  { id:"t14", title:"2026 深圳福田区初一下期中数学真题", focus:"深圳真实阶段性考试，适合校准教学进度与难度", reason:"深圳区级真题", highlight:"最新", questions:20, minutes:35, difficulty:"较难", source:"福田区初一下期中真题", usage:984, tag:"paper", tone:"sage" },
  { id:"t15", title:"坂田片区七上课堂小测：整式加减", focus:"课堂检测，及时巩固", reason:"课堂小测", highlight:"最新", questions:12, minutes:15, difficulty:"简单", source:"坂田片区教研", author:{ name:"黄老师", school:"坂田实验学校", tone:"amber" }, usage:512, tag:"chapter", tone:"cream" },
  { id:"t16", title:"月考前查漏补缺：七上核心考点精选", focus:"月考精选，重点突破", reason:"月考精选", questions:18, minutes:25, difficulty:"中等", source:"龙岗区实验学校", author:{ name:"赵老师", school:"龙岗区实验学校", tone:"mint" }, usage:1266, tag:"school", tone:"lilac" },
  { id:"t17", title:"七上易错题二次过关：概念到变式", focus:"教研共建，优质共享", reason:"教研共建", highlight:"最新", questions:16, minutes:20, difficulty:"中等", source:"平湖片区教研", author:{ name:"刘老师", school:"平湖外国语学校", tone:"violet" }, usage:698, tag:"school", tone:"mist" },
  { id:"t18", title:"深圳中考衔接：数与式思维进阶题单", focus:"教材变式、探究题与优生挑战", reason:"巩固复习", highlight:"名师推荐", questions:22, minutes:35, difficulty:"较难", source:"深圳中考专题", usage:1374, tag:"special", tone:"sage" },
  { id:"t19", title:"课内基础到探究题：进阶提升题单", focus:"从课内基础过渡到探究与培优", reason:"提优配套", questions:18, minutes:30, difficulty:"中等", source:"常用提优训练系列", usage:831, tag:"workbook", tone:"cream" },
  { id:"t20", title:"典型错法拆解：有理数与方程方法点拨", focus:"归纳典型错法并配套针对变式", reason:"老师收藏较多", questions:16, minutes:25, difficulty:"中等", source:"易错方法系列", usage:742, tag:"workbook", tone:"lilac" },
  { id:"t21", title:"期中错题重组：三个班高频失分题", focus:"基于三个班真实易错题", reason:"本校老师共建", questions:15, minutes:22, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:96, tag:"school", tone:"mist" },
  { id:"t22", title:"有理数课堂诊断：概念掌握过关题单", focus:"当堂检测概念掌握情况", reason:"课堂小测", questions:8, minutes:5, difficulty:"简单", source:"龙城初级中学", author:{ name:"周老师", school:"龙城初级中学", tone:"rose" }, usage:728, tag:"chapter", tone:"sage" },
  { id:"t23", title:"一元一次方程移项与符号易错专练", focus:"集中突破移项与符号错误", reason:"高频易错", questions:14, minutes:18, difficulty:"中等", source:"区教研精选", usage:1186, tag:"chapter", tone:"cream" },
  { id:"t24", title:"线段与角：易混概念辨析与规范表达", focus:"易混概念判断与规范表达", reason:"概念辨析", questions:12, minutes:15, difficulty:"简单", source:"龙岗区实验学校", usage:635, tag:"chapter", tone:"lilac" },
  { id:"t25", title:"2026 深圳罗湖区初一下期末数学真题", focus:"深圳真实阶段性考试，反映本地命题风格", reason:"深圳区级真题", highlight:"最新", questions:20, minutes:30, difficulty:"中等", source:"罗湖区初一下期末真题", usage:1458, tag:"paper", tone:"mist" },
  { id:"t26", title:"整式运算同步精练：基础到综合", focus:"同步巩固整式化简方法", reason:"热门系列", questions:18, minutes:25, difficulty:"中等", source:"原创新课堂", usage:884, tag:"workbook", tone:"sage" },
  { id:"t27", title:"期末选择题高频考法：审题与快速提分", focus:"高频选择题与排除方法", reason:"本周热门", questions:16, minutes:20, difficulty:"中等", source:"龙岗区教研室", usage:1328, tag:"paper", tone:"cream" },
  { id:"t28", title:"数学阅读理解：真实情境信息提取", focus:"从真实情境中提取数量关系", reason:"情境专项", questions:10, minutes:22, difficulty:"较难", source:"区教研精选", usage:576, tag:"special", tone:"lilac" },
  { id:"t29", title:"周末分层作业 A：基础巩固与补弱", focus:"面向基础薄弱学生巩固", reason:"基础巩固", questions:15, minutes:20, difficulty:"简单", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:168, tag:"school", tone:"mist" },
  { id:"t30", title:"周末分层作业 B：综合应用与提升", focus:"基础巩固后的综合应用", reason:"综合应用", questions:18, minutes:28, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:152, tag:"school", tone:"sage" },
  { id:"t31", title:"代数式建模：真实情境列式专项", focus:"由情境列式并解释代数式", reason:"方法专项", questions:13, minutes:18, difficulty:"中等", source:"平湖片区教研", usage:692, tag:"special", tone:"cream" },
  { id:"t32", title:"几何语言：符号转换与规范书写专项", focus:"训练符号语言与文字表达", reason:"规范表达专项", questions:12, minutes:20, difficulty:"中等", source:"龙岗区教研室", usage:804, tag:"special", tone:"lilac" },
  { id:"t33", title:"期中压轴题：关键步骤分层拆解", focus:"按关键步骤拆解综合题", reason:"名校共建", questions:9, minutes:30, difficulty:"较难", source:"龙岗区四中联考", usage:1036, tag:"paper", tone:"mist" },
  { id:"t34", title:"一元一次方程：典型题型与变式突破", focus:"典型方程题型与变式训练", reason:"热门系列", questions:20, minutes:30, difficulty:"中等", source:"多维导学案", usage:916, tag:"workbook", tone:"sage" },
  { id:"t35", title:"月考前查漏补缺：本月高频易错", focus:"快速覆盖本月教学重点", reason:"查漏补缺", highlight:"最新", questions:14, minutes:20, difficulty:"中等", source:"坂田片区教研", usage:1274, tag:"chapter", tone:"cream" },
  { id:"t36", title:"七上有理数方法：公开课配套小测", focus:"从概念辨析到方法迁移的课堂练习", reason:"名校公开交流", highlight:"精品", questions:12, minutes:18, difficulty:"中等", source:"深圳中学龙岗学校", usage:1682, tag:"school", tone:"sage" },
  { id:"t37", title:"期中压轴题：关键步骤与分层选题", focus:"按关键步骤拆分综合题，适合分层使用", reason:"名校教研共建", highlight:"精品", questions:10, minutes:28, difficulty:"较难", source:"龙岗区实验学校", usage:1436, tag:"school", tone:"cream" },
  { id:"t38", title:"数学阅读与真实情境建模题单", focus:"从真实语境中提取数量关系与条件", reason:"名校公开交流", highlight:"精品", questions:14, minutes:25, difficulty:"中等", source:"龙岗区外国语学校", usage:1298, tag:"school", tone:"lilac" },
  { id:"t39", title:"几何语言规范与推理进阶题单", focus:"强化图形语言、推理步骤与规范书写", reason:"名校教研共建", highlight:"精品", questions:16, minutes:24, difficulty:"中等", source:"龙城初级中学", usage:1184, tag:"school", tone:"mist" },
  { id:"t40", title:"有理数概念：数轴、相反数与绝对值过关", focus:"概念辨析、数轴表示与相反数", reason:"同步巩固", questions:16, minutes:20, difficulty:"简单", source:"多维导学案", usage:968, tag:"workbook", tone:"sage" },
  { id:"t41", title:"有理数单元检测：运算、应用与探究", focus:"覆盖运算法则、混合运算与实际应用", reason:"单元检测", highlight:"精品", questions:22, minutes:35, difficulty:"中等", source:"多维导学案", usage:1046, tag:"workbook", tone:"mist" },
  { id:"t42", title:"整式加减课时精练：去括号与合并同类项", focus:"合并同类项与去括号课时训练", reason:"热门系列", questions:14, minutes:18, difficulty:"简单", source:"全品学练考", usage:786, tag:"workbook", tone:"cream" },
  { id:"t43", title:"一元一次方程同步检测：解法与应用", focus:"从解方程到实际问题的阶段检测", reason:"热门系列", questions:20, minutes:30, difficulty:"中等", source:"全品学练考", usage:852, tag:"workbook", tone:"lilac" },
  { id:"t44", title:"有理数规律探究与思维进阶", focus:"从基础运算过渡到规律探究", reason:"能力提高", questions:15, minutes:28, difficulty:"较难", source:"常用提优训练系列", usage:734, tag:"workbook", tone:"sage" },
  { id:"t45", title:"方程应用培优：复杂数量关系建模", focus:"复杂数量关系与多步骤建模", reason:"培优专题", questions:12, minutes:30, difficulty:"较难", source:"常用提优训练系列", usage:698, tag:"workbook", tone:"cream" },
  { id:"t46", title:"有理数符号易错二练：错因到变式", focus:"定位符号错误并完成针对变式", reason:"易错二练", questions:16, minutes:22, difficulty:"中等", source:"易错方法系列", usage:824, tag:"workbook", tone:"lilac" },
  { id:"t47", title:"方程移项、去分母与检验错法点拨", focus:"集中解决移项、去分母与检验问题", reason:"错法点拨", questions:14, minutes:24, difficulty:"中等", source:"易错方法系列", usage:778, tag:"workbook", tone:"mist" },
  { id:"t48", title:"整式加减同步方法：易错点与变式", focus:"围绕课时重点进行方法归纳", reason:"热门系列", questions:15, minutes:20, difficulty:"中等", source:"原创新课堂", usage:812, tag:"workbook", tone:"sage" },
  { id:"t49", title:"几何初步同步方法：图形语言与推理", focus:"直线、射线、线段与角的规范表达", reason:"热门系列", questions:16, minutes:22, difficulty:"中等", source:"原创新课堂", usage:744, tag:"workbook", tone:"cream" },
  { id:"t50", title:"一元一次方程题型突破：解法到应用", focus:"分类掌握方程典型题型和变式", reason:"热门系列", questions:18, minutes:28, difficulty:"中等", source:"多维导学案", usage:936, tag:"workbook", tone:"lilac" },
  { id:"t51", title:"几何语言专题：读图、转换与规范表达", focus:"训练几何语言转换与推理书写", reason:"热门系列", questions:14, minutes:24, difficulty:"中等", source:"多维导学案", usage:868, tag:"workbook", tone:"mist" }
];
const workbookAlbums = [
  { id: "duowei", name: "多维导学案", subtitle: "课时练 + 单元检测", source: "多维导学案" },
  { id: "quanpin", name: "全品学练考", subtitle: "同步精练体系", source: "全品学练考" },
  { id: "yuanchuang", name: "原创新课堂", subtitle: "课堂同步训练", source: "原创新课堂" },
  { id: "tiyou", name: "常用提优训练系列", subtitle: "能力进阶与培优", source: "常用提优训练系列" },
  { id: "yicuo", name: "易错方法系列", subtitle: "错因拆解与变式", source: "易错方法系列" }
];
const albumFilterState = { view: "album", origin: "all", query: "" };
const resourceOriginText = topic => `${topic.title} ${topic.reason} ${topic.focus} ${topic.source}`;
const resourceOriginOptions = [
  { id: "all", label: "全部" },
  {
    id: "jiaocai",
    label: "教材",
    match: topic => {
      const text = resourceOriginText(topic);
      if (/真题|汇编/.test(text)) return false;
      return topic.tag === "chapter" || /第\d章|教材|同步|课堂小测|单元检测|课时/.test(text);
    }
  },
  {
    id: "jiaofu",
    label: "教辅",
    match: topic => {
      const text = resourceOriginText(topic);
      if (/真题|汇编/.test(text)) return false;
      return topic.tag === "workbook" || /导学案|学练考|新课堂|提优|易错方法|教辅|系列/.test(text);
    }
  },
  { id: "zhenti", label: "真题汇编", match: topic => /真题|汇编/.test(resourceOriginText(topic)) }
];

const curatedOriginOptions = resourceOriginOptions.filter(option => option.id !== "jiaocai");

function matchesResourceOrigin(topic, origin) {
  if (origin === "all") return true;
  const option = resourceOriginOptions.find(item => item.id === origin);
  return option?.match?.(topic) ?? true;
}

// 首页可以被 AI 试卷工作台的「首页」页签以 iframe 嵌入，此时打开题单交给外层开标签页
const isEmbedded = (() => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
})();

function requestParentOpenTopic(topicId, context, query, extra = {}) {
  window.parent.postMessage({
    type: "aiq-open-topic",
    topicId,
    context,
    query,
    title: extra.title || "",
    shortTitle: extra.shortTitle || "",
    lessonKey: extra.lessonKey || ""
  }, "*");
}

function requestParentOpenFilter(filter, extra = {}) {
  window.parent.postMessage({ type: "aiq-open-filter", filter, ...extra }, "*");
}

window.addEventListener("message", event => {
  const data = event.data;
  if (!data || typeof data !== "object") return;
  if (data.type === "aiq-set-filter" && typeof data.filter === "string") {
    if (document.querySelector(`#filterChips [data-filter="${data.filter}"]`) || data.filter === "all") {
      prepareFilterOpen(data.filter, data);
      setMainFilter(data.filter === "all" ? "all" : data.filter);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
});

const byId = Object.fromEntries(topics.map(topic => [topic.id, topic]));
const toneMap = { sage:"var(--sage)", cream:"var(--cream)", lilac:"var(--lilac)", mist:"var(--mist)" };
const aiPlaceholder = "描述你想要的题单，例如：七上有理数易错题，15 题，中等难度";
const bankStats = { topicTotal: 28460, weeklyNew: 320, questionTotal: 6000000 };
let currentFilter = "all";
let currentQuery = "";
let aiDockObserver = null;
let aiModalOpen = false;
let hasUserScrolled = false;
let filterManuallyExpanded = false;
const feedFilterState = { type:"all", difficulty:"all", source:"all", feature:"all", sort:"default" };
const paperFilterState = {
  examType: "final",
  year: "all",
  grade: "all",
  source: "all",
  sort: "latest",
  query: ""
};
const paperExamTypes = {
  final: { label: "期末", match: topic => /期末/.test(topic.title) },
  midterm: { label: "期中", match: topic => /期中/.test(topic.title) },
  monthly: { label: "月考", match: topic => /月考/.test(topic.title) },
  unit: { label: "单元测试", match: topic => /单元|周测/.test(topic.title) },
  other: { label: "其他", match: topic => topic.tag === "paper" && !/期末|期中|月考|单元|周测|中考|小升初|模拟/.test(topic.title) },
  "zhongkao-real": { label: "真题", match: topic => /中考|小升初|真题汇编/.test(topic.title) },
  "zhongkao-mock": { label: "模拟", match: topic => /模拟/.test(topic.title) }
};
const paperYearOptions = ["all", "2026", "2025", "2024", "2023", "earlier"];
const paperGradeOptions = [
  { id: "all", label: "全部" },
  { id: "g9-2", label: "九年级下", match: /九年级下|初三下/ },
  { id: "g9-1", label: "九年级上", match: /九年级上|初三上/ },
  { id: "g8-2", label: "八年级下", match: /八年级下|初二下/ },
  { id: "g8-1", label: "八年级上", match: /八年级上|初二上/ },
  { id: "g7-2", label: "七年级下", match: /七年级下|初一下/ },
  { id: "g7-1", label: "七年级上", match: /七年级上|初一上/ }
];
const paperSourceOptions = [
  { id: "all", label: "全部" },
  { id: "public", label: "飞象公共库", match: topic => !topic.author && !/私有/.test(topic.source) },
  { id: "district", label: "龙岗区私有库", match: topic => /龙岗/.test(`${topic.source} ${topic.author?.school || ""}`) },
  { id: "school", label: "本校私有库", match: topic => Boolean(topic.author) }
];
const specialFilterState = { category: "all", difficulty: "all", origin: "all", query: "" };
const specialKnowledgeModules = [
  { id: "numbers", label: "数与式", match: topic => /有理数|整式|代数|数与式/.test(`${topic.title} ${topic.focus}`) },
  { id: "equations", label: "方程（组）与不等式（组）", match: topic => /方程|不等式/.test(`${topic.title} ${topic.focus}`) },
  { id: "functions", label: "函数", match: topic => /函数/.test(`${topic.title} ${topic.focus}`) },
  { id: "geo-basic", label: "几何初步", match: topic => /几何初步|图形初步|直线|射线|线段|图形语言/.test(`${topic.title} ${topic.focus}`) },
  { id: "triangle", label: "三角形", match: topic => /三角形|全等/.test(`${topic.title} ${topic.focus}`) },
  { id: "quadrilateral", label: "四边形", match: topic => /四边形/.test(`${topic.title} ${topic.focus}`) },
  { id: "circle", label: "圆", match: topic => /圆/.test(`${topic.title} ${topic.focus}`) },
  { id: "shape-change", label: "图形的变化", match: topic => /图形的变化|轴对称|变换/.test(`${topic.title} ${topic.focus}`) },
  { id: "statistics", label: "统计", match: topic => /统计/.test(`${topic.title} ${topic.focus}`) },
  { id: "probability", label: "概率", match: topic => /概率/.test(`${topic.title} ${topic.focus}`) }
];
const specialStandaloneCategories = [
  { id: "geo-model", label: "几何模型", match: topic => /几何模型|模型/.test(`${topic.title} ${topic.focus}`) },
  { id: "calc-practice", label: "计算专练", match: topic => /运算|计算/.test(`${topic.title} ${topic.focus}`) },
  { id: "hard-breakthrough", label: "难点突破", match: topic => /难点|压轴|培优|进阶|突破|较难/.test(`${topic.title} ${topic.focus} ${topic.difficulty}`) }
];
const specialDifficultyOptions = [
  { id: "all", label: "全部" },
  { id: "简单", label: "基础" },
  { id: "中等", label: "中等" },
  { id: "较难", label: "较难" }
];
const chapterFilterState = {
  section: "1-1",
  difficulty: "all",
  origin: "all",
  source: "all",
  query: "",
  openChapters: ["ch1"]
};
const chapterText = topic => `${topic.title} ${topic.focus} ${topic.reason}`;
const chapterNavTree = [
  {
    id: "ch1",
    label: "第一章 有理数",
    sections: [
      { id: "1-1", label: "1.1 正数和负数", match: topic => /正负数|正数|负数|数轴/.test(chapterText(topic)) },
      { id: "1-2", label: "1.2 有理数及其大小比较", match: topic => /大小比较|绝对值|相反数|有理数及其/.test(chapterText(topic)) },
      { id: "1-summary", label: "小结", match: topic => /第1章|第一章|有理数/.test(chapterText(topic)) }
    ]
  },
  { id: "ch2", label: "第二章 有理数的运算", match: topic => /第2章|第二章|混合运算|有理数.*运算|运算/.test(chapterText(topic)) },
  { id: "prac1", label: "综合与实践 进位制的认识与探究", match: topic => /进位|进制/.test(chapterText(topic)) },
  { id: "ch3", label: "第三章 代数式", match: topic => /第3章|第三章|代数式/.test(chapterText(topic)) },
  { id: "ch4", label: "第四章 整式的加减", match: topic => /第4章|第四章|整式/.test(chapterText(topic)) },
  { id: "ch5", label: "第五章 一元一次方程", match: topic => /第5章|第五章|方程/.test(chapterText(topic)) },
  { id: "ch6", label: "第六章 几何图形初步", match: topic => /第6章|第六章|几何|图形|线段|角|立体/.test(chapterText(topic)) },
  { id: "prac2", label: "综合与实践 设计学校田径运动会", match: topic => /田径|运动会|实践/.test(chapterText(topic)) }
];

const contentFeed = document.querySelector("#contentFeed");
const emptyState = document.querySelector("#emptyState");
const aiMask = document.querySelector("#aiMask");
const toast = document.querySelector("#toast");

function primaryTag(topic) {
  if (topic.highlight) return topic.highlight;
  if (topic.title.includes("真题")) return "真题汇编";
  if (topic.title.includes("易错")) return "高频易错";
  if (topic.author?.school && /深圳中学|龙岗区实验|龙岗区外国语|龙城初级|深圳外国语/.test(topic.author.school)) return "名校资源";
  if (topic.tag === "school") return "本地精选";
  if (topic.tag === "workbook") return "系列题单";
  if (topic.tag === "special") return "培优突破";
  return "基础巩固";
}

function topicTags(topic) {
  const tags = [];
  if (/期中/.test(topic.title)) tags.push("期中");
  else if (/期末/.test(topic.title)) tags.push("期末");
  else if (/月考/.test(topic.title)) tags.push("月考");
  if (/真题/.test(topic.title) || topic.tag === "paper") tags.push("真题");
  if (/压轴|提高|培优/.test(`${topic.title} ${topic.focus}`)) tags.push("压轴题");
  if (/教研|学校|校/.test(`${topic.source} ${topic.author?.school || ""}`)) tags.push("飞象教研");
  if (!tags.length) tags.push(topic.tag === "special" ? "专题练习" : "同步练习");
  return [...new Set(tags)].slice(0, 1);
}

function topicBrief(topic) {
  const briefs = {
    t36:"从概念辨析到方法迁移，适合公开课后的课堂巩固。",
    t37:"按关键步骤拆分综合题，方便课堂分层选题。",
    t4:"按考点重组深圳重点校真题，直观覆盖几何核心概念。",
    t18:"覆盖数与式多个单元，适合阶段复习与综合提升。"
  };
  return briefs[topic.id] || `${topic.focus}，共 ${topic.questions} 题，适合直接选用。`;
}

function isNamedExamPaper(topic) {
  return /期中|期末/.test(topic.title) && /真题|试卷|20\d{2}|学年/.test(topic.title);
}

function shouldOmitPaperIntro(topic, context = "feed") {
  if (context === "paper") return true;
  return isNamedExamPaper(topic);
}

function sourceMarkup(topic) {
  if (topic.author) {
    return `<div class="teacher-source"><span class="teacher-avatar ${topic.author.tone || ""}">${topic.author.name.slice(0, 1)}</span><span><b>${topic.author.name}</b><small>${topic.author.school}</small></span></div>`;
  }
  const icon = topic.tag === "workbook" ? "ri-book-2-line" : topic.tag === "paper" ? "ri-file-paper-2-line" : "ri-community-line";
  return `<div class="resource-source"><span class="source-type-icon"><i class="${icon}"></i></span><span><b>${topic.source}</b></span></div>`;
}

function topicCard(topic, options = "default") {
  const variant = typeof options === "string" ? options : options.variant || "default";
  const context = typeof options === "string" ? "feed" : options.context || "feed";
  const omitIntro = shouldOmitPaperIntro(topic, context);
  const examClass = omitIntro ? " exam-paper-card" : "";
  return `
    <article class="topic-card${variant === "featured" ? " featured-topic-card" : ""}${examClass}" data-topic="${topic.id}" data-source-name="${topic.source}" tabindex="0" role="button" aria-label="查看${topic.title}" style="--tone:${toneMap[topic.tone] || "var(--sage)"}">
      <div class="card-cover">
        <div class="card-signals"><span class="card-reason">${primaryTag(topic)}</span><span class="card-tag-list">${topicTags(topic).map(tag => `<em>${tag}</em>`).join("")}</span></div>
        <h3>${topic.title}</h3>
        ${omitIntro ? "" : `<p class="topic-brief">${topicBrief(topic)}</p>`}
        ${variant === "featured" ? `<p class="featured-topic-focus">${topic.focus}</p>` : ""}
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${topic.questions} 题</span>${omitIntro ? "" : `<span>${topic.difficulty}</span>`}</div>
        <div class="card-footer">
          ${sourceMarkup(topic)}
          <span class="card-usage">${topic.usage.toLocaleString()} 人使用</span>
          <button class="bookmark" data-bookmark aria-label="收藏题单"><i class="ri-bookmark-line"></i></button>
        </div>
      </div>
    </article>`;
}

function bookLessonRow(index, title, meta, usage, topicId = "t9") {
  const safeTitle = String(title).replace(/"/g, "&quot;");
  return `<button type="button" class="book-topic-row" data-topic="${topicId}" data-context="series" data-lesson-title="${safeTitle}" data-lesson-key="${safeTitle}"><i>${String(index).padStart(2, "0")}</i><span><b>${title}</b><small>${meta}</small></span><strong>${usage.toLocaleString()} 人使用</strong></button>`;
}

function bookLessonCell(title, topicId = "t9", questionCount = 12) {
  const safeTitle = String(title).replace(/"/g, "&quot;");
  return `<button type="button" class="sync-lesson-cell" data-topic="${topicId}" data-lesson-title="${safeTitle}" data-lesson-key="${safeTitle}"><span>${title}</span><strong>${questionCount} 题</strong></button>`;
}

function bookLessonGrid(lessons) {
  return `<div class="sync-lesson-grid">${lessons.map((lesson, index) => bookLessonCell(lesson.title, lesson.topic || "t9", lesson.questions || [12, 10, 14, 16, 15, 12, 20, 18][index] || 12)).join("")}</div>`;
}

const syncBookLessons = {
  duowei: [
    { title: "第 1 课时 生活中的立体图形（1）", topic: "t8" },
    { title: "第 2 课时 生活中的立体图形（2）", topic: "t8" },
    { title: "第 3 课时 从立体图形到平面图形（1）", topic: "t10" },
    { title: "第 4 课时 从立体图形到平面图形（2）", topic: "t4" },
    { title: "第 5 课时 从立体图形到平面图形（3）", topic: "t1" },
    { title: "第 6 课时 从三个方向看物体的形状", topic: "t24" },
    { title: "教材经典母题及变式", topic: "t10" },
    { title: "单元复习", topic: "t13" }
  ],
  quanpin: [
    { title: "认识生活中的立体图形", topic: "t8" },
    { title: "立体图形的构成", topic: "t8" },
    { title: "棱柱、圆柱、圆锥", topic: "t10" },
    { title: "展开与折叠", topic: "t4" },
    { title: "图形的认识与分类", topic: "t23" },
    { title: "综合应用", topic: "t13" },
    { title: "线段与角的度量", topic: "t10" },
    { title: "几何作图基础", topic: "t24" }
  ]
};

function homepagePracticeModule() {
  return `
    <section class="home-mod home-mod-practice" aria-label="同步练习与同步章节真题汇编">
      <div class="practice-split">
        <article class="practice-book home-panel">
          <header class="mod-head mod-head-compact">
            <span class="mod-kicker"><i class="ri-book-open-line"></i>同步练习</span>
            <button class="mod-link" type="button" data-open-filter="chapter">全部 <i class="ri-arrow-right-s-line"></i></button>
          </header>
          <div class="book-resource">
            <div class="book-detail">
              <div class="book-series-tabs" role="tablist" aria-label="同步练习系列">
                <button class="active" type="button" role="tab" aria-selected="true" data-book-tab="duowei"><span class="book-tab-icon" aria-hidden="true"><i class="ri-book-open-line"></i></span>多维导学案</button>
                <button type="button" role="tab" aria-selected="false" data-book-tab="quanpin">全品学练考</button>
              </div>
              <div class="book-tab-panel active" data-book-panel="duowei" role="tabpanel">
                ${bookLessonGrid(syncBookLessons.duowei)}
              </div>
              <div class="book-tab-panel" data-book-panel="quanpin" role="tabpanel" hidden>
                ${bookLessonGrid(syncBookLessons.quanpin)}
              </div>
            </div>
          </div>
        </article>
        <div class="practice-right-col">
          <aside class="bank-stats-bar" aria-label="题库概览">
            <span class="bank-stats-item"><strong id="statTopicTotal">—</strong><small>题单总量</small></span>
            <button class="bank-stats-item is-new" type="button" data-stat-jump aria-label="查看最新入库的题单">
              <strong id="statWeeklyNew">—</strong><small>7 天新增 <i class="ri-arrow-right-s-line"></i></small>
            </button>
            <span class="bank-stats-item"><strong id="statQuestionTotal">—</strong><small>题目总量</small></span>
          </aside>
          <article class="practice-compile home-panel">
            <header class="mod-head mod-head-compact">
              <span class="mod-kicker"><i class="ri-folder-chart-line"></i>同步章节真题汇编</span>
              <button class="mod-link" type="button" data-open-filter="chapter" data-open-origin="zhenti">全部 <i class="ri-arrow-right-s-line"></i></button>
            </header>
            <div class="compile-list">
              <button class="compile-row" data-topic="t4"><em>01</em><span><b>2023—2025 深圳重点校初一（上）期中数学汇编：正方体的展开与折叠（深圳版）</b><small>图形初步认识 · 高频考点整理</small></span><strong class="compile-qcount"><b>24</b><small>题</small></strong><i class="ri-arrow-right-s-line"></i></button>
              <button class="compile-row" data-topic="t23"><em>02</em><span><b>2023—2025 深圳各区初一（上）期末数学汇编：立体图形的识别与分类（深圳版）</b><small>各区期末真题 · 分类训练</small></span><strong class="compile-qcount"><b>26</b><small>题</small></strong><i class="ri-arrow-right-s-line"></i></button>
              <button class="compile-row" data-topic="t1"><em>03</em><span><b>2023—2025 深圳重点校初一（上）期中数学汇编：点、线、面、体（深圳版）</b><small>易错题分类 · 重点校真题</small></span><strong class="compile-qcount"><b>28</b><small>题</small></strong><i class="ri-arrow-right-s-line"></i></button>
              <button class="compile-row" data-topic="t10"><em>04</em><span><b>2023—2025 深圳各区初一（上）期中数学汇编：几何直观与空间观念（深圳版）</b><small>核心题型 · 重点校期中汇编</small></span><strong class="compile-qcount"><b>22</b><small>题</small></strong><i class="ri-arrow-right-s-line"></i></button>
            </div>
          </article>
        </div>
      </div>
    </section>`;
}

function paperBadge(tag) {
  if (tag === "最新") return "";
  if (tag === "深圳热门" || tag === "用的人多") {
    return `<span class="paper-mark is-hot" aria-label="${tag}"><i class="ri-fire-fill"></i></span>`;
  }
  if (tag === "高采用") {
    return `<span class="paper-mark is-adopt" aria-label="高采用"><i class="ri-thumb-up-fill"></i><em>采用</em></span>`;
  }
  if (tag === "期中" || tag === "期末") {
    return `<em class="paper-mark is-exam">${tag}</em>`;
  }
  return `<em class="paper-mark">${tag}</em>`;
}

function paperRibbon(tags) {
  return "";
}

function homepagePaperModule() {
  const papers = [
    { kind: "peer", label: "同类校", title: "龙岗区实验学校七年级（上）期中数学试卷", views: "8,642", downloads: "1,206", usage: "3,286", questions: "22 题", tags: ["期中", "深圳热门", "高采用"], topic: "t39" },
    { kind: "regional", label: "区统考", title: "福田区七年级（上）期中数学试卷", views: "5,462", downloads: "932", usage: "2,180", questions: "20 题", tags: ["期中", "最新", "深圳热门"], topic: "t14" },
    { kind: "group", label: "集团联考", title: "龙华区实验教育集团七年级（上）期中数学试卷", views: "4,108", downloads: "756", usage: "1,642", questions: "20 题", tags: ["期中", "高采用", "用的人多"], topic: "t37" },
    { kind: "famous", label: "名校试卷", title: "深圳中学七年级（上）期中数学试卷", views: "6,735", downloads: "1,184", usage: "2,860", questions: "22 题", tags: ["期中", "深圳热门", "高采用"], topic: "t36" },
    { kind: "peer", label: "同类校", title: "深圳外国语学校龙岗学校七年级（上）期末数学试卷", views: "3,286", downloads: "684", usage: "1,089", questions: "18 题", tags: ["期末", "高采用"], topic: "t6" },
    { kind: "regional", label: "区统考", title: "罗湖区七年级（上）期末数学试卷", views: "5,120", downloads: "890", usage: "1,458", questions: "20 题", tags: ["期末", "深圳热门", "最新"], topic: "t25" },
    { kind: "group", label: "集团联考", title: "龙岗区四中联考七年级（上）期中数学试卷", views: "3,980", downloads: "612", usage: "1,036", questions: "20 题", tags: ["期中", "高采用"], topic: "t33" },
    { kind: "famous", label: "名校试卷", title: "南山区七年级（上）期末数学试卷", views: "4,860", downloads: "978", usage: "1,206", questions: "22 题", tags: ["期末", "深圳热门", "高采用"], topic: "t2" }
  ];
  return `
    <section class="home-mod home-mod-papers" aria-label="试卷">
      <header class="mod-head mod-head-compact">
        <span class="mod-kicker"><i class="ri-file-list-3-line"></i>试卷</span>
        <button class="mod-link" type="button" data-open-filter="paper">更多试卷 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="paper-board">
        ${papers.map(item => `
          <button class="paper-card is-${item.kind}${item.tags.includes("最新") ? " has-ribbon" : ""}" type="button" data-topic="${item.topic}">
            ${paperRibbon(item.tags)}
            <div class="paper-card-head">
              <span class="paper-card-kind">${item.label}</span>
              <span class="paper-card-category">${item.tags.find(tag => tag === "期中" || tag === "期末") || "阶段测试"}</span>
              <span class="paper-card-badges" aria-label="资源标识">
                ${item.tags.includes("最新") ? '<span class="paper-mark is-new" aria-label="最新">NEW</span>' : ''}
                ${item.tags.some(tag => tag === "深圳热门" || tag === "用的人多") ? '<span class="paper-mark is-hot" aria-label="热门"><i class="ri-fire-fill"></i></span>' : ''}
                ${item.tags.includes("高采用") ? '<span class="paper-mark is-adopt" aria-label="高采用"><i class="ri-thumb-up-fill"></i></span>' : ''}
              </span>
            </div>
            <p class="paper-card-title">${item.title}</p>
            <div class="paper-card-foot paper-card-stats">
              <span><strong>${item.questions}</strong></span>
              <span><small><i class="ri-heart-3-line" aria-label="收藏量"></i></small><strong>${item.usage}</strong></span>
              <span><small><i class="ri-download-2-line" aria-label="下载量"></i></small><strong>${item.downloads}</strong></span>
            </div>
          </button>
        `).join("")}
      </div>
    </section>`;
}

function homepageSpecialModule() {
  const items = [
    { id: "t18", tags: ["跨单元", "阶段复习"], title: "数与式综合：有理数、整式与方程", meta: "22 题 · 中等—提高", short: "数与式综合" },
    { id: "t3", tags: ["深圳情境", "建模"], title: "真实情境中的代数式建模", meta: "12 题 · 中等", short: "代数式建模" },
    { id: "t32", tags: ["方法", "规范表达"], title: "几何语言转换与规范表达", meta: "12 题 · 基础—中等", short: "几何语言转换" },
    { id: "t1", tags: ["易错二练", "二次过关"], title: "有理数符号与运算易错二练", meta: "15 题 · 中等", short: "有理数易错" },
    { id: "t28", tags: ["阅读理解", "情境"], title: "数学阅读理解：情境信息提取", meta: "10 题 · 较难", short: "数学阅读" }
  ];
  return `
    <section class="home-mod home-mod-specials" aria-label="专题">
      <header class="mod-head mod-head-compact">
        <span class="mod-kicker"><i class="ri-focus-3-line"></i>专题</span>
        <button class="mod-link" type="button" data-open-filter="special">更多专题 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="special-rail">
        ${items.map((item, index) => `
          <button class="special-chip" type="button" data-topic="${item.id}" data-context="special" data-lesson-title="${item.title}" data-short-title="${item.short}">
            <span class="special-chip-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="special-chip-body">
              <span class="special-chip-tags">${item.tags.map(tag => `<em>${tag}</em>`).join("")}</span>
              <b>${item.title}</b>
              <small>${item.meta}</small>
            </span>
          </button>
        `).join("")}
      </div>
    </section>`;
}

function homepageAlbumModule() {
  const albums = workbookAlbums.map((album, index) => {
    const count = topics.filter(topic => topic.source === album.source).length;
    const tones = ["sage", "cream", "lilac", "mist", "sage"];
    const details = [
      ["课时练成套编排", "覆盖基础到综合", "导学案可直接布置"],
      ["课前热身精练", "课中巩固分层", "课后作业配套"],
      ["完整课时结构", "题型梯度清晰", "本地高质量资源"],
      ["能力层级清晰", "重点题型突破", "适合日常教学进度"],
      ["高频错因拆解", "同类变式训练", "二次过关巩固"]
    ];
    return { ...album, count, tone: tones[index % tones.length], details: details[index], downloads: (2108 + index * 367).toLocaleString() };
  });
  return `
    <section class="home-mod home-mod-albums" aria-label="专辑">
      <header class="mod-head mod-head-compact">
        <span class="mod-kicker"><i class="ri-book-shelf-line"></i>专辑</span>
        <button class="mod-link" type="button" data-open-filter="workbook">进入专辑库 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="album-shelf">
        ${albums.map((album, index) => `
          <button class="album-cover tone-${album.tone}" type="button" data-album-jump="${album.source}">
            <span class="album-cover-hero">
              <small><i class="ri-book-2-line"></i>${index === 3 ? "本地教辅" : "热门教辅"}</small>
              <b>${album.name}</b>
              <em>${album.subtitle}</em>
            </span>
            <span class="album-cover-body">
              <strong>${album.details[0]}</strong>
              <span class="album-feature-list">${album.details.slice(1).map(item => `<i>• ${item}</i>`).join("")}</span>
              <span class="album-cover-foot"><em>${album.count + 12} 份</em><em>${album.downloads} 下载</em><b>打开专辑 <i class="ri-arrow-right-line"></i></b></span>
            </span>
          </button>
        `).join("")}
      </div>
    </section>`;
}

function homepageSeriesSection() {
  return `
    <div class="home-first-screen">
      ${homepagePracticeModule()}
      ${homepagePaperModule()}
      ${homepageSpecialModule()}
    </div>
    ${homepageAlbumModule()}`;
}

const feedTopicIds = ["t36","t37","t4","t6","t25","t41","t9","t18","t1","t16","t14","t35","t11","t23","t40","t3","t38","t39","t21","t2","t27","t10","t17","t33","t5","t8","t13","t15","t19","t20","t22","t24","t26","t28","t29","t30","t31","t32","t34","t42","t43","t44","t45","t46","t47","t48","t49","t50","t51"];

function infiniteFeedMarkup() {
  return `
    <section id="squareSection" class="endless-batch" data-square-section>
      <div class="square-filter-collapsed" data-filter-collapsed aria-hidden="false">
        <div class="square-filter-toolbar" data-filter-toolbar>
          <button class="filter-trigger" type="button" data-filter-toggle aria-expanded="false">
            <i class="ri-equalizer-3-line"></i><span>筛选</span><b data-filter-count hidden>0</b><i class="ri-arrow-down-s-line"></i>
          </button>
          <div class="active-filter-chips" data-active-filter-chips></div>
          <div class="sort-control">${filterButton("sort", "default", "推荐", true)}${filterButton("sort", "latest", "最新")}${filterButton("sort", "usage", "使用量")}</div>
        </div>
      </div>
      <div class="square-filter-panel" aria-label="题单广场筛选">
        <div class="square-filter-row"><span>难度</span><div>${filterButton("difficulty", "all", "不限", true)}${filterButton("difficulty", "简单", "基础")}${filterButton("difficulty", "中等", "中等")}${filterButton("difficulty", "较难", "提高")}</div></div>
        <div class="square-filter-row"><span>来源</span><div>${filterButton("source", "all", "全部", true)}${filterButton("source", "local", "本地资源")}${filterButton("source", "famous", "名校资源")}${filterButton("source", "school", "本校共享")}${filterButton("source", "series", "系列题单")}</div></div>
        <div class="square-filter-row"><span>特色</span><div>${filterButton("feature", "all", "全部", true)}${filterButton("feature", "精品", "精品")}${filterButton("feature", "名师推荐", "名师推荐")}${filterButton("feature", "真题汇编", "真题汇编")}${filterButton("feature", "最新", "最新")}</div></div>
        <div class="filter-panel-footer"><span>可组合多个条件筛选题单</span><button type="button" data-filter-reset>重置筛选</button></div>
      </div>
      <div class="flat-resource-grid" data-endless-grid></div>
      <div class="square-empty" data-feed-empty hidden>暂时没有符合全部条件的题单，减少一个筛选条件试试。</div>
    </section>`;
}

function filterButton(key, value, label, active = false) {
  return `<button class="${active ? "active" : ""}" data-feed-key="${key}" data-feed-value="${value}">${label}</button>`;
}

const filterSummaryLabels = {
  type: { all:"全部", sync:"同步练习", special:"专项练习", paper:"试卷" },
  difficulty: { all:"不限", 简单:"基础", 中等:"中等", 较难:"提高" },
  source: { all:"全部", local:"本地资源", famous:"名校资源", school:"本校共享", series:"系列题单" },
  feature: { all:"全部", 精品:"精品", 名师推荐:"名师推荐", 真题汇编:"真题汇编", 最新:"最新" },
  sort: { default:"推荐", usage:"使用量", latest:"最新" }
};

function updateFilterSummary() {
  const section = document.querySelector("[data-square-section]");
  if (!section) return;
  const activeKeys = ["difficulty", "source", "feature"].filter(key => feedFilterState[key] !== "all");
  const chipBox = section.querySelector("[data-active-filter-chips]");
  chipBox.innerHTML = activeKeys.length
    ? activeKeys.map(key => `<button class="active-filter-chip" type="button" data-clear-filter="${key}">${filterSummaryLabels[key][feedFilterState[key]]}<i class="ri-close-line"></i></button>`).join("")
    : "";
  const count = section.querySelector("[data-filter-count]");
  count.hidden = activeKeys.length === 0;
  count.textContent = String(activeKeys.length);
  const sortButton = section.querySelector(`.sort-control [data-feed-key="sort"].active`);
  if (sortButton) sortButton.setAttribute("aria-label", `当前选择：${filterSummaryLabels.sort[feedFilterState.sort]}`);
}

function setSquareFilterCollapsed(collapsed) {
  const section = document.querySelector("[data-square-section]");
  if (!section) return;
  section.classList.toggle("is-filter-collapsed", collapsed);
  const summaryBar = section.querySelector("[data-filter-collapsed]");
  const toggle = section.querySelector("[data-filter-toggle]");
  summaryBar.setAttribute("aria-hidden", "false");
  toggle.setAttribute("aria-expanded", String(!collapsed));
  updateFilterSummary();
}

function homepageFeed() {
  return homepageSeriesSection();
}

function paperTopics() {
  return topics.filter(topic => topic.tag === "paper");
}

function paperMatchesYear(topic, year) {
  if (year === "all") return true;
  if (year === "earlier") return !/(202[3-6]|2030)/.test(topic.title);
  return topic.title.includes(year);
}

function paperMatchesGrade(topic, grade) {
  if (grade === "all") return true;
  const option = paperGradeOptions.find(item => item.id === grade);
  return option?.match?.test(topic.title) ?? true;
}

function paperMatchesSource(topic, source) {
  if (source === "all") return true;
  const option = paperSourceOptions.find(item => item.id === source);
  return option?.match?.(topic) ?? true;
}

function paperMatchesExamType(topic, examType) {
  const matcher = paperExamTypes[examType]?.match;
  return matcher ? matcher(topic) : true;
}

function filteredPaperTopics() {
  const keyword = paperFilterState.query.trim().toLowerCase();
  let list = paperTopics().filter(topic =>
    paperMatchesExamType(topic, paperFilterState.examType)
    && paperMatchesYear(topic, paperFilterState.year)
    && paperMatchesGrade(topic, paperFilterState.grade)
    && paperMatchesSource(topic, paperFilterState.source)
    && (!keyword || `${topic.title} ${topic.source} ${topic.focus}`.toLowerCase().includes(keyword))
  );
  if (paperFilterState.sort === "recommend") {
    list = [...list].sort((a, b) => b.usage - a.usage);
  } else {
    list = [...list].sort((a, b) => {
      const latestDelta = (b.highlight === "最新" ? 1 : 0) - (a.highlight === "最新" ? 1 : 0);
      return latestDelta || b.id.localeCompare(a.id);
    });
  }
  return list;
}

function paperFilterTagGroup(name, options, activeValue, dataAttr) {
  return `
    <div class="paper-filter-row">
      <span class="paper-filter-label">${name}</span>
      <div class="paper-filter-tags">
        ${options.map(option => {
          const value = typeof option === "string" ? option : option.id;
          const label = typeof option === "string"
            ? (value === "all" ? "全部" : value === "earlier" ? "更早之前" : value)
            : option.label;
          return `<button type="button" class="${activeValue === value ? "active" : ""}" ${dataAttr}="${value}">${label}</button>`;
        }).join("")}
      </div>
    </div>`;
}

function paperCategoryView() {
  const list = filteredPaperTopics();
  const isZhongkao = ["zhongkao-real", "zhongkao-mock"].includes(paperFilterState.examType);
  return `
    <section class="category-detail paper-category-view">
      <div class="resource-browser paper-browser">
        <nav class="paper-sidebar" aria-label="试卷分类">
          <div class="paper-sidebar-group ${isZhongkao ? "" : "open"}">
            <button class="paper-sidebar-group-toggle" type="button" aria-expanded="${!isZhongkao}">
              <i class="ri-${isZhongkao ? "arrow-right" : "arrow-down-s"}-line"></i><span>同步试卷</span>
            </button>
            <div class="paper-sidebar-items" ${isZhongkao ? "hidden" : ""}>
              ${["final", "midterm", "monthly", "unit", "other"].map(type => `
                <button type="button" class="${paperFilterState.examType === type ? "active" : ""}" data-paper-type="${type}">${paperExamTypes[type].label}</button>
              `).join("")}
            </div>
          </div>
          <div class="paper-sidebar-group ${isZhongkao ? "open" : ""}">
            <button class="paper-sidebar-group-toggle" type="button" aria-expanded="${isZhongkao}">
              <i class="ri-${isZhongkao ? "arrow-down-s" : "arrow-right"}-line"></i><span>小升初</span>
            </button>
            <div class="paper-sidebar-items" ${isZhongkao ? "" : "hidden"}>
              ${["zhongkao-real", "zhongkao-mock"].map(type => `
                <button type="button" class="${paperFilterState.examType === type ? "active" : ""}" data-paper-type="${type}">${paperExamTypes[type].label}</button>
              `).join("")}
            </div>
          </div>
        </nav>
        <div class="paper-browser-main">
          <div class="paper-filter-panel">
            ${paperFilterTagGroup("学年", paperYearOptions, paperFilterState.year, "data-paper-year")}
            <div class="paper-filter-row">
              <span class="paper-filter-label">地区</span>
              <button class="paper-filter-select" type="button"><span>深圳市龙岗区</span><i class="ri-arrow-down-s-line"></i></button>
            </div>
            ${paperFilterTagGroup("年级", paperGradeOptions, paperFilterState.grade, "data-paper-grade")}
            ${paperFilterTagGroup("来源", paperSourceOptions, paperFilterState.source, "data-paper-source")}
            <label class="paper-filter-search">
              <span class="paper-filter-label">搜索</span>
              <div class="paper-search-field">
                <i class="ri-search-line"></i>
                <input data-paper-search type="search" value="${paperFilterState.query.replace(/"/g, "&quot;")}" placeholder="请输入试卷名称或其他关键词进行搜索" />
              </div>
            </label>
          </div>
          <div class="paper-list-toolbar">
            <div class="paper-list-tabs" role="tablist" aria-label="试卷排序">
              <button type="button" class="${paperFilterState.sort === "latest" ? "active" : ""}" data-paper-sort="latest" role="tab">最新</button>
              <button type="button" class="${paperFilterState.sort === "recommend" ? "active" : ""}" data-paper-sort="recommend" role="tab">推荐</button>
            </div>
            <span class="paper-list-count" data-paper-result-count>试卷 共 ${list.length.toLocaleString()} 份</span>
          </div>
          <div class="resource-card-grid paper-result-grid">${list.map(topic => topicCard(topic, { context: "paper" })).join("")}</div>
          <div class="paper-empty" ${list.length ? "hidden" : ""}>没有找到匹配的试卷，试试调整筛选条件。</div>
        </div>
      </div>
    </section>`;
}

function applyPaperFilters(options = {}) {
  if (options.examType) paperFilterState.examType = options.examType;
  if (options.year) paperFilterState.year = options.year;
  if (options.grade) paperFilterState.grade = options.grade;
  if (options.source) paperFilterState.source = options.source;
  if (options.sort) paperFilterState.sort = options.sort;
  if (typeof options.query === "string") paperFilterState.query = options.query;

  const panel = document.querySelector(".paper-category-view");
  if (!panel) return;

  const list = filteredPaperTopics();
  panel.querySelectorAll("[data-paper-type]").forEach(button => {
    button.classList.toggle("active", button.dataset.paperType === paperFilterState.examType);
  });
  panel.querySelectorAll("[data-paper-year]").forEach(button => {
    button.classList.toggle("active", button.dataset.paperYear === paperFilterState.year);
  });
  panel.querySelectorAll("[data-paper-grade]").forEach(button => {
    button.classList.toggle("active", button.dataset.paperGrade === paperFilterState.grade);
  });
  panel.querySelectorAll("[data-paper-source]").forEach(button => {
    button.classList.toggle("active", button.dataset.paperSource === paperFilterState.source);
  });
  panel.querySelectorAll("[data-paper-sort]").forEach(button => {
    button.classList.toggle("active", button.dataset.paperSort === paperFilterState.sort);
  });

  const grid = panel.querySelector(".paper-result-grid");
  if (grid) {
    grid.innerHTML = list.map(topic => topicCard(topic, { context: "paper" })).join("");
    bindContentEvents(grid);
  }
  const count = panel.querySelector("[data-paper-result-count]");
  if (count) count.textContent = `试卷 共 ${list.length.toLocaleString()} 份`;
  const empty = panel.querySelector(".paper-empty");
  if (empty) empty.hidden = list.length > 0;

  const isZhongkao = ["zhongkao-real", "zhongkao-mock"].includes(paperFilterState.examType);
  panel.querySelectorAll(".paper-sidebar-group").forEach((group, index) => {
    const open = index === 0 ? !isZhongkao : isZhongkao;
    group.classList.toggle("open", open);
    const toggle = group.querySelector(".paper-sidebar-group-toggle");
    const items = group.querySelector(".paper-sidebar-items");
    const icon = toggle?.querySelector("i");
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
    if (items) items.hidden = !open;
    if (icon) icon.className = open ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line";
  });
}

function specialTopics() {
  return topics.filter(topic => topic.tag === "special");
}

function specialCategoryMatcher(category) {
  if (category === "all") return () => true;
  const item = [...specialKnowledgeModules, ...specialStandaloneCategories].find(entry => entry.id === category);
  return item?.match ?? (() => true);
}

function specialCategoryLabel(category) {
  if (category === "all") return "全部资源";
  return [...specialKnowledgeModules, ...specialStandaloneCategories].find(entry => entry.id === category)?.label || "全部资源";
}

function filteredSpecialTopics() {
  const keyword = specialFilterState.query.trim().toLowerCase();
  const matcher = specialCategoryMatcher(specialFilterState.category);
  return specialTopics()
    .filter(topic => matcher(topic))
    .filter(topic => specialFilterState.difficulty === "all" || topic.difficulty === specialFilterState.difficulty)
    .filter(topic => matchesResourceOrigin(topic, specialFilterState.origin))
    .filter(topic => !keyword || `${topic.title} ${topic.source} ${topic.focus}`.toLowerCase().includes(keyword))
    .sort((a, b) => b.usage - a.usage);
}

function specialCategoryView() {
  const list = filteredSpecialTopics();
  const activeCategory = specialFilterState.category;
  return `
    <section class="category-detail special-category-view">
      <div class="resource-browser special-browser">
        <nav class="special-sidebar" aria-label="专项分类">
          <button type="button" class="special-root ${activeCategory === "all" ? "active" : ""}" data-special-category="all">全部资源</button>
          <div class="special-sidebar-group open">
            <button class="special-sidebar-group-toggle" type="button" aria-expanded="true">
              <i class="ri-arrow-down-s-line"></i><span>知识模块</span>
            </button>
            <div class="special-sidebar-items">
              ${specialKnowledgeModules.map(item => `
                <button type="button" class="${activeCategory === item.id ? "active" : ""}" data-special-category="${item.id}">${item.label}</button>
              `).join("")}
            </div>
          </div>
          ${specialStandaloneCategories.map(item => `
            <button type="button" class="special-standalone ${activeCategory === item.id ? "active" : ""}" data-special-category="${item.id}">${item.label}</button>
          `).join("")}
        </nav>
        <div class="special-browser-main">
          <div class="special-filter-panel">
            ${paperFilterTagGroup("来自", curatedOriginOptions, specialFilterState.origin, "data-special-origin")}
            <div class="special-filter-row">
              <span class="special-filter-label">难度</span>
              <div class="special-filter-tags">
                ${specialDifficultyOptions.map(option => `
                  <button type="button" class="${specialFilterState.difficulty === option.id ? "active" : ""}" data-special-difficulty="${option.id}">${option.label}</button>
                `).join("")}
              </div>
            </div>
            <label class="paper-filter-search special-filter-search">
              <span class="paper-filter-label">搜索</span>
              <div class="paper-search-field">
                <i class="ri-search-line"></i>
                <input data-special-search type="search" value="${specialFilterState.query.replace(/"/g, "&quot;")}" placeholder="请输入题单名称或其他关键词进行搜索" />
              </div>
            </label>
          </div>
          <div class="special-list-toolbar">
            <b>${specialCategoryLabel(activeCategory)}</b>
            <span class="special-list-count" data-special-result-count>专项 共 ${list.length.toLocaleString()} 份</span>
          </div>
          <div class="resource-card-grid special-result-grid">${list.map(topic => topicCard(topic, { context: "special" })).join("")}</div>
          <div class="special-empty" ${list.length ? "hidden" : ""}>没有找到匹配的专项题单，试试调整筛选条件。</div>
        </div>
      </div>
    </section>`;
}

function applySpecialFilters(options = {}) {
  if (options.category) specialFilterState.category = options.category;
  if (options.difficulty) specialFilterState.difficulty = options.difficulty;
  if (options.origin) specialFilterState.origin = options.origin;
  if (typeof options.query === "string") specialFilterState.query = options.query;
  if (!curatedOriginOptions.some(option => option.id === specialFilterState.origin)) {
    specialFilterState.origin = "all";
  }

  const panel = document.querySelector(".special-category-view");
  if (!panel) return;

  const list = filteredSpecialTopics();
  panel.querySelectorAll("[data-special-category]").forEach(button => {
    button.classList.toggle("active", button.dataset.specialCategory === specialFilterState.category);
  });
  panel.querySelectorAll("[data-special-difficulty]").forEach(button => {
    button.classList.toggle("active", button.dataset.specialDifficulty === specialFilterState.difficulty);
  });
  panel.querySelectorAll("[data-special-origin]").forEach(button => {
    button.classList.toggle("active", button.dataset.specialOrigin === specialFilterState.origin);
  });

  const heading = panel.querySelector(".special-list-toolbar b");
  if (heading) heading.textContent = specialCategoryLabel(specialFilterState.category);

  const grid = panel.querySelector(".special-result-grid");
  if (grid) {
    grid.innerHTML = list.map(topic => topicCard(topic, { context: "special" })).join("");
    bindContentEvents(grid);
  }
  const count = panel.querySelector("[data-special-result-count]");
  if (count) count.textContent = `专项 共 ${list.length.toLocaleString()} 份`;
  const empty = panel.querySelector(".special-empty");
  if (empty) empty.hidden = list.length > 0;
}

function chapterSyncTopics() {
  return topics.filter(topic =>
    ["chapter", "school", "workbook"].includes(topic.tag)
    || matchesResourceOrigin(topic, "zhenti")
  );
}

function chapterSectionEntry(sectionId) {
  if (sectionId === "all") return { id: "all", label: "全部资源", match: () => true };
  for (const item of chapterNavTree) {
    if (item.id === sectionId) return item;
    const section = item.sections?.find(entry => entry.id === sectionId);
    if (section) return section;
  }
  return { id: sectionId, label: "全部资源", match: () => true };
}

function chapterSectionLabel(sectionId) {
  return chapterSectionEntry(sectionId).label;
}

function chapterParentId(sectionId) {
  if (sectionId === "all") return null;
  const parent = chapterNavTree.find(item => item.sections?.some(section => section.id === sectionId));
  return parent?.id || null;
}

function chapterMatchesSection(topic, sectionId) {
  if (sectionId === "all") return true;
  const entry = chapterSectionEntry(sectionId);
  if (entry.match?.(topic)) return true;
  const parent = chapterNavTree.find(item => item.id === sectionId);
  return parent?.match?.(topic) ?? false;
}

function filteredChapterTopics() {
  const keyword = chapterFilterState.query.trim().toLowerCase();
  return chapterSyncTopics()
    .filter(topic => chapterMatchesSection(topic, chapterFilterState.section))
    .filter(topic => chapterFilterState.difficulty === "all" || topic.difficulty === chapterFilterState.difficulty)
    .filter(topic => matchesResourceOrigin(topic, chapterFilterState.origin))
    .filter(topic => paperMatchesSource(topic, chapterFilterState.source))
    .filter(topic => !keyword || chapterText(topic).toLowerCase().includes(keyword))
    .sort((a, b) => b.usage - a.usage);
}

function renderChapterSidebar() {
  const activeSection = chapterFilterState.section;
  const openChapters = new Set(chapterFilterState.openChapters);
  const rootActive = activeSection === "all";
  let html = `
    <button class="chapter-textbook-select" type="button"><span>人教版/七年级上册 (2024)</span><i class="ri-arrow-down-s-line"></i></button>
    <button type="button" class="chapter-root ${rootActive ? "active" : ""}" data-chapter-section="all">全部资源</button>`;

  chapterNavTree.forEach(item => {
    if (item.sections) {
      const open = openChapters.has(item.id) || item.sections.some(section => section.id === activeSection);
      html += `
        <div class="chapter-sidebar-group ${open ? "open" : ""}">
          <button class="chapter-sidebar-group-toggle" type="button" aria-expanded="${open}" data-chapter-toggle="${item.id}">
            <i class="ri-${open ? "arrow-down-s" : "arrow-right-s"}-line"></i><span>${item.label}</span>
          </button>
          <div class="chapter-sidebar-items" ${open ? "" : "hidden"}>
            ${item.sections.map(section => `
              <button type="button" class="${activeSection === section.id ? "active" : ""}" data-chapter-section="${section.id}">${section.label}</button>
            `).join("")}
          </div>
        </div>`;
      return;
    }
    html += `<button type="button" class="chapter-leaf ${activeSection === item.id ? "active" : ""}" data-chapter-section="${item.id}">${item.label}</button>`;
  });
  return html;
}

function chapterCategoryView() {
  const list = filteredChapterTopics();
  return `
    <section class="category-detail chapter-category-view">
      <div class="resource-browser chapter-browser">
        <nav class="chapter-sidebar" aria-label="教材章节">
          ${renderChapterSidebar()}
        </nav>
        <div class="chapter-browser-main">
          <div class="paper-filter-panel chapter-filter-panel">
            ${paperFilterTagGroup("来自", resourceOriginOptions, chapterFilterState.origin, "data-chapter-origin")}
            ${paperFilterTagGroup("难度", specialDifficultyOptions, chapterFilterState.difficulty, "data-chapter-difficulty")}
            ${paperFilterTagGroup("来源", paperSourceOptions, chapterFilterState.source, "data-chapter-source")}
            <div class="paper-filter-row">
              <span class="paper-filter-label">地区</span>
              <button class="paper-filter-select chapter-filter-select" type="button"><span>深圳市龙岗区</span><i class="ri-arrow-down-s-line"></i></button>
            </div>
            <label class="paper-filter-search">
              <span class="paper-filter-label">搜索</span>
              <div class="paper-search-field">
                <i class="ri-search-line"></i>
                <input data-chapter-search type="search" value="${chapterFilterState.query.replace(/"/g, "&quot;")}" placeholder="请输入题单名称或其他关键词进行搜索" />
              </div>
            </label>
          </div>
          <div class="chapter-list-toolbar">
            <b>${chapterSectionLabel(chapterFilterState.section)}</b>
            <span class="chapter-list-count" data-chapter-result-count>同步练习 共 ${list.length.toLocaleString()} 份</span>
          </div>
          <div class="resource-card-grid chapter-result-grid">${list.map(topic => topicCard(topic, { context: "chapter" })).join("")}</div>
          <div class="chapter-empty" ${list.length ? "hidden" : ""}>没有找到匹配的题单，试试调整筛选条件。</div>
        </div>
      </div>
    </section>`;
}

function applyChapterFilters(options = {}) {
  if (options.section) {
    chapterFilterState.section = options.section;
    const parentId = chapterParentId(options.section);
    if (parentId && !chapterFilterState.openChapters.includes(parentId)) {
      chapterFilterState.openChapters = [...chapterFilterState.openChapters, parentId];
    }
  }
  if (options.difficulty) chapterFilterState.difficulty = options.difficulty;
  if (options.origin) chapterFilterState.origin = options.origin;
  if (options.source) chapterFilterState.source = options.source;
  if (typeof options.query === "string") chapterFilterState.query = options.query;
  if (options.toggleChapter) {
    const open = new Set(chapterFilterState.openChapters);
    if (open.has(options.toggleChapter)) open.delete(options.toggleChapter);
    else open.add(options.toggleChapter);
    chapterFilterState.openChapters = [...open];
  }

  const panel = document.querySelector(".chapter-category-view");
  if (!panel) return;

  const sidebar = panel.querySelector(".chapter-sidebar");
  if (sidebar) sidebar.innerHTML = renderChapterSidebar();

  const list = filteredChapterTopics();
  panel.querySelectorAll("[data-chapter-difficulty]").forEach(button => {
    button.classList.toggle("active", button.dataset.chapterDifficulty === chapterFilterState.difficulty);
  });
  panel.querySelectorAll("[data-chapter-origin]").forEach(button => {
    button.classList.toggle("active", button.dataset.chapterOrigin === chapterFilterState.origin);
  });
  panel.querySelectorAll("[data-chapter-source]").forEach(button => {
    button.classList.toggle("active", button.dataset.chapterSource === chapterFilterState.source);
  });

  const heading = panel.querySelector(".chapter-list-toolbar b");
  if (heading) heading.textContent = chapterSectionLabel(chapterFilterState.section);

  const grid = panel.querySelector(".chapter-result-grid");
  if (grid) {
    grid.innerHTML = list.map(topic => topicCard(topic, { context: "chapter" })).join("");
    bindContentEvents(grid);
  }
  const count = panel.querySelector("[data-chapter-result-count]");
  if (count) count.textContent = `同步练习 共 ${list.length.toLocaleString()} 份`;
  const empty = panel.querySelector(".chapter-empty");
  if (empty) empty.hidden = list.length > 0;

  bindContentEvents(sidebar);
}

function categoryBrowserView(kind) {
  const config = {
    chapter: { label:"同步练习", navLabel:"教材章节", nav:["正数与负数","有理数及其运算","整式的加减","一元一次方程","图形初步认识"], topics:["t8","t9","t10","t11","t12","t13"], chips:["全部同步", "课时练习", "单元检测", "易错巩固"], selector:"人教版七上" },
    special: { label:"专项练习", navLabel:"知识领域", nav:["数与式","方程与不等式","函数","图形与几何","统计与概率"], topics:["t1","t3","t5","t23","t28","t31","t32"], chips:["全部专项", "易错巩固", "方法突破", "情境应用", "培优提高"], selector:"全部难度" },
    paper: { label:"试卷", navLabel:"考试类型", nav:["期末考试","期中考试","月考","单元测试","中考真题"], topics:["t2","t4","t6","t14","t25","t27","t33"], chips:["本地优先", "使用最多", "真题汇编"], selector:"深圳市 · 七年级数学" }
  }[kind];
  if (kind === "paper") return paperCategoryView();
  if (kind === "special") return specialCategoryView();
  if (kind === "chapter") return chapterCategoryView();
  const list = config.topics.map(id => byId[id]).filter(Boolean);
  return `
    <section class="category-detail unified-category-view">
      <div class="resource-browser ${kind}-browser">
        <nav class="resource-tree ${kind === "chapter" ? "chapter-rail" : kind === "special" ? "knowledge-nav" : "paper-filters"}" aria-label="${config.navLabel}">
          ${config.nav.map((label, index) => `<button class="${index === 0 ? "active" : ""}" data-result-title="${label}"><b>${label}</b><small>${[36,82,64,71,48][index] || 24} 份</small></button>`).join("")}
        </nav>
        <div class="resource-browser-content">
          <div class="resource-browser-toolbar"><div class="resource-chip-group">${config.chips.map((chip, index) => `<button class="${index === 0 ? "active" : ""}">${chip}</button>`).join("")}</div><div class="resource-selector-group"><button>${config.selector} <i class="ri-arrow-down-s-line"></i></button></div></div>
          <header class="resource-result-heading"><b>${config.nav[0]}</b><em>${list.length} 份题单</em></header>
          <div class="resource-card-grid result-grid">${list.map(topic => topicCard(topic, { context: kind })).join("")}</div>
        </div>
      </div>
    </section>`;
}

function seriesCategoryView() {
  const albumView = albumFilterState.view === "album";
  const albums = filteredWorkbookAlbums();
  const list = filteredWorkbookTopics();
  return `
    <section class="category-detail album-category-view">
      <div class="paper-filter-panel album-filter-panel">
        ${paperFilterTagGroup("来自", curatedOriginOptions, albumFilterState.origin, "data-album-origin")}
        <label class="paper-filter-search album-filter-search">
          <span class="paper-filter-label">搜索</span>
          <div class="paper-search-field">
            <i class="ri-search-line"></i>
            <input data-album-search type="search" value="${albumFilterState.query.replace(/"/g, "&quot;")}" placeholder="请输入专辑或题单名称进行搜索" />
          </div>
        </label>
      </div>
      <div class="album-toolbar">
        <div class="album-view-tabs" role="tablist" aria-label="专辑浏览方式">
          <button type="button" class="${albumView ? "active" : ""}" data-album-view="album" role="tab" aria-selected="${albumView}">专辑</button>
          <button type="button" class="${!albumView ? "active" : ""}" data-album-view="topic" role="tab" aria-selected="${!albumView}">单卷</button>
        </div>
      </div>
      <div class="album-panel album-by-album" data-album-panel="album" ${albumView ? "" : "hidden"}>
        <div class="series-library-grid album-grid">${albums.map(albumCard).join("")}</div>
        <div class="album-empty" ${albums.length ? "hidden" : ""}>没有找到匹配的专辑，换个关键词试试。</div>
      </div>
      <div class="album-panel album-by-topic" data-album-panel="topic" ${albumView ? "hidden" : ""}>
        <div class="album-topic-meta"><b>全部题单</b><span data-album-topic-count>共 ${list.length.toLocaleString()} 份</span></div>
        <div class="series-topic-grid album-topic-grid">${list.map(topic => topicCard(topic, { context: "series" })).join("")}</div>
        <div class="album-empty" ${list.length ? "hidden" : ""}>没有找到匹配的题单，换个关键词试试。</div>
      </div>
    </section>`;
}

function workbookTopics() {
  return topics.filter(topic => topic.tag === "workbook");
}

function workbookTopicMatchesFilters(topic) {
  const keyword = albumFilterState.query.trim().toLowerCase();
  return matchesResourceOrigin(topic, albumFilterState.origin)
    && (!keyword || `${topic.title} ${topic.source} ${topic.focus}`.toLowerCase().includes(keyword));
}

function filteredWorkbookTopics() {
  return workbookTopics()
    .filter(workbookTopicMatchesFilters)
    .sort((a, b) => b.usage - a.usage);
}

function filteredWorkbookAlbums() {
  return workbookAlbums.filter(album => {
    const items = albumTopicsFor(album).filter(workbookTopicMatchesFilters);
    return items.length > 0;
  });
}

function albumTopicsFor(album) {
  return workbookTopics()
    .filter(topic => topic.source === album.source)
    .filter(workbookTopicMatchesFilters)
    .sort((a, b) => b.usage - a.usage);
}

function albumCard(album) {
  const items = albumTopicsFor(album);
  const displayItems = items.slice(0, 4);
  return `
    <article class="series-library-card album-card" data-album="${album.id}">
      <button class="series-library-heading" type="button" data-album-open="${album.source}">
        <span class="series-spine">${album.name.slice(0, 1)}</span>
        <span><small>专辑</small><b>${album.name}</b><em>${items.length} 份题单 · ${album.subtitle}</em></span>
        <i class="ri-arrow-right-s-line"></i>
      </button>
      <div class="series-library-topics">
        ${displayItems.map(topic => `
          <button type="button" data-topic="${topic.id}">
            <span>${topic.title}</span>
            <small>${topic.questions} 题 · ${topic.usage.toLocaleString()} 人使用</small>
            <i class="ri-arrow-right-s-line"></i>
          </button>
        `).join("")}
      </div>
    </article>`;
}

function applyAlbumView(options = {}) {
  if (options.view) albumFilterState.view = options.view;
  if (options.origin) albumFilterState.origin = options.origin;
  if (typeof options.query === "string") albumFilterState.query = options.query;
  if (!curatedOriginOptions.some(option => option.id === albumFilterState.origin)) {
    albumFilterState.origin = "all";
  }

  const panel = document.querySelector(".album-category-view");
  if (!panel) return;

  const albumView = albumFilterState.view === "album";
  const albums = filteredWorkbookAlbums();
  const list = filteredWorkbookTopics();

  panel.querySelectorAll("[data-album-view]").forEach(button => {
    const active = button.dataset.albumView === albumFilterState.view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  panel.querySelectorAll("[data-album-origin]").forEach(button => {
    button.classList.toggle("active", button.dataset.albumOrigin === albumFilterState.origin);
  });
  panel.querySelectorAll("[data-album-panel]").forEach(section => {
    section.hidden = section.dataset.albumPanel !== albumFilterState.view;
  });

  const albumGrid = panel.querySelector(".album-grid");
  if (albumGrid) {
    albumGrid.innerHTML = albums.map(albumCard).join("");
    bindContentEvents(albumGrid);
  }
  const topicGrid = panel.querySelector(".album-topic-grid");
  if (topicGrid) {
    topicGrid.innerHTML = list.map(topic => topicCard(topic, { context: "series" })).join("");
    bindContentEvents(topicGrid);
  }

  const albumEmpty = panel.querySelector(".album-by-album .album-empty");
  if (albumEmpty) albumEmpty.hidden = albums.length > 0;
  const topicEmpty = panel.querySelector(".album-by-topic .album-empty");
  if (topicEmpty) topicEmpty.hidden = list.length > 0;
  const topicCount = panel.querySelector("[data-album-topic-count]");
  if (topicCount) topicCount.textContent = `共 ${list.length.toLocaleString()} 份`;

  const search = panel.querySelector("[data-album-search]");
  if (search && search.value !== albumFilterState.query) search.value = albumFilterState.query;
}

function render() {
  const defaultState = currentFilter === "all" && !currentQuery;
  contentFeed.innerHTML = defaultState ? homepageFeed() : currentFilter === "workbook" ? seriesCategoryView() : categoryBrowserView(currentFilter);
  emptyState.hidden = true;
  contentFeed.hidden = false;
  bindContentEvents();
  setupFeed(defaultState);
  setupAiDock(defaultState);
  renderBankStats();
  filterManuallyExpanded = false;
  setSquareFilterCollapsed(true);
  document.body.classList.toggle("is-home-view", defaultState);
}

function setupFeed(isHomepage) {
  const grid = document.querySelector("[data-endless-grid]");
  if (!grid || !isHomepage) return;
  grid.innerHTML = feedTopicIds.slice(0, 16).map(id => byId[id]).filter(Boolean).map(topicCard).join("");
  [...grid.children].forEach((card, index) => { card.dataset.feedOrder = String(index); });
  applyFeedFilters();
}

function topicMatchesFeedFilters(topic) {
  const typeMatch = feedFilterState.type === "all" || (feedFilterState.type === "sync" && ["chapter", "workbook"].includes(topic.tag)) || topic.tag === feedFilterState.type;
  const difficultyMatch = feedFilterState.difficulty === "all" || topic.difficulty === feedFilterState.difficulty;
  const sourceText = `${topic.source} ${topic.author?.school || ""}`;
  const sourceMatch = feedFilterState.source === "all"
    || (feedFilterState.source === "local" && /龙岗|坂田|平湖|龙城|深圳/.test(sourceText))
    || (feedFilterState.source === "famous" && /深圳中学|深圳实验|深圳外国语|龙岗区实验|龙岗区外国语|龙城初级/.test(sourceText))
    || (feedFilterState.source === "school" && Boolean(topic.author))
    || (feedFilterState.source === "series" && topic.tag === "workbook");
  const text = `${topic.title} ${topic.focus} ${topic.reason}`;
  const featureMatch = feedFilterState.feature === "all"
    || (feedFilterState.feature === "真题汇编" && /真题/.test(text))
    || (feedFilterState.feature === "高频易错" && /易错/.test(text))
    || feedFilterState.feature === primaryTag(topic);
  return typeMatch && difficultyMatch && sourceMatch && featureMatch;
}

function applyFeedFilters() {
  const grid = document.querySelector("[data-endless-grid]");
  if (!grid) return;
  const cards = [...grid.children];
  cards.sort((a, b) => {
    const aTopic = byId[a.dataset.topic];
    const bTopic = byId[b.dataset.topic];
    if (feedFilterState.sort === "usage") return bTopic.usage - aTopic.usage;
    if (feedFilterState.sort === "latest") return (bTopic.highlight === "最新" ? 1 : 0) - (aTopic.highlight === "最新" ? 1 : 0) || Number(a.dataset.feedOrder) - Number(b.dataset.feedOrder);
    return Number(a.dataset.feedOrder) - Number(b.dataset.feedOrder);
  });
  let visible = 0;
  cards.forEach(card => { card.hidden = !topicMatchesFeedFilters(byId[card.dataset.topic]); if (!card.hidden) visible += 1; grid.appendChild(card); });
  const empty = document.querySelector("[data-feed-empty]");
  if (empty) empty.hidden = visible > 0;
  const resultCount = document.querySelector("[data-filter-result-count]");
  if (resultCount) resultCount.textContent = `共 ${visible} 份`;
}

function bindContentEvents(root = document) {
  root.querySelectorAll("[data-book-tab]").forEach(button => button.addEventListener("click", () => {
    const tab = button.dataset.bookTab;
    const container = button.closest(".book-resource");
    if (!container) return;
    container.querySelectorAll("[data-book-tab]").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    container.querySelectorAll("[data-book-panel]").forEach(panel => {
      const active = panel.dataset.bookPanel === tab;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
  }));
  root.querySelectorAll("[data-topic]").forEach(element => {
    const open = () => {
      const cardTitle = element.dataset.lessonTitle
        || element.querySelector("b, h3")?.textContent?.trim()
        || "";
      const shortTitle = element.dataset.shortTitle || cardTitle;
      openTopic(element.dataset.topic, {
        title: cardTitle || undefined,
        shortTitle: shortTitle || undefined,
        lessonKey: element.dataset.lessonKey || cardTitle || undefined,
        context: element.dataset.context || undefined
      });
    };
    element.addEventListener("click", event => { if (event.target.closest("[data-bookmark], [data-series]")) return; open(); });
    if (element.matches("[tabindex]")) element.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
  });
  root.querySelectorAll("[data-bookmark]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); button.classList.toggle("saved"); button.innerHTML = button.classList.contains("saved") ? '<i class="ri-bookmark-fill"></i>' : '<i class="ri-bookmark-line"></i>'; showToast(button.classList.contains("saved") ? "已收藏到我的题单" : "已取消收藏"); }));
  root.querySelectorAll("[data-preview-topic]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); openTopic(button.dataset.previewTopic); }));
  root.querySelectorAll("[data-use-topic]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); location.href = `./editor.html?topic=${encodeURIComponent(button.dataset.useTopic)}`; }));
  root.querySelectorAll("[data-open-filter]").forEach(button => button.addEventListener("click", event => {
    event.stopPropagation();
    const filter = button.dataset.openFilter;
    const origin = button.dataset.openOrigin || "";
    const openOptions = origin ? { origin } : {};
    prepareFilterOpen(filter, openOptions);
    if (isEmbedded) {
      requestParentOpenFilter(filter, openOptions);
      return;
    }
    setMainFilter(filter, openOptions);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));
  root.querySelectorAll("[data-series]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); openSeries(button.dataset.series); }));
  root.querySelectorAll("[data-author]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); showToast(`正在查看${button.dataset.author}发布的题单`); }));
  root.querySelectorAll("[data-feed-key]").forEach(button => button.addEventListener("click", () => { const { feedKey, feedValue } = button.dataset; feedFilterState[feedKey] = feedValue; document.querySelectorAll(`[data-feed-key="${feedKey}"]`).forEach(item => item.classList.toggle("active", item === button)); applyFeedFilters(); updateFilterSummary(); }));
  root.querySelectorAll("[data-filter-toggle]").forEach(button => button.addEventListener("click", () => { const section = button.closest("[data-square-section]"); const collapsed = section.classList.contains("is-filter-collapsed"); filterManuallyExpanded = collapsed; setSquareFilterCollapsed(!collapsed); }));
  root.querySelectorAll("[data-filter-reset]").forEach(button => button.addEventListener("click", () => {
    ["difficulty", "source", "feature"].forEach(key => { feedFilterState[key] = "all"; });
    feedFilterState.sort = "default";
    root.querySelectorAll("[data-feed-key]").forEach(item => item.classList.toggle("active", (item.dataset.feedKey === "difficulty" || item.dataset.feedKey === "source" || item.dataset.feedKey === "feature") ? item.dataset.feedValue === "all" : item.dataset.feedKey === "sort" && item.dataset.feedValue === "default"));
    applyFeedFilters();
    updateFilterSummary();
  }));
  root.querySelectorAll("[data-square-section]").forEach(section => section.addEventListener("click", event => {
    const button = event.target.closest("[data-clear-filter]");
    if (!button) return;
    const key = button.dataset.clearFilter;
    feedFilterState[key] = "all";
    section.querySelectorAll(`[data-feed-key="${key}"]`).forEach(item => item.classList.toggle("active", item.dataset.feedValue === "all"));
    applyFeedFilters();
    updateFilterSummary();
  }));
  root.querySelectorAll(".resource-tree button").forEach(button => button.addEventListener("click", () => { const browser = button.closest(".resource-browser"); button.parentElement.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button)); browser.querySelector(".resource-result-heading b").textContent = button.dataset.resultTitle || button.querySelector("b").textContent; }));
  root.querySelectorAll(".resource-chip-group button").forEach(button => button.addEventListener("click", () => { button.parentElement.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button)); }));
  root.querySelectorAll(".resource-selector-group button").forEach(button => button.addEventListener("click", () => showToast(`正在调整${button.textContent.trim()}`)));
  root.querySelectorAll("[data-series-query]").forEach(button => button.addEventListener("click", () => applyAlbumView({ view: "topic", query: button.dataset.seriesQuery })));
  root.querySelectorAll("[data-album-view]").forEach(button => button.addEventListener("click", () => applyAlbumView({ view: button.dataset.albumView })));
  root.querySelectorAll("[data-album-origin]").forEach(button => button.addEventListener("click", () => applyAlbumView({ origin: button.dataset.albumOrigin })));
  root.querySelectorAll("[data-album-search]").forEach(input => input.addEventListener("input", () => applyAlbumView({ query: input.value })));
  root.querySelectorAll("[data-album-open]").forEach(button => button.addEventListener("click", () => applyAlbumView({ view: "topic", query: button.dataset.albumOpen })));
  root.querySelectorAll("[data-album-jump]").forEach(button => button.addEventListener("click", () => {
    if (isEmbedded) {
      requestParentOpenFilter("workbook");
      return;
    }
    openSeries(button.dataset.albumJump);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));
  root.querySelectorAll("[data-stat-jump]").forEach(button => button.addEventListener("click", () => {
    location.href = "./school.html";
  }));
  root.querySelectorAll(".paper-sidebar-group-toggle").forEach(button => button.addEventListener("click", () => {
    const group = button.closest(".paper-sidebar-group");
    const open = !group.classList.contains("open");
    group.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
    const items = group.querySelector(".paper-sidebar-items");
    if (items) items.hidden = !open;
    const icon = button.querySelector("i");
    if (icon) icon.className = open ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line";
  }));
  root.querySelectorAll("[data-paper-type]").forEach(button => button.addEventListener("click", () => applyPaperFilters({ examType: button.dataset.paperType })));
  root.querySelectorAll("[data-paper-year]").forEach(button => button.addEventListener("click", () => applyPaperFilters({ year: button.dataset.paperYear })));
  root.querySelectorAll("[data-paper-grade]").forEach(button => button.addEventListener("click", () => applyPaperFilters({ grade: button.dataset.paperGrade })));
  root.querySelectorAll("[data-paper-source]").forEach(button => button.addEventListener("click", () => applyPaperFilters({ source: button.dataset.paperSource })));
  root.querySelectorAll("[data-paper-sort]").forEach(button => button.addEventListener("click", () => applyPaperFilters({ sort: button.dataset.paperSort })));
  root.querySelectorAll("[data-paper-search]").forEach(input => input.addEventListener("input", () => applyPaperFilters({ query: input.value })));
  root.querySelectorAll(".paper-filter-select").forEach(button => button.addEventListener("click", () => showToast("地区筛选即将开放")));
  root.querySelectorAll(".special-sidebar-group-toggle").forEach(button => button.addEventListener("click", () => {
    const group = button.closest(".special-sidebar-group");
    const open = !group.classList.contains("open");
    group.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
    const items = group.querySelector(".special-sidebar-items");
    if (items) items.hidden = !open;
    const icon = button.querySelector("i");
    if (icon) icon.className = open ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line";
  }));
  root.querySelectorAll("[data-special-category]").forEach(button => button.addEventListener("click", () => applySpecialFilters({ category: button.dataset.specialCategory })));
  root.querySelectorAll("[data-special-difficulty]").forEach(button => button.addEventListener("click", () => applySpecialFilters({ difficulty: button.dataset.specialDifficulty })));
  root.querySelectorAll("[data-special-origin]").forEach(button => button.addEventListener("click", () => applySpecialFilters({ origin: button.dataset.specialOrigin })));
  root.querySelectorAll("[data-special-search]").forEach(input => input.addEventListener("input", () => applySpecialFilters({ query: input.value })));
  root.querySelectorAll(".chapter-textbook-select, .chapter-filter-select").forEach(button => button.addEventListener("click", () => showToast("教材与地区筛选即将开放")));
  root.querySelectorAll("[data-chapter-toggle]").forEach(button => button.addEventListener("click", () => applyChapterFilters({ toggleChapter: button.dataset.chapterToggle })));
  root.querySelectorAll("[data-chapter-section]").forEach(button => button.addEventListener("click", () => applyChapterFilters({ section: button.dataset.chapterSection })));
  root.querySelectorAll("[data-chapter-difficulty]").forEach(button => button.addEventListener("click", () => applyChapterFilters({ difficulty: button.dataset.chapterDifficulty })));
  root.querySelectorAll("[data-chapter-origin]").forEach(button => button.addEventListener("click", () => applyChapterFilters({ origin: button.dataset.chapterOrigin })));
  root.querySelectorAll("[data-chapter-source]").forEach(button => button.addEventListener("click", () => applyChapterFilters({ source: button.dataset.chapterSource })));
  root.querySelectorAll("[data-chapter-search]").forEach(input => input.addEventListener("input", () => applyChapterFilters({ query: input.value })));
}

function prepareFilterOpen(filter, options = {}) {
  if (filter === "chapter" && options.origin) {
    chapterFilterState.origin = options.origin;
    chapterFilterState.section = "all";
    chapterFilterState.query = "";
  }
}

function setMainFilter(filter, options = {}) {
  const previousFilter = currentFilter;
  currentFilter = filter;
  currentQuery = "";
  if (filter === "workbook" && previousFilter !== "workbook" && !options.keepAlbumState) {
    albumFilterState.view = "album";
    albumFilterState.origin = "all";
    albumFilterState.query = "";
  }
  if (filter === "chapter" && options.origin) {
    prepareFilterOpen(filter, options);
  }
  document.body.classList.toggle("is-paper-view", filter === "paper");
  document.body.classList.toggle("is-special-view", filter === "special");
  document.body.classList.toggle("is-chapter-view", filter === "chapter");
  document.body.classList.toggle("is-album-view", filter === "workbook");
  document.querySelectorAll("[data-filter]").forEach(chip => { const active = chip.dataset.filter === filter; chip.classList.toggle("active", active); chip.setAttribute("aria-selected", String(active)); });
  render();
}

function openSeries(seriesName) {
  albumFilterState.view = "topic";
  albumFilterState.query = seriesName;
  setMainFilter("workbook", { keepAlbumState: true });
}

function openTopic(id, options = {}) {
  const topic = byId[id];
  if (!topic && !options.title) return;
  const context = options.context
    || (topic?.tag === "workbook" ? "series" : topic?.tag === "paper" ? "paper" : topic?.tag === "special" ? "special" : "chapter");
  const title = options.title || topic?.title || "";
  const shortTitle = options.shortTitle || title;
  const lessonKey = options.lessonKey || (options.title ? options.title : id);
  const qs = new URLSearchParams({
    topic: id,
    context,
    title,
    focus: options.focus || topic?.focus || "",
    reason: options.reason || topic?.reason || "",
    questions: String(options.questions || topic?.questions || ""),
    difficulty: options.difficulty || topic?.difficulty || "",
    source: options.source || topic?.source || "",
    usage: String(options.usage || topic?.usage || "")
  });
  if (shortTitle) qs.set("shortTitle", shortTitle);
  if (lessonKey) qs.set("lessonKey", lessonKey);
  if (isEmbedded) {
    requestParentOpenTopic(id, context, qs.toString(), { title, shortTitle, lessonKey });
    return;
  }
  location.href = `./detail-ai.html?${qs.toString()}`;
}

function showAiDock(visible) {
  const shouldShow = Boolean(visible) && !aiModalOpen;
  const dock = document.querySelector("#aiDock");
  const shell = document.querySelector(".ai-dock-shell");
  if (dock) {
    dock.hidden = !shouldShow;
    dock.setAttribute("aria-hidden", String(!shouldShow));
  }
  if (shell) shell.hidden = !shouldShow;
  document.body.classList.toggle("has-ai-dock", shouldShow);
}

function setupAiDock(isHomepage) {
  if (aiDockObserver) {
    aiDockObserver.disconnect();
    aiDockObserver = null;
  }
  showAiDock(Boolean(isHomepage));
}

function syncAiInputs(value, sourceId) {
  ["#aiQuickInput"].forEach(selector => {
    const input = document.querySelector(selector);
    if (input && input.id !== sourceId && input.value !== value) input.value = value;
  });
}

function openAi(prompt = "") {
  const value = prompt || document.querySelector("#aiQuickInput")?.value || "";
  if (value) syncAiInputs(value, "");
  document.querySelector("#aiForm").hidden = false;
  document.querySelector("#aiResult").hidden = true;
  if (value) document.querySelector(".prompt-box textarea").value = value;
  aiModalOpen = true;
  showAiDock(false);
  aiMask.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeAi() {
  aiModalOpen = false;
  aiMask.hidden = true;
  document.body.style.overflow = "";
  setupAiDock(currentFilter === "all" && !currentQuery);
}
function showToast(message) { toast.textContent = message; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 1700); }

function formatStat(value) {
  if (value < 10000) return value.toLocaleString();
  const wan = value / 10000;
  return `${Number(wan.toFixed(wan >= 100 ? 0 : 1))}W`;
}

function renderBankStats() {
  const fields = { statTopicTotal: bankStats.topicTotal, statWeeklyNew: bankStats.weeklyNew, statQuestionTotal: bankStats.questionTotal };
  Object.entries(fields).forEach(([id, value]) => {
    const node = document.querySelector(`#${id}`);
    if (node) node.textContent = formatStat(value);
  });
}

renderBankStats();

if (isEmbedded) {
  document.body.classList.add("is-embedded");
  document.addEventListener("click", event => {
    const link = event.target.closest('a[href*="detail-ai.html"]');
    if (!link) return;
    event.preventDefault();
    const url = new URL(link.getAttribute("href"), location.href);
    requestParentOpenTopic(url.searchParams.get("topic"), url.searchParams.get("context") || "paper", url.searchParams.toString());
  });
}

const initParams = new URLSearchParams(location.search);
const initFilter = initParams.get("filter");
const initOrigin = initParams.get("origin");
if (initFilter && document.querySelector(`#filterChips [data-filter="${initFilter}"]`)) {
  prepareFilterOpen(initFilter, initOrigin ? { origin: initOrigin } : {});
  setMainFilter(initFilter, initOrigin ? { origin: initOrigin } : {});
} else {
  render();
}

window.addEventListener("scroll", () => {
  hasUserScrolled = window.scrollY > 160;
  const square = document.querySelector("[data-square-section]");
  if (!square) return;
  if (window.scrollY < 80) {
    filterManuallyExpanded = false;
    setSquareFilterCollapsed(true);
  }
}, { passive: true });

document.querySelector("#filterChips").addEventListener("click", event => { const button = event.target.closest("[data-filter]"); if (button) setMainFilter(button.dataset.filter); });
document.querySelector("#resetFilter").addEventListener("click", () => setMainFilter("all"));

function bindAiForm(formSelector, inputSelector, addSelector, voiceSelector) {
  const form = document.querySelector(formSelector);
  const input = document.querySelector(inputSelector);
  if (!form || !input) return;
  form.addEventListener("submit", event => { event.preventDefault(); const value = input.value.trim(); if (!value) { input.focus(); showToast("先描述一下想要什么题单"); return; } syncAiInputs(value, input.id); openAi(value); });
  input.addEventListener("input", () => syncAiInputs(input.value, input.id));
  document.querySelector(addSelector)?.addEventListener("click", () => showToast("可以添加试卷、图片或资料作为参考"));
  document.querySelector(voiceSelector)?.addEventListener("click", event => { event.currentTarget.classList.toggle("active"); showToast(event.currentTarget.classList.contains("active") ? "正在听，请说出题单要求" : "已停止语音输入"); });
}

const aiHintExamples = {
  "找题": "帮我找七年级有理数易错题，15 题，中等难度",
  "找卷": "帮我找深圳龙岗区七年级上期末数学试卷",
  "AI 组卷": "帮我组一份七年级有理数单元检测卷，45 分钟，中等难度",
  "AI 组练习": "帮我组一份七年级有理数随堂练习，15 分钟，基础为主，加入 2 道易错题",
  "AI 改编": "把这份题单改编成深圳情境题，考点不变",
  "AI 命题": "帮我命制 5 道有理数应用题，中等难度",
  "AI 录题": "帮我把这张试卷图片录入为题单"
};

function setupAiHints(inputSelector, hintsSelector) {
  const input = document.querySelector(inputSelector);
  const hints = document.querySelector(hintsSelector);
  if (!input || !hints) return;
  let blurTimer = 0;
  const show = () => { clearTimeout(blurTimer); hints.hidden = false; };
  const hide = () => { blurTimer = window.setTimeout(() => { hints.hidden = true; }, 120); };
  input.addEventListener("focus", show);
  input.addEventListener("click", show);
  input.addEventListener("blur", hide);
  hints.addEventListener("mousedown", event => {
    if (event.target.closest("[data-ai-hint]")) event.preventDefault();
  });
  hints.addEventListener("click", event => {
    const button = event.target.closest("[data-ai-hint]");
    if (!button) return;
    const sample = aiHintExamples[button.dataset.aiHint] || button.dataset.aiHint;
    input.value = sample;
    syncAiInputs(sample, input.id);
    input.focus();
    hints.hidden = true;
  });
}

bindAiForm("#aiDock", "#aiQuickInput", "#aiAdd", "#aiVoice");
setupAiHints("#aiQuickInput", "#aiDockHints");
document.addEventListener("click", event => {
  if (event.target.closest(".ai-dock-shell")) return;
  document.querySelectorAll(".ai-input-hints").forEach(panel => { panel.hidden = true; });
});
document.querySelector("#closeAi").addEventListener("click", closeAi);
aiMask.addEventListener("click", event => { if (event.target === aiMask) closeAi(); });
document.querySelector("#generateList").addEventListener("click", event => { const button = event.currentTarget; button.disabled = true; button.querySelector("span").textContent = "正在生成题单结构…"; setTimeout(() => { document.querySelector("#aiForm").hidden = true; document.querySelector("#aiResult").hidden = false; button.disabled = false; button.querySelector("span").textContent = "生成完整题单"; }, 850); });
document.querySelector("#regenerate").addEventListener("click", () => { document.querySelector("#aiResult").hidden = true; document.querySelector("#aiForm").hidden = false; });
document.querySelector("#editGenerated").addEventListener("click", () => { closeAi(); showToast("AI 题单已生成，正在进入题单编辑"); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !aiMask.hidden) closeAi(); });
