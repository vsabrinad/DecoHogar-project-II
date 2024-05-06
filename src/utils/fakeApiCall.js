export const fakeApiCall = (mockProducts) => {
    return new Promise((resolve, reject) => {
        setTimeout ( () => {
            resolve(mockProducts)}
            , 2000
        )
    })
}