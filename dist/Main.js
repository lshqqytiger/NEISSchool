/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 756:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(127));
const spdy_1 = __importDefault(__webpack_require__(2));
const Database_1 = __importDefault(__webpack_require__(148));
const ExpressAgent_1 = __importDefault(__webpack_require__(377));
const Language_1 = __webpack_require__(908);
const Route_1 = __importDefault(__webpack_require__(476));
const System_1 = __webpack_require__(555);
const Logger_1 = __webpack_require__(604);
const SPDY_OPTIONS = System_1.SETTINGS['https'] ? {
    key: System_1.getProjectData(System_1.SETTINGS['https']['key']),
    cert: System_1.getProjectData(System_1.SETTINGS['https']['cert'])
} : null;
const App = express_1.default();
if (System_1.DEVELOPMENT) {
    Logger_1.Logger.warning("Development").out();
}
Database_1.default.initialize().then(() => {
    Language_1.loadLanguages();
    System_1.loadEndpoints();
    System_1.writeClientConstants();
    ExpressAgent_1.default(App);
    Route_1.default(App);
    if (SPDY_OPTIONS) {
        spdy_1.default.createServer(SPDY_OPTIONS, App).listen(System_1.SETTINGS['port'], () => {
            Logger_1.Logger.success("HTTPS Server").put(System_1.SETTINGS['port']).out();
        });
    }
    else {
        App.listen(System_1.SETTINGS['port'], () => {
            Logger_1.Logger.success("HTTP Server").put(System_1.SETTINGS['port']).out();
        });
    }
});
process.on('unhandledRejection', err => {
    const content = err instanceof Error ? err.stack : String(err);
    Logger_1.Logger.error("Unhandled promise rejection").put(content).out();
});


/***/ }),

/***/ 162:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const TypeORM = __importStar(__webpack_require__(794));
let Comment = class Comment {
    sessionize() {
        return {
            id: this.id,
            writer: this.writer,
            target: this.target,
            content: this.content,
            status: this.status,
            createdAt: this.createdAt,
            like: this.like,
            unlike: this.unlike,
            reported: this.reported,
            password: this.password,
            ip: this.ip,
        };
    }
};
__decorate([
    TypeORM.PrimaryColumn({ name: "id", type: "int" })
], Comment.prototype, "id", void 0);
__decorate([
    TypeORM.Column({ name: "writer", type: "text" })
], Comment.prototype, "writer", void 0);
__decorate([
    TypeORM.Column({ name: "target", type: "text" })
], Comment.prototype, "target", void 0);
__decorate([
    TypeORM.Column({ name: "content", type: "text" })
], Comment.prototype, "content", void 0);
__decorate([
    TypeORM.Column({ name: "status", type: "json" })
], Comment.prototype, "status", void 0);
__decorate([
    TypeORM.Column({ name: "createdAt", type: "timestamp" })
], Comment.prototype, "createdAt", void 0);
__decorate([
    TypeORM.Column({ name: "like", type: "int" })
], Comment.prototype, "like", void 0);
__decorate([
    TypeORM.Column({ name: "unlike", type: "int" })
], Comment.prototype, "unlike", void 0);
__decorate([
    TypeORM.Column({ name: "reported", type: "int" })
], Comment.prototype, "reported", void 0);
__decorate([
    TypeORM.Column({ name: "password", type: "text" })
], Comment.prototype, "password", void 0);
__decorate([
    TypeORM.Column({ name: "ip", type: "text" })
], Comment.prototype, "ip", void 0);
Comment = __decorate([
    TypeORM.Entity({ name: "comment" })
], Comment);
exports.default = Comment;


/***/ }),

/***/ 926:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const TypeORM = __importStar(__webpack_require__(794));
let School = class School {
    sessionize() {
        return {
            id: this.id,
            ATPT_OFCDC_SC_CODE: this.ATPT_OFCDC_SC_CODE,
            ATPT_OFCDC_SC_NM: this.ATPT_OFCDC_SC_NM,
            SD_SCHUL_CODE: this.SD_SCHUL_CODE,
            SCHUL_NM: this.SCHUL_NM,
            ENG_SCHUL_NM: this.ENG_SCHUL_NM,
            SCHUL_KND_SC_NM: this.SCHUL_KND_SC_NM,
            LCTN_SC_NM: this.LCTN_SC_NM,
            JU_ORG_NM: this.JU_ORG_NM,
            FOND_SC_NM: this.FOND_SC_NM,
            ORG_RDNZC: this.ORG_RDNZC,
            ORG_RDNMA: this.ORG_RDNMA,
            ORG_RDNDA: this.ORG_RDNDA,
            ORG_TELNO: this.ORG_TELNO,
            HMPG_ADRES: this.HMPG_ADRES,
            COEDU_SC_NM: this.COEDU_SC_NM,
            HS_SC_NM: this.HS_SC_NM,
            INDST_SPECL_CCCCL_EXST_YN: this.INDST_SPECL_CCCCL_EXST_YN,
            HS_GNRL_BUSNS_SC_NM: this.HS_GNRL_BUSNS_SC_NM,
            SPCLY_PURPS_HS_ORD_NM: this.SPCLY_PURPS_HS_ORD_NM,
            ENE_BFE_SEHF_SC_NM: this.ENE_BFE_SEHF_SC_NM,
            DGHT_SC_NM: this.DGHT_SC_NM,
            FOND_YMD: this.FOND_YMD,
            FOAS_MEMRD: this.FOAS_MEMRD,
            LOAD_DTM: this.LOAD_DTM,
        };
    }
};
__decorate([
    TypeORM.PrimaryColumn({ name: "id", type: "int" })
], School.prototype, "id", void 0);
__decorate([
    TypeORM.Column({ name: "ATPT_OFCDC_SC_CODE", type: "tinytext" })
], School.prototype, "ATPT_OFCDC_SC_CODE", void 0);
__decorate([
    TypeORM.Column({ name: "ATPT_OFCDC_SC_NM", type: "tinytext" })
], School.prototype, "ATPT_OFCDC_SC_NM", void 0);
__decorate([
    TypeORM.Column({ name: "SD_SCHUL_CODE", type: "tinytext" })
], School.prototype, "SD_SCHUL_CODE", void 0);
__decorate([
    TypeORM.Column({ name: "SCHUL_NM", type: "tinytext" })
], School.prototype, "SCHUL_NM", void 0);
__decorate([
    TypeORM.Column({ name: "ENG_SCHUL_NM", type: "tinytext" })
], School.prototype, "ENG_SCHUL_NM", void 0);
__decorate([
    TypeORM.Column({ name: "SCHUL_KND_SC_NM", type: "tinytext" })
], School.prototype, "SCHUL_KND_SC_NM", void 0);
__decorate([
    TypeORM.Column({ name: "LCTN_SC_NM", type: "tinytext" })
], School.prototype, "LCTN_SC_NM", void 0);
__decorate([
    TypeORM.Column({ name: "JU_ORG_NM", type: "tinytext" })
], School.prototype, "JU_ORG_NM", void 0);
__decorate([
    TypeORM.Column({ name: "FOND_SC_NM", type: "tinytext" })
], School.prototype, "FOND_SC_NM", void 0);
__decorate([
    TypeORM.Column({ name: "ORG_RDNZC", type: "tinytext" })
], School.prototype, "ORG_RDNZC", void 0);
__decorate([
    TypeORM.Column({ name: "ORG_RDNMA", type: "tinytext" })
], School.prototype, "ORG_RDNMA", void 0);
__decorate([
    TypeORM.Column({ name: "ORG_RDNDA", type: "tinytext" })
], School.prototype, "ORG_RDNDA", void 0);
__decorate([
    TypeORM.Column({ name: "ORG_TELNO", type: "tinytext" })
], School.prototype, "ORG_TELNO", void 0);
__decorate([
    TypeORM.Column({ name: "HMPG_ADRES", type: "tinytext" })
], School.prototype, "HMPG_ADRES", void 0);
__decorate([
    TypeORM.Column({ name: "COEDU_SC_NM", type: "tinytext" })
], School.prototype, "COEDU_SC_NM", void 0);
__decorate([
    TypeORM.Column({ name: "HS_SC_NM", type: "tinytext" })
], School.prototype, "HS_SC_NM", void 0);
__decorate([
    TypeORM.Column({ name: "INDST_SPECL_CCCCL_EXST_YN", type: "tinytext" })
], School.prototype, "INDST_SPECL_CCCCL_EXST_YN", void 0);
__decorate([
    TypeORM.Column({ name: "HS_GNRL_BUSNS_SC_NM", type: "tinytext" })
], School.prototype, "HS_GNRL_BUSNS_SC_NM", void 0);
__decorate([
    TypeORM.Column({ name: "SPCLY_PURPS_HS_ORD_NM", type: "tinytext" })
], School.prototype, "SPCLY_PURPS_HS_ORD_NM", void 0);
__decorate([
    TypeORM.Column({ name: "ENE_BFE_SEHF_SC_NM", type: "tinytext" })
], School.prototype, "ENE_BFE_SEHF_SC_NM", void 0);
__decorate([
    TypeORM.Column({ name: "DGHT_SC_NM", type: "tinytext" })
], School.prototype, "DGHT_SC_NM", void 0);
__decorate([
    TypeORM.Column({ name: "FOND_YMD", type: "int" })
], School.prototype, "FOND_YMD", void 0);
__decorate([
    TypeORM.Column({ name: "FOAS_MEMRD", type: "int" })
], School.prototype, "FOAS_MEMRD", void 0);
__decorate([
    TypeORM.Column({ name: "LOAD_DTM", type: "int" })
], School.prototype, "LOAD_DTM", void 0);
School = __decorate([
    TypeORM.Entity({ name: "school" })
], School);
exports.default = School;


/***/ }),

/***/ 946:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CLOTHES = void 0;
function getBoolean(name) {
    return process.argv.includes(name);
}
exports.CLOTHES = {
    development: getBoolean("--dev"),
    queryLogging: getBoolean("--query")
};


/***/ }),

