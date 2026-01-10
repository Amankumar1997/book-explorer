import { describe, it, expect } from "vitest";
import favoritesReducer, {
  addFavorite,
  removeFavorite,
} from "./favoritesSlice";

describe("favoritesReducer", () => {
  // Scenario 1: Adding a favorite
  it("should add a book to favorites", () => {
    const initialState = { favorites: [] };
    const book = { id: "1", title: "React" };

    const newState = favoritesReducer(initialState, addFavorite(book));

    expect(newState.favorites).toHaveLength(1);
    expect(newState.favorites[0]).toEqual(book);
  });

  // Scenario 2: Removing a favorite
  it("should remove a book from favorites by ID", () => {
    const initialState = {
      favorites: [{ id: "1", title: "React" }],
    };

    const newState = favoritesReducer(initialState, removeFavorite("1"));

    expect(newState.favorites).toHaveLength(0);
  });

  it("should not mutate the original state", () => {
    const initialState = { favorites: [] };
    const book = { id: "2", title: "Vitest" };

    favoritesReducer(initialState, addFavorite(book));

    expect(initialState.favorites).toHaveLength(0);
  });
});
