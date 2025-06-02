import itemCanvas from '../../ItemCanvas.js';
import baseConfig from './flowDishConf.js';
import attr from './flowDishAttr.js';
import util from '@/assets/script/base/util.js';
/**
 * echarts 折线图配置
 * [FlowDish description]
 */
const option = {
	duration: 1000,
	deg: Math.PI / 180,
	speed: 1 / (1000 / (1000 / 60))
}

const img = new Image();

let FlowDish = function (opts = {}) {
	this.attrConfig = JSON.parse(JSON.stringify(attr));
	itemCanvas.call(this, opts);
}

let fn = FlowDish.prototype;

fn.init = function () {
	this.duration = option.duration;
	this.deg = option.deg;
	this.speed = option.speed;
	this.timer = null;

	this.curProgress = 0;	// 当前动画进度
	this.name = name;
	this.curValue = 0;		// 流量值
	this.endIn = 0;
	this.endOut = 0;
	this.startIn = 0;
	this.startOut = 0;
	this.curIn = 0;
	this.curOut = 0;
	this.endPercent = 0;
	this.startPercent = 0;
	this.curPercent = 0;
	this.timer = null;
	// 差值
	this.differIn = 0;
	this.differOut = 0;
	this.differPercent = 0;
	var canvas = document.createElement('canvas');
	canvas.setAttribute('class', 'flowdish-canvas')
	this.dom.innerHTML = '';
	this.dom.appendChild(canvas);
	// let bbox = util.getBbox(this.dom);
	this.width = 300;
	this.height = 177;
	canvas.width = this.width;
	canvas.height = this.height;
	this.ctx = canvas.getContext('2d');
	let that = this;
	img.onload = function () {
		that.showDish();
	}
	img.src = require('static/img/dish.png');
}

fn.run = function () {
	if (this.curProgress === 0) {
		if (this.endIn >= this.endOut) {
			this.endPercent = this.endIn;
		} else {
			this.endPercent = this.endOut;
		}
		this.startIn = this.curIn;
		this.startOut = this.curOut;
		this.startPercent = this.curPercent;

		this.differIn = this.endIn - this.curIn;
		this.differOut = this.endOut - this.curOut;
		this.differPercent = this.endPercent - this.curPercent;
	}

	if (this.curProgress < 1) {
		this.timer = setTimeout(() => {
			this.curProgress += this.speed;
			this.curProgress > 1 && (this.curProgress = 1);
			this.curIn = this.startIn + this.curProgress * this.differIn;
			this.curOut = this.startOut + this.curProgress * this.differOut;
			this.curPercent = this.startPercent + this.curProgress * this.differPercent;
			this.showDish();
		}, 1000 / 60);
	} else {
		this.curProgress = 0;
		clearTimeout(this.timer);
		this.timer = null;
	}
}

fn.showDish = function () {
	this.clear();
	this.drawLeftProgress();
	this.drawRightProgress();
	this.drawLines();
	this.loadDish();
	this.drawNum();
	this.drawProgressDish();
	this.drawBlackCircle();
	this.drawNeedle();
	this.drawInnerCircle();
	this.drawPencent();
	this.drawName();
	this.drawValue();
	this.run();
}

fn.drawLeftProgress = function () {
	this.ctx.save();
	for (var i = 1; i <= 22; i++) {
		this.ctx.fillStyle = i <= 22 - this.getCompleteCount(Math.floor(this.curIn)) ? '#13255f' : '#5397f7';
	 	this.ctx.fillRect(0, 6 * i + 30.3, 50, 4);
	}
	this.ctx.globalCompositeOperation = 'destination-in';
	this.ctx.beginPath();
	this.ctx.lineWidth = 14;
	this.ctx.arc(110, 100, 100, 0, 2 * Math.PI);
	this.ctx.stroke();
	this.ctx.restore();
}

fn.getCompleteCount = function (percent) {
	if (percent !== 0 && percent < 4.6) {
		return 1;
	} else {
		// 因为舍入误差，除多100再乘100
		return Math.floor(percent / (100 * 100 / 22) * 100);
	}
}