/***/ 148:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const TypeORM = __importStar(__webpack_require__(794));
const System_1 = __webpack_require__(555);
const Clothes_1 = __webpack_require__(946);
const Utility_1 = __webpack_require__(376);
//@jjwak-auto DB_IMPORT {
const School_1 = __importDefault(__webpack_require__(926));
const Comment_1 = __importDefault(__webpack_require__(162));
//@jjwak-auto DB_IMPORT }
const Logger_1 = __webpack_require__(604);
class DB {
    static get Manager() {
        return DB.agent.manager;
    }
    static initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const entities = [
                //@jjwak-auto DB_ENTITY {
                School_1.default,
                Comment_1.default,
            ];
            DB.agent = yield TypeORM.createConnection(Object.assign(Object.assign({ type: "mysql", supportBigNumbers: true, bigNumberStrings: false }, System_1.SETTINGS["database"]), { logging: Clothes_1.CLOTHES.queryLogging ? ["query"] : [], entities }));
            Logger_1.Logger.success("DB").put(System_1.SETTINGS["database"].host).out();
        });
    }
    static paginate(length, page) {
        return {
            skip: length * page,
            take: length,
        };
    }
    static getTable(Target) {
        return DB.Manager.connection.getMetadata(Target);
    }
    static getColumnName(table, column) {
        return table.findColumnWithPropertyName(column).databaseName;
    }
    static callProcedure(manager, name, ...args) {
        return manager.query(`CALL dds_p_${name}(${Utility_1.Iterator(args.length, "?").join(",")})`, args);
    }
    static coalesce(manager, Target, targetId, column, data) {
        if (manager === null)
            manager = DB.Manager;
        const table = DB.getTable(Target);
        const dataText = JSON.stringify(data);
        return manager.query(`UPDATE ${table.tableName}
      SET ${DB.getColumnName(table, column)} = COALESCE(JSON_MERGE_PATCH(${DB.getColumnName(table, column)}, ?), ?)
      WHERE ${DB.getColumnName(table, "id")} = ?
    `, [dataText, dataText, targetId]);
    }
    static count(Model, conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            // NOTE .count() 함수는 내부적으로 DISTINCT PK를 쓰고 있어 느리다.
            const qb = DB.Manager.createQueryBuilder(Model, "model").select("COUNT(*) AS count");
            if (conditions) {
                qb.where(conditions);
            }
            return (yield qb.getRawOne())["count"];
        });
    }
}
exports.default = DB;


/***/ }),

/***/ 377:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(127));
const cookie_parser_1 = __importDefault(__webpack_require__(358));
const System_1 = __webpack_require__(555);
const ReactNest = __importStar(__webpack_require__(205));
const Language_1 = __webpack_require__(908);
const Middleware_1 = __webpack_require__(212);
const Logger_1 = __webpack_require__(604);
function default_1(App) {
    // JJWAK 기본
    App.engine("js", ReactNest.Engine);
    App.set("views", System_1.resolve("dist", "pages"));
    App.set("view engine", "js");
    App.use("/libs", express_1.default.static(System_1.resolve("dist", "libs")), Middleware_1.send404);
    App.use("/media", express_1.default.static(System_1.resolve("dist", "media")), Middleware_1.send404);
    App.use("/pages", express_1.default.static(System_1.resolve("dist", "pages")), Middleware_1.send404);
    App.use("/strings", express_1.default.static(System_1.resolve("dist", "strings")), Middleware_1.send404);
    App.use("/constants.js", (req, res) => res.sendFile(System_1.resolve("dist", "constants.js")));
    App.use("/favicon.ico", (req, res) => res.sendFile(System_1.resolve("dist", "favicon.ico")));
    App.use((req, res, next) => {
        req.address = req.ip || req.ips.join();
        if (req.xhr) {
            Logger_1.Logger.log()
                .putS(Logger_1.LogStyle.METHOD, req.method)
                .putS(Logger_1.LogStyle.XHR, " XHR")
                .next("URL")
                .put(req.originalUrl)
                .next("Address")
                .put(req.address)
                .out();
        }
        else {
            Logger_1.Logger.log()
                .putS(Logger_1.LogStyle.METHOD, req.method)
                .next("URL")
                .put(req.originalUrl)
                .next("Address")
                .put(req.address)
                .out();
        }
        next();
    });
    App.use(express_1.default.json({ limit: "1MB" }));
    App.use(cookie_parser_1.default(System_1.SETTINGS.cookie.secret));
    App.use((req, res, next) => {
        req.agentInfo = `${req.address} (${req.header("User-Agent")})`;
        req.locale = Language_1.getLocale(req);
        res.metadata = {};
        res.removeCookie = responseRemoveCookie;
        res.setCookie = responseSetCookie;
        res.header({
            "X-Frame-Options": "deny",
            "X-XSS-Protection": "1;mode=block",
        });
        next(null);
    });
}
exports.default = default_1;
function responseRemoveCookie(name, path = "/") {
    return this.clearCookie(name, {
        path: path,
    });
}
function responseSetCookie(name, value, path = "/") {
    return this.cookie(name, value, {
        path: path,
        maxAge: System_1.SETTINGS.cookie.age,
        secure: true,
    });
}


/***/ }),

/***/ 908:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadLanguages = exports.getLocale = exports.getLanguageTable = exports.L = void 0;
const accept_language_parser_1 = __importDefault(__webpack_require__(636));
const System_1 = __webpack_require__(555);
const Utility_1 = __webpack_require__(376);
const Logger_1 = __webpack_require__(604);
const LANGUAGE_SUPPORT = Object.keys(System_1.SETTINGS['language-support']);
let LANGUAGES;
/**
 * 문자열표에서 문자열을 얻어 반환한다.
 *
 * @param key 식별자.
 * @param args 추가 정보.
 */
function L(key, ...args) {
    return args.length
        ? Utility_1.resolveLanguageArguments(LANGUAGES[key], ...args)
        : LANGUAGES[key];
}
exports.L = L;
/**
 * 언어 파일에서 주어진 식별자와 대응되는 문자열표를 반환한다.
 *
 * @param locale 언어 식별자.
 * @param page 페이지 식별자.
 */
function getLanguageTable(locale, page) {
    return JSON.parse(LANGUAGES[`${locale}/${page}`]);
}
exports.getLanguageTable = getLanguageTable;
/**
 * 주어진 요청으로부터 사용 가능한 언어를 반환한다.
 *
 * @param req Express 요청 객체.
 */
function getLocale(req) {
    let R = req.cookies['dds.locale'];
    if (!LANGUAGES || !System_1.SETTINGS['language-support'][R]) {
        R = accept_language_parser_1.default.pick(LANGUAGE_SUPPORT, String(req.headers['accept-language'])) || LANGUAGE_SUPPORT[0];
    }
    return R;
}
exports.getLocale = getLocale;
/**
 * 프로젝트 데이터 폴더 내의 언어 파일을 새로 읽어 문자열표로 가공 후 메모리에 올린다.
 *
 * 메모리에 올려진 문자열표는 페이지 렌더 시 내용으로 포함된다.
 */
function loadLanguages() {
    const prototables = Utility_1.reduceToTable(LANGUAGE_SUPPORT, v => JSON.parse(System_1.getProjectData(`lang/${v}.json`).toString()));
    const R = {};
    for (const locale in prototables) {
        const prototable = prototables[locale];
        for (const page in prototable) {
            if (page[0] === "$" || page[0] === "@")
                continue;
            const key = `${locale}/${page}`;
            const pageTable = prototable[page] || {};
            const table = Object.assign(Object.assign(Object.assign({}, (prototable['$global'] || {})), (pageTable['$include'] || []).reduce(resolveDependency, {})), pageTable);
            delete table['$include'];
            R[key] = JSON.stringify(table);
            R[`${key}#title`] = table['title'];
        }
        function resolveDependency(pv, v) {
            const pageTable = prototable[`@${v}`] || {};
            return Object.assign(pv, Object.assign(Object.assign({}, (pageTable['$include'] || []).reduce(resolveDependency, {})), pageTable));
        }
    }
    LANGUAGES = R;
    Logger_1.Logger.info("Languages has been updated.").out();
}
exports.loadLanguages = loadLanguages;


/***/ }),

/***/ 604:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogStyle = exports.Logger = exports.LogLevel = exports.LogColor = void 0;
const DateUnit_1 = __webpack_require__(816);
const Utility_1 = __webpack_require__(376);
let FS;
let System;
/**
 * 로그의 색 열거형.
 *
 * ANSI 탈출 구문 `\x1b[?m`의 `?`에 들어갈 값과 같도록 설정되어 있다.
 */
var LogColor;
(function (LogColor) {
    LogColor[LogColor["NORMAL"] = 0] = "NORMAL";
    LogColor[LogColor["BRIGHT"] = 1] = "BRIGHT";
    LogColor[LogColor["DIM"] = 2] = "DIM";
    LogColor[LogColor["UNDERSCORE"] = 4] = "UNDERSCORE";
    LogColor[LogColor["F_BLACK"] = 30] = "F_BLACK";
    LogColor[LogColor["F_RED"] = 31] = "F_RED";
    LogColor[LogColor["F_GREEN"] = 32] = "F_GREEN";
    LogColor[LogColor["F_YELLOW"] = 33] = "F_YELLOW";
    LogColor[LogColor["F_BLUE"] = 34] = "F_BLUE";
    LogColor[LogColor["F_MAGENTA"] = 35] = "F_MAGENTA";
    LogColor[LogColor["F_CYAN"] = 36] = "F_CYAN";
    LogColor[LogColor["F_WHITE"] = 37] = "F_WHITE";
    LogColor[LogColor["B_BLACK"] = 40] = "B_BLACK";
    LogColor[LogColor["B_RED"] = 41] = "B_RED";
    LogColor[LogColor["B_GREEN"] = 42] = "B_GREEN";
    LogColor[LogColor["B_YELLOW"] = 43] = "B_YELLOW";
    LogColor[LogColor["B_BLUE"] = 44] = "B_BLUE";
    LogColor[LogColor["B_MAGENTA"] = 45] = "B_MAGENTA";
    LogColor[LogColor["B_CYAN"] = 46] = "B_CYAN";
    LogColor[LogColor["B_WHITE"] = 47] = "B_WHITE";
})(LogColor = exports.LogColor || (exports.LogColor = {}));
/**
 * 로그의 수준 열거형.
 *
 * 수준에 따라 표시되는 아이콘이 달라지며, `ERROR` 수준이라고 해도 출력 후 자동으로 종료되지 않는다.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["NORMAL"] = 0] = "NORMAL";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["SUCCESS"] = 2] = "SUCCESS";
    LogLevel[LogLevel["WARNING"] = 3] = "WARNING";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
/**
 * 로그를 출력해 주는 유틸리티 클래스.
 *
 * 로그 수준에 따라 `Logger.log()`, `Logger.info()`, `Logger.success()`, `Logger.warning()`, `Logger.error()` 메소드를
 * 호출할 수 있으며, 그 반환값으로 `Logger` 인스턴스를 얻을 수 있다.
 * 인스턴스의 메소드를 이용해 로그 내용을 입력한 후 `out()` 메소드를 호출하는 것으로 최종적으로 출력이 된다.
 *
 * 클라이언트 측과 서버 측 모두 로그 출력에 쓸 수 있으며,
 * 서버가 로그를 출력하려는 경우 `Logger.initialize()` 메소드로 초기화함으로써
 * 로그 내용을 파일로 보관할 수 있다.
 */
