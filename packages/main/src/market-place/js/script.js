const DIGITAL_PRODUCTIVITY_COURSES = [
  "Fundamentals of Meeting Note Formatting",
  "Archiving Best Practices in Shared Drives",
  "Managing Keyboard Shortcuts Across Operating Systems",
  "Introduction to Document Version History in Cloud Drives",
  "Advanced File Naming Conventions for Teams",
  "Intermediate Page Margin Settings in Microsoft Word",
  "Legacy System Navigation for Obsolete Software",
];

const categories = [
  "All",
  "Business Skills",
  "Compliance",
  "DEI (Diversity, Equity, and Inclusion)",
  "Technology",
  "Digital Productivity",
  "Safety",
  "Healthcare",
  "Wellness",
];

const languageOptions = [
  { label: "All", value: "all" },
  { label: "English", value: "English" },
  { label: "Spanish", value: "Spanish" },
  { label: "German", value: "German" },
  { label: "Italian", value: "Italian" },
  { label: "French", value: "French" },
];

const DEMO_FALLBACK_PRODUCTS = [
  {
    id: 2093,
    imagePath: "https://dochek.com/assets/assets/uploads/SCORM_course_thumbnail/2093/C4U443_thumbnail_518x309.jpg",
    product_name: "Fundamentals of Meeting Note Formatting",
    skill: "Digital Productivity",
    categories: ["Digital Productivity"],
    language: "English",
    duration: 15,
    description: "Meetings are only as effective as the notes you take.",
  },
  {
    id: 2098,
    imagePath: "https://dochek.com/assets/assets/uploads/SCORM_course_thumbnail/2098/C4U444_thumbnail_518x309.jpg",
    product_name: "Archiving Best Practices in Shared Drives",
    skill: "Digital Productivity",
    categories: ["Digital Productivity"],
    language: "English",
    duration: 15,
    description: "Shared drives need structure to avoid chaos.",
  },
  {
    id: 2100,
    imagePath: "https://dochek.com/assets/assets/uploads/SCORM_course_thumbnail/2100/C4U446_thumbnail_518x309.jpg",
    product_name: "Managing Keyboard Shortcuts Across Operating Systems",
    skill: "Digital Productivity",
    categories: ["Digital Productivity"],
    language: "English",
    duration: 15,
    description: "Work faster on Windows, Mac, and ChromeOS.",
  },
  {
    id: 2103,
    imagePath: "https://dochek.com/assets/assets/uploads/SCORM_course_thumbnail/2103/C4U447_thumbnail_518x309.jpg",
    product_name: "Introduction to Document Version History in Cloud Drives",
    skill: "Digital Productivity",
    categories: ["Digital Productivity"],
    language: "English",
    duration: 15,
    description: "Track, restore, and manage versions reliably.",
  },
  {
    id: 2110,
    imagePath: "https://dochek.com/assets/assets/uploads/SCORM_course_thumbnail/2110/C4U448_thumbnail_518x309.jpg",
    product_name: "Advanced File Naming Conventions for Teams",
    skill: "Digital Productivity",
    categories: ["Digital Productivity"],
    language: "English",
    duration: 15,
    description: "Improve searchability and file governance.",
  },
  {
    id: 2116,
    imagePath: "https://dochek.com/assets/assets/uploads/SCORM_course_thumbnail/2116/C4U449_thumbnail_518x309.jpg",
    product_name: "Intermediate Page Margin Settings in Microsoft Word",
    skill: "Digital Productivity",
    categories: ["Digital Productivity"],
    language: "English",
    duration: 15,
    description: "Use layout controls for professional documents.",
  },
  {
    id: 2117,
    imagePath: "https://dochek.com/assets/assets/uploads/SCORM_course_thumbnail/2117/C4U450_thumbnail_518x309.jpg",
    product_name: "Legacy System Navigation for Obsolete Software",
    skill: "Technology",
    categories: ["Technology"],
    language: "English",
    duration: 15,
    description: "Operate legacy tools safely and efficiently.",
  },
  {
    id: 2142,
    imagePath: "https://dochek.com/assets/assets/uploads/SCORM_course_thumbnail/2142/C4U454_thumbnail_518x309.jpg",
    product_name: "How Managers Can Use AI to Support Creative Thinking",
    skill: "Business Skills",
    categories: ["Business Skills"],
    language: "English",
    duration: 15,
    description: "Use AI prompts to expand ideation quality.",
  },
];

