import { test, expect } from "@playwright/test";

// ========== HAMBURGER MENU ==========

test.describe("Hamburger menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hamburger button is visible on mobile", async ({ page }) => {
    const btn = page.getByRole("button", { name: "Toggle menu" });
    await expect(btn).toBeVisible();
  });

  test("mobile menu is hidden by default", async ({ page }) => {
    const firstBtn = page.locator("nav .overflow-hidden button").first();
    await expect(firstBtn).not.toBeVisible();
  });

  test("hamburger opens the menu", async ({ page }) => {
    await page.getByRole("button", { name: "Toggle menu" }).click();
    const menuBtns = page.locator("nav .overflow-hidden button");
    await expect(menuBtns.first()).toBeVisible();
  });

  test("hamburger closes the menu on second click", async ({ page }) => {
    const btn = page.getByRole("button", { name: "Toggle menu" });
    await btn.click();
    await btn.click();
    const menuBtns = page.locator("nav .overflow-hidden button");
    await expect(menuBtns.first()).not.toBeVisible();
  });

  test("clicking a menu item closes the menu", async ({ page }) => {
    await page.getByRole("button", { name: "Toggle menu" }).click();
    const menuBtns = page.locator("nav .overflow-hidden button");
    await menuBtns.first().click();
    await expect(menuBtns.first()).not.toBeVisible();
  });
});

// ========== NAVIGATION SCROLLING ==========

test.describe("Mobile nav scrolling", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  const sections = ["services", "portfolio", "about", "process", "why-us", "tech-stack", "contact"];

  for (const section of sections) {
    test(`tapping '${section}' scrolls to correct section`, async ({ page }) => {
      await page.getByRole("button", { name: "Toggle menu" }).click();
      const menuBtns = page.locator("nav .overflow-hidden button");
      await expect(menuBtns.first()).toBeVisible();

      // Click the matching section button
      const sectionIndex = sections.indexOf(section);
      await menuBtns.nth(sectionIndex).click();

      // Menu should close
      await expect(menuBtns.first()).not.toBeVisible();

      // Section should be in viewport after scroll (wait for animation + scroll)
      await page.waitForTimeout(700);
      const target = page.locator(`#${section}`);
      await expect(target).toBeInViewport({ ratio: 0.1 });
    });
  }
});

// ========== THEME TOGGLE ==========

test.describe("Theme toggle on mobile", () => {
  test("theme button is visible and works", async ({ page }) => {
    await page.goto("/");
    const themeBtn = page
      .locator(".md\\:hidden button[aria-label]")
      .filter({ hasText: "" })
      .first();
    await expect(themeBtn).toBeVisible();
    await themeBtn.click();
    const theme = await page.locator("html").getAttribute("data-theme");
    expect(["light", "dark"]).toContain(theme);
  });
});

// ========== LANGUAGE TOGGLE ==========

test.describe("Language toggle on mobile", () => {
  test("lang button is visible and switches language", async ({ page }) => {
    await page.goto("/");
    const langBtn = page.locator(".md\\:hidden").getByRole("button", { name: /Switch to (Thai|English)/ });
    await expect(langBtn).toBeVisible();
    const before = await langBtn.textContent();
    await langBtn.click();
    const after = await langBtn.textContent();
    expect(after).not.toBe(before);
  });
});

// ========== BASIC RENDER ==========

test.describe("Page renders correctly on mobile", () => {
  test("page loads without error", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors).toHaveLength(0);
  });

  test("desktop nav is hidden on mobile", async ({ page }) => {
    await page.goto("/");
    const desktopNav = page.locator(".hidden.md\\:flex");
    await expect(desktopNav).not.toBeVisible();
  });

  test("all sections exist in DOM", async ({ page }) => {
    await page.goto("/");
    for (const id of ["services", "portfolio", "about", "process", "why-us", "tech-stack", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });
});