class Logger {
    constructor(type = LogLevel.NORMAL, title = "") {
        const caller = Logger.getCaller();
        let fileLimit = Logger.CALLER_LENGTH - String(caller === null || caller === void 0 ? void 0 : caller.line).length;
        this.type = type;
        this.list = [];
        this.timestamp = `[${Logger.getLocalISODate()}]`;
        this.chunk = [];
        this.putS(LogStyle.TIMESTAMP, this.timestamp);
        if (Logger.workerProcessId) {
            fileLimit -= String(Logger.workerProcessId).length + 1;
            this.putS(LogStyle.CALLER_PID, "#", Logger.workerProcessId);
        }
        this.putS(LogStyle.CALLER_FILE, " ", Utility_1.cut((caller === null || caller === void 0 ? void 0 : caller.file) || "", fileLimit).padStart(fileLimit, " "));
        this.putS(LogStyle.CALLER_LINE, ":", caller === null || caller === void 0 ? void 0 : caller.line, " ");
        this.putS(LogStyle.CALLER, Utility_1.cut((caller === null || caller === void 0 ? void 0 : caller.function) || "", Logger.CALLER_LENGTH).padEnd(Logger.CALLER_LENGTH, " "), " ");
        switch (type) {
            case LogLevel.NORMAL:
                this.putS(LogStyle.TYPE_NORMAL, "(:)");
                break;
            case LogLevel.INFO:
                this.putS(LogStyle.TYPE_INFO, "(i)");
                break;
            case LogLevel.SUCCESS:
                this.putS(LogStyle.TYPE_SUCCESS, "(✓)");
                break;
            case LogLevel.WARNING:
                this.putS(LogStyle.TYPE_WARNING, "(△)");
                break;
            case LogLevel.ERROR:
                this.putS(LogStyle.TYPE_ERROR, "(×)");
                break;
        }
        if (title) {
            this.putS(LogStyle.TITLE, " [", title, "]");
        }
        this.put(" ");
    }
    /**
     * 로그 시스템을 초기화하고 파일에 쓸 준비를 한다.
     *
     * 설정 파일에서 정한 값에 따라 로그 파일 이름과 파일 교체 주기가 결정된다.
     * 설정 파일의 교체 주기가 0으로 설정된 경우 로그 파일을 생성하지 않는다.
     *
     * @param subject 주체의 식별자. 로그 디렉토리의 하위 디렉토리 이름으로 쓰인다.
     */
    static initialize(subject) {
        return __awaiter(this, void 0, void 0, function* () {
            FS = yield Promise.resolve().then(() => __importStar(__webpack_require__(747)));
            System = yield Promise.resolve().then(() => __importStar(__webpack_require__(555)));
            if ((yield Promise.resolve().then(() => __importStar(__webpack_require__(531)))).isWorker) {
                Logger.workerProcessId = (yield Promise.resolve().then(() => __importStar(__webpack_require__(765)))).pid;
            }
            Logger.subject = subject;
            if (!FS.existsSync(Logger.directoryPath)) {
                FS.mkdirSync(Logger.directoryPath, { recursive: true });
            }
            if (System.SETTINGS.log.interval)
                System.schedule(Logger.shiftFile, System.SETTINGS.log.interval, {
                    callAtStart: true,
                    punctual: true
                });
            else
                Logger.warning().put("Log files won't be generated.").out();
        });
    }
    /**
     * 오류 로그를 출력할 수 있는 인스턴스를 만들어 반환한다.
     *
     * @param title 제목.
     */
    static error(title) {
        return new Logger(LogLevel.ERROR, title);
    }
    /**
     * 안내 로그를 출력할 수 있는 인스턴스를 만들어 반환한다.
     *
     * @param title 제목.
     */
    static info(title) {
        return new Logger(LogLevel.INFO, title);
    }
    /**
     * 일반 로그를 출력할 수 있는 인스턴스를 만들어 반환한다.
     *
     * @param title 제목.
     */
    static log(title) {
        return new Logger(LogLevel.NORMAL, title);
    }
    /**
     * 성공 로그를 출력할 수 있는 인스턴스를 만들어 반환한다.
     *
     * @param title 제목.
     */
    static success(title) {
        return new Logger(LogLevel.SUCCESS, title);
    }
    /**
     * 경고 로그를 출력할 수 있는 인스턴스를 만들어 반환한다.
     *
     * @param title 제목.
     */
    static warning(title) {
        return new Logger(LogLevel.WARNING, title);
    }
    static escape(style = LogStyle.NORMAL) {
        return style.reduce((pv, v) => pv + `\x1b[${v}m`, "");
    }
    static getCaller() {
        const error = new Error().stack.split('\n');
        for (let level = 4; level < error.length; level++) {
            let chunk;
            if (chunk = error[level].match(Logger.REGEXP_CALLER))
                return {
                    file: chunk[2],
                    line: Number(chunk[3]),
                    function: chunk[1]
                };
            else if (chunk = error[level].match(Logger.REGEXP_CALLER_ANONYMOUS))
                return {
                    file: chunk[1],
                    line: Number(chunk[2]),
                    function: `:${chunk[3]} (Unknown)`
                };
        }
        return null;
    }
    static getLocalFileNameDate() {
        const now = new Date();
        return [
            String(now.getFullYear() % 100).padStart(2, "0"),
            String(now.getMonth() + 1).padStart(2, "0"),
            String(now.getDate()).padStart(2, "0"),
            "-",
            String(now.getHours()).padStart(2, "0"),
            String(now.getMinutes()).padStart(2, "0"),
            String(now.getSeconds()).padStart(2, "0")
        ].join('');
    }
    static getLocalISODate() {
        const now = new Date();
        const offset = -Math.round(Utility_1.TIMEZONE_OFFSET / DateUnit_1.DateUnit.HOUR) || "";
        return new Date(now.getTime() - Utility_1.TIMEZONE_OFFSET).toISOString() + (offset && Utility_1.toSignedString(offset));
    }
    static shiftFile() {
        const fileName = Logger.getLocalFileNameDate();
        const path = `${Logger.directoryPath}/${fileName}.log`;
        if (Logger.recentFileInfo) {
            Logger.recentFileInfo.stream.end();
        }
        Logger.recentFileInfo = {
            stream: FS.createWriteStream(path),
            path,
            createdAt: Date.now()
        };
        Logger.success(Logger.subject).next("Path").put(fileName).out();
    }
    static get directoryPath() {
        return `${__dirname}/${System.SETTINGS.log.directory}/${Logger.subject}`;
    }
    getText() {
        const maxDigit = this.list.reduce((pv, v) => { var _a; return pv < ((_a = v[0]) === null || _a === void 0 ? void 0 : _a.length) ? v[0].length : pv; }, 1);
        const prefix = " ".repeat(this.timestamp.length + 2 * Logger.CALLER_LENGTH + 5);
        const last = this.list.length - 2;
        return [
            this.list[0][1],
            ...this.list.slice(1).map(([head, body], i) => {
                return `${prefix}${Logger.escape(LogStyle.LINE)}${i === last ? "└" : "├"}─ ${(head !== null && head !== void 0 ? head : String(i)).padEnd(maxDigit, " ")}${Logger.escape()}: ${body}`;
            })
        ].join('\n');
    }
    /**
     * 이후 내용을 다음 줄에 기록하도록 하고 사슬 반환한다.
     *
     * @param head 다음 줄의 제목.
     */
    next(head) {
        this.list.push([this.head || "", this.chunk.join('')]);
        this.head = head;
        this.chunk = [];
        return this;
    }
    /**
     * 기록된 내용을 출력한다.
     *
     * 클라이언트나 파일에 출력하는 경우 ANSI 탈출 구문을 지원하지 않으므로 내용을 일부 수정해 출력한다.
     */
    out() {
        if (this.chunk.length) {
            this.next();
        }
        let text = this.getText();
        let args = [];
        if (Utility_1.FRONT) {
            text = text.replace(Logger.REGEXP_ANSI_ESCAPE, (v, p1) => {
                args.push(Logger.WEBKIT_STYLE_TABLE[p1]);
                return "%c";
            });
        }
        else if (Logger.recentFileInfo) {
            Logger.recentFileInfo.stream.write(`${text.replace(Logger.REGEXP_ANSI_ESCAPE, "")}\n`);
        }
        switch (this.type) {
            case LogLevel.NORMAL:
                console.log(text, ...args);
                break;
            case LogLevel.INFO:
            case LogLevel.SUCCESS:
                console.info(text, ...args);
                break;
            case LogLevel.WARNING:
                console.warn(text, ...args);
                break;
            case LogLevel.ERROR:
                console.error(text, ...args);
                break;
        }
    }
    /**
     * 현재 줄에 내용을 추가하고 사슬 반환한다.
     *
     * 여러 인자에 걸쳐 내용이 들어오는 경우 공백 없이 붙여서 출력된다.
     *
     * @param args 추가할 내용.
     */
    put(...args) {
        this.chunk.push(...args);
        return this;
    }
    /**
     * 현재 줄에 주어진 색 조합을 따르는 내용을 추가하고 사슬 반환한다.
     *
     * 여러 인자에 걸쳐 내용이 들어오는 경우 공백 없이 붙여서 출력된다.
     * ANSI 탈출 구문을 지원하지 않는 매체에 출력하는 경우 색 조합이 무시될 수 있다.
     *
     * @param value 색 조합.
     * @param args 추가할 내용.
     */
    putS(value, ...args) {
        this.chunk.push(Logger.escape(value), ...args, Logger.escape());
        return this;
    }
}
exports.Logger = Logger;
Logger.REGEXP_ANSI_ESCAPE = /\x1b\[(\d+)m/g;
// 캡처되는 그룹 { 함수명, 파일명, 줄 번호 }
Logger.REGEXP_CALLER = /^\s*at (.+) \(.+?([^\\/]+):(\d+):\d+\)$/;
// 캡처되는 그룹 { 파일명, 줄 번호, 칸 번호 }
Logger.REGEXP_CALLER_ANONYMOUS = /^\s*at .+?([^\\/]+):(\d+):(\d+)$/;
Logger.CALLER_LENGTH = 20;
Logger.WEBKIT_STYLE_TABLE = {
    [LogColor.NORMAL]: "",
    [LogColor.BRIGHT]: "font-weight: bold",
    [LogColor.DIM]: "font-style: italic",
    [LogColor.UNDERSCORE]: "text-decoration: underline",
    [LogColor.F_BLACK]: "color: black",
    [LogColor.F_RED]: "color: red",
    [LogColor.F_GREEN]: "color: green",
    [LogColor.F_YELLOW]: "color: yellow",
    [LogColor.F_BLUE]: "color: blue",
    [LogColor.F_MAGENTA]: "color: magenta",
    [LogColor.F_CYAN]: "color: deepskyblue",
    [LogColor.F_WHITE]: "color: white",
    [LogColor.B_BLACK]: "background: black",
    [LogColor.B_RED]: "background: red",
    [LogColor.B_GREEN]: "background: green",
    [LogColor.B_YELLOW]: "background: yellow",
    [LogColor.B_BLUE]: "background: blue",
    [LogColor.B_MAGENTA]: "background: magenta",
    [LogColor.B_CYAN]: "background: cyan",
    [LogColor.B_WHITE]: "background: white"
};
/**
 * 로그의 색 조합을 정의하는 유틸리티 클래스.
 */
class LogStyle {
}
exports.LogStyle = LogStyle;
LogStyle.NORMAL = [LogColor.NORMAL];
LogStyle.CALLER = [LogColor.F_CYAN];
LogStyle.CALLER_PID = [LogColor.F_MAGENTA];
LogStyle.CALLER_FILE = [LogColor.BRIGHT, LogColor.F_CYAN];
LogStyle.CALLER_LINE = [LogColor.NORMAL];
LogStyle.LINE = [LogColor.BRIGHT];
LogStyle.METHOD = [LogColor.F_YELLOW];
LogStyle.TIMESTAMP = [LogColor.F_BLUE];
LogStyle.TARGET = [LogColor.BRIGHT, LogColor.F_BLUE];
LogStyle.TITLE = [LogColor.BRIGHT];
LogStyle.TYPE_ERROR = [LogColor.BRIGHT, LogColor.B_RED];
LogStyle.TYPE_INFO = [LogColor.B_BLUE];
LogStyle.TYPE_NORMAL = [LogColor.BRIGHT];
LogStyle.TYPE_SUCCESS = [LogColor.F_BLACK, LogColor.B_GREEN];
LogStyle.TYPE_WARNING = [LogColor.F_BLACK, LogColor.B_YELLOW];
LogStyle.XHR = [LogColor.F_GREEN];


/***/ }),

