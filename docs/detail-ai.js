const paperCatalog = {
  t2: {
    title: "2026 深圳南山区初一上期末数学真题",
    shortTitle: "南山区期末卷",
    focus: "本地命题风格与阶段难度参考",
    reason: "深圳区级真题",
    region: "南山区",
    grade: "七年级上册",
    examType: "期末",
    questionCount: 7,
    difficulty: "中等",
    usage: 1206
  },
  t14: {
    title: "2026 深圳福田区初一下期中数学真题",
    shortTitle: "福田区期中卷",
    focus: "深圳真实阶段性考试，适合校准教学进度与难度",
    reason: "深圳区级真题",
    region: "福田区",
    grade: "七年级下册",
    examType: "期中",
    questionCount: 6,
    difficulty: "中等",
    usage: 984
  },
  t25: {
    title: "2026 深圳罗湖区初一下期末数学真题",
    shortTitle: "罗湖区期末卷",
    focus: "深圳真实阶段性考试，反映本地命题风格",
    reason: "深圳区级真题",
    region: "罗湖区",
    grade: "七年级下册",
    examType: "期末",
    questionCount: 4,
    difficulty: "中等",
    usage: 1458
  },
  t4: {
    title: "2024—2026 深圳期末真题汇编：轴对称",
    shortTitle: "轴对称汇编",
    focus: "把分散真题整理成可直接使用的课内专题",
    reason: "真题汇编",
    region: "深圳",
    grade: "七年级下册",
    examType: "期末",
    questionCount: 6,
    difficulty: "较难",
    usage: 1532
  },
  t6: {
    title: "初一期末高频易错周测题单",
    shortTitle: "期末易错周测",
    focus: "名校周测，适合分层选题与命题参考",
    reason: "名校资源",
    region: "深圳",
    grade: "七年级上册",
    examType: "周测",
    questionCount: 7,
    difficulty: "较难",
    usage: 1089
  },
  t27: {
    title: "期末选择题高频考法：审题与快速提分",
    shortTitle: "期末选择题",
    focus: "高频选择题与排除方法",
    reason: "本周热门",
    region: "龙岗区",
    grade: "七年级上册",
    examType: "期末",
    questionCount: 7,
    difficulty: "中等",
    usage: 1328
  },
  t33: {
    title: "期中压轴题：关键步骤分层拆解",
    shortTitle: "期中压轴题",
    focus: "按关键步骤拆解综合题",
    reason: "名校共建",
    region: "龙岗区",
    grade: "七年级上册",
    examType: "期中",
    questionCount: 6,
    difficulty: "较难",
    usage: 1036
  }
};

const sidebarPaperList = Object.entries(paperCatalog).map(([id, meta]) => ({
  id,
  ...meta,
  recommendScore: Number(meta.usage || 0),
  latestScore: id === "t14" ? 100 : id === "t25" ? 95 : id === "t2" ? 90 : 80
}));

const paperListState = {
  query: "",
  examType: "all"
};

const rightPanelSectionState = {
  selectedCollapsed: true
};

const MAX_OPEN_TABS = 6;
const HOME_FRAME_SRC = "./index.html?embed=1&v=20260811aibar";
const QUESTION_DRAG_MIME = "application/x-aiq-questions";
const BROWSE_FILTER_META = {
  chapter: { filter: "chapter", label: "同步练习", icon: "ri-book-open-line" },
  special: { filter: "special", label: "专项练习", icon: "ri-focus-3-line" },
  paper: { filter: "paper", label: "试卷", icon: "ri-file-list-3-line" },
  workbook: { filter: "workbook", label: "专辑", icon: "ri-book-shelf-line" }
};
const mobileLayoutQuery = window.matchMedia("(max-width: 980px)");
const expandedAnalysisIds = new Set();
const selectedExpandedAnalysisKeys = new Set();
const dragPickIds = new Set();
let questionDragActive = false;
let questionDragGhost = null;

let selectedPreviewTypeFilter = null;
let selectedPanelEnlarged = false;
let selectedShowAnswers = false;

const paperQuestions = {
  t2: [
    { id:"1", num:1, section:"一、单项选择题", type:"选择题", difficulty:"较易", knowledge:"正负数意义", minutes:1, competency:"运算能力", badges:["AI 批改","AI 赋分"], stem:"如果向东走 3 米记作 +3 米，那么向西走 5 米应记作（　　）。", options:["A. +5 米","B. −5 米","C. +3 米","D. −3 米"], answer:"B", analysis:"向西与向东相反，应记作负数。" },
    { id:"2", num:2, section:"一、单项选择题", type:"选择题", difficulty:"较易", knowledge:"相反意义的量", minutes:1, competency:"抽象能力", badges:["创新题"], stem:"下列各组量中，具有相反意义的量是（　　）。", options:["A. 上升 5 米与向东 5 米","B. 收入 80 元与支出 50 元","C. 长大 2 岁与减少 2 千克","D. 购进 10 件与卖出 8 元"], answer:"B", analysis:"收入与支出具有相反意义。" },
    { id:"3", num:3, section:"一、单项选择题", type:"选择题", difficulty:"中等", knowledge:"负数概念", stem:"在 −3、0、2.5、−1/2 四个数中，负数共有（　　）。", options:["A. 1 个","B. 2 个","C. 3 个","D. 4 个"], answer:"B", analysis:"−3 和 −1/2 为负数。" },
    { id:"4", num:4, section:"一、单项选择题", type:"选择题", difficulty:"简单", knowledge:"温差计算", stem:"某天深圳的最高气温为 18 ℃，最低气温为 7 ℃，这一天的温差是（　　）。", options:["A. 25 ℃","B. −25 ℃","C. 11 ℃","D. −11 ℃"], answer:"C", analysis:"温差 = 最高温 − 最低温 = 11 ℃。" },
    { id:"5", num:5, section:"二、填空题", type:"填空题", difficulty:"简单", knowledge:"正负数应用", stem:"如果水库水位上升 0.8 米记作 +0.8 米，那么水位下降 0.5 米记作 ______ 米。", options:[], answer:"−0.5", analysis:"下降记为负。" },
    { id:"6", num:6, section:"二、填空题", type:"填空题", difficulty:"中等", knowledge:"数轴", stem:"数轴上与原点距离为 4 个单位长度的点表示的数是 ______。", options:[], answer:"4 或 −4", analysis:"距离原点 4 个单位长度有两个点。" },
    { id:"7", num:7, section:"三、解答题", type:"解答题", difficulty:"中等", knowledge:"正负数应用", stem:"某食品包装袋上标有“净含量 500±5 g”。抽检 5 袋食品的质量分别为 497 g、503 g、506 g、500 g、495 g。请用正负数表示它们相对于标准质量的偏差，并判断哪些产品合格。", options:[], answer:"497→−3，503→+3，506→+6，500→0，495→−5；497/503/500/495 合格", analysis:"合格范围为 −5 到 +5。" }
  ],
  t14: [
    { id:"1", num:1, section:"一、单项选择题", type:"选择题", difficulty:"中等", knowledge:"整式运算", stem:"下列运算正确的是（　　）。", options:["A. 3a + 2a = 5a²","B. −(−2) = 2","C. 2³ = 6","D. |−3| = −3"], answer:"B", analysis:"−(−2)=2。" },
    { id:"2", num:2, section:"一、单项选择题", type:"选择题", difficulty:"简单", knowledge:"代数式求值", stem:"若 x = −1，则 2x − 3 的值是（　　）。", options:["A. −5","B. −1","C. 1","D. 5"], answer:"A", analysis:"代入 x=−1 得 −5。" },
    { id:"3", num:3, section:"一、单项选择题", type:"选择题", difficulty:"简单", knowledge:"一元一次方程", stem:"下列方程中，是一元一次方程的是（　　）。", options:["A. x² = 4","B. 2x + 1 = 0","C. 1/x = 2","D. x + y = 1"], answer:"B", analysis:"2x+1=0 符合定义。" },
    { id:"4", num:4, section:"二、填空题", type:"填空题", difficulty:"简单", knowledge:"合并同类项", stem:"合并同类项：3x − 2x + 5 = ______。", options:[], answer:"x + 5", analysis:"3x−2x=x。" },
    { id:"5", num:5, section:"二、填空题", type:"填空题", difficulty:"中等", knowledge:"解方程", stem:"若 2x + 5 = 11，则 x = ______。", options:[], answer:"3", analysis:"2x=6，x=3。" },
    { id:"6", num:6, section:"三、解答题", type:"解答题", difficulty:"中等", knowledge:"解方程", stem:"解方程：3(x − 2) = 2x + 1，并写出检验过程。", options:[], answer:"x = 7", analysis:"展开移项求解。" }
  ],
  t25: [
    { id:"1", num:1, section:"一、单项选择题", type:"选择题", difficulty:"简单", knowledge:"轴对称", stem:"下列图形中，是轴对称图形的是（　　）。", options:["A. 平行四边形","B. 等腰三角形","C. 直角梯形","D. 任意三角形"], answer:"B", analysis:"等腰三角形是轴对称图形。" },
    { id:"2", num:2, section:"一、单项选择题", type:"选择题", difficulty:"中等", knowledge:"不等式性质", stem:"若 a < b，则下列结论一定正确的是（　　）。", options:["A. a + 1 > b + 1","B. −a > −b","C. 2a > 2b","D. a − 2 < b − 2"], answer:"D", analysis:"同减 2 不等号方向不变。" },
    { id:"3", num:3, section:"二、填空题", type:"填空题", difficulty:"简单", knowledge:"余角", stem:"一个角的余角是 35°，则这个角是 ______。", options:[], answer:"55°", analysis:"90°−35°=55°。" },
    { id:"4", num:4, section:"三、解答题", type:"解答题", difficulty:"中等", knowledge:"角平分线", stem:"如图，已知 ∠AOB = 80°，OC 平分 ∠AOB，求 ∠AOC 的度数，并说明理由。", options:[], answer:"40°", analysis:"角平分线将角分成两个相等的角。" }
  ]
};

const params = new URLSearchParams(location.search);
const contextName = params.get("context") || "paper";
const isWorkbook = contextName === "series";
const initialTopicId = params.get("topic") || (isWorkbook ? "t9" : "t2");
// 试卷 / 专项 / 同步等共用同一工作台，避免从首页点不同类型资源时 tab 互相隔离
const STORAGE_KEY = "feixiang-ai-workspace-v5";
const LEGACY_STORAGE_KEYS = [
  "feixiang-ai-workspace-v4-paper",
  "feixiang-ai-workspace-v4-special",
  "feixiang-ai-workspace-v4-chapter",
  "feixiang-ai-workspace-v4-series",
  "feixiang-ai-workspace-v2",
  "feixiang-ai-workspace-v1"
];
try {
  sessionStorage.removeItem("feixiang-ai-workspace-v3");
} catch {}

const workbookCatalog = {
  t9: {
    title: "有理数运算基础过关配套题单",
    shortTitle: "有理数过关",
    source: "多维导学案",
    difficulty: "中等",
    questionCount: 20,
    usage: 1143
  },
  t7: {
    title: "整式运算高频易错巩固题单",
    shortTitle: "整式易错",
    source: "全品学练考",
    difficulty: "中等",
    questionCount: 14,
    usage: 522
  },
  t19: {
    title: "课内基础到探究题：进阶提升题单",
    shortTitle: "进阶提升",
    source: "常用提优训练系列",
    difficulty: "中等",
    questionCount: 18,
    usage: 831
  }
};

const workbookDirectory = {
  kicker: "练习册目录",
  title: "多维导学案 · 七年级上册",
  summary: "共 6 章 · 36 课时",
  breadcrumb: ["多维导学案", "第一章 丰富的图形世界"],
  chapters: [
    {
      id: "407962",
      title: "第一章 丰富的图形世界",
      expanded: false,
      lessons: [
        { title: "第 1 课时 生活中的立体图形（1）" },
        { title: "第 2 课时 生活中的立体图形（2）" },
        { title: "第 3 课时 从立体图形到平面图形（1）——正方体的展开与折叠" },
        { title: "第 4 课时 从立体图形到平面图形（2）——柱体、锥体的展开与折叠", active: true },
        { title: "第 5 课时 从立体图形到平面图形（3）——截一个几何体" },
        { title: "第 6 课时 从三个方向看物体的形状" }
      ]
    },
    { id: "407963", title: "第二章 有理数及其运算", expanded: false, lessons: [] },
    { id: "407964", title: "第三章 整式及其加减", expanded: false, lessons: [] },
    { id: "407965", title: "第四章 基本平面图形", expanded: false, lessons: [] },
    { id: "407966", title: "第五章 一元一次方程", expanded: false, lessons: [] },
    { id: "407967", title: "第六章 数据的收集与整理", expanded: false, lessons: [] }
  ]
};