fn.drawRightProgress = function () {
	this.ctx.save();
	for (var i = 1; i <= 22; i++) {
		this.ctx.fillStyle = i <= 22 - this.getCompleteCount(Math.floor(this.curOut)) ? '#13255f' : '#6ad9f8';
	 	this.ctx.fillRect(170, 6 * i + 30.3, 50, 4);
	}
	this.ctx.globalCompositeOperation = 'destination-in';
	this.ctx.beginPath();
	this.ctx.lineWidth = 14;
	this.ctx.arc(110, 100, 100, 0, 2 * Math.PI);
	this.ctx.stroke();
	this.ctx.restore();
}

fn.drawLines = function () {
	for (var i = 0; i <= 40; i++) {
		this.ctx.save();
		this.ctx.strokeStyle = '#3a5da2';
		this.ctx.translate(110, 100);
		this.ctx.rotate((42 + (6.9 * i)) * this.deg);
		this.ctx.beginPath();
		if (i % 4 === 0) {
			this.ctx.moveTo(0, 73);
		} else {
			this.ctx.moveTo(0, 80);
		}
		this.ctx.lineTo(0, 90);
		this.ctx.stroke();
		this.ctx.restore();
	}
}

fn.loadDish = function () {
	this.ctx.save();
	this.ctx.drawImage(img, 0, 0);
	this.ctx.restore();
}

// 画当前进度对应的弧形
fn.drawProgressDish = function () {
	this.ctx.save();
	var grd = this.ctx.createLinearGradient(0, 0, 220, 0);
	grd.addColorStop(0, 'rgba(4, 58, 114, 0.22)');
	grd.addColorStop(0.5, 'rgba(0, 108, 230, 0.4)');
	grd.addColorStop(1, 'rgba(40, 187, 255, 0.6)');
	this.ctx.strokeStyle = grd;
	this.ctx.lineWidth = 40;
	this.ctx.beginPath();
	this.ctx.arc(110, 100, 70, 131 * this.deg, (131 + (Math.floor(this.curPercent) / 100 * 278)) * this.deg);
	this.ctx.stroke();
	this.ctx.restore();
}

fn.drawBlackCircle = function () {
	this.ctx.save();
	this.ctx.fillStyle = '#06102a';
	this.ctx.beginPath();
	this.ctx.arc(110, 100, 50, 0, 360 * this.deg);
	this.ctx.closePath();
	this.ctx.fill();
	this.ctx.restore();
}

fn.drawNeedle = function () {
	this.ctx.save();
	this.ctx.translate(110, 100);
	this.ctx.rotate((41 + (Math.floor(this.curPercent) / 100 * 278)) * this.deg);
	this.ctx.fillStyle = '#fff';
	this.ctx.beginPath();
	this.ctx.moveTo(-5, 0);
	this.ctx.lineTo(5, 0);
	this.ctx.lineTo(0, 90);
	this.ctx.closePath();
	this.ctx.fill();
	this.ctx.restore();
}

fn.drawInnerCircle = function () {
	this.ctx.save();
	this.ctx.fillStyle = '#0a1531';
	this.ctx.shadowBlur = 14;
	this.ctx.shadowColor = '#127be7';
	this.ctx.beginPath();
	this.ctx.arc(110, 100, 36, 0, 360 * this.deg);
	this.ctx.closePath();
	this.ctx.fill();
	this.ctx.restore();
}

fn.drawPencent = function () {
	this.ctx.save();
	this.ctx.translate(110, 100);
	this.ctx.textAlign = 'center';
	this.ctx.font = 'bold 22px MicrosoftYaHei';
	if (this.endIn > this.endOut) {
		this.ctx.fillStyle = '#5397f7';
	} else if (this.endOut > this.endIn) {
		this.ctx.fillStyle = '#6ad9f8';
	} else {
		this.ctx.fillStyle = '#fff';
	}
	this.ctx.fillText(Math.floor(this.curPercent) + '%', 0, 0);
	this.ctx.restore();
}

