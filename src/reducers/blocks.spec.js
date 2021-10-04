import * as ActionTypes from "../constants/actionTypes";
import reducer from "./blocks";
import initialState from "./initialState";

describe("Reducers::Blocks", () => {
  const getInitialState = () => {
    return initialState().blocks;
  };

  const node = "http://localhost:3002";

  it("should set initial state by default", () => {
    const action = { type: "unknown" };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it("should handle GET_BLOCKS_START", () => {
    const appState = getInitialState();

    const action = { type: ActionTypes.GET_BLOCKS_START, node };
    const expected = {
      [action.node]: {
        loading: true,
        error: null,
      },
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
  it("should handle GET_BLOCKS_SUCCESS", () => {
    const appState = {
      [node]: {
        loading: true,
        error: null,
      },
    };
    const mock = {
      id: "1",
      type: "blocks",
      attributes: {
        index: 1,
        data: "The Human Torch",
      },
    };

    const action = { type: ActionTypes.GET_BLOCKS_SUCCESS, node, data: mock };
    const expected = {
      [node]: {
        loading: false,
        error: null,
        data: mock,
      },
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
  it("should handle GET_BLOCKS_FAILURE", () => {
    const appState = {
      [node]: {
        loading: true,
        error: null,
      },
    };
    const error = "TypeError: Network request failed";
    const action = { type: ActionTypes.GET_BLOCKS_FAILURE, node, error };
    const expected = {
      [node]: {
        loading: false,
        error,
        data: null,
      },
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