let workspace = loadWorkspace();
let tabCounter = workspace.tabs.reduce((max, tab) => {
  const n = Number.parseInt(String(tab.id).replace("tab-", ""), 10);
  return Number.isFinite(n) ? Math.max(max, n) : max;
}, 0);
let basketCount = workspace.basketCount || 0;

function getBaseTopicId(topicId) {
  return String(topicId || "").replace(/-q\d+$/, "");
}

function tabIsWorkbook(tab) {
  return (tab?.context || contextName) === "series";
}

function tabIsSpecial(tab) {
  return (tab?.context || contextName) === "special";
}

function tabContextLabel(tab) {
  const ctx = tab?.context || contextName;
  if (ctx === "series") return "练习册";
  if (ctx === "special") return "专项练习";
  if (ctx === "chapter") return "同步练习";
  return "试卷";
}

function tabDocIcon(tab) {
  if (tabIsWorkbook(tab)) return "ri-book-open-line";
  if (tabIsSpecial(tab)) return "ri-focus-3-line";
  if ((tab?.context || "") === "chapter") return "ri-book-open-line";
  return "ri-file-list-3-line";
}

function shortenTabTitle(title, max = 12) {
  const text = String(title || "").trim();
  if (!text) return "题单";
  if (text.length <= max) return text;
  const cut = text.split(/[：:·—-]/)[0].trim();
  if (cut && cut.length <= max) return cut;
  return `${text.slice(0, max)}…`;
}

function getTabBaseTitle(tab) {
  if (tab?.meta?.title) return tab.meta.title;
  return String(tab?.title || "")
    .replace(/\s*·\s*第 \d+ 题(?:\s*·\s*第 \d+ 题)*$/g, "")
    .trim();
}

function loadWorkspace() {
  try {
    let saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) {
      try {
        saved = localStorage.getItem(STORAGE_KEY);
      } catch {}
    }
    if (!saved) {
      for (const legacyKey of LEGACY_STORAGE_KEYS) {
        saved = sessionStorage.getItem(legacyKey);
        if (saved) {
          sessionStorage.removeItem(legacyKey);
          break;
        }
      }
    }
    if (saved) {
      const parsed = JSON.parse(saved);
      delete parsed.aiPanelHidden;
      if (Array.isArray(parsed.tabs)) {
        parsed.tabs = parsed.tabs.map(tab => ({
          ...tab,
          context: tab.context || contextName,
          topicId: tab.fromQuestionId ? tab.topicId : getBaseTopicId(tab.topicId)
        }));
      }
      return {
        tabs: [],
        activeTabId: null,
        homeActive: false,
        browseTabs: [],
        activeBrowseFilter: null,
        basketCount: 0,
        showAnswers: false,
        paperFavorited: false,
        globalSelectedQuestions: [],
        favoriteQuestions: [],
        ...parsed,
        browseTabs: Array.isArray(parsed.browseTabs) ? parsed.browseTabs : [],
        activeBrowseFilter: parsed.activeBrowseFilter || null
      };
    }
  } catch {}
  return { tabs: [], activeTabId: null, homeActive: false, browseTabs: [], activeBrowseFilter: null, basketCount: 0, showAnswers: false, paperFavorited: false, globalSelectedQuestions: [], favoriteQuestions: [] };
}

function saveWorkspace() {
  const json = JSON.stringify(workspace);
  sessionStorage.setItem(STORAGE_KEY, json);
  try {
    localStorage.setItem(STORAGE_KEY, json);
  } catch {}
}

function getQuestionSelectionKey(topicId, qId) {
  return `${getBaseTopicId(topicId)}::${qId}`;
}

function ensureGlobalSelected() {
  if (!Array.isArray(workspace.globalSelectedQuestions)) {
    workspace.globalSelectedQuestions = [];
  }
  if (workspace.globalSelectedQuestions.length) return;
  workspace.tabs.forEach(tab => {
    if (tab.isQuestionList || tab.fromQuestionId) return;
    (tab.selectedQuestionIds || []).forEach(qId => {
      const q = tab.questions.find(item => item.id === qId);
      if (!q || tab.removedQuestionIds?.includes(qId)) return;
      const entry = buildGlobalSelectedEntry(tab, q);
      if (!workspace.globalSelectedQuestions.some(item => item.selectionKey === entry.selectionKey)) {
        workspace.globalSelectedQuestions.push(entry);
      }
    });
  });
}

function getGlobalSelectedQuestions() {
  ensureGlobalSelected();
  return workspace.globalSelectedQuestions;
}

function isQuestionGloballySelected(topicId, qId) {
  const key = getQuestionSelectionKey(topicId, qId);
  return getGlobalSelectedQuestions().some(item => item.selectionKey === key);
}

function ensureFavoriteQuestions() {
  if (!Array.isArray(workspace.favoriteQuestions)) workspace.favoriteQuestions = [];
  return workspace.favoriteQuestions;
}

function isQuestionFavorited(topicId, qId) {
  return ensureFavoriteQuestions().includes(getQuestionSelectionKey(topicId, qId));
}

function toggleQuestionFavorite(qId, topicId) {
  const resolvedTopicId = topicId || getActiveTab()?.topicId;
  if (!resolvedTopicId) return false;
  const key = getQuestionSelectionKey(resolvedTopicId, qId);
  const list = ensureFavoriteQuestions();
  const index = list.indexOf(key);
  if (index >= 0) list.splice(index, 1);
  else list.push(key);
  saveWorkspace();
  renderQuestionCards();
  return index < 0;
}

function buildGlobalSelectedEntry(tab, q) {
  const topicId = getBaseTopicId(tab.topicId);
  const resolved = resolveTabQuestion(tab, q);
  return {
    selectionKey: getQuestionSelectionKey(topicId, q.id),
    topicId,
    sourceTitle: getTabBaseTitle(tab),
    question: { ...resolved }
  };
}

function matchesSelectedType(questionType, filterKey) {
  const type = questionType || "";
  if (filterKey === "选择") return type.includes("选择");
  if (filterKey === "填空") return type.includes("填空");
  if (filterKey === "解答") return type.includes("解答");
  return true;
}

function renderSelectedTypeSummaryHtml(items) {
  const counts = { 选择: 0, 填空: 0, 解答: 0 };
  items.forEach(item => {
    const type = item.question?.type || "";
    if (type.includes("选择")) counts.选择 += 1;
    else if (type.includes("填空")) counts.填空 += 1;
    else if (type.includes("解答")) counts.解答 += 1;
  });
  return ["选择", "填空", "解答"]
    .filter(key => counts[key] > 0)
    .map(key => `<button type="button" class="ai-selected-summary-count ${selectedPreviewTypeFilter === key ? "active" : ""}" data-selected-type="${key}">${counts[key]}</button>道${key}`)
    .join(" ");
}

function syncTabSelectedQuestionIds(tab) {
  if (!tab) return;
  tab.selectedQuestionIds = tab.questions
    .filter(q => !tab.removedQuestionIds.includes(q.id) && isQuestionGloballySelected(tab.topicId, q.id))
    .map(q => q.id);
}

function removeGlobalSelectedByKey(selectionKey) {
  workspace.globalSelectedQuestions = getGlobalSelectedQuestions().filter(item => item.selectionKey !== selectionKey);
  syncTabSelectedQuestionIds(getActiveTab());
  saveWorkspace();
  renderQuestionCards();
}

function getActiveTab() {
  return workspace.tabs.find(tab => tab.id === workspace.activeTabId) || workspace.tabs[0];
}

function getQuestions(topicId) {
  const baseId = getBaseTopicId(topicId);
  const questions = paperQuestions[baseId] || paperQuestions.t2;
  return questions.map(q => ({ ...q }));
}

function resolveTopicMeta(topicId, tabContext = contextName, overrides = {}) {
  const baseId = getBaseTopicId(topicId);
  let meta;
  if (tabContext === "series") {
    const catalog = workbookCatalog[baseId];
    meta = catalog
      ? { ...catalog }
      : {
        title: params.get("title") || "练习册题单",
        shortTitle: shortenTabTitle(params.get("title") || "题单"),
        source: params.get("source") || "系列题单",
        difficulty: params.get("difficulty") || "中等",
        questionCount: Number(params.get("questions") || 0),
        usage: Number(params.get("usage") || 0)
      };
  } else if (paperCatalog[baseId]) {
    meta = { ...paperCatalog[baseId] };
  } else {
    const fallbackTitle = params.get("title") || (tabContext === "special" ? "专项题单" : tabContext === "chapter" ? "同步练习" : "未命名试卷");
    meta = {
      title: fallbackTitle,
      shortTitle: shortenTabTitle(params.get("shortTitle") || fallbackTitle),
      focus: params.get("focus") || "",
      reason: params.get("reason") || (tabContext === "special" ? "专项练习" : tabContext === "chapter" ? "同步练习" : "试卷"),
      region: "深圳",
      grade: "七年级",
      examType: tabContext === "special" ? "专项" : tabContext === "chapter" ? "同步" : "试卷",
      questionCount: Number(params.get("questions") || 0),
      difficulty: params.get("difficulty") || "中等",
      usage: Number(params.get("usage") || 0),
      source: params.get("source") || ""
    };
  }

  if (overrides.title) {
    meta.title = overrides.title;
    meta.shortTitle = overrides.shortTitle || shortenTabTitle(overrides.title);
  } else if (overrides.shortTitle) {
    meta.shortTitle = overrides.shortTitle;
  } else if (!meta.shortTitle) {
    meta.shortTitle = shortenTabTitle(meta.title);
  }
  if (overrides.source) meta.source = overrides.source;
  if (overrides.difficulty) meta.difficulty = overrides.difficulty;
  if (overrides.reason) meta.reason = overrides.reason;
  if (overrides.focus) meta.focus = overrides.focus;
  if (overrides.questionCount != null) meta.questionCount = Number(overrides.questionCount);
  if (overrides.usage != null) meta.usage = Number(overrides.usage);
  return meta;
}

function favoriteResourceLabel(saved = false) {
  if (saved) return `<i class="ri-star-fill"></i><span id="favoritePaperLabel">已收藏</span>`;
  return `<i class="ri-star-line"></i><span id="favoritePaperLabel">收藏</span>`;
}

function createTab(topicId, tabContext = contextName, overrides = {}) {
  tabCounter += 1;
  const meta = resolveTopicMeta(topicId, tabContext, overrides);
  const questions = getQuestions(topicId).map(q => ({ ...q }));
  return {
    id: `tab-${tabCounter}`,
    topicId: getBaseTopicId(topicId),
    context: tabContext,
    title: meta.title,
    shortTitle: meta.shortTitle || meta.title.slice(0, 12),
    lessonKey: overrides.lessonKey || "",
    meta,
    selectedQuestionIds: [],
    removedQuestionIds: [],
    modifiedQuestions: {},
    questions
  };
}

function refreshMainTabFromSource(tab) {
  if (!tab || tab.fromQuestionId || tab.isQuestionList) return;
  const baseId = getBaseTopicId(tab.topicId);
  const fresh = getQuestions(baseId);
  const meta = resolveTopicMeta(baseId, tab.context);
  tab.questions = fresh.map(q => ({ ...q }));
  tab.removedQuestionIds = [];
  tab.modifiedQuestions = {};
  tab.meta = meta;
  tab.title = meta.title;
  tab.shortTitle = meta.shortTitle || meta.title.slice(0, 10);
  tab.selectedQuestionIds = tab.selectedQuestionIds.filter(id => fresh.some(q => q.id === id));
}

