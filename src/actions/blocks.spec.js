import * as ActionTypes from "../constants/actionTypes";
import * as ActionCreators from "./blocks";
import mockFetch from "cross-fetch";

jest.mock("cross-fetch");
describe('Block Actions', () => {
  const dispatch = jest.fn();

  afterAll(() => {
    dispatch.mockClear();
    mockFetch.mockClear();
  });

  const node = {
    url: "http://localhost:3002",
    online: false,
    name: null,
  };
  it("should fetch the block", async () => {
    mockFetch.mockReturnValueOnce(
      Promise.resolve({
        status: 200,
        json() {
          return Promise.resolve({});
        },
      })
    );
    await ActionCreators.getBlocks(node)(dispatch);
    const expected = [
      {
        type: ActionTypes.GET_BLOCKS_START,
        node,
      },
      {
        type: ActionTypes.GET_BLOCKS_SUCCESS,
        node: node.url,
        data: undefined,
      },
    ];

    expect(dispatch.mock.calls.flat()).toEqual(expected);
  });

   it("should fail to fetch the node status", async () => {
    mockFetch.mockReturnValueOnce(
      Promise.resolve({
        status: 400,
      })
    );
    await ActionCreators.getBlocks(node)(dispatch);
    const expected = [
       {
        type: ActionTypes.GET_BLOCKS_START,
        node,
      },
      {
        type: ActionTypes.GET_BLOCKS_FAILURE,
        node: node.url,
        error: 'Error',
      },
    ];

    expect(dispatch.mock.calls.flat()).toEqual(expected);
  });
})
