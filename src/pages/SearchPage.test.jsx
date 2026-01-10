import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import SearchPage from "../pages/SearchPage";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

vi.mock("axios");

describe("SearchPage form", () => {
  it("submits search form and calls Google Books API", async () => {
    const user = userEvent.setup(); //create fake user

    axios.get.mockResolvedValueOnce({
      data: {
        items: [
          {
            id: "1",
            volumeInfo: {
              title: "React Book",
              authors: ["Dan Abramov"],
            },
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SearchPage />
        </MemoryRouter>
      </Provider>
    );

    await user.type(
      screen.getByPlaceholderText(/search by book title/i),
      "React"
    );

    await user.type(
      screen.getByPlaceholderText(/search by author name/i),
      "Dan"
    );

    await user.click(
      screen.getByRole("button", { name: /search/i })
    );

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    expect(await screen.findByText("React Book")).toBeInTheDocument();
  });
});