function hasSingleChoiceSection(tab) {
  if (!tab) return false;
  return tab.questions.some(q =>
    !tab.removedQuestionIds.includes(q.id) && String(q.section || "").includes("单项选择")
  );
}

function formatQuestionListTitle() {
  const now = new Date();
  return `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}题单`;
}

function formatQuestionListShortTitle() {
  const now = new Date();
  return `题单 ${now.getMonth() + 1}.${now.getDate()}`;
}

function ensureInitialTab() {
  const baseId = getBaseTopicId(initialTopicId);
  const urlTitle = String(params.get("title") || "").trim();
  const urlLessonKey = String(params.get("lessonKey") || urlTitle || "").trim();
  let mainTab = workspace.tabs.find(tab =>
    getBaseTopicId(tab.topicId) === baseId
    && !tab.fromQuestionId
    && !tab.isQuestionList
    && (!urlLessonKey || tab.lessonKey === urlLessonKey || tab.title === urlLessonKey)
  );

  if (!mainTab) {
    mainTab = createTab(initialTopicId, contextName, {
      title: urlTitle || undefined,
      shortTitle: params.get("shortTitle") || urlTitle || undefined,
      lessonKey: urlLessonKey || undefined,
      source: params.get("source") || undefined,
      difficulty: params.get("difficulty") || undefined,
      reason: params.get("reason") || undefined,
      focus: params.get("focus") || undefined,
      questionCount: params.get("questions") || undefined,
      usage: params.get("usage") || undefined
    });
    workspace.tabs.push(mainTab);
  } else if (params.get("topic") || !hasSingleChoiceSection(mainTab)) {
    refreshMainTabFromSource(mainTab);
    if (urlTitle) {
      mainTab.title = urlTitle;
      mainTab.shortTitle = params.get("shortTitle") || urlTitle;
      mainTab.lessonKey = urlLessonKey || mainTab.lessonKey;
      if (mainTab.meta) {
        mainTab.meta.title = urlTitle;
        mainTab.meta.shortTitle = mainTab.shortTitle;
      }
    }
  }

  if (params.get("topic")) {
    workspace.activeTabId = mainTab.id;
    workspace.homeActive = false;
    workspace.activeBrowseFilter = null;
  } else if (params.get("tabId")) {
    const urlTab = workspace.tabs.find(tab => tab.id === params.get("tabId"));
    if (urlTab) workspace.activeTabId = urlTab.id;
  } else if (!workspace.activeTabId || !workspace.tabs.some(tab => tab.id === workspace.activeTabId)) {
    workspace.activeTabId = mainTab.id;
  }

  workspace.tabs = workspace.tabs.filter(tab => {
    if (tab.isQuestionList || tab.fromQuestionId) {
      return workspace.tabs.some(parent => parent.id === tab.fromTabId);
    }
    return true;
  });

  saveWorkspace();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function resolveTabQuestion(tab, q) {
  const modified = tab.modifiedQuestions?.[q.id] || {};
  return {
    ...q,
    stem: modified.stem ?? q.stem,
    type: modified.type ?? q.type,
    difficulty: modified.difficulty ?? q.difficulty,
    options: modified.options ?? q.options ?? [],
    analysis: modified.analysis ?? q.analysis
  };
}

function buildEditorPayload(tab) {
  const visible = tab.questions
    .filter(q => !tab.removedQuestionIds.includes(q.id))
    .sort((a, b) => (a.num || 0) - (b.num || 0));

  return {
    tabId: tab.id,
    title: tab.title,
    isQuestionList: Boolean(tab.isQuestionList),
    context: tab.context || contextName,
    topicId: getBaseTopicId(tab.topicId),
    updatedAt: Date.now(),
    questions: visible.map((q, index) => {
      const resolved = resolveTabQuestion(tab, q);
      const meta = questionDefaults(resolved);
      return {
        id: String(resolved.id || `q-${index + 1}`),
        num: index + 1,
        section: resolved.section || (tab.isQuestionList ? "题单题目" : "试卷题目"),
        text: resolved.stem || "",
        options: [...(resolved.options || [])],
        answer: resolved.answer || "",
        path: `初中 / 数学 / ${resolved.type || "选择题"} / ${resolved.difficulty || "中等"} / ${meta.minutes} 分钟`,
        tags: [
          tab.meta?.source || "飞象题库",
          resolved.knowledge
        ].filter(Boolean),
        competency: resolved.competency || meta.competency || "运算能力",
        explanation: resolved.analysis || ""
      };
    })
  };
}

function encodePayloadHash(payload) {
  const json = JSON.stringify(payload);
  return `p=${encodeURIComponent(btoa(unescape(encodeURIComponent(json))))}`;
}

function saveEditorPayload(payload) {
  const json = JSON.stringify(payload);
  sessionStorage.setItem("feixiang-editor-payload", json);
  if (payload.tabId) {
    sessionStorage.setItem(`feixiang-editor-payload-${payload.tabId}`, json);
  }
  try {
    localStorage.setItem("feixiang-editor-payload", json);
    if (payload.tabId) {
      localStorage.setItem(`feixiang-editor-payload-${payload.tabId}`, json);
    }
  } catch {}
  return encodePayloadHash(payload);
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function buildPaperFacts(tab) {
  const meta = tab.meta || {};
  const visibleCount = tab.questions.filter(q => !tab.removedQuestionIds.includes(q.id)).length;
  if (tab.isQuestionList) {
    return ["自定义题单", `${visibleCount} 题`, meta.createdAt ? `创建于 ${meta.createdAt}` : ""].filter(Boolean);
  }
  if (tabIsWorkbook(tab)) {
    return [
      meta.source || "练习册",
      "章节练习",
      `${visibleCount} 题`,
      meta.difficulty ? `难度 ${meta.difficulty}` : "",
      meta.usage ? `${meta.usage} 人使用` : ""
    ].filter(Boolean);
  }
  if (tabIsSpecial(tab)) {
    return [
      meta.reason || "专项练习",
      meta.source,
      `${visibleCount} 题`,
      meta.difficulty ? `难度 ${meta.difficulty}` : "",
      meta.usage ? `${meta.usage} 人使用` : ""
    ].filter(Boolean);
  }
  return [
    meta.reason || meta.source,
    meta.region,
    meta.grade,
    meta.examType,
    `${visibleCount} 题`,
    meta.difficulty ? `难度 ${meta.difficulty}` : "",
    meta.usage ? `${meta.usage} 次下载` : ""
  ].filter(Boolean);
}

function renderMeta(tab) {
  const displayTitle = tab.fromQuestionId
    ? `${getTabBaseTitle(tab)} · 第 ${tab.questions[0]?.num || ""} 题`
    : tab.title;
  document.querySelector("#topicTitle").textContent = displayTitle;

  const facts = document.querySelector("#paperMetaFacts");
  if (facts) {
    facts.innerHTML = buildPaperFacts(tab).map(text => `<span>${escapeHtml(text)}</span>`).join("");
  }

  const context = document.querySelector("#breadcrumbContext");
  const leaf = document.querySelector("#breadcrumbLeaf");
  if (context) context.textContent = tabContextLabel(tab);
  if (leaf) leaf.textContent = displayTitle;
}

function renderWorkbookDirectory() {
  const tree = document.querySelector("#directoryTree");
  if (!tree) return;
  tree.innerHTML = workbookDirectory.chapters.map(chapter => `
    <section class="tree-group workbook-chapter ${chapter.expanded ? "open" : ""}">
      <button type="button" class="chapter-row">
        <i class="ri-arrow-${chapter.expanded ? "down" : "right"}-s-line"></i>
        <span>${escapeHtml(chapter.title)}</span>
      </button>
      <div class="tree-leaves"${chapter.expanded ? "" : " hidden"}>
        ${chapter.lessons.map(lesson => `
          <button class="tree-lesson ${lesson.active ? "active" : ""}" type="button">
            <span class="lesson-title">${escapeHtml(lesson.title)}</span>
          </button>`).join("")}
      </div>
    </section>`).join("");
}

function setDirectoryOpen(open, mobile = false) {
  const directoryPanel = document.querySelector("#directoryPanel");
  const workspace = document.querySelector("#aiWorkspace");
  const directoryToggle = document.querySelector("#directoryToggle");
  const directoryMask = document.querySelector("#directoryMask");
  if (!directoryPanel || !workspace) return;
  directoryPanel.classList.toggle("open", open);
  workspace.classList.toggle("directory-open", open && !mobile);
  directoryToggle?.setAttribute("aria-expanded", String(open));
  if (directoryMask) directoryMask.hidden = !open || !mobile;
}

function bindDirectoryEvents() {
  if (!isWorkbook) return;

  document.querySelector("#directoryToggle")?.addEventListener("click", () => {
    const directoryPanel = document.querySelector("#directoryPanel");
    setDirectoryOpen(!directoryPanel?.classList.contains("open"));
  });

  document.querySelector("#mobileDirectory")?.addEventListener("click", () => {
    setDirectoryOpen(true, true);
  });

  document.querySelector("#directoryMask")?.addEventListener("click", () => {
    setDirectoryOpen(false, true);
  });

  document.querySelectorAll(".workbook-chapter > .chapter-row").forEach(button => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("i");
      const leaves = button.nextElementSibling;
      if (!leaves) return;
      const open = leaves.hidden;
      leaves.hidden = !open;
      button.closest(".workbook-chapter")?.classList.toggle("open", open);
      if (icon) icon.className = open ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line";
    });
  });

  document.querySelectorAll(".tree-lesson").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tree-lesson").forEach(item => item.classList.toggle("active", item === button));
      const label = button.querySelector(".lesson-title")?.textContent.trim() || button.textContent.trim();
      document.querySelector("#breadcrumbLeaf").textContent = label;
      showToast(`已切换到「${label}」`);
    });
  });
}

function applyPageMode() {
  const workspace = document.querySelector("#aiWorkspace");
  const directoryPanel = document.querySelector("#directoryPanel");
  const mobileDirectory = document.querySelector("#mobileDirectory");
  const docTabs = document.querySelector("#docTabs");
  const favoriteLabel = document.querySelector("#favoritePaperLabel");

  // 练习册与试卷共用详情布局，不再展示左侧目录
  document.body.classList.remove("ai-workbook-page");
  workspace?.classList.remove("workbook-mode", "directory-open");
  directoryPanel?.setAttribute("hidden", "");
  mobileDirectory?.setAttribute("hidden", "");
  document.querySelector("#directoryMask")?.setAttribute("hidden", "");
  document.querySelector("#breadcrumbContext").textContent = isWorkbook ? "练习册" : "试卷";
  document.querySelector("#breadcrumbLeaf").textContent = isWorkbook ? "章节练习" : "试卷详情";
  if (favoriteLabel) favoriteLabel.textContent = "收藏";
  if (docTabs) docTabs.setAttribute("aria-label", "已打开的题单");
}

function questionDefaults(q) {
  return {
    minutes: q.minutes || (q.type === "解答题" ? 5 : q.type === "填空题" ? 2 : 1),
    competency: q.competency || "运算能力",
    badges: q.badges || []
  };
}

