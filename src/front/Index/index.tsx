import React from "react";
import Axios from "axios";

import JJorm from "../JJorm";
import Bind from "../ReactBootstrap";
import L from "../@global/Language";

type SchoolData = {
  SCHUL_NM: string;
};
type Properties = {};
type State = {
  schoolData: SchoolData;
};

export default class Index extends JJorm<JJWAK.Page.Props<"Index">, State> {
  constructor(props: JJWAK.Page.Props<"Index">) {
    super(props);
    this.state = {
      schoolData: {
        SCHUL_NM: "",
      },
    };
  }

  render(): React.ReactNode {
    return (
      <article>
        <div>
          <span>학교명을 입력하세요.</span>
          <input id="schoolNameInput" type="text"></input>
          <button
            onClick={async () => {
              this.setState({
                schoolData: (
                  await Axios.get(
                    `/school/info?schoolName=${
                      (
                        document.getElementById(
                          "schoolNameInput"
                        ) as HTMLInputElement
                      ).value
                    }`
                  )
                ).data[0],
              });
            }}
          >
            학교 검색
          </button>
        </div>
        <div id="schoolInfoBox">
          <span id="SCHUL_NM">{this.state.schoolData.SCHUL_NM}</span>
        </div>
      </article>
    );
  }
}
Bind(Index);
