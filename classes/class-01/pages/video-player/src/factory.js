import Camera from "../../../lib/shared/camera.js";
import { supportsWorkersType } from "../../../lib/shared/util.js";
import Controller from "./controller.js";
import Service from "./service.js";
import View from "./view.js";

async function getWorker() {
  if (supportsWorkersType) {
    const worker = new Worker('./src/worker.js', {type:'module'})
    console.log("suporta");
    return worker;
  }
  const workerMock = {
    async postMessage() {},
    onmessage(msg) {}
  }
  console.log("nao suporta");
  return workerMock;
}

const worker = await getWorker();
const camera = await Camera.init();
const [rootPath] = window.location.href.split("/pages/");
const factory = {
  async initialize() {
    return Controller.initialize({
      view: new View({}),
      service: new Service({}),
    });
  },
};

export default factory;
