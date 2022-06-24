let i = 1

export default ({ appId, pageNum, pageSize }) => {
    const script = document.createElement('script')
    const data = decodeURIComponent(JSON.stringify({ appId: appId + '', params: `{"pageNum":${pageNum},"pageSize":${pageSize}}` }))
    const cb = `mtopjsonp${i++}`
    return new Promise((resolve, reject) => {
        window[cb] = function (data) {
            resolve(data)
            window[cb] = null
            delete window[cb]
            document.body.removeChild(script)
        }
        script.src = `https://h5api.m.taobao.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/?jsv=2.5.1&appKey=12574478&t=1656047311282&sign=32e97aa16d8865f199267a90c7d33a51&api=mtop.relationrecommend.WirelessRecommend.recommend&v=2.0&timeout=10000&type=jsonp&dataType=jsonp&callback=${cb}&data=${data}`
        document.body.appendChild(script)
    })
}