function questionCardHtml(q, tab) {
  const removed = tab.removedQuestionIds.includes(q.id);
  const selected = isQuestionGloballySelected(tab.topicId, q.id);
  const favorited = isQuestionFavorited(tab.topicId, q.id);
  const answerOpen = expandedAnalysisIds.has(q.id);
  const modified = tab.modifiedQuestions[q.id];
  const stem = modified?.stem || q.stem;
  const type = modified?.type || q.type;
  const difficulty = modified?.difficulty || q.difficulty;
  const meta = questionDefaults(q);
  const optionList = modified?.options || q.options || [];
  // 长选项并排会互相错位，超过阈值改单列排版
  const singleColumn = optionList.some(opt => String(opt).length > 20);
  const options = optionList.length
    ? `<div class="q-options ${singleColumn ? "q-options-single" : ""}">${optionList.map(opt => `<span>${escapeHtml(opt)}</span>`).join("")}</div>`
    : "";
  const badges = meta.badges.map(label => `<span class="q-badge ${label.includes("创新") ? "hot" : "ai"}">${escapeHtml(label)}</span>`).join("");
  const picked = dragPickIds.has(q.id);
  return `
    <article class="question-item ${removed ? "removed" : ""} ${selected ? "selected" : ""} ${picked ? "drag-picked" : ""} ${modified ? "modified" : ""} ${answerOpen ? "answer-open" : ""}"
      data-q="${q.id}" tabindex="0" aria-label="第 ${q.num} 题" draggable="${removed ? "false" : "true"}" title="拖到左侧已选题目可添加；Shift / ⌘ 多选后可一起拖入">
      <div class="q-card-top">
        <div class="q-badges">${badges}</div>
        <p class="q-trail">初中 / 数学 / ${escapeHtml(type)} / ${escapeHtml(difficulty)} / ${meta.minutes} 分钟</p>
      </div>
      <div class="q-body">
        <p class="q-stem"><b>${q.num}.</b> ${escapeHtml(stem)}</p>
        ${options}
      </div>
      <div class="q-answer-panel">
        <div class="q-inline-answer"><em>答案</em>${escapeHtml(q.answer)}</div>
        <div class="q-inline-analysis"><em>解析</em>${escapeHtml(q.analysis)}</div>
      </div>
      <div class="q-card-bar">
        <span class="q-knowledge-foot">知识点：${escapeHtml(q.knowledge)} / 核心素养：${escapeHtml(meta.competency)}</span>
        <div class="q-card-actions">
          <button type="button" class="q-action-ghost ${answerOpen ? "active" : ""}" data-card-action="analysis" data-q="${q.id}" aria-pressed="${answerOpen}">
            <i class="ri-file-text-line"></i><span>${answerOpen ? "收起解析" : "解析"}</span>
          </button>
          <button type="button" class="q-action-ghost ${favorited ? "saved" : ""}" data-card-action="favorite" data-q="${q.id}">
            <i class="${favorited ? "ri-star-fill" : "ri-star-line"}"></i><span>${favorited ? "已收藏" : "收藏"}</span>
          </button>
          <button type="button" class="q-action-ghost" data-card-action="similar" data-q="${q.id}">
            <i class="ri-stack-line"></i><span>相似题</span>
          </button>
          <button type="button" class="q-action-ghost" data-card-action="fix" data-q="${q.id}">
            <i class="ri-error-warning-line"></i><span>纠错</span>
          </button>
          ${selected
    ? `<button type="button" class="q-remove-btn" data-card-action="remove-selected" data-q="${q.id}" title="点击移出已选题目"><i class="ri-check-line"></i><span>已添加</span></button>`
    : `<button type="button" class="q-add-btn" data-card-action="add-selected" data-q="${q.id}"><i class="ri-add-line"></i><span>添加</span></button>`}
        </div>
      </div>
    </article>`;
}

function renderQuestionCards() {
  const tab = getActiveTab();
  if (!tab) return;
  syncTabSelectedQuestionIds(tab);
  document.title = `${tab.title} · AI 试卷工作台`;
  renderMeta(tab);

  const visible = tab.questions.filter(q => !tab.removedQuestionIds.includes(q.id));
  const sections = [...new Set(visible.map(q => q.section))];
  const board = document.querySelector("#questionCardBoard");
  board.classList.toggle("show-answers", workspace.showAnswers);
  board.innerHTML = sections.map(section => {
    const items = visible.filter(q => q.section === section);
    const qIds = items.map(q => q.id).join(",");
    return `
      <section class="question-section" data-section="${escapeHtml(section)}">
        <header class="question-section-head" draggable="true" data-section="${escapeHtml(section)}" data-q-ids="${qIds}" title="拖到左侧已选题目，可整组加入本模块全部题目">
          <div class="question-section-head-main">
            <i class="ri-draggable question-section-drag" aria-hidden="true"></i>
            <h3>${escapeHtml(section)}</h3>
          </div>
          <span>${items.length} 题</span>
        </header>
        <div class="paper-sheet">
          <div class="question-list-flow">${items.map(q => questionCardHtml(q, tab)).join("")}</div>
        </div>
      </section>`;
  }).join("");

  renderSelectedContext();
  bindQuestionCardEvents();
}

function renderSelectedFooter(count) {
  const button = document.querySelector("#createQuestionList");
  const label = document.querySelector("#createQuestionListLabel");
  const hint = document.querySelector("#aiSelectedHint");
  const railBadge = document.querySelector("#aiSelectedExpandCount");
  const aiEntry = document.querySelector("#openAiCreate");
  const aiLabel = document.querySelector("#openAiCreateLabel");
  if (button) button.disabled = count === 0;
  if (label) label.textContent = count ? `创建题单(${count})` : "创建题单";
  if (hint) hint.textContent = count ? `已选 ${count} 题` : "还没有选题";
  if (railBadge) {
    railBadge.textContent = count > 99 ? "99+" : String(count);
    railBadge.hidden = count === 0;
  }
  // 没有已选题时 AI 是唯一可用的行动，升为主按钮，避免出现点了没反应的死按钮
  if (aiEntry) aiEntry.classList.toggle("is-primary", count === 0);
  if (aiLabel) aiLabel.textContent = count ? `AI 补充(${count})` : "AI 生成";
}

function syncSelectedPanelChrome() {
  const root = document.querySelector("#aiWorkspace");
  root?.classList.toggle("selected-panel-enlarged", selectedPanelEnlarged);
  document.querySelector("#aiSelectedPanel")?.classList.toggle("is-enlarged", selectedPanelEnlarged);
  const enlargeBtn = document.querySelector("#enlargeSelectedPanel");
  const answerBtn = document.querySelector("#toggleSelectedAnswers");
  const preview = document.querySelector("#aiSelectedPreview");
  if (enlargeBtn) {
    enlargeBtn.textContent = selectedPanelEnlarged ? "还原" : "放大查看";
    enlargeBtn.setAttribute("aria-pressed", selectedPanelEnlarged ? "true" : "false");
    enlargeBtn.title = selectedPanelEnlarged ? "退出全屏，还原侧栏" : "全屏查看已选题目";
  }
  if (answerBtn) {
    answerBtn.hidden = !selectedPanelEnlarged;
    answerBtn.textContent = selectedShowAnswers ? "隐藏答案" : "显示答案";
    answerBtn.setAttribute("aria-pressed", selectedShowAnswers ? "true" : "false");
  }
  preview?.classList.toggle("show-answers", selectedPanelEnlarged && selectedShowAnswers);
  preview?.classList.toggle("is-enlarged", selectedPanelEnlarged);
}

function setSelectedPanelEnlarged(next) {
  selectedPanelEnlarged = Boolean(next);
  if (selectedPanelEnlarged) {
    rightPanelSectionState.selectedCollapsed = false;
    applySelectedPanelState();
  } else {
    selectedShowAnswers = false;
    selectedExpandedAnalysisKeys.clear();
  }
  syncSelectedPanelChrome();
  renderSelectedContext();
}

function toggleSelectedPanelEnlarge() {
  setSelectedPanelEnlarged(!selectedPanelEnlarged);
}

function toggleSelectedShowAnswers() {
  if (!selectedPanelEnlarged) return;
  selectedShowAnswers = !selectedShowAnswers;
  syncSelectedPanelChrome();
  renderSelectedContext();
}

function toggleSelectedQuestionAnalysis(selectionKey) {
  if (selectedExpandedAnalysisKeys.has(selectionKey)) selectedExpandedAnalysisKeys.delete(selectionKey);
  else selectedExpandedAnalysisKeys.add(selectionKey);
  renderSelectedContext();
}

function selectedPreviewCompactHtml(item) {
  return `
    <article class="ai-selected-preview-item" data-selection-key="${item.selectionKey}">
      <header class="ai-selected-preview-head">
        <strong>${escapeHtml(item.question.type)}</strong>
        <button type="button" data-selected-action="remove" data-selection-key="${item.selectionKey}">移出</button>
      </header>
      <p class="ai-selected-preview-stem">${escapeHtml(item.question.stem)}</p>
    </article>`;
}

function selectedPreviewEnlargedHtml(item, index) {
  const q = item.question;
  const meta = questionDefaults(q);
  const favorited = isQuestionFavorited(item.topicId, q.id);
  const answerOpen = selectedExpandedAnalysisKeys.has(item.selectionKey);
  const optionList = q.options || [];
  const singleColumn = optionList.some(opt => String(opt).length > 20);
  const options = optionList.length
    ? `<div class="q-options ${singleColumn ? "q-options-single" : ""}">${optionList.map(opt => `<span>${escapeHtml(opt)}</span>`).join("")}</div>`
    : "";
  const badges = meta.badges.map(label => `<span class="q-badge ${label.includes("创新") ? "hot" : "ai"}">${escapeHtml(label)}</span>`).join("");
  const displayNum = q.num || index + 1;
  return `
    <article class="question-item ai-selected-enlarged-item ${answerOpen ? "answer-open" : ""}"
      data-selection-key="${item.selectionKey}" data-topic-id="${escapeHtml(item.topicId)}" data-q="${escapeHtml(q.id)}" tabindex="0"
      aria-label="已选第 ${displayNum} 题">
      <div class="q-card-top">
        <div class="q-badges">${badges}</div>
        <p class="q-trail">初中 / 数学 / ${escapeHtml(q.type)} / ${escapeHtml(q.difficulty || "中等")} / ${meta.minutes} 分钟</p>
      </div>
      <div class="q-body">
        <p class="q-stem"><b>${displayNum}.</b> ${escapeHtml(q.stem)}</p>
        ${options}
      </div>
      <div class="q-answer-panel">
        <div class="q-inline-answer"><em>答案</em>${escapeHtml(q.answer || "暂无")}</div>
        <div class="q-inline-analysis"><em>解析</em>${escapeHtml(q.analysis || "暂无")}</div>
      </div>
      <div class="q-card-bar">
        <span class="q-knowledge-foot">知识点：${escapeHtml(q.knowledge || "未标注")} / 核心素养：${escapeHtml(meta.competency)}</span>
        <div class="q-card-actions">
          <button type="button" class="q-action-ghost ${answerOpen ? "active" : ""}" data-selected-action="analysis" data-selection-key="${item.selectionKey}" aria-pressed="${answerOpen}">
            <i class="ri-file-text-line"></i><span>${answerOpen ? "收起解析" : "解析"}</span>
          </button>
          <button type="button" class="q-action-ghost ${favorited ? "saved" : ""}" data-selected-action="favorite" data-selection-key="${item.selectionKey}" data-topic-id="${escapeHtml(item.topicId)}" data-q="${escapeHtml(q.id)}">
            <i class="${favorited ? "ri-star-fill" : "ri-star-line"}"></i><span>${favorited ? "已收藏" : "收藏"}</span>
          </button>
          <button type="button" class="q-action-ghost" data-selected-action="similar" data-q="${escapeHtml(q.id)}">
            <i class="ri-stack-line"></i><span>相似题</span>
          </button>
          <button type="button" class="q-action-ghost" data-selected-action="fix" data-q="${escapeHtml(q.id)}">
            <i class="ri-error-warning-line"></i><span>纠错</span>
          </button>
          <button type="button" class="q-remove-btn" data-selected-action="remove" data-selection-key="${item.selectionKey}" title="移出已选题目">
            <i class="ri-close-line"></i><span>移出</span>
          </button>
        </div>
      </div>
    </article>`;
}

function bindSelectedPreviewEvents() {
  const preview = document.querySelector("#aiSelectedPreview");
  if (!preview) return;
  preview.querySelectorAll("[data-selected-action]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      const action = button.dataset.selectedAction;
      const selectionKey = button.dataset.selectionKey;
      const topicId = button.dataset.topicId;
      const qId = button.dataset.q;
      const item = getGlobalSelectedQuestions().find(entry => entry.selectionKey === selectionKey);
      const q = item?.question;

      if (action === "remove" && selectionKey) {
        removeGlobalSelectedByKey(selectionKey);
        return;
      }
      if (action === "analysis" && selectionKey) {
        toggleSelectedQuestionAnalysis(selectionKey);
        return;
      }
      if (action === "favorite" && topicId && qId) {
        const added = toggleQuestionFavorite(qId, topicId);
        showToast(added ? `已收藏第 ${q?.num || ""} 题` : `已取消收藏第 ${q?.num || ""} 题`);
        return;
      }
      if (action === "similar") showToast(`正在查找第 ${q?.num || ""} 题的相似题…`);
      if (action === "fix") showToast(`已记录第 ${q?.num || ""} 题的纠错反馈，教研会尽快核对`);
    });
  });
}