const state = {
  allProducts: [],
  baseFilteredProducts: [],
  filteredCards: [],
  selectedCategory: "All",
  selectedLanguage: "all",
  searchText: "",
  viewMode: "grid",
  sortColumn: "",
  sortDirection: "asc",
  pageSize: 10,
  currentPage: 0,
  isLoading: true,
  isSearchTriggered: false,
  initialLoadCount: 8,
  scrollLoadCount: 4,
  currentDisplayIndex: 0,
  scrollListenerActive: true,
  languageCounts: {},
};

const els = {
  categoryList: document.getElementById("categoryList"),
  languageList: document.getElementById("languageList"),
  resetFilterContainer: document.getElementById("resetFilterContainer"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  emptyResetBtn: document.getElementById("emptyResetBtn"),
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  sidebarCloseBtn: document.getElementById("sidebarCloseBtn"),
  sidebar: document.getElementById("catalogSidebar"),
  sidebarOverlay: document.getElementById("sidebarOverlay"),
  gridView: document.getElementById("gridView"),
  listView: document.getElementById("listView"),
  listTableBody: document.getElementById("listTableBody"),
  emptyState: document.getElementById("emptyState"),
  pageSizeSelect: document.getElementById("pageSizeSelect"),
  prevPageBtn: document.getElementById("prevPageBtn"),
  nextPageBtn: document.getElementById("nextPageBtn"),
  rangeText: document.getElementById("rangeText"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  scrollLoader: document.getElementById("scrollLoader"),
};

function debounce(fn, wait = 220) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

function getCategoryIcon(name) {
  const icons = {
    All: "apps",
    "Business Skills": "business_center",
    Compliance: "balance",
    "DEI (Diversity, Equity, and Inclusion)": "groups",
    Technology: "memory",
    "Digital Productivity": "wb_incandescent",
    Safety: "verified_user",
    Healthcare: "medical_services",
    Wellness: "favorite",
  };

  return icons[name] || "apps";
}

function normalizeProduct(item) {
  return {
    id: Number(item.id || 0),
    product_name: String(item.product_name || "Untitled Course"),
    imagePath: String(item.imagePath || ""),
    skill: String(item.skill || "").trim(),
    categories: Array.isArray(item.categories) && item.categories.length ? item.categories : [String(item.skill || "General").trim() || "General"],
    language: String(item.language || "English").trim() || "English",
    duration: Number(item.duration || 15),
    description: String(item.description || ""),
  };
}

function normalizeCategoryName(rawValue) {
  const value = String(rawValue || "").toLowerCase();

  if (!value) return "";
  if (value.includes("digital productivity") || value.includes("workplace productivity")) return "digital productivity";
  if (value.includes("dei") || value.includes("diversity") || value.includes("equity") || value.includes("inclusion")) return "dei (diversity, equity, and inclusion)";
  if (value.includes("compliance")) return "compliance";
  if (value.includes("technology") || value.includes("cyber") || value.includes("ai") || value.includes("digital")) return "technology";
  if (value.includes("safety") || value.includes("risk") || value.includes("security")) return "safety";
  if (value.includes("healthcare") || value.includes("health")) return "healthcare";
  if (value.includes("wellness") || value.includes("mental")) return "wellness";
  if (value.includes("business") || value.includes("leadership") || value.includes("interpersonal") || value.includes("self development") || value.includes("finance")) return "business skills";

  return value;
}

async function fetchJsonFromPaths(paths) {
  for (const path of paths) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) continue;

      const payload = await response.json();
      if (Array.isArray(payload) && payload.length > 0) {
        return payload;
      }
    } catch (error) {
      // Try next candidate path.
    }
  }

  return [];
}

function getMarketplaceAssetCandidates() {
  return ["../../../../ang/assets/data/product-data.json"];
}

async function loadProductsFromJson() {
  const payload = await fetchJsonFromPaths(getMarketplaceAssetCandidates());
  if (!Array.isArray(payload) || payload.length === 0) {
    throw new Error("Invalid product-data.json format");
  }

  return payload.map(normalizeProduct);
}

