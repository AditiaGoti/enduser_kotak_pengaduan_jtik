export const setAuthentication = (token, name, nim, email) => {
    localStorage.setItem('kpjtik_access_token', token)
    localStorage.setItem('kpjtik_acc_name', CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(name), process.env.VUE_APP_SECRET_KEY))
    localStorage.setItem('kpjtik_nim', CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(nim), process.env.VUE_APP_SECRET_KEY))
    localStorage.setItem('kpjtik_email', CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(email), process.env.VUE_APP_SECRET_KEY))
}

export const getToken = () => localStorage.getItem('kpjtik_access_token') || ''
export const getName = () => {
    const getName = localStorage.getItem('kpjtik_acc_name') || ''
    let bytes = CryptoJS.AES.decrypt(
        getName,
        process.env.VUE_APP_SECRET_KEY
    );
    const name = bytes.toString(CryptoJS.enc.Utf8)
    return name
}
export const getNimUser = () => {
    const getNim = localStorage.getItem('kpjtik_nim') || ''
    let bytes = CryptoJS.AES.decrypt(
        getNim,
        process.env.VUE_APP_SECRET_KEY
    );
    const nim = bytes.toString(CryptoJS.enc.Utf8)
    return nim
}
export const getEmail = () => {
    const getMail = localStorage.getItem('kpjtik_email' || '')
    let bytes = CryptoJS.AES.decrypt(
        getMail,
        process.env.VUE_APP_SECRET_KEY
    );
    const email = bytes.toString(CryptoJS.enc.Utf8)
    return email
}
export const removeAuth = () => {
    localStorage.removeItem('kpjtik_access_token')
    localStorage.removeItem('kpjtik_acc_name')
    localStorage.removeItem('kpjtik_nim')
    localStorage.removeItem('kpjtik_email')
    // Cookies.remove('hk_marker')
    // removeNotif()
}