/***/ 212:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.send404 = exports.raw = void 0;
const express_1 = __importDefault(__webpack_require__(127));
exports.raw = express_1.default.raw({ limit: "100MB" });
const send404 = (req, res) => {
    res.sendStatus(404);
};
exports.send404 = send404;


/***/ }),

/***/ 205:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Engine = exports.PageBuilder = void 0;
const react_1 = __importDefault(__webpack_require__(297));
const server_1 = __importDefault(__webpack_require__(250));
const Language_1 = __webpack_require__(352);
const ReactBootstrap_1 = __webpack_require__(153);
const Language_2 = __webpack_require__(908);
const System_1 = __webpack_require__(555);
const HTML_TEMPLATE = System_1.getProjectData("template.html").toString();
const READER_SSR = createReader("SSR");
const READER_NEST = /("?)\/\*\{(.+?)\}\*\/\1/g;
function createReader(key) {
    return new RegExp(`("?)/\\* %%${key}%% \\*/\\1`, "g");
}
/**
 * 주어진 페이지를 렌더하는 Express 끝점 클로저를 반환한다.
 *
 * @param page 페이지.
 * @param data 추가 정보.
 */
function PageBuilder(page, data) {
    return (req, res) => __awaiter(this, void 0, void 0, function* () {
        res.render(page, {
            locale: req.locale,
            page,
            path: req.originalUrl,
            data,
            metadata: res.metadata
        });
    });
}
exports.PageBuilder = PageBuilder;
/**
 * 주어진 파일에서 정의된 컴포넌트를 최상위 컴포넌트로 삼도록 한 HTML을 전달한다.
 *
 * HTML 내(JavaScript 포함)에서 `／*{...}*／` 구문은 이 함수 스코프 안에서 `eval(...)` 함수의 결과로 대체된다.
 *
 * @param path 뷰(React) 파일 경로.
 * @param $ Express 관련 추가 정보.
 * @param callback 콜백 함수.
 */
function Engine(path, $, callback) {
    var _a;
    const REACT_SUFFIX =  true
        ? "production.min"
        : 0;
    const KEY = `${$.locale}/${$.page}`;
    const SSR = $.ssr;
    let Index;
    $.title = Language_2.L(`${KEY}#title`, ...(((_a = $.metadata) === null || _a === void 0 ? void 0 : _a.titleArgs) || []));
    $.version = System_1.PACKAGE['version'];
    // NOTE Express 내부적으로 정의한 정보가 외부에 노출되지 않도록 삭제
    delete $['settings'];
    delete $['cache'];
    delete $['_locals'];
    const CLIENT_SETTINGS = {};
    if (SSR) {
        Language_1.setTable(Language_2.getLanguageTable($.locale, $.page));
        Index = __webpack_require__(122)(`./${$.page}/index.tsx`).default;
        Object.assign(Index['__CLIENT_SETTINGS'], System_1.SETTINGS.application, CLIENT_SETTINGS);
    }
    const HTML = HTML_TEMPLATE
        .replace(READER_SSR, SSR
        ? server_1.default.renderToString(react_1.default.createElement(ReactBootstrap_1.Root, $, react_1.default.createElement(__webpack_require__(122)(`./${$.page}/index.tsx`).default, $)))
        : "")
        .replace(READER_NEST, (v, p1, p2) => String(eval(p2)));
    // NOTE never used 오류 회피
    void REACT_SUFFIX;
    callback(null, HTML);
}
exports.Engine = Engine;


/***/ }),

/***/ 476:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const axios_1 = __importDefault(__webpack_require__(270));
const sha256_1 = __importDefault(__webpack_require__(961));
const System_1 = __webpack_require__(555);
const Language_1 = __webpack_require__(908);
const ReactNest_1 = __webpack_require__(205);
const Database_1 = __importDefault(__webpack_require__(148));
const School_1 = __importDefault(__webpack_require__(926));
const Comment_1 = __importDefault(__webpack_require__(162));
function default_1(App) {
    App.get("/", ReactNest_1.PageBuilder("Index"));
    App.get("/school/info", (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.query.schoolName)
            return res.sendStatus(400);
        const schoolRepository = Database_1.default.Manager.getRepository(School_1.default);
        const schoolData = (yield axios_1.default.get(`${System_1.SETTINGS["neis"].host}/schoolInfo`, {
            params: {
                KEY: System_1.SETTINGS["neis"].key,
                Type: "json",
                pIndex: 1,
                pSize: 9,
                SCHUL_NM: req.query.schoolName,
            },
        })).data.schoolInfo[1].row;
        if (schoolData.length >= 2) {
            for (let i in schoolData) {
                const school = (yield schoolRepository.findOne({
                    where: { SD_SCHUL_CODE: schoolData[i].SD_SCHUL_CODE },
                })) || new School_1.default();
                Object.assign(school, schoolData[i]);
                yield schoolRepository.save(school);
            }
            return res.send(schoolData);
        }
        else {
            const school = (yield schoolRepository.findOne({
                where: { SD_SCHUL_CODE: schoolData[0].SD_SCHUL_CODE },
            })) || new School_1.default();
            Object.assign(school, schoolData[0]);
            yield schoolRepository.save(school);
            return res.send([schoolData[0]]);
        }
    }));
    App.get("/school/comment", (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.query.id)
            return res.sendStatus(400);
        const commentRepository = Database_1.default.Manager.getRepository(Comment_1.default);
        const comments = yield commentRepository.find({
            where: { target: req.query.id },
        });
        return res.send(comments);
    }));
    App.get("/school/schedule", (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.query.ATPT_OFCDC_SC_CODE)
            return res.sendStatus(400);
        if (!req.query.SD_SCHUL_CODE)
            return res.sendStatus(400);
        const schedule = (yield axios_1.default.get(`${System_1.SETTINGS["neis"].host}/SchoolSchedule`, {
            params: {
                KEY: System_1.SETTINGS["neis"].key,
                Type: "json",
                pIndex: 1,
                pSize: 365,
                ATPT_OFCDC_SC_CODE: req.query.ATPT_OFCDC_SC_CODE,
                SD_SCHUL_CODE: req.query.SD_SCHUL_CODE,
                AA_FROM_YMD: req.query.AA_FROM_YMD,
                AA_TO_YMD: req.query.AA_TO_YMD,
            },
        })).data;
        return res.send(schedule.SchoolSchedule[1].row);
    }));
    App.get("/school/meal", (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.query.ATPT_OFCDC_SC_CODE)
            return res.sendStatus(400);
        if (!req.query.SD_SCHUL_CODE)
            return res.sendStatus(400);
        try {
            const schedule = (yield axios_1.default.get(`${System_1.SETTINGS["neis"].host}/mealServiceDietInfo`, {
                params: {
                    KEY: System_1.SETTINGS["neis"].key,
                    Type: "json",
                    ATPT_OFCDC_SC_CODE: req.query.ATPT_OFCDC_SC_CODE,
                    SD_SCHUL_CODE: req.query.SD_SCHUL_CODE,
                    MLSV_YMD: req.query.MLSV_YMD,
                },
            })).data.mealServiceDietInfo[1].row[0];
            return res.send(schedule);
        }
        catch (e) {
            return res.send({
                DDISH_NM: "급식 정보를 가져오지 못했습니다. 급식이 없는 날이거나 나이스 API 서버가 응답하지 않습니다.",
            });
        }
    }));
    App.post("/school/comment", (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.body.writer)
            return res.sendStatus(400);
        if (!req.body.password)
            return res.sendStatus(400);
        if (!req.body.target)
            return res.sendStatus(400);
        if (!req.body.content)
            return res.sendStatus(400);
        const commentRepository = Database_1.default.Manager.getRepository(Comment_1.default);
        const comment = new Comment_1.default();
        comment.writer = req.body.writer;
        comment.target = req.body.target;
        comment.content = req.body.content;
        comment.password = sha256_1.default.x2(req.body.password);
        comment.ip = req.ip;
        yield commentRepository.save(comment);
        return res.sendStatus(200);
    }));
    App.get("/admin/load-languages", (req, res) => {
        Language_1.loadLanguages();
        return res.sendStatus(200);
    });
    App.use((req, res) => res.sendStatus(404));
}
exports.default = default_1;


/***/ }),

/***/ 555:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeClientConstants = exports.schedule = exports.resolve = exports.loadEndpoints = exports.setProjectData = exports.getProjectData = exports.PACKAGE = exports.SETTINGS = exports.ENDPOINTS = exports.DEVELOPMENT = exports.PROJECT_ROOT = void 0;
const fs_1 = __importDefault(__webpack_require__(747));
const path_1 = __importDefault(__webpack_require__(622));
const Utility_1 = __webpack_require__(376);
/**
 * 프로젝트 루트 경로.
 */
exports.PROJECT_ROOT = path_1.default.resolve(__dirname, "..");
/**
 * 개발 플래그 설정 여부.
 */
exports.DEVELOPMENT = process.argv.includes("--dev");
/**
 * `data/endpoints.json` 파일 객체.
 */
exports.ENDPOINTS = {};
/**
 * `data/settings.json` 파일 객체.
 */
