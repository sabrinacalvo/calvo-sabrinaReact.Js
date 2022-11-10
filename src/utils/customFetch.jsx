let result = true;

export const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (result) {
                resolve(task)
            } else {
                reject("Hay un error")
            }
        }, time);
    });
};