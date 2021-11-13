declare namespace DB {
  type PaginateOptions = {
    skip: number;
    take: number;
  };
  interface Sessionizable<T> {
    /**
     * 정보를 클라이언트에서 다룰 수 있도록 가공해 반환한다.
     */
    sessionize(): T;
  }

  interface School {
    id: number;
    ATPT_OFCDC_SC_CODE: string;
    ATPT_OFCDC_SC_NM: string;
    SD_SCHUL_CODE: string;
    SCHUL_NM: string;
    ENG_SCHUL_NM: string;
    SCHUL_KND_SC_NM: string;
    LCTN_SC_NM: string;
    JU_ORG_NM: string;
    FOND_SC_NM: string;
    ORG_RDNZC: string;
    ORG_RDNMA: string;
    ORG_RDNDA: string;
    ORG_TELNO: string;
    HMPG_ADRES: string;
    COEDU_SC_NM: string;
    HS_SC_NM: string;
    INDST_SPECL_CCCCL_EXST_YN: string;
    HS_GNRL_BUSNS_SC_NM: string;
    SPCLY_PURPS_HS_ORD_NM: string;
    ENE_BFE_SEHF_SC_NM: string;
    DGHT_SC_NM: string;
    FOND_YMD: number;
    FOAS_MEMRD: number;
    LOAD_DTM: number;
  }
  interface Comment {
    id: number;
    writer: string;
    target: string;
    content: string;
    status: any;
    createdAt: Date;
    like: number;
    unlike: number;
    reported: number;
    password: string;
    ip: string;
  }
}
