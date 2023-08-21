import {
  flowRendererV2,
  flowStyles
} from "./chunk-2NFLYHQH.js";
import "./chunk-HIOK7YJT.js";
import {
  flowDb,
  parser$1
} from "./chunk-JHODXYK4.js";
import "./chunk-N5QQP2ID.js";
import "./chunk-RCFVT4MS.js";
import "./chunk-LKKDV6BL.js";
import "./chunk-LCHPIOJW.js";
import "./chunk-BEYHPX7Y.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-W5OZVDV6.js";
import {
  __toESM
} from "./chunk-TFWDKVI3.js";

// node_modules/mermaid/dist/flowDiagram-v2-fe64f300.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-fe64f300-CZRPIFP7.js.map