function renderSelectedContext() {
  const wrap = document.querySelector("#aiSelectedContext");
  const summary = document.querySelector("#aiSelectedSummary");
  const preview = document.querySelector("#aiSelectedPreview");
  const empty = document.querySelector("#aiSelectedEmpty");
  if (!wrap || !preview) return;
  const selected = getGlobalSelectedQuestions();
  const visible = selectedPreviewTypeFilter
    ? selected.filter(item => matchesSelectedType(item.question.type, selectedPreviewTypeFilter))
    : selected;
  wrap.classList.toggle("has-selection", selected.length > 0);
  document.querySelector("#aiSelectedPanel")?.classList.toggle("has-selection", selected.length > 0);
  renderSelectedFooter(selected.length);
  syncSelectedPanelChrome();
  if (summary) {
    summary.innerHTML = renderSelectedTypeSummaryHtml(selected);
    summary.hidden = !selected.length;
    summary.querySelectorAll(".ai-selected-summary-count").forEach(button => {
      button.addEventListener("click", event => {
        event.stopPropagation();
        const type = button.dataset.selectedType;
        selectedPreviewTypeFilter = selectedPreviewTypeFilter === type ? null : type;
        renderSelectedContext();
      });
    });
  }
  if (empty) empty.hidden = selected.length > 0;
  preview.innerHTML = selectedPanelEnlarged
    ? visible.map((item, index) => selectedPreviewEnlargedHtml(item, index)).join("")
    : visible.map(item => selectedPreviewCompactHtml(item)).join("");
  bindSelectedPreviewEvents();
}

function getFilteredSidebarPapers() {
  const query = paperListState.query.trim().toLowerCase();
  let list = sidebarPaperList.filter(paper => {
    if (query && !`${paper.title} ${paper.region} ${paper.grade} ${paper.examType}`.toLowerCase().includes(query)) {
      return false;
    }
    if (paperListState.examType !== "all" && paper.examType !== paperListState.examType) return false;
    return true;
  });

  list = [...list].sort((a, b) => b.recommendScore - a.recommendScore);
  return list;
}

function renderPaperList() {
  const scroll = document.querySelector("#paperListScroll");
  if (!scroll || isWorkbook) return;

  const activeTopicId = getBaseTopicId(getActiveTab()?.topicId);
  const list = getFilteredSidebarPapers();

  if (!list.length) {
    scroll.innerHTML = `<p class="paper-list-empty">没有找到匹配的试卷，试试调整筛选条件。</p>`;
    return;
  }

  scroll.innerHTML = list.map(paper => `
      <button type="button" class="paper-list-card ${paper.id === activeTopicId ? "active" : ""}" data-paper-id="${paper.id}">
        <p class="paper-list-card-title"><span class="paper-list-card-tag">${escapeHtml(paper.examType)}</span>${escapeHtml(paper.title)}</p>
      </button>`).join("");

  scroll.querySelectorAll("[data-paper-id]").forEach(button => {
    button.addEventListener("click", () => {
      openTab(button.dataset.paperId);
      if (isMobileLayout()) setMobileDrawer("paper", false);
    });
  });
}

function bindPaperListControls() {
  if (isWorkbook) return;

  const workspace = document.querySelector("#aiWorkspace");
  const panel = document.querySelector("#paperListPanel");
  const collapseBtn = document.querySelector("#collapsePaperList");
  const expandBtn = document.querySelector("#paperListExpand");
  const topbarExpandBtn = document.querySelector("#topbarExpandPaperList");
  const searchInput = document.querySelector("#paperListSearch");
  const typeBtn = document.querySelector("#paperListTypeBtn");
  const filterBtn = document.querySelector("#paperListFilterBtn");

  const typeOptions = ["all", "期末", "期中", "周测"];

  const setCollapsed = collapsed => {
    workspace?.classList.toggle("paper-list-collapsed", collapsed);
    applyResponsiveChrome();
  };

  const expandPanel = () => {
    if (isMobileLayout()) setMobileDrawer("paper", true);
    else setCollapsed(false);
  };

  collapseBtn?.addEventListener("click", () => {
    if (isMobileLayout()) setMobileDrawer("paper", false);
    else setCollapsed(true);
  });
  expandBtn?.addEventListener("click", expandPanel);
  topbarExpandBtn?.addEventListener("click", expandPanel);
  panel?.addEventListener("click", event => {
    if (isMobileLayout()) return;
    if (!workspace?.classList.contains("paper-list-collapsed")) return;
    if (event.target.closest(".paper-list-expand") || event.target === panel) expandPanel();
  });

  searchInput?.addEventListener("input", () => {
    paperListState.query = searchInput.value;
    renderPaperList();
  });

  typeBtn?.addEventListener("click", () => {
    const index = typeOptions.indexOf(paperListState.examType);
    paperListState.examType = typeOptions[(index + 1) % typeOptions.length];
    document.querySelector("#paperListTypeLabel").textContent =
      paperListState.examType === "all" ? "类型" : paperListState.examType;
    renderPaperList();
  });

  filterBtn?.addEventListener("click", () => showToast("更多筛选即将开放"));
}

function isMobileLayout() {
  return mobileLayoutQuery.matches;
}

function setMobileDrawer(name, open) {
  const root = document.querySelector("#aiWorkspace");
  if (!root) return;
  if (name === "selected") root.classList.toggle("mobile-selected-open", open);
  const anyOpen = root.classList.contains("mobile-selected-open");
  const mask = document.querySelector("#panelMask");
  if (mask) mask.hidden = !anyOpen;
}

function closeMobileDrawers() {
  setMobileDrawer("selected", false);
}

function applyResponsiveChrome() {
  const selectedBtn = document.querySelector("#topbarExpandSelected");
  if (isMobileLayout()) {
    if (selectedBtn) selectedBtn.hidden = false;
    return;
  }
  closeMobileDrawers();
  if (selectedBtn) selectedBtn.hidden = !rightPanelSectionState.selectedCollapsed;
}

function applySelectedPanelState() {
  const root = document.querySelector("#aiWorkspace");
  root?.classList.toggle("selected-panel-collapsed", rightPanelSectionState.selectedCollapsed);
  if (rightPanelSectionState.selectedCollapsed && selectedPanelEnlarged) {
    selectedPanelEnlarged = false;
    selectedShowAnswers = false;
    selectedExpandedAnalysisKeys.clear();
  }
  syncSelectedPanelChrome();
  applyResponsiveChrome();
}

function bindSelectedPanelControls() {
  const panel = document.querySelector("#aiSelectedPanel");
  const collapseBtn = document.querySelector("#collapseSelectedPanel");
  const expandBtn = document.querySelector("#aiSelectedExpand");
  const topbarExpandBtn = document.querySelector("#topbarExpandSelected");

  // 没有已选题目时不占用正文宽度，选中第一题后再展开
  rightPanelSectionState.selectedCollapsed = getGlobalSelectedQuestions().length === 0;

  collapseBtn?.addEventListener("click", () => {
    if (isMobileLayout()) {
      setMobileDrawer("selected", false);
      return;
    }
    selectedPanelEnlarged = false;
    selectedShowAnswers = false;
    selectedExpandedAnalysisKeys.clear();
    rightPanelSectionState.selectedCollapsed = true;
    applySelectedPanelState();
    renderSelectedContext();
  });

  document.querySelector("#enlargeSelectedPanel")?.addEventListener("click", event => {
    event.stopPropagation();
    toggleSelectedPanelEnlarge();
  });

  document.querySelector("#toggleSelectedAnswers")?.addEventListener("click", event => {
    event.stopPropagation();
    toggleSelectedShowAnswers();
  });

  const openPanel = () => {
    if (isMobileLayout()) setMobileDrawer("selected", true);
    else expandSelectedPanel();
  };

  expandBtn?.addEventListener("click", openPanel);
  topbarExpandBtn?.addEventListener("click", openPanel);
  panel?.addEventListener("click", event => {
    if (isMobileLayout()) return;
    if (!document.querySelector("#aiWorkspace")?.classList.contains("selected-panel-collapsed")) return;
    if (event.target.closest(".ai-selected-expand") || event.target === panel) expandSelectedPanel();
  });

  applySelectedPanelState();
}

function openSelectedAsQuestionList() {
  const selectedItems = getGlobalSelectedQuestions();
  if (!selectedItems.length) {
    showToast("请先选择题目");
    return;
  }

  const selectedQuestions = selectedItems.map(item => ({ ...item.question }));
  if (!selectedQuestions.length) return;

  tabCounter += 1;
  const title = formatQuestionListTitle();
  const now = new Date();
  const pad = value => String(value).padStart(2, "0");
  const createdAt = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  const questions = selectedQuestions.map((q, index) => ({
    ...q,
    id: `${q.id}-list-${tabCounter}-${index}`,
    num: index + 1
  }));

  const newTab = {
    id: `tab-${tabCounter}`,
    topicId: `list-${Date.now()}`,
    context: getActiveTab()?.context || contextName,
    title,
    shortTitle: formatQuestionListShortTitle(),
    meta: {
      title,
      shortTitle: formatQuestionListShortTitle(),
      source: "自定义题单",
      difficulty: "中等",
      questionCount: questions.length,
      usage: 0,
      createdAt
    },
    selectedQuestionIds: questions.map(q => q.id),
    removedQuestionIds: [],
    modifiedQuestions: {},
    questions,
    fromTabId: getActiveTab()?.id || null,
    isQuestionList: true,
    selectionKey: selectedItems.map(item => item.selectionKey).sort().join(",")
  };

  workspace.tabs.push(newTab);
  workspace.activeTabId = newTab.id;
  pruneOverflowTabs();
  clearSelectedQuestionsState();
  saveWorkspace();
  if (isMobileLayout()) setMobileDrawer("selected", false);
  renderAll();
  showToast(`已创建「${title}」，共 ${questions.length} 题，已选题目已清空`);
}

const AI_CREATE_CHIPS_WITH_BASE = ["再补 5 道同类型", "补 2 道压轴题", "删掉太简单的", "总共控制在 10 题"];
const AI_CREATE_CHIPS_EMPTY = ["七上有理数易错题 15 题", "期末选择题专练 12 题", "中等难度综合练习 20 题"];
const AI_TOPIC_KEYWORDS = ["有理数", "整式", "一元一次方程", "轴对称", "数轴", "正负数", "不等式", "角平分线", "几何"];

function aiCreateUsesSelected() {
  const checkbox = document.querySelector("#aiCreateUseSelected");
  return Boolean(checkbox && !checkbox.disabled && checkbox.checked);
}

function renderAiCreateChips() {
  const wrap = document.querySelector("#aiCreateChips");
  if (!wrap) return;
  const chips = aiCreateUsesSelected() ? AI_CREATE_CHIPS_WITH_BASE : AI_CREATE_CHIPS_EMPTY;
  wrap.innerHTML = chips
    .map(text => `<button type="button" class="ai-create-chip" data-ai-chip="${escapeHtml(text)}">${escapeHtml(text)}</button>`)
    .join("");
  wrap.querySelectorAll("[data-ai-chip]").forEach(chip => {
    chip.addEventListener("click", () => {
      const input = document.querySelector("#aiCreatePrompt");
      if (!input) return;
      const value = input.value.trim();
      input.value = value ? `${value}，${chip.dataset.aiChip}` : chip.dataset.aiChip;
      input.focus();
    });
  });
}

