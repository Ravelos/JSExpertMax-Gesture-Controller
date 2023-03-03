export default class Service {
  #model = null;
  #faceLandmarksDetection;
  contructor({ faceLandmarksDetection }) {
    this.#faceLandmarksDetection = faceLandmarksDetection;
  }

  async loadModel() {
    this.#model = await this.#faceLandmarksDetection.load(
      this.#faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
      { maxFaces: 1 }
    );
  }
}
