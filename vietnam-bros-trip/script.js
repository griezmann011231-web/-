const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const checklist = document.querySelector("#checklist");
const prepCount = document.querySelector("#prep-count");
const filterButtons = document.querySelectorAll("[data-filter]");
const cityCards = document.querySelectorAll("[data-filter-group]");
const peopleInput = document.querySelector("#people-input");
const daysInput = document.querySelector("#days-input");
const styleInput = document.querySelector("#style-input");
const budgetTotal = document.querySelector("#budget-total");
const budgetNote = document.querySelector("#budget-note");
const costHotel = document.querySelector("#cost-hotel");
const costFood = document.querySelector("#cost-food");
const costTransport = document.querySelector("#cost-transport");
const costActivity = document.querySelector("#cost-activity");

if (window.lucide) {
  window.lucide.createIcons();
}

const updateHeader = () => {
  header.dataset.elevated = window.scrollY > 16 ? "true" : "false";
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.hidden = isOpen;
  header.classList.toggle("nav-active", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
    header.classList.remove("nav-active");
    document.body.classList.remove("nav-open");
  });
});

const checklistItems = Array.from(checklist?.querySelectorAll("input") || []);
const savedChecklist = JSON.parse(localStorage.getItem("vietnam-bros-checklist") || "[]");

const syncChecklist = () => {
  const checkedCount = checklistItems.filter((item) => item.checked).length;
  prepCount.textContent = String(checkedCount);
  checklistItems.forEach((item) => {
    item.closest("label").classList.toggle("done", item.checked);
  });
  localStorage.setItem("vietnam-bros-checklist", JSON.stringify(checklistItems.map((item) => item.checked)));
};

checklistItems.forEach((item, index) => {
  item.checked = Boolean(savedChecklist[index]);
  item.addEventListener("change", syncChecklist);
});
syncChecklist();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((current) => current.classList.toggle("active", current === button));
    cityCards.forEach((card) => {
      const group = card.dataset.filterGroup;
      const match = filter === "all" || group === filter || (filter === "danang" && group === "danang");
      card.classList.toggle("is-hidden", !match);
    });
  });
});

const styleRates = {
  budget: {
    hotel: 38,
    food: 24,
    transport: 23,
    activity: 30,
    fixed: 160,
    note: "偏省钱：青旅/经济酒店、街边吃喝、活动少升级。",
  },
  comfort: {
    hotel: 62,
    food: 38,
    transport: 32,
    activity: 52,
    fixed: 235,
    note: "舒服一点：中档住宿、内陆航班、正规按摩和主要活动。",
  },
  upgrade: {
    hotel: 105,
    food: 58,
    transport: 48,
    activity: 86,
    fixed: 340,
    note: "升级一点：更好酒店、游船升级、更多预约制餐厅和 Spa。",
  },
};

const formatAud = (value) => `A$${Math.round(value).toLocaleString("en-AU")}`;

const updateBudget = () => {
  const people = Math.max(1, Number(peopleInput.value || 1));
  const days = Math.max(3, Number(daysInput.value || 3));
  const rates = styleRates[styleInput.value] || styleRates.comfort;
  const hotel = rates.hotel * Math.max(days - 1, 1);
  const food = rates.food * days;
  const transport = rates.transport * days + rates.fixed;
  const activity = rates.activity * days;
  const soloAdjustment = people === 1 ? 1.18 : people >= 4 ? 0.94 : 1;
  const total = (hotel + food + transport + activity) * soloAdjustment;

  budgetTotal.textContent = formatAud(total);
  budgetNote.textContent = rates.note;
  costHotel.textContent = formatAud(hotel * soloAdjustment);
  costFood.textContent = formatAud(food);
  costTransport.textContent = formatAud(transport);
  costActivity.textContent = formatAud(activity);
};

[peopleInput, daysInput, styleInput].forEach((input) => {
  input.addEventListener("input", updateBudget);
  input.addEventListener("change", updateBudget);
});
updateBudget();