function openAiCreateModal() {
  const modal = document.querySelector("#aiCreateModal");
  if (!modal) return;
  const selected = getGlobalSelectedQuestions();
  const context = document.querySelector("#aiCreateContext");
  const checkbox = document.querySelector("#aiCreateUseSelected");
  const countNode = document.querySelector("#aiCreateSelectedCount");
  const summary = document.querySelector("#aiCreateContextSummary");

  if (context) context.hidden = selected.length === 0;
  if (checkbox) {
    checkbox.disabled = selected.length === 0;
    checkbox.checked = selected.length > 0;
  }
  if (countNode) countNode.textContent = String(selected.length);
  if (summary) {
    const counts = { 选择: 0, 填空: 0, 解答: 0 };
    selected.forEach(item => {
      const type = item.question?.type || "";
      if (type.includes("选择")) counts.选择 += 1;
      else if (type.includes("填空")) counts.填空 += 1;
      else if (type.includes("解答")) counts.解答 += 1;
    });
    const parts = ["选择", "填空", "解答"].filter(key => counts[key] > 0).map(key => `${counts[key]} 道${key}`);
    summary.textContent = parts.length ? parts.join(" · ") : "";
  }

  renderAiCreateChips();
  modal.hidden = false;
  document.querySelector("#aiCreatePrompt")?.focus();
}

function closeAiCreateModal() {
  const modal = document.querySelector("#aiCreateModal");
  if (!modal) return;
  modal.hidden = true;
  const input = document.querySelector("#aiCreatePrompt");
  if (input) input.value = "";
}

function collectAiCandidateQuestions(excludeKeys) {
  const pool = [];
  Object.entries(paperQuestions).forEach(([topicId, list]) => {
    list.forEach(q => {
      const key = getQuestionSelectionKey(topicId, q.id);
      if (excludeKeys.has(key)) return;
      pool.push({ ...q, sourceTopicId: topicId });
    });
  });
  return pool;
}

function rankAiCandidates(pool, prompt) {
  const wantsHard = /难|压轴|提高|拔高|挑战/.test(prompt);
  const wantsEasy = /简单|基础|容易|入门/.test(prompt);
  const topic = AI_TOPIC_KEYWORDS.find(word => prompt.includes(word));
  const typeHint = ["选择", "填空", "解答"].find(word => prompt.includes(word));

  return [...pool].sort((a, b) => aiCandidateScore(b) - aiCandidateScore(a));

  function aiCandidateScore(q) {
    let score = 0;
    if (topic && `${q.knowledge || ""}${q.stem || ""}`.includes(topic)) score += 6;
    if (typeHint && String(q.type || "").includes(typeHint)) score += 3;
    if (wantsHard && /较难|中等/.test(q.difficulty || "")) score += 2;
    if (wantsEasy && /简单|较易/.test(q.difficulty || "")) score += 2;
    return score;
  }
}

function resolveAiTargetCount(prompt, baseCount) {
  const total = prompt.match(/(?:控制在|总共|一共|共)\s*(\d+)/);
  if (total) return Math.max(1, Number(total[1]));
  const append = prompt.match(/(?:补|加|增|再来)\s*(\d+)/);
  if (append) return baseCount + Math.max(1, Number(append[1]));
  const plain = prompt.match(/(\d+)\s*(?:道|题)/);
  if (plain) return Math.max(1, Number(plain[1]));
  return baseCount ? baseCount + 4 : 8;
}

function buildAiListTitle(prompt, baseCount) {
  const topic = AI_TOPIC_KEYWORDS.find(word => prompt.includes(word));
  const now = new Date();
  const stamp = `${now.getMonth() + 1}.${now.getDate()}`;
  if (topic) return `七上${topic}专项巩固题单`;
  if (baseCount) return `精选巩固题单 · ${stamp}`;
  return `AI 生成题单 · ${stamp}`;
}

function generateAiQuestionList() {
  const promptInput = document.querySelector("#aiCreatePrompt");
  const prompt = (promptInput?.value || "").trim();
  const useSelected = aiCreateUsesSelected();
  const selected = useSelected ? getGlobalSelectedQuestions() : [];

  if (!prompt && !selected.length) {
    showToast("先描述一下想要什么样的题单");
    promptInput?.focus();
    return;
  }

  const baseQuestions = selected.map(item => ({ ...item.question }));
  const excludeKeys = new Set(selected.map(item => item.selectionKey));
  const targetCount = resolveAiTargetCount(prompt, baseQuestions.length);

  let questions = baseQuestions;
  if (targetCount < baseQuestions.length) {
    questions = baseQuestions.slice(0, targetCount);
  } else if (targetCount > baseQuestions.length) {
    const need = targetCount - baseQuestions.length;
    const supplement = rankAiCandidates(collectAiCandidateQuestions(excludeKeys), prompt)
      .slice(0, need)
      .map(q => ({ ...q, badges: ["AI 补充"] }));
    questions = [...baseQuestions, ...supplement];
  }

  if (!questions.length) {
    showToast("没有找到合适的题目，换个描述试试");
    return;
  }

  tabCounter += 1;
  const title = buildAiListTitle(prompt, baseQuestions.length);
  const now = new Date();
  const pad = value => String(value).padStart(2, "0");
  const createdAt = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  const aiCount = questions.filter(q => (q.badges || []).includes("AI 补充")).length;
  const listQuestions = questions.map((q, index) => ({
    ...q,
    id: `${q.id}-ai-${tabCounter}-${index}`,
    num: index + 1
  }));

  const newTab = {
    id: `tab-${tabCounter}`,
    topicId: `list-${Date.now()}`,
    context: getActiveTab()?.context || contextName,
    title,
    shortTitle: title.length > 8 ? `${title.slice(0, 8)}…` : title,
    meta: {
      title,
      shortTitle: title,
      source: "AI 生成题单",
      difficulty: "中等",
      questionCount: listQuestions.length,
      usage: 0,
      createdAt,
      aiPrompt: prompt
    },
    selectedQuestionIds: [],
    removedQuestionIds: [],
    modifiedQuestions: {},
    questions: listQuestions,
    fromTabId: getActiveTab()?.id || null,
    isQuestionList: true,
    aiGenerated: true
  };

  workspace.tabs.push(newTab);
  workspace.activeTabId = newTab.id;
  pruneOverflowTabs();
  saveWorkspace();
  closeAiCreateModal();
  if (isMobileLayout()) setMobileDrawer("selected", false);
  renderAll();
  showToast(aiCount
    ? `已生成「${title}」，共 ${listQuestions.length} 题（AI 补充 ${aiCount} 题）`
    : `已生成「${title}」，共 ${listQuestions.length} 题`);
}

function bindAiCreateControls() {
  document.querySelector("#openAiCreate")?.addEventListener("click", openAiCreateModal);
  document.querySelector("#aiCreateSubmit")?.addEventListener("click", generateAiQuestionList);
  document.querySelector("#aiCreateUseSelected")?.addEventListener("change", renderAiCreateChips);
  document.querySelectorAll("[data-ai-create-close]").forEach(node => {
    node.addEventListener("click", closeAiCreateModal);
  });
  document.querySelector("#aiCreatePrompt")?.addEventListener("keydown", event => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) generateAiQuestionList();
  });
}

function openQuestionInNewTab(qId) {
  const sourceTab = getActiveTab();
  if (!sourceTab) return;
  const q = sourceTab.questions.find(item => item.id === qId);
  if (!q) return;

  const existing = workspace.tabs.find(tab => tab.fromTabId === sourceTab.id && tab.fromQuestionId === qId);
  if (existing) {
    switchTab(existing.id);
    showToast(`已切换到第 ${q.num} 题标签页`);
    focusQuestionInView(existing.questions[0]?.id);
    return;
  }

  tabCounter += 1;
  const questionCopy = { ...q, id: `${q.id}-view-${tabCounter}` };
  const baseTitle = getTabBaseTitle(sourceTab);
  const newTab = {
    id: `tab-${tabCounter}`,
    topicId: `${getBaseTopicId(sourceTab.topicId)}-q${q.num}`,
    context: sourceTab.context || contextName,
    title: `${baseTitle} · 第 ${q.num} 题`,
    shortTitle: `第 ${q.num} 题`,
    meta: { ...sourceTab.meta, title: baseTitle, questionCount: 1 },
    selectedQuestionIds: [questionCopy.id],
    removedQuestionIds: [],
    modifiedQuestions: {},
    questions: [questionCopy],
    fromTabId: sourceTab.id,
    fromQuestionId: qId
  };

  workspace.tabs.push(newTab);
  workspace.activeTabId = newTab.id;
  saveWorkspace();
  renderAll();
  showToast(`已在新标签页打开第 ${q.num} 题`);
  focusQuestionInView(questionCopy.id);
}

function focusQuestionInView(qId) {
  if (!qId) return;
  requestAnimationFrame(() => {
    const node = document.querySelector(`.question-item[data-q="${qId}"]`);
    node?.scrollIntoView({ behavior: "smooth", block: "center" });
    node?.classList.add("focus-flash");
    setTimeout(() => node?.classList.remove("focus-flash"), 1200);
  });
}

function expandSelectedPanel() {
  if (isMobileLayout()) return;
  rightPanelSectionState.selectedCollapsed = false;
  applySelectedPanelState();
}

function clearDragPicks() {
  if (!dragPickIds.size) return;
  dragPickIds.clear();
  document.querySelectorAll(".question-item.drag-picked").forEach(node => node.classList.remove("drag-picked"));
}

function toggleDragPick(qId) {
  if (!qId) return;
  if (dragPickIds.has(qId)) dragPickIds.delete(qId);
  else dragPickIds.add(qId);
  document.querySelector(`.question-item[data-q="${qId}"]`)?.classList.toggle("drag-picked", dragPickIds.has(qId));
}

function getDragPayloadQuestionIds(primaryQId) {
  if (primaryQId && dragPickIds.has(primaryQId) && dragPickIds.size > 1) {
    return [...dragPickIds];
  }
  return primaryQId ? [primaryQId] : [];
}

function destroyQuestionDragGhost() {
  questionDragGhost?.remove();
  questionDragGhost = null;
}

function createQuestionDragGhost(qIds, label = "") {
  destroyQuestionDragGhost();
  const tab = getActiveTab();
  const first = tab?.questions.find(item => item.id === qIds[0]);
  const ghost = document.createElement("div");
  ghost.className = "question-drag-ghost";
  if (label && qIds.length > 1) {
    ghost.innerHTML = `<strong>${escapeHtml(label)}</strong><span>整组拖入 ${qIds.length} 题</span>`;
  } else if (qIds.length > 1) {
    ghost.innerHTML = `<strong>拖入 ${qIds.length} 题</strong><span>到左侧已选题目</span>`;
  } else {
    ghost.innerHTML = `<strong>第 ${first?.num || ""} 题</strong><span>拖到左侧已选题目</span>`;
  }
  document.body.appendChild(ghost);
  questionDragGhost = ghost;
  return ghost;
}

function setQuestionDropTargetActive(active) {
  document.querySelector("#aiSelectedPanel")?.classList.toggle("is-drop-target", active);
  document.body.classList.toggle("is-question-dragging", questionDragActive);
}

function startQuestionDrag(event, qIds, options = {}) {
  const ids = [...new Set((qIds || []).map(String).filter(Boolean))];
  if (!ids.length) {
    event.preventDefault();
    return false;
  }
  questionDragActive = true;
  const payload = JSON.stringify({ qIds: ids, section: options.section || "" });
  event.dataTransfer.effectAllowed = "copy";
  event.dataTransfer.setData(QUESTION_DRAG_MIME, payload);
  event.dataTransfer.setData("text/plain", payload);
  const ghost = createQuestionDragGhost(ids, options.label || "");
  event.dataTransfer.setDragImage(ghost, 24, 18);
  ids.forEach(id => document.querySelector(`.question-item[data-q="${id}"]`)?.classList.add("is-drag-group"));
  if (options.sourceEl) options.sourceEl.classList.add("is-dragging");
  setQuestionDropTargetActive(true);
  expandSelectedPanel();
  return true;
}

function endQuestionDrag() {
  questionDragActive = false;
  destroyQuestionDragGhost();
  setQuestionDropTargetActive(false);
  document.querySelectorAll(".question-item.is-dragging, .question-item.is-drag-group, .question-section-head.is-dragging").forEach(node => {
    node.classList.remove("is-dragging", "is-drag-group");
  });
}

function addQuestionsToSelected(qIds) {
  const tab = getActiveTab();
  if (!tab || !Array.isArray(qIds) || !qIds.length) return 0;
  let added = 0;
  qIds.forEach(qId => {
    const q = tab.questions.find(item => item.id === qId);
    if (!q || tab.removedQuestionIds.includes(qId)) return;
    if (isQuestionGloballySelected(tab.topicId, qId)) return;
    workspace.globalSelectedQuestions.push(buildGlobalSelectedEntry(tab, q));
    added += 1;
  });
  if (!added) return 0;
  syncTabSelectedQuestionIds(tab);
  saveWorkspace();
  clearDragPicks();
  renderQuestionCards();
  expandSelectedPanel();
  if (isMobileLayout()) setMobileDrawer("selected", true);
  return added;
}