function hasActiveFilters() {
  return (
    state.selectedCategory !== "All" ||
    state.selectedLanguage !== "all" ||
    state.searchText.trim() !== ""
  );
}

function getCoursesForCurrentCategory() {
  const categoryName = state.selectedCategory.toLowerCase();

  if (categoryName === "all") {
    return state.allProducts;
  }

  if (categoryName === "digital productivity") {
    return state.allProducts.filter((card) =>
      DIGITAL_PRODUCTIVITY_COURSES.some(
        (title) => card.product_name.toLowerCase().trim() === title.toLowerCase().trim()
      )
    );
  }

  return state.allProducts.filter((card) => {
    const skillMatch = normalizeCategoryName(card.skill) === categoryName;
    const categoryMatch = card.categories.some(
      (cat) => normalizeCategoryName(cat) === categoryName
    );
    return skillMatch || categoryMatch;
  });
}

function updateLanguageCounts(courses) {
  const counts = {};

  courses.forEach((card) => {
    const lang = (card.language || "English").trim();
    if (!counts[lang]) counts[lang] = 0;
    counts[lang] += 1;
  });

  counts.All = courses.length;

  languageOptions.forEach((language) => {
    if (language.label !== "All" && !counts[language.label]) {
      counts[language.label] = 0;
    }
  });

  state.languageCounts = counts;
}

function calculateLanguageCounts() {
  updateLanguageCounts(getCoursesForCurrentCategory());
}

function hasMoreProducts() {
  return state.currentDisplayIndex < state.baseFilteredProducts.length;
}

function loadInitialProducts() {
  const initialBatch = state.baseFilteredProducts.slice(0, state.initialLoadCount);
  state.filteredCards = [...initialBatch];
  state.currentDisplayIndex = initialBatch.length;
}

function loadMoreProductsOnScroll() {
  if (state.isLoading || !hasMoreProducts()) {
    toggleScrollLoader(false);
    return [];
  }

  state.isLoading = true;
  toggleScrollLoader(true);

  const nextBatch = state.baseFilteredProducts.slice(
    state.currentDisplayIndex,
    state.currentDisplayIndex + state.scrollLoadCount
  );

  return nextBatch;
}

