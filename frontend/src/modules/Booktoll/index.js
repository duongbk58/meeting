import React from "react";
import "./styleBooktoll.scss";

export default function Booktoll() {
  return (
    <div className="sc-cjrPHo kiYFIh tool-desktop react-draggable react-draggable-dragged">
      <div className="sc-JEhMO izVvUc">
        <ul className="sc-igXgud hHGuBP p-1">
          <div className="custom-control custom-switch ml-2">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitches"
            />
            <label className="custom-control-label" for="customSwitches" />
          </div>
          <li>
            <div className="sc-fydGpi gonXMq">
              <button
                type="button"
                className="sc-dkQkyq gBrASl btn btn-light btn-sm rounded"
              >
                <span color="secondary" id="Tooltip-booktool-setting">
                  <i
                    class="fa fa-cogs"
                    aria-hidden="true"
                    // style="font-size: 20px;"
                  ></i>
                </span>
              </button>
            </div>
          </li>
          <li>
            <div className="sc-fydGpi gonXMq">
              <button
                type="button"
                className="sc-dkQkyq evqKLp btn btn-light btn-sm rounded"
              >
                <span color="secondary" id="Tooltip-booktool-pencil">
                  <i
                    class="fa fa-pencil"
                    aria-hidden="true"
                    // style="font-size: 20px;"
                  ></i>
                </span>
              </button>
            </div>
          </li>
          <li>
            <div className="sc-fydGpi gonXMq">
              <button
                type="button"
                className="sc-dkQkyq evqKLp btn btn-light btn-sm rounded"
              >
                <span color="secondary" id="Tooltip-booktool-pencil">
                  <i class="fa fa-font" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
          <li>
            <div className="sc-fydGpi gonXMq">
              <button
                type="button"
                className="sc-dkQkyq gBrASl btn btn-light btn-sm rounded"
              >
                <span color="secondary" id="Tooltip-booktool-setting">
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
          <li>
            <div className="sc-fydGpi gonXMq">
              <button
                type="button"
                className="sc-dkQkyq gBrASl btn btn-light btn-sm rounded"
              >
                <span color="secondary" id="Tooltip-booktool-setting">
                  <i class="fa fa-low-vision" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
          <li>
            <div className="sc-fydGpi gonXMq">
              <button
                type="button"
                className="sc-dkQkyq gBrASl btn btn-light btn-sm rounded"
              >
                <span color="secondary" id="Tooltip-booktool-setting">
                  <i class="fa fa-eraser" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
          <li>
            <div className="sc-fydGpi gonXMq">
              <button
                type="button"
                className="sc-dkQkyq gBrASl btn btn-light btn-sm rounded"
              >
                <span color="secondary" id="Tooltip-booktool-setting">
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
