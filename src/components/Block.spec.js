import React from "react";
import { shallow } from "enzyme";
import Blocks from "./Blocks";
import Block from "./Block";
import { TurnedInRounded } from "@material-ui/icons";

describe("<Blocks />", () => {
  const workingBlocks = {
    data: [
      {
        id: "1",
        type: "blocks",
        attributes: {
          index: 1,
          data: "The Human Torch",
        },
      },
      {
        id: "2",
        type: "blocks",
        attributes: {
          index: 2,
          data: "is denied",
        },
      },
    ],
  };

  it('should contain <Block />', () => {
    const wrapper = shallow(
      <Blocks blocks={workingBlocks} />
    )
    expect(wrapper.find(Block).length).toEqual(2)
  })

});
