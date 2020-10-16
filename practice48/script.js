const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, 3000)
})


promise.then(() => {
    console.log("次の処理")
})