exports.SETTINGS = Object.assign({}, JSON.parse(getProjectData("settings.json").toString()), exports.DEVELOPMENT ? JSON.parse(getProjectData("settings.dev.json").toString()) : {});
/**
 * `package.json` 파일 객체.
 */
exports.PACKAGE = JSON.parse(getProjectData("../package.json").toString());
/**
 * 프로젝트 데이터 폴더의 데이터를 동기식으로 읽어 그 내용을 반환한다.
 *
 * @param path 프로젝트 데이터 폴더에서의 하위 경로.
 */
function getProjectData(path) {
    return fs_1.default.readFileSync(path_1.default.resolve(__dirname, `../data/${path}`));
}
exports.getProjectData = getProjectData;
/**
 * 프로젝트 데이터 폴더의 파일에 비동기식으로 내용을 쓴다.
 *
 * @param path 프로젝트 데이터 폴더에서의 하위 경로.
 * @param data 파일에 쓸 내용.
 */
function setProjectData(path, data) {
    return new Promise((res, rej) => {
        fs_1.default.writeFile(path_1.default.resolve(__dirname, `../data/${path}`), data, err => {
            if (err) {
                rej(err);
                return;
            }
            res();
        });
    });
}
exports.setProjectData = setProjectData;
/**
 * 프로젝트 데이터 폴더 내의 종점 파일을 새로 읽어 가공 후 메모리에 올린다.
 *
 * 메모리에 올려진 문자열표는 페이지 렌더 시 XHR 종점 목록으로 포함된다.
 */
function loadEndpoints() {
    const R = {};
    const endpoints = JSON.parse(getProjectData("endpoints.json").toString());
    const $items = endpoints['$items'];
    const $global = Utility_1.reduceToTable(endpoints['$global'], v => $items[v]);
    for (const k in endpoints) {
        if (k.startsWith("$")) {
            continue;
        }
        R[k] = Object.assign({}, $global, Utility_1.reduceToTable(endpoints[k], v => $items[v]));
    }
    Object.assign(exports.ENDPOINTS, R);
}
exports.loadEndpoints = loadEndpoints;
/**
 * 프로젝트 루트로부터 하위 경로를 구해 반환한다.
 *
 * @param path 하위 경로 배열.
 */
function resolve(...path) {
    return path_1.default.resolve(exports.PROJECT_ROOT, ...path);
}
exports.resolve = resolve;
/**
 * 주어진 함수가 주기적으로 호출되도록 한다.
 *
 * @param callback 매번 호출할 함수.
 * @param interval 호출 주기(㎳).
 * @param options 설정 객체.
 */
function schedule(callback, interval, options) {
    if (options === null || options === void 0 ? void 0 : options.callAtStart) {
        callback();
    }
    if (options === null || options === void 0 ? void 0 : options.punctual) {
        const now = Date.now() + Utility_1.TIMEZONE_OFFSET;
        const gap = (1 + Math.floor(now / interval)) * interval - now;
        global.setTimeout(() => {
            callback();
            global.setInterval(callback, interval);
        }, gap);
    }
    else {
        global.setInterval(callback, interval);
    }
}
exports.schedule = schedule;
/**
 * 외부에서 `/constants.js`로 접속할 수 있는 클라이언트 상수 파일을 만든다.
 *
 * 이 파일에는 `data/settings.json` 파일의 `application` 객체 일부가 들어가 있다.
 */
function writeClientConstants() {
    const data = {
        'language-support': exports.SETTINGS['language-support']
    };
    fs_1.default.writeFileSync(resolve("dist", "constants.js"), `window.__CLIENT_SETTINGS=${JSON.stringify(data)}`);
}
exports.writeClientConstants = writeClientConstants;


/***/ }),

/***/ 376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toSignedString = exports.resolveLanguageArguments = exports.reduceToTable = exports.pick = exports.Iterator = exports.isEmpty = exports.cut = exports.TIMEZONE_OFFSET = exports.REGEXP_LANGUAGE_ARGS = exports.FRONT = exports.CLIENT_SETTINGS = void 0;
const DateUnit_1 = __webpack_require__(816);
/**
 * 클라이언트 설정 객체.
 */
exports.CLIENT_SETTINGS = 'FRONT' in Object && eval("window.__CLIENT_SETTINGS");
/**
 * 프론트엔드 여부.
 */
exports.FRONT = Boolean(exports.CLIENT_SETTINGS);
/**
 * 유효한 단일 샤프 인자의 집합.
 */
exports.REGEXP_LANGUAGE_ARGS = /\{#(\d+?)\}/g;
/**
 * 시간대 오프셋 값(㎳).
 */
exports.TIMEZONE_OFFSET = new Date().getTimezoneOffset() * DateUnit_1.DateUnit.MINUTE;
/**
 * 제한 길이를 초과하는 내용이 생략된 문자열을 반환한다.
 *
 * @param text 대상 문자열.
 * @param limit 제한 길이.
 */
function cut(text, limit) {
    return text.length > limit
        ? text.slice(0, limit - 1) + "…"
        : text;
}
exports.cut = cut;
/**
 * 대상 객체가 비어 있는지 확인해 반환한다.
 *
 * @param object 대상 객체.
 * @param includeNullity `true`인 경우 값이 `null`이나 `undefined`인 경우도 비어 있는 것으로 본다.
 */
function isEmpty(object, includeNullity) {
    return !object || (includeNullity
        ? Object.keys(object).filter(k => object[k] !== null && object[k] !== undefined).length === 0
        : Object.keys(object).length === 0);
}
exports.isEmpty = isEmpty;
/**
 * 배열을 생성해 반환한다.
 *
 * @param length 배열의 길이.
 * @param fill 배열의 내용.
 */
function Iterator(length, fill) {
    return Array(length).fill(fill);
}
exports.Iterator = Iterator;
/**
 * 대상 객체의 엔트리 일부만 갖는 객체를 반환한다.
 *
 * @param object 대상 객체.
 * @param keys 선택할 키.
 */
function pick(object, ...keys) {
    return keys.reduce((pv, v) => {
        if (v in object) {
            pv[v] = object[v];
        }
        return pv;
    }, {});
}
exports.pick = pick;
/**
 * 배열을 주어진 함수에 따라 딕셔너리로 바꾸어 반환한다.
 *
 * @param target 대상 배열.
 * @param placer 값을 반환하는 함수.
 * @param keyPlacer 키를 반환하는 함수.
 */
function reduceToTable(target, placer, keyPlacer) {
    return target.reduce(keyPlacer
        ? (pv, v, i, my) => {
            pv[keyPlacer(v, i, my)] = placer(v, i, my);
            return pv;
        }
        : (pv, v, i, my) => {
            pv[String(v)] = placer(v, i, my);
            return pv;
        }, {});
}
exports.reduceToTable = reduceToTable;
/**
 * 문자열 내 단일 샤프 인자들을 추가 정보로 대체시켜 반환한다.
 *
 * @param text 입력 문자열.
 * @param args 추가 정보.
 */
function resolveLanguageArguments(text, ...args) {
    return text.replace(exports.REGEXP_LANGUAGE_ARGS, (_, v1) => args[v1]);
}
exports.resolveLanguageArguments = resolveLanguageArguments;
/**
 * 주어진 수가 0보다 크면 + 기호를 붙여 반환한다.
 *
 * @param value 대상.
 */
function toSignedString(value) {
    return (value > 0 ? "+" : "") + value;
}
exports.toSignedString = toSignedString;


/***/ }),

/***/ 816:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateUnit = void 0;
var DateUnit;
(function (DateUnit) {
    DateUnit[DateUnit["MILLISECOND"] = 1] = "MILLISECOND";
    DateUnit[DateUnit["SECOND"] = 1000] = "SECOND";
    DateUnit[DateUnit["MINUTE"] = 60000] = "MINUTE";
    DateUnit[DateUnit["HOUR"] = 3600000] = "HOUR";
    DateUnit[DateUnit["DAY"] = 86400000] = "DAY";
    DateUnit[DateUnit["WEEK"] = 604800000] = "WEEK";
    DateUnit[DateUnit["MONTH"] = 2629743840] = "MONTH";
    DateUnit[DateUnit["YEAR"] = 31556926080] = "YEAR";
})(DateUnit = exports.DateUnit || (exports.DateUnit = {}));


/***/ }),

/***/ 158:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(297));
const react_2 = __webpack_require__(426);
const About = ({ schoolData }) => {
    return (react_1.default.createElement(react_2.Stack, { spacing: "2", alignContent: "center", style: {
            display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
        } },
        react_1.default.createElement(react_2.Center, null,
            react_1.default.createElement(react_2.Heading, { fontSize: "3xl" }, "\uC815\uBCF4")),
        react_1.default.createElement(react_2.Stack, { spacing: "0.5" },
            react_1.default.createElement(react_2.Text, null,
                "\uC18C\uC18D \uAD50\uC721\uCCAD: ",
                schoolData.ATPT_OFCDC_SC_NM),
            react_1.default.createElement(react_2.Text, null,
                "\uD559\uAD50\uBA85: ",
                schoolData.SCHUL_NM,
                " (",
                schoolData.ENG_SCHUL_NM,
                ")"),
            react_1.default.createElement(react_2.Text, null,
                "\uBD84\uB958: ",
                schoolData.FOND_SC_NM,
                " ",
                schoolData.COEDU_SC_NM,
                " ",
                schoolData.SCHUL_KND_SC_NM),
            react_1.default.createElement(react_2.Text, null,
                "\uC18C\uC7AC\uC9C0: ",
                schoolData.ORG_RDNMA,
                " ",
                schoolData.ORG_RDNDA,
                " (",
                schoolData.ORG_RDNZC,
                ")"),
            react_1.default.createElement(react_2.Text, null,
                "\uC804\uD654\uBC88\uD638: ",
                schoolData.ORG_TELNO),
            react_1.default.createElement(react_2.Text, null,
                "\uD648\uD398\uC774\uC9C0:",
                " ",
                react_1.default.createElement("a", { onClick: () => {
                        location.href = schoolData.HMPG_ADRES.includes("http")
                            ? schoolData.HMPG_ADRES
                            : `http://${schoolData.HMPG_ADRES}`;
                    } }, schoolData.HMPG_ADRES)),
            react_1.default.createElement(react_2.Text, null,
                "SINCE ",
                schoolData.FOND_YMD))));
};
exports.default = About;


/***/ }),