function addQuestionToSelected(qId) {
  const added = addQuestionsToSelected([qId]);
  const q = getActiveTab()?.questions.find(item => item.id === qId);
  if (!added) {
    showToast(`第 ${q?.num || ""} 题已在已选题目中`);
    expandSelectedPanel();
    return;
  }
  showToast(`第 ${q?.num || ""} 题已加入已选题目`);
}

function bindQuestionDragEvents() {
  document.querySelectorAll(".question-item[draggable='true']").forEach(card => {
    card.addEventListener("dragstart", event => {
      if (event.target.closest("button, a, input, textarea, [data-card-action]")) {
        event.preventDefault();
        return;
      }
      const qId = card.dataset.q;
      const qIds = getDragPayloadQuestionIds(qId);
      startQuestionDrag(event, qIds, { sourceEl: card });
    });
    card.addEventListener("dragend", endQuestionDrag);
  });

  document.querySelectorAll(".question-section-head[draggable='true']").forEach(head => {
    head.addEventListener("dragstart", event => {
      const qIds = String(head.dataset.qIds || "").split(",").filter(Boolean);
      const section = head.dataset.section || "本模块";
      startQuestionDrag(event, qIds, {
        sourceEl: head,
        section,
        label: section
      });
      head.closest(".question-section")?.classList.add("is-section-dragging");
    });
    head.addEventListener("dragend", () => {
      document.querySelectorAll(".question-section.is-section-dragging").forEach(node => {
        node.classList.remove("is-section-dragging");
      });
      endQuestionDrag();
    });
  });
}

function bindSelectedDropZone() {
  const panel = document.querySelector("#aiSelectedPanel");
  if (!panel || panel.dataset.dropBound === "1") return;
  panel.dataset.dropBound = "1";

  const onDragOver = event => {
    if (!questionDragActive && ![...event.dataTransfer.types].includes(QUESTION_DRAG_MIME) && ![...event.dataTransfer.types].includes("text/plain")) {
      return;
    }
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    panel.classList.add("is-drag-over");
  };

  const onDragLeave = event => {
    if (panel.contains(event.relatedTarget)) return;
    panel.classList.remove("is-drag-over");
  };

  const onDrop = event => {
    event.preventDefault();
    panel.classList.remove("is-drag-over");
    let qIds = [];
    let section = "";
    try {
      const raw = event.dataTransfer.getData(QUESTION_DRAG_MIME) || event.dataTransfer.getData("text/plain");
      const parsed = JSON.parse(raw || "{}");
      qIds = Array.isArray(parsed.qIds) ? parsed.qIds.map(String) : [];
      section = String(parsed.section || "");
    } catch {
      qIds = [];
    }
    if (!qIds.length) return;
    const added = addQuestionsToSelected(qIds);
    if (!added) showToast("这些题目已在已选题目中");
    else if (section) showToast(`已拖入「${section}」${added} 题到已选题目`);
    else showToast(added === 1 ? "已拖入 1 题到已选题目" : `已拖入 ${added} 题到已选题目`);
  };

  panel.addEventListener("dragenter", onDragOver);
  panel.addEventListener("dragover", onDragOver);
  panel.addEventListener("dragleave", onDragLeave);
  panel.addEventListener("drop", onDrop);
}

function batchAddAllQuestionsToSelected() {
  const tab = getActiveTab();
  if (!tab) return;
  const visible = tab.questions.filter(q => !tab.removedQuestionIds.includes(q.id));
  if (!visible.length) {
    showToast("当前没有可添加的题目");
    return;
  }
  let added = 0;
  visible.forEach(q => {
    if (isQuestionGloballySelected(tab.topicId, q.id)) return;
    workspace.globalSelectedQuestions.push(buildGlobalSelectedEntry(tab, q));
    added += 1;
  });
  syncTabSelectedQuestionIds(tab);
  saveWorkspace();
  clearDragPicks();
  renderQuestionCards();
  expandSelectedPanel();
  if (!added) showToast("题目已全部在已选题目中");
  else showToast(`已批量添加 ${added} 题到已选题目`);
}

function removeQuestionFromSelected(qId) {
  const tab = getActiveTab();
  if (!tab) return;
  removeGlobalSelectedByKey(getQuestionSelectionKey(tab.topicId, qId));
  const q = tab.questions.find(item => item.id === qId);
  showToast(`第 ${q?.num || ""} 题已移出已选题目`);
}

function toggleQuestionSelection(qId, force) {
  const tab = getActiveTab();
  if (!tab) return;
  const q = tab.questions.find(item => item.id === qId);
  if (!q || tab.removedQuestionIds.includes(qId)) return;
  const key = getQuestionSelectionKey(tab.topicId, qId);
  const has = isQuestionGloballySelected(tab.topicId, qId);
  const next = typeof force === "boolean" ? force : !has;
  if (next && !has) {
    workspace.globalSelectedQuestions.push(buildGlobalSelectedEntry(tab, q));
  }
  if (!next) {
    workspace.globalSelectedQuestions = getGlobalSelectedQuestions().filter(item => item.selectionKey !== key);
  }
  syncTabSelectedQuestionIds(tab);
  saveWorkspace();
  renderQuestionCards();
}

function addToBasket(qId) {
  basketCount += 1;
  workspace.basketCount = basketCount;
  saveWorkspace();
  const q = getActiveTab()?.questions.find(item => item.id === qId);
  showToast(`第 ${q?.num || ""} 题已加入组卷（${basketCount}）`);
}

function toggleShowAnswers() {
  workspace.showAnswers = !workspace.showAnswers;
  saveWorkspace();
  const btn = document.querySelector("#toggleShowAnswer");
  if (btn) {
    btn.innerHTML = workspace.showAnswers
      ? '<i class="ri-eye-off-line"></i><span>隐藏答案</span>'
      : '<i class="ri-eye-line"></i><span>显示答案</span>';
  }
  renderQuestionCards();
}

function isHomeViewActive() {
  return Boolean(workspace.homeActive);
}

function isBrowseViewActive() {
  return Boolean(workspace.activeBrowseFilter) && !workspace.homeActive;
}

function isShellFrameActive() {
  return isHomeViewActive() || isBrowseViewActive();
}

function getBrowseMeta(filter) {
  return BROWSE_FILTER_META[filter] || null;
}

function ensureBrowseTabs() {
  if (!Array.isArray(workspace.browseTabs)) workspace.browseTabs = [];
  workspace.browseTabs = workspace.browseTabs.filter(filter => getBrowseMeta(filter));
  if (workspace.activeBrowseFilter && !getBrowseMeta(workspace.activeBrowseFilter)) {
    workspace.activeBrowseFilter = null;
  }
}

function syncHomeFrameFilter(filter) {
  const frame = document.querySelector("#homeFrame");
  if (!frame?.contentWindow || frame.dataset.loaded !== "1") return;
  frame.contentWindow.postMessage({ type: "aiq-set-filter", filter: filter || "all" }, "*");
}

// 首页 / 分类浏览共用 iframe；分类 tab 紧挨在「首页」后
function applyHomeView() {
  ensureBrowseTabs();
  const root = document.querySelector("#aiWorkspace");
  const homeView = document.querySelector("#homeView");
  const frame = document.querySelector("#homeFrame");
  const shellActive = isShellFrameActive();
  const browseFilter = isBrowseViewActive() ? workspace.activeBrowseFilter : null;

  root?.classList.toggle("home-view", shellActive);
  if (homeView) homeView.hidden = !shellActive;
  if (shellActive && frame && frame.dataset.loaded !== "1") {
    const srcFilter = browseFilter || "all";
    const url = new URL(HOME_FRAME_SRC, location.href);
    if (srcFilter && srcFilter !== "all") url.searchParams.set("filter", srcFilter);
    frame.src = `${url.pathname}${url.search}`;
    frame.dataset.loaded = "1";
    frame.dataset.filter = srcFilter;
  } else if (shellActive && frame?.dataset.loaded === "1") {
    const nextFilter = browseFilter || "all";
    if (frame.dataset.filter !== nextFilter) {
      frame.dataset.filter = nextFilter;
      syncHomeFrameFilter(nextFilter);
    }
  }
  if (shellActive) {
    const meta = browseFilter ? getBrowseMeta(browseFilter) : null;
    const context = document.querySelector("#breadcrumbContext");
    const leaf = document.querySelector("#breadcrumbLeaf");
    if (context) context.textContent = "题库";
    if (leaf) leaf.textContent = meta?.label || "首页";
    document.title = `${meta?.label || "题库首页"} · AI 试卷工作台`;
  }
  applyResponsiveChrome();
}

function setHomeView(active) {
  const next = Boolean(active);
  if (next) {
    workspace.homeActive = true;
    workspace.activeBrowseFilter = null;
  } else if (workspace.homeActive) {
    workspace.homeActive = false;
  } else {
    applyHomeView();
    return;
  }
  saveWorkspace();
  if (!next && !isBrowseViewActive()) syncPageChromeForTab(getActiveTab());
  renderAll();
}

function openBrowseTab(filter) {
  const meta = getBrowseMeta(filter);
  if (!meta) return;
  ensureBrowseTabs();
  if (!workspace.browseTabs.includes(filter)) workspace.browseTabs.push(filter);
  workspace.homeActive = false;
  workspace.activeBrowseFilter = filter;
  saveWorkspace();
  renderAll();
  showToast(`已打开「${meta.label}」`);
}

function closeBrowseTab(filter) {
  ensureBrowseTabs();
  workspace.browseTabs = workspace.browseTabs.filter(item => item !== filter);
  if (workspace.activeBrowseFilter === filter) {
    workspace.activeBrowseFilter = null;
    workspace.homeActive = true;
  }
  saveWorkspace();
  renderAll();
}

function setBrowseView(filter) {
  if (!getBrowseMeta(filter)) return;
  ensureBrowseTabs();
  if (!workspace.browseTabs.includes(filter)) workspace.browseTabs.push(filter);
  workspace.homeActive = false;
  workspace.activeBrowseFilter = filter;
  saveWorkspace();
  renderAll();
}

function bindHomeFrameBridge() {
  window.addEventListener("message", event => {
    const frame = document.querySelector("#homeFrame");
    if (!frame || event.source !== frame.contentWindow) return;
    const data = event.data;
    if (!data || typeof data !== "object") return;

    if (data.type === "aiq-open-filter") {
      openBrowseTab(String(data.filter || ""));
      return;
    }

    if (data.type !== "aiq-open-topic") return;

    const topicId = getBaseTopicId(String(data.topicId || ""));
    if (!topicId) return;

    const query = new URLSearchParams(data.query || "");
    const title = String(data.title || query.get("title") || "").trim();
    const shortTitle = String(data.shortTitle || query.get("shortTitle") || title).trim();
    const tabContext = String(data.context || query.get("context") || "paper");
    const lessonKey = String(data.lessonKey || query.get("lessonKey") || title || topicId);

    openTab(topicId, {
      context: tabContext,
      title: title || undefined,
      shortTitle: shortTitle || undefined,
      lessonKey,
      source: query.get("source") || undefined,
      difficulty: query.get("difficulty") || undefined,
      reason: query.get("reason") || undefined,
      focus: query.get("focus") || undefined,
      questionCount: query.get("questions") || undefined,
      usage: query.get("usage") || undefined
    });
  });
}

