import React from "react";
import classNames from "classnames";
import styled, { css } from "styled-components";
import Draggable from "react-draggable";
import { DEFAULT_BOOK_TOOLS } from "./const";
import ColorPickerButton from "./ColorPickerButton";
import LineWidthPickerButton from "./LineWidthPickerButton";
import TimerButton from "./TimerButton";
import BookToolMenuItem from "./BookToolMenuItem";
import { COLOR_ORANGE, INNER_WIDTH } from "../../constants/type";
import BookToolMenuGroup from "./BookToolMenuGroup";

const ToolWrapper = styled.div`
  position: absolute;
  z-index: 16;
  &.tool-mobile {
    bottom: 70px;
  }
  &.tool-desktop {
    left: 2px;
    top: 20%;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #dee2e6;

  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: ${COLOR_ORANGE};
    background-color: ${COLOR_ORANGE};
  }
  .custom-control-input:focus ~ .custom-control-label::before {
    border-color: #ccc;
    box-shadow: 0 0 0 #fff;
  }
  li {
    background-color: #fff;
    padding: 3px 0 3px 2px;
  }
`;

const ScrollBookTool = styled.div`
  &.book-tool-mobile {
    overflow: auto;
    width: ${window.innerWidth}px;
  }
`;

const BookToolMenu = ({
  bookTool,
  onChangeDrawType,
  onChangeLineColor,
  onChangeLineWidth,
  isOnGame,
  onSwitchControl,
}) => {
  const menu = (
    <ToolWrapper
      // isOnGame={isOnGame}
      className={classNames({
        "tool-mobile": window.innerWidth <= INNER_WIDTH.MOBILE,
        "tool-desktop": window.innerWidth > INNER_WIDTH.MOBILE,
      })}
    >
      <ScrollBookTool
        className={classNames({
          "book-tool-mobile": window.innerWidth <= INNER_WIDTH.MOBILE,
        })}
      >
          <StyledUl
            className={classNames({
              "p-1": window.innerWidth > INNER_WIDTH.MOBILE,
              "d-flex": window.innerWidth <= INNER_WIDTH.MOBILE,
            })}
          >
            <div
              className={classNames("custom-control custom-switch ml-2", {
                "mt-2 pt-1": window.innerWidth <= INNER_WIDTH.MOBILE,
              })}
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitches"
                onChange={() => onSwitchControl(!bookTool.control)}
                checked={bookTool.control}
              />
              <label className="custom-control-label" for="customSwitches" />
            </div>
            <li>
              <BookToolMenuGroup
                id="booktool-setting"
                icon="fa fa-cogs"
                text="Thiết lập"
                items={[
                  <ColorPickerButton
                    color={bookTool.lineColor}
                    onChange={onChangeLineColor}
                    controlBookTool={bookTool.control}
                  />,
                  <LineWidthPickerButton
                    lineWidth={bookTool.lineWidth}
                    onChange={onChangeLineWidth}
                    controlBookTool={bookTool.control}
                  />,
                ]}
                controlBookTool={bookTool.control}
              />
            </li>
            {DEFAULT_BOOK_TOOLS.map((item, i) => {
              const selectedChild = item.children.find(
                ({ id }) => id === bookTool.drawType
              );
              return item.children ? (
                <li>
                  <BookToolMenuGroup
                    id={item.id}
                    icon={selectedChild?.icon || item.icon}
                    text={item.text}
                    items={item.children.map((child) => (
                      <BookToolMenuItem
                        item={child}
                        active={
                          bookTool.control && bookTool.drawType === child.id
                        }
                        onClick={() => onChangeDrawType(child.id)}
                        controlBookTool={bookTool.control}
                      />
                    ))}
                    controlBookTool={bookTool.control}
                    active={bookTool.control && selectedChild}
                  />
                </li>
              ) : (
                <li key={i}>
                  <BookToolMenuItem
                    item={item}
                    active={bookTool.drawType === item.id && bookTool.control}
                    onClick={() => onChangeDrawType(item.id)}
                    controlBookTool={bookTool.control}
                  />
                </li>
              );
            })}
            <li>
              <TimerButton controlBookTool={bookTool.control} />
            </li>
          </StyledUl>
      </ScrollBookTool>
    </ToolWrapper>
  );

  return window.innerWidth > INNER_WIDTH.MOBILE ? (
    <Draggable>{menu}</Draggable>
  ) : (
    menu
  );
};

export default BookToolMenu;
