function dataFormat(dataStr){
    const dt=new Date(dataStr)

    const y=dt.getFullYear()
    const m = padZero(dt.getMonth()+1)
    const d=padZero(dt.getDate())
    //const d2=dt.getDay()得到星期（周0到周6）
    const hh=padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss=padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n){
    return n>9?n:'0'+n
}

module.exports={
    dataFormat
}