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
  const loadingBlock = [
    {
      id: "1",
      loading: true,
      error: null,
    },
  ];
  const errorBlock = [
    {
      id: "2",
      loading: false,
      error: {},
      data: null
    },
  ];

  it('should contain <Block />', () => {
    const wrapper = shallow(
      <Blocks blocks={workingBlocks} />
    )
    expect(wrapper.find(Block).length).toEqual(2)
  })
  // it("should be loading", () => {
  //   const wrapper = shallow(<Blocks blocks={loadingBlock} />);
  //   expect(wrapper.text().includes("Loading")).toBe(true);
  // });

  // it("should find an error", () => {
  //   const wrapper = shallow(<Blocks blocks={errorBlock} />);
  //   expect(wrapper.text().includes("Error")).toBe(true);
  // });
});
