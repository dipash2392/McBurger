import React, { Component } from "react";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";


import "./loader.css";

const override = css`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: 0 auto;
  z-index: 9999;
`;

const onlineOverride = css`
  position: absolute;
  left: 47%;
  top: 47%;
  margin: 0 auto;
  z-index: 9999;
  color: white;
`;

export class Loader extends Component {
    render() {
        return (
            <div className={this.props.loading ? "loading-overlay" : ""}>
                <React.Fragment>

                    <BeatLoader
                        css={override}
                        sizeUnit={"px"}
                        size={20}
                        color={"#123abc"}
                        loading={this.props.loading}
                    />

                </React.Fragment>
            </div>
        );
    }
}
export default Loader;
