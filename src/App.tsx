/*
 * @Author: shanzhilin
 * @Date: 2021-07-09 09:53:06
 * @LastEditors: shanzhilin
 * @LastEditTime: 2021-07-09 15:58:24
 */
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React, { useState } from "react";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const style = css`
  cursor: pointer;
  margin: 50px;
`;

const ButtonDiv = styled.button`
  display: block;
  width: 50px;
  height: 20px;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  margin: 20px 0;
`;

const SomeComponent = ({ children }: any) => {
  return (
    <div css={style}>
      Some hotpink text.
      {children}
    </div>
  );
};

const anotherStyle = css({
  textDecoration: "underline",
  margin: "20px 0",
  color: 'hotpink',
});

const AnotherComponent = () => {
  const color = 'red'
  return (
    <div>
      <div>1.使用css字符串方法</div>
      <p css={anotherStyle}>一些有下划线的文字</p>

      <div>2.使用styled.el属性</div>
      <ButtonDiv>按钮</ButtonDiv>
      
      <div>3.元素内部使用css属性</div>
      <div css={css`
        width: 50px;
        height: 50px;
        margin: 20px 0;
        background-color: slategray;
        &:hover {
          background-color: ${color};
        }
      `}></div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <SomeComponent>
        <AnotherComponent />
      </SomeComponent>
    </div>
  );
}

export default App;
