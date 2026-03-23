export const bootstrap = (): void => {
    let arr: number[] | undefined;
    arr = [1,2,3];

    console.log('Typeof de array: ', typeof arr)
    console.log('Instanceof de array: ', arr instanceof Array)
    console.log('Instanceof de array: ', Array.isArray(arr))

    // arr?.map(item => {console.log(item)})
    
    if (Array.isArray(arr)) {
        arr?.map(item => {console.log(item)})
    }
}