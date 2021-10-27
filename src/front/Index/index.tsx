import React from "react";

import JJorm from "../JJorm";
import Bind from "../ReactBootstrap";
import L from "../@global/Language";

type Properties = {};
type State = {};

export default class Index extends JJorm<JJWAK.Page.Props<"Index">, State> {
  state: State = {};

  constructor(props: JJWAK.Page.Props<"Index">) {
    super(props);
  }

  render(): React.ReactNode {
    return <article>Main Page</article>;
  }
}
Bind(Index);
