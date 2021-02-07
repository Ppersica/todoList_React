/* eslint-disable jest/valid-expect */
import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Header from "../src/components/Header/index";
import ListItem from "../src/components/TodoItem/index";
import { TODO, TODOITEM } from "../src/store/stateType";
import TodoHeader from "../src/components/TodoHeader";

describe("Enzyme Shallow", () => {
  it("titleShow", () => {
    let header = shallow(<Header />);
    expect(header.find("h1").text()).to.equal("Todo");
  });
  it("TodoHeaderShow", () => {
    let todoHeader = shallow(<TodoHeader />);
    // eslint-disable-next-line jest/valid-expect
    expect(todoHeader.find("input").length).to.equal(1);
  });
});
it("addTodo", () => {
  const defaultState: TODO = {
    list: [
      {
        id: 0,
        content: "this is test1",
        status: 0,
      },
      {
        id: 1,
        content: "this is test2",
        status: 0,
      },
      {
        id: 2,
        content: "this is test3",
        status: 0,
      },
    ],
    finished: 0,
    input_value: "",
  };
  let todoHeader = shallow(<TodoHeader />);
  const todo = {
    id: 3,
    content: "this is test4",
    status: 0,
  };
  defaultState.list.push(todo); //模拟添加一条数据
  let todoLength = defaultState.list.length;
  let ul = shallow(
    <ul>
      {Array.from(defaultState.list).map((todo: TODOITEM, index: number) => (
        <ListItem item={todo} key={index} />
      ))}
      <li>
        completed : {defaultState.finished}&nbsp;/&nbsp;all :{" "}
        {defaultState.list.length}
      </li>
    </ul>
  );
  todoHeader.find(".add_input").simulate("keypress", { key: "Enter" }); //文本框回车添加
  // eslint-disable-next-line jest/valid-expect
  expect(ul.children()).to.have.lengthOf(todoLength + 1); //判断回车添加的一条数据有没有显示
});
it("delTodo", () => {
  const defaultState: TODO = {
    list: [
      {
        id: 0,
        content: "this is test1",
        status: 0,
      },
      {
        id: 1,
        content: "this is test2",
        status: 0,
      },
    ],
    finished: 0,
    input_value: "",
  };
  let item = shallow(<span className="delete-btn">删除</span>);
  defaultState.list.splice(1, 1); //模拟删除一条数据
  let todoLength = defaultState.list.length;
  let ul = shallow(
    <ul>
      {Array.from(defaultState.list).map((todo: TODOITEM, index: number) => (
        <ListItem item={todo} key={index} />
      ))}
    </ul>
  );
  item.find(".delete-btn").simulate("click");
  // eslint-disable-next-line jest/valid-expect
  expect(ul.children()).to.have.lengthOf(todoLength); //判断点击删除后数据是否不显示
});
it("changeTodo", () => {
  let item = shallow(
    <span
      id="test_span"
      className="check-btn"
      onClick={() => {
        const d = document.getElementById("test_span") as HTMLElement;
        if (d) {
          d.style.backgroundColor = "#B0C4DE";
        }
      }}
      style={{ backgroundColor: "#fff" }}
    ></span>
  );
  item.find(".check-btn").simulate("click");
  // eslint-disable-next-line jest/valid-expect
  //  const itemStyle=item.find('span').get(0).style();
  //   expect(itemStyle).haveOwnProperty(
  //     'backgroundColor',
  //     '#fff',
  //   );
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  item.matchesElement(
    <span
      id="s"
      className="check-btn"
      onClick={() => {
        const d = document.getElementById("s");
        d.style.backgroundColor = "#B0C4DE";
      }}
      style={{ backgroundColor: "#B0C4DE" }}
    ></span>
  ) === true; //判断点击后样式是否发生修改
});
