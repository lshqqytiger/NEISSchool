import Express from "express";
import Axios from "axios";
import SHA256 from "sha256";

import { SETTINGS } from "./System";
import { loadLanguages } from "./Language";
import { PageBuilder } from "./ReactNest";
import DB from "./Database";
import { Logger } from "./Logger";

const registerSchoolToDB = async (schoolData: any) => {
  const registeredData = await DB.Manager.query(
    `SELECT * FROM school WHERE SD_SCHUL_CODE = '${schoolData.SD_SCHUL_CODE}'`
  );
  if (registeredData.length === 0) {
    DB.Manager.query(
      `INSERT INTO school VALUES(
      '${schoolData.ATPT_OFCDC_SC_CODE}',
      '${schoolData.ATPT_OFCDC_SC_NM}',
      '${schoolData.SD_SCHUL_CODE}',
      '${schoolData.SCHUL_NM}',
      '${schoolData.ENG_SCHUL_NM}',
      '${schoolData.SCHUL_KND_SC_NM}',
      '${schoolData.LCTN_SC_NM}',
      '${schoolData.JU_ORG_NM}',
      '${schoolData.FOND_SC_NM}',
      '${schoolData.ORG_RDNZC}',
      '${schoolData.ORG_RDNMA}',
      '${schoolData.ORG_RDNDA}',
      '${schoolData.ORG_TELNO}',
      '${schoolData.HMPG_ADRES}',
      '${schoolData.COEDU_SC_NM}',
      '${schoolData.HS_SC_NM}',
      '${schoolData.INDST_SPECL_CCCCL_EXST_YN}',
      '${schoolData.HS_GNRL_BUSNS_SC_NM}',
      '${schoolData.SPCLY_PURPS_HS_ORD_NM}',
      '${schoolData.ENE_BFE_SEHF_SC_NM}',
      '${schoolData.DGHT_SC_NM}',
      '${schoolData.FOND_YMD}',
      '${schoolData.FOAS_MEMRD}',
      '${schoolData.LOAD_DTM}'
    );`
    );
  } else if (registeredData.LOAD_DTM !== schoolData.LOAD_DTM) {
    DB.Manager.query(
      `UPDATE school SET
    ATPT_OFCDC_SC_CODE = '${schoolData.ATPT_OFCDC_SC_CODE}',
    ATPT_OFCDC_SC_NM = '${schoolData.ATPT_OFCDC_SC_NM}',
    SD_SCHUL_CODE = '${schoolData.SD_SCHUL_CODE}',
    SCHUL_NM = '${schoolData.SCHUL_NM}',
    ENG_SCHUL_NM = '${schoolData.ENG_SCHUL_NM}',
    SCHUL_KND_SC_NM = '${schoolData.SCHUL_KND_SC_NM}',
    LCTN_SC_NM = '${schoolData.LCTN_SC_NM}',
    JU_ORG_NM = '${schoolData.JU_ORG_NM}',
    FOND_SC_NM = '${schoolData.FOND_SC_NM}',
    ORG_RDNZC = '${schoolData.ORG_RDNZC}',
    ORG_RDNMA = '${schoolData.ORG_RDNMA}',
    ORG_RDNDA = '${schoolData.ORG_RDNDA}',
    ORG_TELNO = '${schoolData.ORG_TELNO}',
    HMPG_ADRES = '${schoolData.HMPG_ADRES}',
    COEDU_SC_NM = '${schoolData.COEDU_SC_NM}',
    HS_SC_NM = '${schoolData.HS_SC_NM}',
    INDST_SPECL_CCCCL_EXST_YN = '${schoolData.INDST_SPECL_CCCCL_EXST_YN}',
    HS_GNRL_BUSNS_SC_NM = '${schoolData.HS_GNRL_BUSNS_SC_NM}',
    SPCLY_PURPS_HS_ORD_NM = '${schoolData.SPCLY_PURPS_HS_ORD_NM}',
    ENE_BFE_SEHF_SC_NM = '${schoolData.ENE_BFE_SEHF_SC_NM}',
    DGHT_SC_NM = '${schoolData.DGHT_SC_NM}',
    FOND_YMD = '${schoolData.FOND_YMD}',
    FOAS_MEMRD = '${schoolData.FOAS_MEMRD}',
    LOAD_DTM = '${schoolData.LOAD_DTM}'
  WHERE SD_SCHUL_CODE = '${schoolData.SD_SCHUL_CODE}';`
    );
  }
  return;
};

