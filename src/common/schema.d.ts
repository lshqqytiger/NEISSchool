declare namespace Schema {
  type Settings = {
    $schema: "./settings.schema.json";
    application: {
      "language-support": Table<string>;
    };
    cookie: {
      age: number;
      secret: string;
    };
    database: {
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
      connectTimeout: number;
      maxQueryExecutionTime: number;
    };
    neis: {
      host: string;
      key: string;
    };
    https: {
      key: string;
      cert: string;
    };
    "language-support": Table<string>;
    log: {
      directory: string;
      interval: number;
    };
    port: number;
  };
}
