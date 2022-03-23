let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 bulan* :      *Rp 15.000*
╠➥ *4 bulan* :      *Rp 30.000*
╠➥ *8 bulan* : *Rp 40.000*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ DANA/GOPAY
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klil Button Di Bawah
║
╠═〘 zifabotz 〙 ═`.trim(), '©️zifabotz', 'Gopay', '#viadigi', 'Dana', '#viaumobile', m)
}

handler.command = /^sewabot$/i

module.exports = handler
