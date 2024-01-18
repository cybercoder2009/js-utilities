export const int = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min    

export const text = (min, max) => {
    const phase = 'abcdefghijkl ABCDEFGHIJKL mnopqrstuvwxyz MNOPQRSTUVWXYZ 0123456789'
    const rand = int(min, max)
    let res = ''
    for(let i = 0; i < rand; i++) { res += phase[Math.floor(Math.random() * phase.length)] }
    return res
}

/**
 * 
 * @param {*} start eg: new Date('2000-01-01').getTime() 
 * @param {*} end   eg: new Date('2023-12-31').getTime() 
 * @returns 
 */
export const timestamp = (start, end) => new Date(start + Math.random() * (end - start)).getTime()