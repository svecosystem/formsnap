import { test, expect } from "@playwright/test";

const fields = ["email", "username", "language", "bio", "website", "usage"];
const parts = ["description", "input", "label"];

test.describe("A tests", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:5173/test/a");
	});

	test("elements render", async ({ page }) => {
		const form = page.getByTestId("form");
		await expect(form).toBeVisible();

		for (const field of fields) {
			for (const part of parts) {
				const element = page.getByTestId(`${field}-${part}`);
				await expect(element).toBeVisible();
			}
		}
	});

	test("elements have correct initial id associates", async ({ page }) => {
		const form = page.getByTestId("form");
		await expect(form).toBeVisible();

		for (const field of fields) {
			const input = page.getByTestId(`${field}-input`);
			const label = page.getByTestId(`${field}-label`);
			const validation = page.getByTestId(`${field}-validation`);
			const description = page.getByTestId(`${field}-description`);
			const descId = await description.getAttribute("id");
			const labelFor = await label.getAttribute("for");

			await expect(input).toHaveAttribute("aria-describedby", descId as string);
		}
	});
});
