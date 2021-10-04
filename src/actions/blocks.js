import fetch from "cross-fetch";
import * as types from "../constants/actionTypes";

const getBlocksStart = (node) => {
  return {
    type: types.GET_BLOCKS_START,
    node,
  };
};
const getBlocksSuccess = (node, data) => {
  return {
    type: types.GET_BLOCKS_SUCCESS,
    node,
    data,
  };
};
const getBlocksFailure = (node, error) => {
  return {
    type: types.GET_BLOCKS_FAILURE,
    node,
    error,
  };
};

export function getBlocks(node) {
  return async (dispatch) => {
    try {
      dispatch(getBlocksStart(node));
      const data = await fetch(`${node.url}/api/v1/blocks`);

      if (data.status >= 400) {
        dispatch(getBlocksFailure(node.url, "Error"));
        return;
      }

      const json = await data.json();
      dispatch(getBlocksSuccess(node.url, json.data));
    } catch (err) {
      dispatch(getBlocksFailure(node.url, `Error ${err}`));
    }
  };
}

export function getListBlocks(list) {
  return (dispatch) => {
    list.forEach((node) => {
      dispatch(getBlocks(node));
    });
  };
}