/***/ 241:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertDialog = void 0;
const react_1 = __importDefault(__webpack_require__(297));
const react_2 = __webpack_require__(426);
const AlertDialog = ({ title, text, children }) => {
    const { isOpen, onOpen, onClose } = react_2.useDisclosure();
    const confirmRef = react_1.default.useRef(null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Button, { onClick: onOpen }, text),
        react_1.default.createElement(react_2.AlertDialog, { motionPreset: "slideInBottom", leastDestructiveRef: confirmRef, onClose: onClose, isOpen: isOpen, isCentered: true },
            react_1.default.createElement(react_2.AlertDialogOverlay, null),
            react_1.default.createElement(react_2.AlertDialogContent, null,
                react_1.default.createElement(react_2.AlertDialogHeader, null, title),
                react_1.default.createElement(react_2.AlertDialogCloseButton, null),
                react_1.default.createElement(react_2.AlertDialogBody, null, children),
                react_1.default.createElement(react_2.AlertDialogFooter, null,
                    react_1.default.createElement(react_2.Button, { ref: confirmRef, onClick: onClose }, "\uD655\uC778"))))));
};
exports.AlertDialog = AlertDialog;


/***/ }),

/***/ 944:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChangeThemeButton = void 0;
const react_1 = __importDefault(__webpack_require__(297));
const react_2 = __webpack_require__(426);
const ChangeThemeButton = () => {
    const { colorMode, toggleColorMode } = react_2.useColorMode();
    return (react_1.default.createElement(react_2.Button, { onClick: () => {
            toggleColorMode();
        } }, colorMode === "light" ? "🌞" : "🌙"));
};
exports.ChangeThemeButton = ChangeThemeButton;


/***/ }),

/***/ 758:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(297));
const axios_1 = __importDefault(__webpack_require__(270));
const react_2 = __webpack_require__(426);
const Comment = ({ schoolData }) => {
    const [commentList, setCommentList] = react_1.useState([
        react_1.default.createElement(react_2.Text, null, "\uD559\uAD50 \uD3C9\uAC00\uB97C \uBD88\uB7EC\uC624\uACE0 \uC788\uC2B5\uB2C8\uB2E4.."),
    ]);
    const [writerName, setWriterName] = react_1.useState("");
    const [writerPassword, setWriterPassword] = react_1.useState("");
    const [comment, setComment] = react_1.useState("");
    const fetchComments = react_1.useCallback(() => {
        const fetch = () => __awaiter(void 0, void 0, void 0, function* () {
            const arr = [];
            setCommentList([react_1.default.createElement(react_2.Text, null, "\uD559\uAD50 \uD3C9\uAC00\uB97C \uBD88\uB7EC\uC624\uACE0 \uC788\uC2B5\uB2C8\uB2E4..")]);
            axios_1.default.get(`/school/comment?id=${schoolData.SD_SCHUL_CODE}`).then(({ data }) => {
                if (!data.length) {
                    return setCommentList([
                        react_1.default.createElement(react_2.Text, null, schoolData.SD_SCHUL_CODE
                            ? "아직 이 학교에 대해 평가가 작성되지 않았습니다."
                            : "DB에 존재하지 않는 학교입니다."),
                    ]);
                }
                for (let i in data) {
                    if (data[i].status.deleted)
                        continue;
                    if (data[i].target !== schoolData.SD_SCHUL_CODE)
                        continue;
                    arr.push(react_1.default.createElement(react_2.Text, null,
                        "[",
                        new Date(data[i].createdAt).toLocaleString(),
                        "]",
                        " ",
                        data[i].writer,
                        ": ",
                        data[i].content));
                }
                setCommentList(arr);
            }, (e) => {
                console.error(e);
            });
        });
        fetch();
    }, [schoolData]);
    react_1.useEffect(() => {
        fetchComments();
    }, [fetchComments]);
    return (react_1.default.createElement(react_2.Stack, { spacing: "2", alignContent: "center", id: "commentBox", style: {
            display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
        } },
        react_1.default.createElement(react_2.Center, null,
            react_1.default.createElement(react_2.Heading, { fontSize: "3xl" }, "\uD3C9\uAC00")),
        react_1.default.createElement(react_2.Stack, { spacing: "0.5" }, commentList),
        react_1.default.createElement(react_2.Input, { placeholder: "\uC791\uC131\uC790", onChange: (e) => {
                setWriterName(e.target.value);
            }, value: writerName }),
        react_1.default.createElement(react_2.Input, { placeholder: "\uBE44\uBC00\uBC88\uD638", onChange: (e) => {
                setWriterPassword(e.target.value);
            }, value: writerPassword }),
        react_1.default.createElement(react_2.Textarea, { placeholder: "\uB0B4\uC6A9", onChange: (e) => {
                setComment(e.target.value);
            }, value: comment }),
        react_1.default.createElement(react_2.Button, { onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                if (!writerName)
                    return alert("작성자 닉네임을 입력해주세요.");
                if (!writerPassword)
                    return alert("댓글 관리를 위한 비밀번호를 입력해주세요.");
                if (!comment)
                    return alert("내용을 입력해주세요.");
                yield axios_1.default.post("/school/comment", {
                    writer: writerName,
                    target: schoolData.SD_SCHUL_CODE,
                    content: comment,
                    password: writerPassword,
                });
                fetchComments();
            }) }, "\uC791\uC131")));
};
exports.default = Comment;


/***/ }),

/***/ 876:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Icon = exports.IconType = void 0;
const react_1 = __importDefault(__webpack_require__(297));
// NOTE 백엔드에도 의존성이 있다.
const FA_REGULAR_TESTER = /^(.+)-o$/;
const FA_CYCLE_TYPES = {
    '!': "fa-pulse",
    '@': "fa-spin"
};
var IconType;
(function (IconType) {
    IconType[IconType["NORMAL"] = 0] = "NORMAL";
    IconType[IconType["STACK"] = 1] = "STACK";
    IconType[IconType["PURE"] = 2] = "PURE";
})(IconType = exports.IconType || (exports.IconType = {}));
const Icon = ({ className, name, type }) => {
    const classList = ["icon"];
    const style = {};
    let chunk;
    if (className) {
        classList.push(className);
    }
    switch (type) {
        default:
        case IconType.NORMAL: {
            const spinType = FA_CYCLE_TYPES[name[0]];
            classList.push("fa-fw");
            if (spinType) {
                classList.push(spinType);
                name = name.slice(1);
            }
            chunk = name.match(FA_REGULAR_TESTER);
            classList.push(...(chunk
                ? ["far", `fa-${chunk[1]}`]
                : ["fas", `fa-${name}`]));
            return react_1.default.createElement("i", { className: classList.join(' '), style: style });
        }
        case IconType.STACK:
            classList.push("fa-stack");
            return react_1.default.createElement("span", { className: "ik fa-stack" }, name.split(',').map((v, i) => react_1.default.createElement(exports.Icon, { key: i, className: "fa-stack-1x", name: v })));
        case IconType.PURE:
            classList.push("ip", `icon-${name}`);
            style.backgroundImage = `url("/media/images/icons/${name}.png")`;
            return react_1.default.createElement("i", { className: classList.join(' '), style: style });
    }
};
exports.Icon = Icon;


/***/ }),

/***/ 247:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(297));
const axios_1 = __importDefault(__webpack_require__(270));
const react_2 = __webpack_require__(426);
const html_react_parser_1 = __importDefault(__webpack_require__(51));
const AlertDialog_1 = __webpack_require__(241);
const ReactHTMLParser = (html, options) => {
    if (html)
        return html_react_parser_1.default(html, options);
    else
        return "";
};
const parseDate = (date) => {
    if (typeof date == "string")
        return date;
    return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
};
const Meal = ({ schoolData }) => {
    const [meal, setMeal] = react_1.useState({
        DDISH_NM: "",
        NTR_INFO: "",
        ORPLC_INFO: "",
        CAL_INFO: "",
    });
    const [date, setDate] = react_1.useState(new Date());
    const fetchMeal = react_1.useCallback(() => {
        const fetch = () => __awaiter(void 0, void 0, void 0, function* () {
            setMeal({ DDISH_NM: "", NTR_INFO: "", ORPLC_INFO: "", CAL_INFO: "" });
            yield axios_1.default.get("/school/meal", {
                params: {
                    ATPT_OFCDC_SC_CODE: schoolData.ATPT_OFCDC_SC_CODE,
                    SD_SCHUL_CODE: schoolData.SD_SCHUL_CODE,
                    MLSV_YMD: parseDate(date),
                },
            }).then(({ data }) => {
                setMeal(data);
            }, (e) => {
                console.error(e);
            });
        });
        fetch();
    }, [date, schoolData]);
    react_1.useEffect(() => {
        fetchMeal();
    }, [fetchMeal]);
    return (react_1.default.createElement(react_2.Stack, { spacing: "1", alignContent: "center", id: "mealBox", style: {
            display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
        } },
        react_1.default.createElement(react_2.Center, null,
            react_1.default.createElement(react_2.Heading, { fontSize: "3xl" }, "\uAE09\uC2DD")),
        react_1.default.createElement(react_2.Center, null,
            react_1.default.createElement(react_2.Heading, { fontSize: "1xl" },
                date.getMonth() + 1,
                "\uC6D4 ",
                date.getDate(),
                "\uC77C")),
        react_1.default.createElement(react_2.Box, { id: "mealArticle" }, ReactHTMLParser(meal.DDISH_NM)),
        react_1.default.createElement(react_2.Stack, { spacing: "0.5", alignItems: "center" },
            meal.CAL_INFO && "열량: " + meal.CAL_INFO,
            react_1.default.createElement(react_2.Box, null,
                react_1.default.createElement(AlertDialog_1.AlertDialog, { title: "\uC601\uC591 \uC131\uBD84", text: "\uC601\uC591 \uC131\uBD84" }, ReactHTMLParser(meal.NTR_INFO)),
                react_1.default.createElement(AlertDialog_1.AlertDialog, { title: "\uC6D0\uC0B0\uC9C0 \uC815\uBCF4", text: "\uC6D0\uC0B0\uC9C0 \uC815\uBCF4" }, ReactHTMLParser(meal.ORPLC_INFO))),
            react_1.default.createElement(react_2.Box, null,
                react_1.default.createElement(react_2.Button, { className: "tailButton", onClick: () => {
                        let copied = new Date(date);
                        copied.setDate(date.getDate() - 1);
                        setDate(copied);
                        fetchMeal();
                    } }, "\uC774\uC804"),
                react_1.default.createElement(react_2.Button, { className: "tailButton", onClick: () => {
                        let copied = new Date(date);
                        copied.setDate(date.getDate() + 1);
                        setDate(copied);
                        fetchMeal();
                    } }, "\uB2E4\uC74C")))));
};
exports.default = Meal;


/***/ }),