function renderTabs() {
  const bar = document.querySelector("#docTabs");
  if (!bar) return;
  ensureBrowseTabs();
  const homeActive = isHomeViewActive();
  const browseActive = isBrowseViewActive();
  const activeBrowse = workspace.activeBrowseFilter;
  bar.innerHTML = `
    <button class="doc-tab doc-tab-home ${homeActive ? "active" : ""}" type="button" data-home-tab aria-label="题库首页">
      <i class="ri-home-4-line doc-tab-icon" aria-hidden="true"></i>
      <span class="doc-tab-label">首页</span>
    </button>
    ${workspace.browseTabs.map(filter => {
      const meta = getBrowseMeta(filter);
      if (!meta) return "";
      return `
      <button class="doc-tab doc-tab-browse ${browseActive && activeBrowse === filter ? "active" : ""}" type="button" data-browse-filter="${filter}">
        <i class="${meta.icon} doc-tab-icon" aria-hidden="true"></i>
        <span class="doc-tab-label">${escapeHtml(meta.label)}</span>
        <span class="doc-tab-close" role="button" tabindex="0" data-close-browse="${filter}" aria-label="关闭 ${escapeHtml(meta.label)}"><i class="ri-close-line"></i></span>
      </button>`;
    }).join("")}
    ${workspace.tabs.map(tab => `
      <button class="doc-tab ${!homeActive && !browseActive && tab.id === workspace.activeTabId ? "active" : ""}" type="button" data-tab-id="${tab.id}">
        <i class="${tabDocIcon(tab)} doc-tab-icon" aria-hidden="true"></i>
        <span class="doc-tab-label">${escapeHtml(tab.shortTitle)}</span>
        <span class="doc-tab-close" role="button" tabindex="0" data-close-tab="${tab.id}" aria-label="关闭 ${escapeHtml(tab.shortTitle)}"><i class="ri-close-line"></i></span>
      </button>`).join("")}
    <button class="doc-tab-add" type="button" id="docTabAdd" aria-label="打开新试卷"><i class="ri-add-line"></i></button>`;

  bar.querySelector("[data-home-tab]")?.addEventListener("click", () => setHomeView(true));
  bar.querySelectorAll("[data-browse-filter]").forEach(button => {
    button.addEventListener("click", event => {
      if (event.target.closest("[data-close-browse]")) return;
      setBrowseView(button.dataset.browseFilter);
    });
  });
  bar.querySelectorAll("[data-close-browse]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      closeBrowseTab(button.dataset.closeBrowse);
    });
  });

  bar.querySelectorAll("[data-tab-id]").forEach(button => {
    button.addEventListener("click", event => {
      if (event.target.closest("[data-close-tab]")) return;
      switchTab(button.dataset.tabId);
    });
  });
  bar.querySelectorAll("[data-close-tab]").forEach(button => {
    const close = event => { event.stopPropagation(); closeTab(button.dataset.closeTab); };
    button.addEventListener("click", close);
  });
  document.querySelector("#docTabAdd")?.addEventListener("click", openPaperPicker);
}

function switchTab(tabId) {
  if (workspace.activeTabId === tabId && !isHomeViewActive() && !isBrowseViewActive()) return;
  workspace.homeActive = false;
  workspace.activeBrowseFilter = null;
  workspace.activeTabId = tabId;
  saveWorkspace();
  syncPageChromeForTab(getActiveTab());
  renderAll();
}

function syncPageChromeForTab(tab) {
  const favoriteLabel = document.querySelector("#favoritePaperLabel");
  if (!tab || !favoriteLabel) return;
  favoriteLabel.textContent = "收藏";
}

function closeTab(tabId) {
  if (workspace.tabs.length === 1) return showToast("至少保留一个试卷标签页");
  const index = workspace.tabs.findIndex(tab => tab.id === tabId);
  workspace.tabs.splice(index, 1);
  if (workspace.activeTabId === tabId) workspace.activeTabId = workspace.tabs[Math.max(0, index - 1)].id;
  saveWorkspace();
  renderAll();
}

function openTab(topicId, options = {}) {
  const baseId = getBaseTopicId(topicId);
  const tabContext = options.context || contextName;
  const lessonKey = options.lessonKey || options.title || "";
  const existing = workspace.tabs.find(tab =>
    getBaseTopicId(tab.topicId) === baseId
    && !tab.fromQuestionId
    && !tab.isQuestionList
    && (tab.context || contextName) === tabContext
    && (!lessonKey || tab.lessonKey === lessonKey || tab.title === lessonKey)
  );
  if (existing) {
    switchTab(existing.id);
    showToast(`已切换到「${existing.shortTitle || existing.title}」`);
    return existing;
  }
  const tab = createTab(topicId, tabContext, options);
  workspace.tabs.push(tab);
  workspace.activeTabId = tab.id;
  workspace.homeActive = false;
  workspace.activeBrowseFilter = null;
  pruneOverflowTabs();
  saveWorkspace();
  renderAll();
  showToast(`已打开「${tab.shortTitle || tab.title}」`);
  return tab;
}

// 标签页无限增长会让标题被挤成一串省略号，超出上限时回收最早打开且未激活的一个
function pruneOverflowTabs() {
  while (workspace.tabs.length > MAX_OPEN_TABS) {
    const index = workspace.tabs.findIndex(tab =>
      tab.id !== workspace.activeTabId
      && !tab.isQuestionList
      && !tab.fromQuestionId
      && !workspace.tabs.some(child => child.fromTabId === tab.id)
    );
    if (index < 0) return;
    workspace.tabs.splice(index, 1);
  }
}

function openPaperPicker() {
  const currentId = getBaseTopicId(getActiveTab()?.topicId);
  if (isWorkbook) {
    const nextId = ["t9", "t7", "t19"].find(id => id !== currentId) || "t9";
    openTab(nextId);
    return;
  }
  const nextId = ["t14", "t25", "t2"].find(id => id !== currentId) || "t14";
  openTab(nextId);
}

function deleteQuestionById(qId) {
  const tab = getActiveTab();
  if (!tab) return;
  const q = tab.questions.find(item => item.id === qId);
  if (!q || tab.removedQuestionIds.includes(qId)) return;
  tab.removedQuestionIds.push(qId);
  removeGlobalSelectedByKey(getQuestionSelectionKey(tab.topicId, qId));
  saveWorkspace();
  renderQuestionCards();
  showToast(`已删除第 ${q.num} 题`);
}

function insertQuestionAfter(qId) {
  const tab = getActiveTab();
  if (!tab) return;
  const idx = tab.questions.findIndex(item => item.id === qId);
  if (idx < 0) return;
  const ref = tab.questions[idx];
  const newQ = {
    id: `new-${Date.now()}`,
    num: ref.num + 1,
    section: ref.section,
    type: ref.type,
    difficulty: ref.difficulty || "中等",
    knowledge: ref.knowledge || "待补充",
    minutes: ref.minutes || 2,
    competency: ref.competency || "运算能力",
    badges: [],
    stem: "（新增）请在此补充题目内容。",
    options: ref.type === "选择题" ? ["A. 待补充", "B. 待补充", "C. 待补充", "D. 待补充"] : [],
    answer: "待补充",
    analysis: "待补充"
  };
  tab.questions.splice(idx + 1, 0, newQ);
  tab.questions.forEach((item, i) => { item.num = i + 1; });
  saveWorkspace();
  renderQuestionCards();
  showToast(`已在第 ${ref.num} 题后新增加题`);
}

function clearSelectedQuestionsState(options = {}) {
  const { collapsePanel = true } = options;
  workspace.globalSelectedQuestions = [];
  selectedPreviewTypeFilter = null;
  clearDragPicks();
  workspace.tabs.forEach(tab => {
    tab.selectedQuestionIds = [];
  });
  if (collapsePanel) {
    rightPanelSectionState.selectedCollapsed = true;
    applySelectedPanelState();
  }
}

function clearAllSelectedQuestions() {
  clearSelectedQuestionsState();
  saveWorkspace();
  renderQuestionCards();
  showToast("已清空全部已选题目");
}

function toggleQuestionAnalysis(qId) {
  if (expandedAnalysisIds.has(qId)) expandedAnalysisIds.delete(qId);
  else expandedAnalysisIds.add(qId);
  renderQuestionCards();
}

function bindQuestionCardEvents() {
  document.querySelectorAll("#questionCardBoard .question-item").forEach(card => {
    card.addEventListener("click", event => {
      if (event.target.closest("[data-card-action]")) return;
      // 允许在题干上划词复制，不误触选中
      if (window.getSelection()?.toString()) return;
      // Shift / ⌘ / Ctrl：多选待拖题目，不直接加入已选
      if (event.shiftKey || event.metaKey || event.ctrlKey) {
        event.preventDefault();
        toggleDragPick(card.dataset.q);
        return;
      }
      toggleQuestionSelection(card.dataset.q);
    });
  });

  document.querySelectorAll("#questionCardBoard [data-card-action]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      const qId = button.dataset.q;
      const action = button.dataset.cardAction;
      const q = getActiveTab()?.questions.find(item => item.id === qId);

      if (action === "fix") showToast(`已记录第 ${q?.num} 题的纠错反馈，教研会尽快核对`);
      if (action === "favorite") {
        const added = toggleQuestionFavorite(qId);
        showToast(added ? `已收藏第 ${q?.num} 题` : `已取消收藏第 ${q?.num} 题`);
      }
      if (action === "similar") showToast(`正在查找第 ${q?.num} 题的相似题…`);
      if (action === "add-selected") addQuestionToSelected(qId);
      if (action === "remove-selected") removeQuestionFromSelected(qId);
      if (action === "analysis") toggleQuestionAnalysis(qId);
    });
  });

  bindQuestionDragEvents();
}

function renderAll() {
  renderQuestionCards();
  renderTabs();
  const favBtn = document.querySelector("#favoritePaper");
  if (favBtn && workspace.paperFavorited) {
    favBtn.classList.add("saved");
    favBtn.innerHTML = favoriteResourceLabel(true);
  }
  syncPageChromeForTab(getActiveTab());
  const ansBtn = document.querySelector("#toggleShowAnswer");
  if (ansBtn && workspace.showAnswers) {
    ansBtn.innerHTML = '<i class="ri-eye-off-line"></i><span>隐藏答案</span>';
  }
  applyHomeView();
}

function bindEvents() {
  document.querySelector("#createQuestionList")?.addEventListener("click", openSelectedAsQuestionList);

  document.querySelector("#clearSelectedQuestions")?.addEventListener("click", event => {
    event.stopPropagation();
    clearAllSelectedQuestions();
  });

  document.querySelector("#batchAddAllQuestions")?.addEventListener("click", batchAddAllQuestionsToSelected);

  document.querySelector("#toggleShowAnswer")?.addEventListener("click", toggleShowAnswers);

  document.querySelector("#favoritePaper")?.addEventListener("click", event => {
    workspace.paperFavorited = !workspace.paperFavorited;
    saveWorkspace();
    const btn = event.currentTarget;
    btn.classList.toggle("saved", workspace.paperFavorited);
    btn.innerHTML = workspace.paperFavorited
      ? favoriteResourceLabel(true)
      : favoriteResourceLabel(false);
    showToast(workspace.paperFavorited ? "已收藏" : "已取消收藏");
  });

  document.querySelectorAll("[data-action]").forEach(button => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      const tab = getActiveTab();
      if (action === "edit") {
        const tab = getActiveTab();
        if (!tab) return;
        const payload = buildEditorPayload(tab);
        if (!payload.questions.length) {
          showToast("当前题单没有可排版的题目");
          return;
        }
        const payloadHash = saveEditorPayload(payload);
        const ctx = payload.context;
        const topic = payload.topicId;
        location.href = `./editor.html?topic=${encodeURIComponent(topic)}&context=${encodeURIComponent(ctx)}&from=ai&tabId=${encodeURIComponent(tab.id)}#${payloadHash}`;
      }
      if (action === "download") showToast("正在生成可打印文件…");
    });
  });

  document.querySelector("#panelMask")?.addEventListener("click", closeMobileDrawers);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      clearDragPicks();
      closeAiCreateModal();
      closeMobileDrawers();
      return;
    }
  });

  bindSelectedDropZone();

  const handleLayoutChange = () => applyResponsiveChrome();
  if (typeof mobileLayoutQuery.addEventListener === "function") {
    mobileLayoutQuery.addEventListener("change", handleLayoutChange);
  } else {
    mobileLayoutQuery.addListener(handleLayoutChange);
  }
}

applyPageMode();
ensureInitialTab();
renderAll();
bindEvents();
bindHomeFrameBridge();
bindSelectedPanelControls();
bindAiCreateControls();
bindDirectoryEvents();
