export default class Service {
  #model = null
  #faceLandmarksDetection
  contructor({ faceLandmarksDetection }) {
    this.#faceLandmarksDetection = faceLandmarksDetection;
  }

  async loadModel() {
    this.#model = await this.#faceLandmarksDetection?.load(
      this.#faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
      { maxFaces: 1 }
    )
  }


  async handBlink(video){
    const predictions = await this.#estimateFaces(video)
    console.log({predictions})
  }

  #estimateFaces(video){
    return this.#model.estimateFaces({
      input:video,
      returnTensors:false,
      flipHorizontal:true,
      predictIrises:true
    })
  }
}