/***/ 393:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(297));
const axios_1 = __importDefault(__webpack_require__(270));
const react_2 = __webpack_require__(426);
const kendo_react_scheduler_1 = __webpack_require__(365);
const Schedule = ({ schoolData }) => {
    const [schedule, setSchedule] = react_1.useState([]);
    const [date, setDate] = react_1.useState(new Date());
    const fetchSchedule = react_1.useCallback(() => {
        const fetch = () => {
            setSchedule([]);
            axios_1.default.get("/school/schedule", {
                params: {
                    ATPT_OFCDC_SC_CODE: schoolData.ATPT_OFCDC_SC_CODE,
                    SD_SCHUL_CODE: schoolData.SD_SCHUL_CODE,
                    AA_FROM_YMD: schoolData.AA_FROM_YMD || `${date.getFullYear()}0301`,
                    AA_TO_YMD: schoolData.AA_TO_YMD || `${date.getFullYear() + 1}0220`,
                },
            }).then(({ data }) => {
                const schedule = [];
                if (!data.length)
                    return console.error("학사일정을 불러오지 못했습니다.");
                for (let i = 0; i < data.length; i++) {
                    const startDate = new Date();
                    const endDate = new Date();
                    const newYear = Number(data[i].AA_YMD.slice(0, 4));
                    const newMonth = Number(data[i].AA_YMD.slice(4, 6).split("0").join(""));
                    const newDate = Number(data[i].AA_YMD.slice(6, 8).split("0").join(""));
                    startDate.setFullYear(newYear);
                    startDate.setMonth(newMonth - 1);
                    startDate.setDate(newDate);
                    endDate.setFullYear(newYear);
                    endDate.setMonth(newMonth - 1);
                    endDate.setDate(newDate + 1);
                    schedule.push({
                        id: i + 4,
                        title: data[i].EVENT_NM,
                        description: `${data[i].EVENT_NM}\n휴업 여부: ${data[i].SBTR_DD_SC_NM}`,
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
                setSchedule(schedule);
            }, (e) => {
                console.error(e);
            });
        };
        fetch();
    }, [date, schoolData]);
    react_1.useEffect(() => {
        fetchSchedule();
    }, [fetchSchedule]);
    return (react_1.default.createElement(react_2.Stack, { spacing: "2", alignContent: "center", style: {
            display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
        } },
        react_1.default.createElement(react_2.Center, null,
            react_1.default.createElement(react_2.Heading, { fontSize: "3xl" }, "\uD559\uC0AC\uC77C\uC815")),
        react_1.default.createElement(kendo_react_scheduler_1.Scheduler, { data: schedule, defaultDate: date },
            react_1.default.createElement(kendo_react_scheduler_1.MonthView, { title: "Month", selectedDateFormat: "{0:M}", selectedShortDateFormat: "{0:M}" }))));
};
exports.default = Schedule;


/***/ }),

/***/ 621:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(297));
const JJorm_1 = __importDefault(__webpack_require__(996));
class Footer extends JJorm_1.default {
    constructor() {
        super(...arguments);
        this.ACTION_RECEIVER_TABLE = {};
    }
    render() {
        return react_1.default.createElement("footer", null, "---FOOTER---");
    }
}
exports.default = Footer;


/***/ }),

/***/ 284:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(297));
const react_2 = __webpack_require__(426);
const JJorm_1 = __importDefault(__webpack_require__(996));
const ChangeThemeButton_1 = __webpack_require__(944);
class Header extends JJorm_1.default {
    constructor() {
        super(...arguments);
        this.ACTION_RECEIVER_TABLE = {};
    }
    render() {
        return (react_1.default.createElement("header", null,
            react_1.default.createElement(react_2.Box, { className: "contents" },
                react_1.default.createElement(react_2.Box, null,
                    react_1.default.createElement(ChangeThemeButton_1.ChangeThemeButton, null)))));
    }
}
exports.default = Header;


/***/ }),

/***/ 352:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHumanTimeDistance = exports.getHumanNumber = exports.getHumanMinutes = exports.getHumanSeconds = exports.getHumanDigitalSpace = exports.setTable = void 0;
const react_1 = __importDefault(__webpack_require__(297));
const Icon_1 = __webpack_require__(876);
const Utility_1 = __webpack_require__(788);
const Utility_2 = __webpack_require__(376);
const PATTERN_RESOLVER = {
    'BR': key => react_1.default.createElement("br", { key: key }),
    'FA': (key, name) => react_1.default.createElement(Icon_1.Icon, { key: key, name: name }),
    'FAK': (key, ...args) => react_1.default.createElement(Icon_1.Icon, { key: key, name: args.join(','), type: Icon_1.IconType.STACK }),
    'L': (key, className, data) => react_1.default.createElement("label", { key: key, className: className }, data),
    'ICON': (key, name) => react_1.default.createElement(Icon_1.Icon, { key: key, className: "language", name: name, type: Icon_1.IconType.PURE }),
    'REF': (key, name, ...args) => react_1.default.createElement(react_1.default.Fragment, { key: key }, L.render(name, ...args)),
    'HUMAN_D': (key, data) => react_1.default.createElement(react_1.default.Fragment, { key: key }, exports.getHumanDigitalSpace(Number(data))),
    'HUMAN_M': (key, data) => react_1.default.createElement(react_1.default.Fragment, { key: key }, exports.getHumanMinutes(Number(data))),
    'HUMAN_N': (key, data) => react_1.default.createElement(react_1.default.Fragment, { key: key }, exports.getHumanNumber(Number(data))),
};
let TABLE = Utility_2.FRONT && eval("window.__LANGUAGE");
/**
 * 사용할 문자열표를 설정한다.
 *
 * 문자열표는 기본적으로 `window.__LANGUAGE` 변수를 참조하지만
 * 이 함수를 이용해 변경할 수 있다.
 *
 * @param table 새로운 문자열표.
 */
const setTable = (table) => {
    TABLE = Object.assign({}, table);
};
exports.setTable = setTable;
/**
 * 문자열표를 활용하는 프론트엔드 유틸리티 클래스.
 *
 * 문자열표의 각 문자열들은 다음 문법을 가질 수 있다.
 *
 * | 문법 | 이름 | 설명 |
 * |------|------|-----|
 * | `{#n}` | 단일 샤프 인자 | 추가 정보 배열의 인덱스 `n` 요소로 대체된다. |
 * | `{##n}` | 이중 샤프 인자 | 추가 정보 배열의 인덱스 `n` 요소로 대체되며, 요소는 문자열로 처리된다. |
 * | `<{cmd\|arg1\|arg2\|…}>` | 블록 | `PATTERN_RESOLVER`의 키 `cmd`에 대응되는 요소로 대체된다. `arg`*N* 자리에는 문자열 또는 이중 샤프 인자만 들어올 수 있다. |
 */
class L {
    /**
     * 문자열표로부터 문자열을 구해 문자열로 반환한다.
     *
     * 단일 샤프 인자만이 추가 정보로 대체되며 그 외는 무시한다.
     *
     * @param key 식별자.
     * @param args 추가 정보.
     */
    static get(key, ...args) {
        const R = TABLE[key];
        if (!R)
            return `(L#${key})`;
        return R
            .replace(L.REGEXP_PATTERN, "")
            .replace(L.REGEXP_ARGS, (p, v1) => args[v1]);
    }
    /**
     * 문자열표로부터 문자열을 구해 React 컴포넌트로 반환한다.
     *
     * @param key 식별자.
     * @param args 추가 정보.
     */
    static render(key, ...args) {
        if (TABLE[key]) {
            return L.parse(TABLE[key], ...args);
        }
        else {
            return `(L#${key})`;
        }
    }
    static parse(value, ...args) {
        const R = [];
        const PATTERN = new RegExp(L.REGEXP_PATTERN);
        const blockBank = [];
        let execArray;
        let prevIndex = 0;
        value = value.replace(L.REGEXP_STRICT_ARGS, (p, v1) => {
            return args[v1];
        }).replace(L.REGEXP_ARGS, (p, v1) => {
            blockBank.push(args[v1]);
            return "<{__}>";
        });
        while (execArray = PATTERN.exec(value)) {
            if (execArray.index - prevIndex > 0) {
                R.push(value.slice(prevIndex, execArray.index));
            }
            if (execArray[1] === '__') {
                R.push(blockBank.shift());
            }
            else {
                R.push(PATTERN_RESOLVER[execArray[1]](R.length, ...(execArray[2] ? execArray[2].split('|') : [])));
            }
            prevIndex = PATTERN.lastIndex;
        }
        if (prevIndex < value.length) {
            R.push(value.slice(prevIndex));
        }
        return react_1.default.createElement(react_1.default.Fragment, null, R);
    }
}
exports.default = L;
L.REGEXP_PATTERN = /<\{(\w+?)(?:\|(.+?))?\}>/g;
L.REGEXP_ARGS = /\{#(\d+?)\}/g;
L.REGEXP_STRICT_ARGS = /\{##(\d+?)\}/g;
/**
 * 바이트 값을 보기 편한 방식(예: `1.23 KiB`)으로 바꿔 반환한다.
 *
 * @param bytes 바이트 값.
 */
const getHumanDigitalSpace = (bytes) => {
    if (bytes < 1024)
        return bytes + " B";
    if (bytes < 1048576)
        return (bytes / 1024).toFixed(2) + " KiB";
    if (bytes < 1073741824)
        return (bytes / 1048576).toFixed(2) + " MiB";
    return (bytes / 1073741824).toFixed(2) + " GiB";
};
exports.getHumanDigitalSpace = getHumanDigitalSpace;
/**
 * 초 값을 `mm:ss` 방식으로 바꿔 반환한다.
 *
 * @param seconds 초 값.
 */
const getHumanSeconds = (seconds) => (`${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`);
exports.getHumanSeconds = getHumanSeconds;
/**
 * 분 값을 보기 편한 방식(예: `1 시간 23 분`)으로 바꿔 반환한다.
 *
 * @param minutes 분 값.
 */
const getHumanMinutes = (minutes) => {
    if (minutes < 1)
        return L.get("MINUTES_0");
    minutes = Math.round(minutes);
    if (minutes < 60)
        return L.get("MINUTES_1", minutes);
    if (minutes < 1440)
        return L.get("MINUTES_2", Math.floor(minutes / 60), minutes % 60);
    if (minutes < 43800)
        return L.get("MINUTES_3", Math.floor(minutes / 1440), Math.round(minutes % 1440 / 60));
    return L.get("MINUTES_4", Math.floor(minutes / 43800), Math.round(minutes % 43800 / 1440));
};
exports.getHumanMinutes = getHumanMinutes;
/**
 * 수량을 보기 편한 방식(예: `12.3k`)으로 바꿔 반환한다.
 *
 * @param number 수량 값.
 */
const getHumanNumber = (number) => {
    if (number < 1e3)
        return String(number);
    const exp = Math.floor(number).toString().length;
    const digit = 2 - (exp - 1) % 3;
    if (number < 1e6)
        return (number * 1e-3).toFixed(digit) + "k";
    if (number < 1e9)
        return (number * 1e-6).toFixed(digit) + "M";
    if (number < 1e12)
        return (number * 1e-9).toFixed(digit) + "G";
    if (number < 1e15)
        return (number * 1e-12).toFixed(digit) + "T";
    return (number * 1e-15).toFixed(0) + "P";
};
exports.getHumanNumber = getHumanNumber;
/**
 * 시간을 보기 편한 방식(예: `1 시간 23 분 전`)으로 바꿔 반환한다.
 *
 * @param from 출발 UNIX 시각.
 * @param to 도착 UNIX 시각.
 */
function getHumanTimeDistance(from, to = Date.now()) {
    const distance = Utility_1.getTimeDistance(from, to);
    return distance > -30
        ? L.render("TIME_DISTANCE_PAST", distance)
        : L.render("TIME_DISTANCE_FUTURE", -distance);
}
exports.getHumanTimeDistance = getHumanTimeDistance;


/***/ }),

