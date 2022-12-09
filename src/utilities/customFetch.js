let validado = true

export const customFetch = (time, task) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(validado) {
                resolve(task)
            } else {
                reject(alert('Su peticion ha sido rechazada.'))
            }
        }, time)
    })
}