function applyFilterAndReset(data, shouldScrollToTop = true) {
  state.baseFilteredProducts = [...data];
  state.currentDisplayIndex = 0;
  state.currentPage = 0;

  if (state.viewMode === "tile") {
    state.filteredCards = [...state.baseFilteredProducts];
    state.scrollListenerActive = false;
  } else {
    state.scrollListenerActive = true;
    state.filteredCards = [];
    loadInitialProducts();
  }

  if (shouldScrollToTop) {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

function applyFilters() {
  state.isSearchTriggered = true;
  let filtered = getCoursesForCurrentCategory();

  if (state.selectedLanguage.toLowerCase() !== "all") {
    filtered = filtered.filter(
      (card) => (card.language || "English").trim().toLowerCase() === state.selectedLanguage.toLowerCase()
    );
  }

  applyFilterAndReset(filtered, false);
}

function filterCards() {
  if (!state.searchText.trim()) {
    resetFilters();
    return;
  }

  state.isSearchTriggered = true;
  const text = state.searchText.toLowerCase();

  const results = state.allProducts.filter((card) => {
    const titleMatch = card.product_name.toLowerCase().includes(text);
    const categoryMatch = card.categories.join(" ").toLowerCase().includes(text);
    const skillMatch = card.skill.toLowerCase().includes(text);
    return titleMatch || categoryMatch || skillMatch;
  });

  applyFilterAndReset(results, false);
}

function sortCourses(courses) {
  if (!state.sortColumn) return courses;

  const sorted = [...courses];
  sorted.sort((a, b) => {
    const left = a[state.sortColumn];
    const right = b[state.sortColumn];

    if (left < right) return state.sortDirection === "asc" ? -1 : 1;
    if (left > right) return state.sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return sorted;
}

function getPaginatedCards() {
  const sorted = sortCourses(state.filteredCards);
  const start = state.currentPage * state.pageSize;
  return sorted.slice(start, start + state.pageSize);
}

function toggleSort(col) {
  if (state.sortColumn === col) {
    state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
  } else {
    state.sortColumn = col;
    state.sortDirection = "asc";
  }
  state.currentPage = 0;
  render();
}

function setViewMode(mode) {
  state.viewMode = mode;

  if (mode === "tile") {
    state.scrollListenerActive = false;
    state.filteredCards = [...state.baseFilteredProducts];
    state.currentPage = 0;
  } else {
    state.scrollListenerActive = true;
    state.currentDisplayIndex = 0;
    state.filteredCards = [];
    loadInitialProducts();
    state.currentPage = 0;
  }

  render();
}

function onCategorySelect(category) {
  state.isSearchTriggered = true;
  state.selectedCategory = category;
  state.selectedLanguage = "all";
  updateLanguageCounts(getCoursesForCurrentCategory());
  applyFilters();
  render();
}

function onLanguageSelect(language) {
  state.isSearchTriggered = true;
  state.selectedLanguage = language;
  applyFilters();
  render();
}

function renderCategories() {
  const fragment = document.createDocumentFragment();

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-item ${state.selectedCategory === category ? "active" : ""}`;
    button.innerHTML = `
      <span class="filter-left">
        <span class="material-symbols-rounded filter-icon">${getCategoryIcon(category)}</span>
        <span>${category}</span>
      </span>
    `;

    button.addEventListener("click", () => onCategorySelect(category));
    fragment.appendChild(button);
  });

  els.categoryList.innerHTML = "";
  els.categoryList.appendChild(fragment);
}

function renderLanguages() {
  const fragment = document.createDocumentFragment();

  languageOptions.forEach((language) => {
    const count = state.languageCounts[language.label] || 0;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `language-item ${state.selectedLanguage === language.value ? "active" : ""}`;
    button.innerHTML = `
      <span>${language.label}</span>
      <span class="lang-count">(${count})</span>
    `;

    button.addEventListener("click", () => onLanguageSelect(language.value));
    fragment.appendChild(button);
  });

  els.languageList.innerHTML = "";
  els.languageList.appendChild(fragment);
}

// function buildGridCards(courses, startIndex = 0) {
//   const fragment = document.createDocumentFragment();

//   courses.forEach((course, index) => {
//     const card = document.createElement("article");
//     card.className = "course-card";
//     card.style.animationDelay = `${(startIndex + index) * 20}ms`;
//     card.style.cursor = "pointer";
//     card.innerHTML = `
//       <div class="card-media">
//         <img src="${course.imagePath}" alt="${course.product_name}" loading="lazy" decoding="async" />
//       </div>
//       <div class="card-body">
//         <h3 class="card-title">${course.product_name}</h3>
//         <div class="card-meta">
//           <span class="language-text">Language: <span class="language-value">${course.language}</span></span>
//           <span class="duration-box">Duration: ${course.duration} min</span>
//         </div>
//       </div>
//     `;

//     card.addEventListener("click", () => {
//       console.log("Course clicked with ID: " + course.id);
//     });

//     fragment.appendChild(card);
//   });

//   return fragment;
// }
function buildGridCards(courses, startIndex = 0) {
  const fragment = document.createDocumentFragment();

  courses.forEach((course, index) => {
    const card = document.createElement("article");
    card.className = "course-card";
    card.style.animationDelay = `${(startIndex + index) * 20}ms`;
    card.style.cursor = "pointer";

    card.innerHTML = `
      <div class="card-media">
        <img src="${course.imagePath}" alt="${course.product_name}" loading="lazy" decoding="async" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${course.product_name}</h3>
        <div class="card-meta">
          <span class="language-text">
            Language: <span class="language-value">${course.language}</span>
          </span>
          <span class="duration-box">
            Duration: ${course.duration} min
          </span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {

      //  console.log("Course clicked with ID: " + course.id);
      // Create form
      const form = document.createElement("form");
      form.method = "POST";
      form.action = BASE_URL + "my_training/read_more";

      // Hidden fields
      const fields = {
        crid: course.id,
        detail_type: 5,
        tab: 1
      };

      // Append hidden inputs
      Object.keys(fields).forEach(key => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      });

      // Append form to body
      document.body.appendChild(form);

      // Submit form
      form.submit();
    });

    fragment.appendChild(card);
  });

  return fragment;
}

function renderGrid(courses) {
  const fragment = buildGridCards(courses);
  els.gridView.innerHTML = "";
  els.gridView.appendChild(fragment);
}

function appendGridCourses(courses, startIndex) {
  if (!courses.length) return;
  els.gridView.appendChild(buildGridCards(courses, startIndex));
}

function renderList() {
  const pageItems = getPaginatedCards();

  const rows = pageItems.map((course, idx) => {
    const rank = state.currentPage * state.pageSize + idx + 1;
    return `
      <tr data-course-id="${course.id}" style="cursor: pointer;">
        <td>${rank}</td>
        <td class="title-cell">${course.product_name}</td>
        <td>${course.language}</td>
        <td>${course.categories.join(", ") || "-"}</td>
        <td>${course.duration} min</td>
      </tr>
    `;
  }).join("");

  els.listTableBody.innerHTML = rows;

  // Add click handlers to list rows
  document.querySelectorAll(".tile-table tbody tr").forEach((row) => {
    row.addEventListener("click", () => {
      const courseId = row.getAttribute("data-course-id");
      console.log("Course clicked with ID: " + courseId);
    });
  });

  const sortedLength = sortCourses(state.filteredCards).length;
  const from = sortedLength ? state.currentPage * state.pageSize + 1 : 0;
  const to = Math.min((state.currentPage + 1) * state.pageSize, sortedLength);

  els.rangeText.textContent = `${from} - ${to} of ${sortedLength}`;
  els.prevPageBtn.disabled = state.currentPage === 0;
  els.nextPageBtn.disabled = to >= sortedLength;

  document.querySelectorAll(".tile-table th").forEach((header) => {
    header.classList.remove("sort-asc", "sort-desc");
    if (header.dataset.sort === state.sortColumn) {
      header.classList.add(state.sortDirection === "asc" ? "sort-asc" : "sort-desc");
    }
  });
}

function renderToolbarState() {
  els.clearSearchBtn.classList.toggle("visible", state.searchText.trim().length > 0);

  document.querySelectorAll(".view-btn").forEach((button) => {
    const target = button.dataset.view === "list" ? "tile" : button.dataset.view;
    button.classList.toggle("active", target === state.viewMode);
  });

  els.resetFilterContainer.classList.toggle("hidden", !hasActiveFilters());
}

function toggleScrollLoader(show) {
  if (!els.scrollLoader) return;
  els.scrollLoader.classList.toggle("hidden", !show);
}

function render() {
  renderCategories();
  renderLanguages();
  renderToolbarState();

  const hasResults = state.filteredCards.length > 0;

  if (!hasResults) {
    if (state.isSearchTriggered) {
      els.emptyState.classList.remove("hidden");
      els.gridView.classList.add("hidden");
      els.listView.classList.add("hidden");
    } else {
      els.emptyState.classList.add("hidden");

      if (state.viewMode === "grid") {
        els.gridView.classList.remove("hidden");
        els.listView.classList.add("hidden");
        els.gridView.innerHTML = "";
      } else {
        els.gridView.classList.add("hidden");
        els.listView.classList.remove("hidden");
        els.listTableBody.innerHTML = "";
      }
    }

    toggleScrollLoader(false);
    return;
  }

  els.emptyState.classList.add("hidden");

  if (state.viewMode === "grid") {
    els.gridView.classList.remove("hidden");
    els.listView.classList.add("hidden");
    renderGrid(state.filteredCards);
    toggleScrollLoader(hasMoreProducts());
  } else {
    els.gridView.classList.add("hidden");
    els.listView.classList.remove("hidden");
    renderList();
    toggleScrollLoader(false);
  }
}

function resetFilters() {
  state.selectedCategory = "All";
  state.selectedLanguage = "all";
  state.searchText = "";
  state.isSearchTriggered = false;
  state.sortColumn = "";
  state.sortDirection = "asc";

  els.searchInput.value = "";
  calculateLanguageCounts();
  applyFilterAndReset(state.allProducts);
  render();
}

function onScroll() {
  if (state.viewMode === "tile") return;
  if (!state.scrollListenerActive || state.isLoading || !hasMoreProducts()) return;

  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const scrollPercentage = (scrollPosition / pageHeight) * 100;

  if (scrollPercentage >= 70) {
    const previousLength = state.filteredCards.length;
    const nextBatch = loadMoreProductsOnScroll();

    if (!nextBatch.length) {
      state.isLoading = false;
      toggleScrollLoader(false);
      return;
    }

    window.setTimeout(() => {
      state.filteredCards.push(...nextBatch);
      state.currentDisplayIndex += nextBatch.length;
      appendGridCourses(nextBatch, previousLength);
      state.isLoading = false;
      toggleScrollLoader(state.viewMode === "grid" && hasMoreProducts());

      if (hasMoreProducts()) {
        const updatedScrollPosition = window.innerHeight + window.scrollY;
        const updatedPageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const updatedScrollPercentage = (updatedScrollPosition / updatedPageHeight) * 100;

        if (updatedScrollPercentage >= 70) {
          onScroll();
        }
      }
    }, 220);
  }
}

function toggleSidebar(open) {
  els.sidebar.classList.toggle("sidebar-open", open);
  els.sidebarOverlay.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
}

function attachEvents() {
  const onSearch = debounce((event) => {
    state.searchText = event.target.value;
    filterCards();
    render();
  });

  els.searchInput.addEventListener("input", onSearch);

  els.clearSearchBtn.addEventListener("click", () => {
    resetFilters();
  });

  els.resetFiltersBtn.addEventListener("click", resetFilters);
  els.emptyResetBtn.addEventListener("click", resetFilters);

  document.querySelectorAll(".view-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.view === "list" ? "tile" : button.dataset.view;
      setViewMode(target);
    });
  });

  document.querySelectorAll(".tile-table th[data-sort]").forEach((header) => {
    header.addEventListener("click", () => {
      toggleSort(header.dataset.sort);
    });
  });

  els.pageSizeSelect.addEventListener("change", (event) => {
    state.pageSize = Number(event.target.value);
    state.currentPage = 0;
    render();
  });

  els.prevPageBtn.addEventListener("click", () => {
    if (state.currentPage > 0) {
      state.currentPage -= 1;
      render();
    }
  });

  els.nextPageBtn.addEventListener("click", () => {
    const maxPage = Math.max(0, Math.ceil(sortCourses(state.filteredCards).length / state.pageSize) - 1);
    if (state.currentPage < maxPage) {
      state.currentPage += 1;
      render();
    }
  });

  els.mobileMenuBtn.addEventListener("click", () => toggleSidebar(true));
  els.sidebarCloseBtn.addEventListener("click", () => toggleSidebar(false));
  els.sidebarOverlay.addEventListener("click", () => toggleSidebar(false));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      toggleSidebar(false);
    }
  });

  window.addEventListener("scroll", onScroll, { passive: true });
}

function renderSkeleton() {
  const skeleton = document.createElement("div");
  skeleton.className = "skeleton-grid";

  for (let i = 0; i < 6; i += 1) {
    const card = document.createElement("article");
    card.className = "skeleton-card";
    card.innerHTML = `
      <div class="skeleton-media"></div>
      <div class="skeleton-lines">
        <div class="skeleton-line wide"></div>
        <div class="skeleton-line mid"></div>
        <div class="skeleton-line short"></div>
      </div>
    `;
    skeleton.appendChild(card);
  }

  els.gridView.innerHTML = "";
  els.gridView.appendChild(skeleton);
}

async function init() {
  renderSkeleton();
  attachEvents();

  try {
    state.allProducts = await loadProductsFromJson();
  } catch (error) {
    console.error("Failed to load marketplace product-data.json, using fallback records.", error);
    state.allProducts = DEMO_FALLBACK_PRODUCTS.map(normalizeProduct);
  }

  window.setTimeout(() => {
    state.isLoading = false;
    calculateLanguageCounts();
    applyFilterAndReset(state.allProducts);
    window.scrollTo({ top: 0, behavior: "auto" });
    render();
  }, 220);
}

init();