/***/ 788:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTimeDistance = exports.getPercent = exports.getDateText = exports.C = void 0;
/**
 * HTML 공통 속성 `className`의 값에 적합한 문자열을 반환한다.
 *
 * @param args 클래스 목록. 값이 falsy한 경우 결과에 반영되지 않는다.
 */
function C(...args) {
    return args.filter(Boolean).join(' ');
}
exports.C = C;
/**
 * 언어에 따른 날짜 문자열을 반환한다.
 *
 * @param value 날짜 정보. 파싱 가능한 날짜 문자열이거나 UNIX 시간이다.
 */
function getDateText(value) {
    return new Date(value).toLocaleString();
}
exports.getDateText = getDateText;
/**
 * 백분위를 계산해 반환한다.
 *
 * 최솟값과 최댓값이 같은 경우 0을 반환한다.
 *
 * @param value 대상 값.
 * @param prev 최솟값.
 * @param next 최댓값.
 */
function getPercent(value, prev, next) {
    return (next - prev) && (value - prev) / (next - prev) * 100;
}
exports.getPercent = getPercent;
/**
 * 출발 시각과 도착 시각까지의 시간을 분 단위로 반환한다.
 *
 * @param from 출발 UNIX 시각.
 * @param to 도착 UNIX 시각.
 */
function getTimeDistance(from, to = Date.now()) {
    return (to - from) / 60000;
}
exports.getTimeDistance = getTimeDistance;


/***/ }),

/***/ 716:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(297));
const axios_1 = __importDefault(__webpack_require__(270));
const react_2 = __webpack_require__(426);
const JJorm_1 = __importDefault(__webpack_require__(996));
const ReactBootstrap_1 = __importDefault(__webpack_require__(153));
const SubMenu_1 = __webpack_require__(108);
class Index extends JJorm_1.default {
    constructor(props) {
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
            schedule: [],
            meal: {},
            nutrientDisplay: "none",
            originCountryDisplay: "none",
            schoolNameInput: "",
            isAboutVisible: false,
            isCommentVisible: false,
            isScheduleVisible: false,
            isMealVisible: false,
        };
    }
    handleDuplicatedName() {
        const arr = [];
        for (let i = 0; i < this.state.duplicatedName.length; i++) {
            arr.push(react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("br", null),
                react_1.default.createElement(react_2.Button, { onClick: (e) => {
                        this.setState({ schoolData: this.state.duplicatedName[i] });
                    } },
                    this.state.duplicatedName[i].SCHUL_NM,
                    " (",
                    this.state.duplicatedName[i].ATPT_OFCDC_SC_NM,
                    ")")));
        }
        return arr;
    }
    render() {
        return (react_1.default.createElement("article", null,
            react_1.default.createElement(react_2.Center, null,
                react_1.default.createElement(react_2.Stack, { spacing: "2", alignContent: "center" },
                    react_1.default.createElement(react_2.Text, null, "\uD559\uAD50\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694."),
                    react_1.default.createElement(react_2.Input, { type: "text", w: "200px", onChange: (e) => {
                            this.setState({ schoolNameInput: e.target.value });
                        } }),
                    react_1.default.createElement(react_2.Button, { onClick: () => __awaiter(this, void 0, void 0, function* () {
                            const res = (yield axios_1.default.get(`/school/info?schoolName=${this.state.schoolNameInput}`)).data;
                            if (res.length > 1) {
                                this.setState({ duplicatedName: res });
                            }
                            else {
                                this.setState({
                                    schoolData: res[0],
                                });
                            }
                        }) }, "\uD559\uAD50 \uAC80\uC0C9"))),
            react_1.default.createElement(react_2.Center, null,
                react_1.default.createElement(react_2.Stack, { spacing: "2", alignContent: "center" }, this.state.duplicatedName.length > 1
                    ? this.handleDuplicatedName()
                    : "")),
            react_1.default.createElement("br", null),
            this.state.schoolData.SCHUL_NM && (react_1.default.createElement(react_2.Center, null,
                react_1.default.createElement(react_2.Box, { color: this.state.isAboutVisible ? "blue.500" : "gray.500", onClick: () => {
                        this.setState({ isAboutVisible: !this.state.isAboutVisible });
                    } }, "\uC815\uBCF4"),
                "\u00A0",
                react_1.default.createElement(react_2.Box, { color: this.state.isCommentVisible ? "blue.500" : "gray.500", onClick: () => {
                        this.setState({
                            isCommentVisible: !this.state.isCommentVisible,
                        });
                    } }, "\uD3C9\uAC00"),
                "\u00A0",
                react_1.default.createElement(react_2.Box, { color: this.state.isScheduleVisible ? "blue.500" : "gray.500", onClick: () => {
                        this.setState({
                            isScheduleVisible: !this.state.isScheduleVisible,
                        });
                    } }, "\uD559\uC0AC\uC77C\uC815"),
                "\u00A0",
                react_1.default.createElement(react_2.Box, { color: this.state.isMealVisible ? "blue.500" : "gray.500", onClick: () => {
                        this.setState({ isMealVisible: !this.state.isMealVisible });
                    } }, "\uAE09\uC2DD"))),
            react_1.default.createElement("br", null),
            this.state.schoolData.SCHUL_NM && (react_1.default.createElement(react_2.Stack, { spacing: "4", alignItems: "center" },
                this.state.isAboutVisible && (react_1.default.createElement(SubMenu_1.About, { schoolData: this.state.schoolData })),
                this.state.isCommentVisible && (react_1.default.createElement(SubMenu_1.Comment, { schoolData: this.state.schoolData })),
                this.state.isScheduleVisible && (react_1.default.createElement(SubMenu_1.Schedule, { schoolData: this.state.schoolData })),
                this.state.isMealVisible && (react_1.default.createElement(SubMenu_1.Meal, { schoolData: this.state.schoolData }))))));
    }
}
exports.default = Index;
ReactBootstrap_1.default(Index);


/***/ }),

/***/ 996:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(297));
class JJorm extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.ACTION_RECEIVER_TABLE = {};
    }
    static flush() {
        JJorm.flushed = true;
        for (const v of JJorm.triggers) {
            v();
        }
    }
    static trigger(type, ...args) {
        if (!JJorm.flushed) {
            return void JJorm.triggers.push(() => JJorm.trigger(type, ...args));
        }
        const list = JJorm.ACTION_RECEIVER_POLYTABLE[type];
        if (!list) {
            return;
        }
        for (let i = list.length - 1; i >= 0; i--) {
            if (list[i].apply(list[i], args) === false)
                break;
        }
    }
    componentDidMount() {
        let k;
        for (k in this.ACTION_RECEIVER_TABLE) {
            if (JJorm.ACTION_RECEIVER_POLYTABLE.hasOwnProperty(k)) {
                JJorm.ACTION_RECEIVER_POLYTABLE[k].push(this.ACTION_RECEIVER_TABLE[k]);
            }
            else {
                JJorm.ACTION_RECEIVER_POLYTABLE[k] = [this.ACTION_RECEIVER_TABLE[k]];
            }
        }
    }
    componentWillUnmount() {
        let k;
        for (k in this.ACTION_RECEIVER_TABLE) {
            const list = JJorm.ACTION_RECEIVER_POLYTABLE[k];
            list.splice(list.lastIndexOf(this.ACTION_RECEIVER_TABLE[k]), 1);
        }
    }
}
exports.default = JJorm;
JJorm.ACTION_RECEIVER_POLYTABLE = {};
JJorm.flushed = false;
JJorm.triggers = [];


/***/ }),

/***/ 153:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Root = void 0;
const react_1 = __importDefault(__webpack_require__(297));
const react_dom_1 = __importDefault(__webpack_require__(268));
const react_2 = __webpack_require__(426);
const Footer_1 = __importDefault(__webpack_require__(621));
const Header_1 = __importDefault(__webpack_require__(284));
const Language_1 = __importDefault(__webpack_require__(352));
const JJorm_1 = __importDefault(__webpack_require__(996));
function Bind(TargetClass) {
    const $root = document.createElement("main");
    const props = "/*{JSON.stringify($)}*/";
    react_dom_1.default.render(react_1.default.createElement(Root, Object.assign({}, props), react_1.default.createElement(TargetClass, props)), $root);
    document.body.appendChild($root);
}
exports.default = Bind;
class Root extends JJorm_1.default {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    componentDidMount() {
        super.componentDidMount();
        JJorm_1.default.flush();
    }
    render() {
        if (this.state.error) {
            return Language_1.default.render("ERROR", this.state.error.message);
        }
        return (react_1.default.createElement(react_2.ChakraProvider, null,
            react_1.default.createElement("section", { id: "stage" },
                react_1.default.createElement(Header_1.default, null),
                this.props.children,
                react_1.default.createElement(Footer_1.default, null))));
    }
}
exports.Root = Root;


/***/ }),

/***/ 108:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Meal = exports.Schedule = exports.Comment = exports.About = void 0;
const About_1 = __importDefault(__webpack_require__(158));
exports.About = About_1.default;
const Comment_1 = __importDefault(__webpack_require__(758));
exports.Comment = Comment_1.default;
const Schedule_1 = __importDefault(__webpack_require__(393));
exports.Schedule = Schedule_1.default;
const Meal_1 = __importDefault(__webpack_require__(247));
exports.Meal = Meal_1.default;


/***/ }),

/***/ 122:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Index/index.tsx": 716
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 122;

/***/ }),

/***/ 426:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("@progress/kendo-react-scheduler");;

/***/ }),

/***/ 636:
/***/ ((module) => {

"use strict";
module.exports = require("accept-language-parser");;

/***/ }),

/***/ 270:
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 531:
/***/ ((module) => {

"use strict";
module.exports = require("cluster");;

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ 127:
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 51:
/***/ ((module) => {

"use strict";
module.exports = require("html-react-parser");;

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 765:
/***/ ((module) => {

"use strict";
module.exports = require("process");;

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 268:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ 250:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ 961:
/***/ ((module) => {

"use strict";
module.exports = require("sha256");;

/***/ }),

/***/ 2:
/***/ ((module) => {

"use strict";
module.exports = require("spdy");;

/***/ }),

/***/ 794:
/***/ ((module) => {

"use strict";
module.exports = require("typeorm");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(756);
/******/ 	
/******/ })()
;