let handler = function (m) {
	this.sendContact(m.chat, '6285828764046', 'Owner zifabotz :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