fn.drawName = function () {
	this.ctx.save();
	this.ctx.translate(110, 122);
	this.ctx.textAlign = 'center';
	this.ctx.font = '14px MicrosoftYaHei';
	this.ctx.fillStyle = '#8dbefa';
	this.ctx.fillText('', 0, 0);
	this.ctx.restore();
}

fn.drawValue = function () {
	this.ctx.save();
	this.ctx.translate(110, 165);
	this.ctx.textAlign = 'center';
	this.ctx.font = '16px MicrosoftYaHei';
	this.ctx.fillStyle = '#fff';
	this.ctx.fillText(this.curValue, 0, 0);
	this.ctx.restore();
}

fn.drawNum = function () {
	this.ctx.save();
	this.ctx.font = '12px Arial';
	this.ctx.fillStyle = '#8dbcf5';
	this.ctx.fillText('0', 59, 152);
	this.ctx.fillText('10', 41, 127);
	this.ctx.fillText('20', 39, 95);
	this.ctx.fillText('30', 51, 68);
	this.ctx.fillText('40', 71, 46);
	this.ctx.fillText('50', 103, 38);
	this.ctx.fillText('60', 135, 46);
	this.ctx.fillText('70', 156, 68);
	this.ctx.fillText('80', 168, 95);
	this.ctx.fillText('90', 164, 127);
	this.ctx.fillText('100', 154, 154);
	this.ctx.restore();
}

fn.clear = function () {
	this.ctx.clearRect(0, 0, this.width, this.height);
}

fn.destroy = function () {
	this.clear();
	this.dom.innerHTML = '';
}

fn.ajaxAfaWith = function (xData, yData) {
	this.fields = [];
	yData.forEach(item => {
		var obj = {
			dmUid: item.dmUid,
			colName: item.colName,
			type: '1',
			name: item.colAlias || item.colCname || item.colName
		}
		this.fields.push(obj)
	})
	let modal = {};
	this.fields.forEach(item => {
		if (!modal[item.dmUid]) {
			modal[item.dmUid] = [];
		}
		modal[item.dmUid].push(item);
	})
	this.params = [];
	this.requestid = util.getUuid();
	Object.keys(modal).forEach(item => {
		let cols = modal[item].map(item => {
			return item.colName;
		})
		let requestid = this.requestid;
		let datatype = '1';
		let modelid = item;
		let statcontent = {};
		let filter = '';
		let modelfilter = '';
		let order = '';
		let limit = '';
		this.params.push({requestid, datatype, modelid, statcontent, filter, modelfilter, order, limit, cols});
	})
	window.RequestCollect.push(this);
}

fn.unityData = function (data) {
	let innerField = this.fields.filter(item => item.type === '1');
	innerField.forEach((item, index) => {
		let tmp = this.getDataByAjaxToField(data, item.colName);
		if (tmp && tmp.length) {
			this.value = parseInt(tmp[0]);
		} else {
			this.value = 0;
		}
	})
}


util.inherits(FlowDish, itemCanvas);

Object.defineProperties(FlowDish.prototype, {
	value: {
		get: function () {
			return 0;
		},
		set: function (val) {
			this.curProgress = 0;
			this.endIn = val;
			this.endOut = val;
			this.curValue = val;
			this.run();
		}
	}
})

/* 组件必须有的方法 */
/* 1、安装 */
FlowDish.install = function (opts = {}) {
	var config = util.deepClone(baseConfig);
	opts = Object.assign({}, opts, config);
	return new FlowDish(opts);
}

/* 2、获取必要的类型配置 */
FlowDish.getType = function () {
	return {
		...baseConfig.base
	}
}

/* 3、获取必要的属性配置 */
FlowDish.getAttr = function () {
	let option = baseConfig.option;
	return CardText.setAttrDefaultVal(option, JSON.parse(JSON.stringify(attr)));
}


export default FlowDish;