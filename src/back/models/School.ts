import * as TypeORM from "typeorm";

@TypeORM.Entity({ name: "school" })
export default class School implements DB.Sessionizable<DB.School> {
  @TypeORM.PrimaryColumn({ name: "id", type: "int" })
  public id!: number;

  @TypeORM.Column({ name: "ATPT_OFCDC_SC_CODE", type: "tinytext" })
  public ATPT_OFCDC_SC_CODE!: string;

  @TypeORM.Column({ name: "ATPT_OFCDC_SC_NM", type: "tinytext" })
  public ATPT_OFCDC_SC_NM!: string;

  @TypeORM.Column({ name: "SD_SCHUL_CODE", type: "tinytext" })
  public SD_SCHUL_CODE!: string;

  @TypeORM.Column({ name: "SCHUL_NM", type: "tinytext" })
  public SCHUL_NM!: string;

  @TypeORM.Column({ name: "ENG_SCHUL_NM", type: "tinytext" })
  public ENG_SCHUL_NM!: string;

  @TypeORM.Column({ name: "SCHUL_KND_SC_NM", type: "tinytext" })
  public SCHUL_KND_SC_NM!: string;

  @TypeORM.Column({ name: "LCTN_SC_NM", type: "tinytext" })
  public LCTN_SC_NM!: string;

  @TypeORM.Column({ name: "JU_ORG_NM", type: "tinytext" })
  public JU_ORG_NM!: string;

  @TypeORM.Column({ name: "FOND_SC_NM", type: "tinytext" })
  public FOND_SC_NM!: string;

  @TypeORM.Column({ name: "ORG_RDNZC", type: "tinytext" })
  public ORG_RDNZC!: string;

  @TypeORM.Column({ name: "ORG_RDNMA", type: "tinytext" })
  public ORG_RDNMA!: string;

  @TypeORM.Column({ name: "ORG_RDNDA", type: "tinytext" })
  public ORG_RDNDA!: string;

  @TypeORM.Column({ name: "ORG_TELNO", type: "tinytext" })
  public ORG_TELNO!: string;

  @TypeORM.Column({ name: "HMPG_ADRES", type: "tinytext" })
  public HMPG_ADRES!: string;

  @TypeORM.Column({ name: "COEDU_SC_NM", type: "tinytext" })
  public COEDU_SC_NM!: string;

  @TypeORM.Column({ name: "HS_SC_NM", type: "tinytext" })
  public HS_SC_NM!: string;

  @TypeORM.Column({ name: "INDST_SPECL_CCCCL_EXST_YN", type: "tinytext" })
  public INDST_SPECL_CCCCL_EXST_YN!: string;

  @TypeORM.Column({ name: "HS_GNRL_BUSNS_SC_NM", type: "tinytext" })
  public HS_GNRL_BUSNS_SC_NM!: string;

  @TypeORM.Column({ name: "SPCLY_PURPS_HS_ORD_NM", type: "tinytext" })
  public SPCLY_PURPS_HS_ORD_NM!: string;

  @TypeORM.Column({ name: "ENE_BFE_SEHF_SC_NM", type: "tinytext" })
  public ENE_BFE_SEHF_SC_NM!: string;

  @TypeORM.Column({ name: "DGHT_SC_NM", type: "tinytext" })
  public DGHT_SC_NM!: string;

  @TypeORM.Column({ name: "FOND_YMD", type: "int" })
  public FOND_YMD!: number;

  @TypeORM.Column({ name: "FOAS_MEMRD", type: "int" })
  public FOAS_MEMRD!: number;

  @TypeORM.Column({ name: "LOAD_DTM", type: "int" })
  public LOAD_DTM!: number;

  sessionize(): DB.School {
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
}
