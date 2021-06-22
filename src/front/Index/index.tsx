import React from "react";
import Axios from "axios";

import JJorm from "../JJorm";
import Bind from "../ReactBootstrap";
import L from "../@global/Language";
import { NONAME } from "dns";

type SchoolData = {
  ATPT_OFCDC_SC_NM: string;
  SCHUL_NM: string;
  ENG_SCHUL_NM: string;
  SCHUL_KND_SC_NM: string;
  FOND_SC_NM: string;
  ORG_RDNZC: string;
  ORG_RDNMA: string;
  ORG_RDNDA: string;
  ORG_TELNO: string;
  COEDU_SC_NM: string;
  HMPG_ADRES: string;
  FOND_YMD: number;
};
type Properties = {};
type State = {
  schoolData: SchoolData;
  duplicatedName: Array<any>;
};

export default class Index extends JJorm<JJWAK.Page.Props<"Index">, State> {
  constructor(props: JJWAK.Page.Props<"Index">) {
    super(props);
    this.state = {
      schoolData: {
        ATPT_OFCDC_SC_NM: "",
        SCHUL_NM: "",
        ENG_SCHUL_NM: "",
        SCHUL_KND_SC_NM: "",
        FOND_SC_NM: "",
        ORG_RDNZC: "",
        ORG_RDNMA: "",
        ORG_RDNDA: "",
        ORG_TELNO: "",
        COEDU_SC_NM: "",
        HMPG_ADRES: "",
        FOND_YMD: 0,
      },
      duplicatedName: [],
    };
  }

  hide(element: HTMLElement | null) {
    if (element) element.style.display = "none";
  }

  show(element: HTMLElement | null) {
    if (element) element.style.display = "block";
  }

  handleDuplicatedName() {
    const arr = [];
    for (let i = 0; i < this.state.duplicatedName.length; i++) {
      arr.push(
        <>
          <br />
          <button
            id={`duplicatedName${i}`}
            onClick={(e) => {
              this.setState({ schoolData: this.state.duplicatedName[i] });
              this.hide(e.currentTarget.parentElement);
            }}
          >
            {this.state.duplicatedName[i].SCHUL_NM} (
            {this.state.duplicatedName[i].ATPT_OFCDC_SC_NM})
          </button>
        </>
      );
    }
    console.log(arr);
    return arr;
  }

  render(): React.ReactNode {
    return (
      <article>
        <div>
          <span>학교명을 입력하세요.</span>
          <br />
          <input id="schoolNameInput" type="text"></input>
          <button
            onClick={async () => {
              const res = (
                await Axios.get(
                  `/school/info?schoolName=${
                    (
                      document.getElementById(
                        "schoolNameInput"
                      ) as HTMLInputElement
                    ).value
                  }`
                )
              ).data;
              if (res.length >= 2) {
                this.setState({ duplicatedName: res });
                this.show(document.getElementById("selectSchoolDialogBox"));
              } else {
                this.setState({
                  schoolData: res[0],
                });
                this.hide(document.getElementById("selectSchoolDialogBox"));
              }
            }}
          >
            학교 검색
          </button>
        </div>
        <div
          id="schoolInfoBox"
          style={{
            display: this.state.schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
          }}
        >
          <span id="ATPT_OFCDC_SC_NM">
            소속 교육청: {this.state.schoolData.ATPT_OFCDC_SC_NM}
          </span>
          <br />
          <span id="SCHUL_NM">
            학교명: {this.state.schoolData.SCHUL_NM} (
            {this.state.schoolData.ENG_SCHUL_NM})
          </span>
          <br />
          <span id="SCHUL_KND_SC_NM">
            분류: {this.state.schoolData.FOND_SC_NM}{" "}
            {this.state.schoolData.COEDU_SC_NM}{" "}
            {this.state.schoolData.SCHUL_KND_SC_NM}
          </span>
          <br />
          <span id="ORG_RDN">
            소재지: {this.state.schoolData.ORG_RDNMA}{" "}
            {this.state.schoolData.ORG_RDNDA} ({this.state.schoolData.ORG_RDNZC}
            )
          </span>
          <br />
          <span id="ORG_TELNO">
            전화번호: {this.state.schoolData.ORG_TELNO}
          </span>
          <br />
          <span id="HMPG_ADRES">
            홈페이지:{" "}
            <a href={this.state.schoolData.HMPG_ADRES}>
              {this.state.schoolData.HMPG_ADRES}
            </a>
          </span>
          <br />
          <span id="FOND_YMD">SINCE {this.state.schoolData.FOND_YMD}</span>
        </div>
        <div
          id="selectSchoolDialogBox"
          style={{
            display: this.state.duplicatedName[1] ? "display" : "none",
          }}
        >
          <span>
            학교명 검색 결과 동일한 이름의 학교가 2개 이상 검색되었습니다.
            하나를 선택해주세요.
          </span>
          {this.handleDuplicatedName()}
        </div>
      </article>
    );
  }
}
Bind(Index);
