import Express from "express";
import Axios from "axios";
import SHA256 from "sha256";

import { SETTINGS } from "./System";
import { loadLanguages } from "./Language";
import { PageBuilder } from "./ReactNest";
import DB from "./Database";
import School from "back/models/School";
import Comment from "back/models/Comment";
import { Logger } from "./Logger";

export default function (App: Express.Application): void {
  App.get("/", PageBuilder("Index"));
  App.get("/school/info", async (req, res) => {
    if (!req.query.schoolName) return res.sendStatus(400);

    const schoolRepository = DB.Manager.getRepository(School);

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
        const school =
          (await schoolRepository.findOne({
            where: { SD_SCHUL_CODE: schoolData[i].SD_SCHUL_CODE },
          })) || new School();
        Object.assign(school, schoolData[i]);
        await schoolRepository.save(school);
      }
      return res.send(schoolData);
    } else {
      const school =
        (await schoolRepository.findOne({
          where: { SD_SCHUL_CODE: schoolData[0].SD_SCHUL_CODE },
        })) || new School();
      Object.assign(school, schoolData[0]);
      await schoolRepository.save(school);
      return res.send([schoolData[0]]);
    }
  });
  App.get("/school/comment", async (req, res) => {
    if (!req.query.id) return res.sendStatus(400);

    const commentRepository = DB.Manager.getRepository(Comment);

    const comments = await commentRepository.find({
      where: { target: req.query.id },
    });

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
      const meal = (
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
      return res.send(meal);
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

    const commentRepository = DB.Manager.getRepository(Comment);

    const comment = new Comment();
    comment.writer = req.body.writer;
    comment.target = req.body.target;
    comment.content = req.body.content;
    comment.password = SHA256.x2(req.body.password);
    comment.ip = req.ip;
    await commentRepository.save(comment);

    return res.sendStatus(200);
  });

  App.get("/admin/load-languages", (req, res) => {
    loadLanguages();
    return res.sendStatus(200);
  });
  App.use((req, res) => res.sendStatus(404));
}
