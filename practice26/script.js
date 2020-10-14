const video = document.getElementById("video");


//promiceで処理が成功したらthenに、失敗したらcatchになるらしい
//よってこの処理は予めAPIがありしっかりと動作するか確認して成功するか確認の処理だとおもう
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("models"),
    faceapi.nets.faceExpressionNet.loadFromUri("models"),
]).then(startVideo)

function startVideo(){
    navigator.getUserMedia(
        {video: {}},
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

video.addEventListener("play", () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaysize = {width: video.width, height: video.height}
    faceapi.matchDimensions(canvas, displaysize)
    setInterval(async () => {
        //videoから顔の情報を取得
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        const resizedDetections = faceapi.resizeResults(detections, displaysize)
        //canvasには自分で処理能力を持たないため、getcontext(2d)で処理能力を与える
        //そののちにclearRectで設定した値の四角形を消去する
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
        faceapi.draw.drawDetections(canvas, resizedDetections)
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    }, 100)
})