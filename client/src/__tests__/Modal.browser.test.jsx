import { render } from "vitest-browser-react";
import { describe, expect, test, vi, beforeEach, afterEach } from "vitest";
import Modal from "../Modal";

describe("Modal", () => {
  beforeEach(() => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal");
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    const modalRoot = document.getElementById("modal");
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  test("renders children into modal element", async () => {
    const screen = await render(
      <Modal>
        <h2>Test Modal Content</h2>
      </Modal>,
    );

    const heading = await screen.getByRole("heading", { level: 2 });

    await expect.element(heading).toBeInTheDocument();
    await expect.element(heading).toHaveTextContent("Test Modal Content");
  });

  test("creates a div element in the body", async () => {
    const screen = await render(
      <Modal>
        <p>Portal Content</p>
      </Modal>,
    );

    const paragraph = await screen.getByText("Portal Content");
    await expect.element(paragraph).toBeInTheDocument();
  });
});