export default function (App: Express.Application): void {
  App.get("/", PageBuilder("Index"));
  App.get("/search/:name", (req) => PageBuilder("Result", req.params.name));
  App.get("/school/info", async (req, res) => {
    if (!req.query.schoolName) return res.sendStatus(400);

    const schoolData = (
      await Axios.get(`${SETTINGS["neis"].host}/schoolInfo`, {
        params: {
          KEY: SETTINGS["neis"].key,
          Type: "json",
          pIndex: 1,
          pSize: 9,
          SCHUL_NM: req.query.schoolName,
        },
      })
    ).data.schoolInfo[1].row;
    if (schoolData.length >= 2) {
      for (let i in schoolData) {
        registerSchoolToDB(schoolData[i]);
      }
      return res.send(schoolData);
    } else {
      registerSchoolToDB(schoolData[0]);
      return res.send([schoolData[0]]);
    }
  });
  App.get("/school/comment", async (req, res) => {
    if (!req.query.id) return res.sendStatus(400);

    const comments = await DB.Manager.query(
      `SELECT * FROM comment WHERE target = '${req.query.id}'`
    );

    return res.send(comments);
  });
  App.get("/school/schedule", async (req, res) => {
    if (!req.query.ATPT_OFCDC_SC_CODE) return res.sendStatus(400);
    if (!req.query.SD_SCHUL_CODE) return res.sendStatus(400);

    const schedule = (
      await Axios.get(`${SETTINGS["neis"].host}/SchoolSchedule`, {
        params: {
          KEY: SETTINGS["neis"].key,
          Type: "json",
          pIndex: 1,
          pSize: 365,
          ATPT_OFCDC_SC_CODE: req.query.ATPT_OFCDC_SC_CODE,
          SD_SCHUL_CODE: req.query.SD_SCHUL_CODE,
          AA_FROM_YMD: req.query.AA_FROM_YMD,
          AA_TO_YMD: req.query.AA_TO_YMD,
        },
      })
    ).data;

    return res.send(schedule.SchoolSchedule[1].row);
  });
  App.get("/school/meal", async (req, res) => {
    if (!req.query.ATPT_OFCDC_SC_CODE) return res.sendStatus(400);
    if (!req.query.SD_SCHUL_CODE) return res.sendStatus(400);

    try {
      const schedule = (
        await Axios.get(`${SETTINGS["neis"].host}/mealServiceDietInfo`, {
          params: {
            KEY: SETTINGS["neis"].key,
            Type: "json",
            ATPT_OFCDC_SC_CODE: req.query.ATPT_OFCDC_SC_CODE,
            SD_SCHUL_CODE: req.query.SD_SCHUL_CODE,
            MLSV_YMD: req.query.MLSV_YMD,
          },
        })
      ).data.mealServiceDietInfo[1].row[0];
      return res.send(schedule);
    } catch (e) {
      return res.send({
        DDISH_NM:
          "급식 정보를 가져오지 못했습니다. 급식이 없는 날이거나 나이스 API 서버가 응답하지 않습니다.",
      });
    }
  });

  App.post("/school/comment", async (req, res) => {
    if (!req.body.writer) return res.sendStatus(400);
    if (!req.body.password) return res.sendStatus(400);
    if (!req.body.target) return res.sendStatus(400);
    if (!req.body.content) return res.sendStatus(400);

    await DB.Manager.query(
      `INSERT INTO comment(writer, target, content, password, ip) VALUES('${
        req.body.writer
      }', '${req.body.target}', '${req.body.content}', '${SHA256.x2(
        req.body.password
      )}', '${req.ip}')`
    );

    return res.sendStatus(200);
  });

  App.get("/admin/load-languages", (req, res) => {
    loadLanguages();
    return res.sendStatus(200);
  });
  App.use((req, res) => res.sendStatus(404));
}
