import React from "react";
import Axios from "axios";
import { Scheduler, MonthView } from "@progress/kendo-react-scheduler";

import JJorm from "../JJorm";
import Bind from "../ReactBootstrap";
import L from "../@global/Language";

type SchoolData = {
  SD_SCHUL_CODE: string;
  ATPT_OFCDC_SC_NM: string;
  ATPT_OFCDC_SC_CODE: string;
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
  duplicatedName: Array<SchoolData>;
  comment: Array<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  >;
  today: any;
  schedule: any;
  meal: Array<any>;
};

export default class Index extends JJorm<JJWAK.Page.Props<"Index">, State> {
  constructor(props: JJWAK.Page.Props<"Index">) {
    super(props);
    this.state = {
      schoolData: {
        SD_SCHUL_CODE: "",
        ATPT_OFCDC_SC_NM: "",
        ATPT_OFCDC_SC_CODE: "",
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
      comment: [<span>학교 평가를 작성하려면 먼저 학교를 검색해주세요.</span>],
      today: new Date(),
      schedule: [],
      meal: [<span>급식 정보를 확인하려면 먼저 학교를 검색해주세요.</span>],
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
              this.loadComments(this.state.duplicatedName[i]);
              this.loadSchedule(this.state.duplicatedName[i]);
            }}
          >
            {this.state.duplicatedName[i].SCHUL_NM} (
            {this.state.duplicatedName[i].ATPT_OFCDC_SC_NM})
          </button>
        </>
      );
    }
    return arr;
  }

  loadComments = async (custom?: SchoolData) => {
    const arr: Array<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
      >
    > = [];

    this.setState({ comment: [] });
    await Axios.get(
      `/school/comment?id=${
        custom ? custom.SD_SCHUL_CODE : this.state.schoolData.SD_SCHUL_CODE
      }`
    ).then(
      ({ data }) => {
        if (!data.length) {
          this.setState({
            comment: [<span>DB에 존재하지 않는 학교입니다.</span>],
          });
          return;
        }

        for (let i in data) {
          if (data[i].status.deleted) continue;
          if (data[i].target !== this.state.schoolData.SD_SCHUL_CODE) continue;
          arr.push(<br />);
          arr.push(
            <span id={`comment${data[i].id}`}>
              [{data[i].createdAt}] {data[i].writer}: {data[i].content}
            </span>
          );
        }
        this.setState({ comment: arr });
      },
      (e) => {
        console.error(e);
      }
    );
  };

  loadSchedule = async (
    custom?: SchoolData,
    AA_FROM_YMD?: string,
    AA_TO_YMD?: string
  ) => {
    const arr: Array<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
      >
    > = [];

    this.setState({
      schedule: [],
    });
    await Axios.get("/school/schedule", {
      params: {
        ATPT_OFCDC_SC_CODE: custom
          ? custom.ATPT_OFCDC_SC_CODE
          : this.state.schoolData.ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE: custom
          ? custom.SD_SCHUL_CODE
          : this.state.schoolData.SD_SCHUL_CODE,
        AA_FROM_YMD: AA_FROM_YMD || `${this.state.today.getFullYear()}0301`,
        AA_TO_YMD: AA_TO_YMD || `${this.state.today.getFullYear() + 1}0220`,
      },
    }).then(
      ({ data }) => {
        const schedule: any = [];

        if (!data.length)
          return (
            <span>
              API에서 가져올 수 없는 학교 또는 존재하지 않는 학교입니다.
            </span>
          );

        for (let i = 0; i < data.length; i++) {
          const startDate = new Date();
          const endDate = new Date();
          const newYear = Number(data[i].AA_YMD.slice(0, 4));
          const newMonth = Number(
            data[i].AA_YMD.slice(4, 6).split("0").join("")
          );
          const newDate = Number(
            data[i].AA_YMD.slice(6, 8).split("0").join("")
          );

          startDate.setFullYear(newYear);
          startDate.setMonth(newMonth - 1);
          startDate.setDate(newDate);
          endDate.setFullYear(newYear);
          endDate.setMonth(newMonth - 1);
          endDate.setDate(newDate + 1);
          schedule.push({
            id: i + 4,
            title: "테스트",
            description: "",
            startTimezone: null,
            start: startDate,
            end: endDate,
            endTimezone: null,
            recurrenceRule: null,
            recurrenceId: null,
            recurrenceExceptions: null,
            isAllDay: false,
          });
        }

        this.setState({ schedule });
      },
      (e) => {
        console.error(e);
      }
    );
  };

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
                this.loadComments();
                this.loadSchedule();
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
        <div
          id="commentBox"
          style={{
            display: this.state.schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
          }}
        >
          <h3>학교 평가</h3>
          {this.state.comment}
          <p />
          <input id="writerNameInput" placeholder="작성자" />
          <input id="writerPasswordInput" placeholder="비밀번호" />
          <br />
          <textarea id="commentInput" placeholder="내용" />
          <button
            onClick={async () => {
              const writer = (
                document.getElementById("writerNameInput") as HTMLInputElement
              ).value;
              const password = (
                document.getElementById(
                  "writerPasswordInput"
                ) as HTMLInputElement
              ).value;
              const content = (
                document.getElementById("commentInput") as HTMLTextAreaElement
              ).value;
              if (!writer) return alert("작성자 닉네임을 입력해주세요.");
              if (!password)
                return alert("댓글 관리를 위한 비밀번호를 입력해주세요.");
              if (!content) return alert("내용을 입력해주세요.");
              await Axios.post("/school/comment", {
                writer: writer,
                target: this.state.schoolData.SD_SCHUL_CODE,
                content: content,
                password: password,
              });
              this.loadComments();
            }}
          >
            작성
          </button>
        </div>
        <p />
        <div
          id="scheduleBox"
          style={{
            display: this.state.schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
          }}
        >
          <h3 id="scheduleTitle">학사일정</h3>
          <Scheduler data={this.state.schedule} defaultDate={this.state.today}>
            <MonthView
              title="Month"
              selectedDateFormat="{0:M}"
              selectedShortDateFormat="{0:M}"
            />
          </Scheduler>
        </div>
        <p />
        <div
          id="mealBox"
          style={{
            display: this.state.schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
          }}
        >
          <h3>급식</h3>
        </div>
      </article>
    );
  }
}
Bind(Index);