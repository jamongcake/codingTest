class ChartManager{
	constructor(surveyData) {
		this.surveyData = surveyData;
		this.chartData;
		this.chartRules;
		this.charts = {}
	}
	addChart(chartName, chart) {
		this.charts[chartName] = chart;
	}
	changeData(data) {
		this.chartData = data;
		/** todo */
		//render();
	}
}

class Chart {
	constructor({surveyData, areaId, svgSetting, pieSetting, barSetting}) {
		this.surveyData = surveyData;
		this.area = document.getElementById(areaId);
		this.chartTitle = document.getElementById('chartTitle');
		this.parent = this.createSVGElement(this.area, 'svg', {width:svgSetting.width, height:svgSetting.height} )
		this.pieSetting = pieSetting;
		this.barSetting = barSetting;
		this.buttonFormat = {
			gender : one => one === "male" ? "남성" : "여성",
			age : one => one + "대",
			questions : (one,index) => ++index + "번문항"
		}
		this.data;
		this.rules;
	}
	setData({targetRules,result}) {
		this.data = result;
		this.rules = targetRules;

		// this.drawChart();
		// this.drawTable();
	}
	makeButtons() {
		let items = Object.keys(this.surveyData).filter( one => one !== "title");
		let itemsArr = items.map( one => this.surveyData[one].map( (two,index) => (this.buttonFormat[one](two, index))  ) )
		let head = document.getElementsByClassName('head')[0];
	}

	returnRGB() {
		const code = "0123456789abcdef";
		return [1,2,3,4,5,6].reduce( (p,c)=> (p + code[~~(Math.random() * 16)]), "#")
	}
	createSVG(tag) {
		return document.createElementNS("http://www.w3.org/2000/svg", tag);
	}
	setAttr(target, attrs) {
		for(let one in attrs) {
			if(attrs.hasOwnProperty(one)) target.setAttribute(one, attrs[one]);
		}
		return target;
	}
	xyforPercent(radius, percent) {
		let rad = -Math.PI * 2 * percent;
		return { x: radius * Math.sin(rad), y: radius * Math.cos(rad) }
	}
	createSVGElement(parentDom, tag, attrs) {
		return parentDom.appendChild(this.setAttr(this.createSVG(tag), attrs));
	}

	drawTitle(){
		this.chartTitle.innerHTML = this.surveyData.questions[this.rules[1]-1].title;
	}
	drawChart(){}
	drawTable(){}
}

class PieChart extends Chart {
	constructor({surveyData, areaId, svgSetting, pieSetting, barSetting}){
		super({surveyData, areaId, svgSetting, pieSetting, barSetting});
	}

	drawChart(arr) {
		let [parent, center, radius] = [this.parent, this.pieSetting.center, this.pieSetting.radius];
		let [angle, half, tempXY] = [-180, 0, undefined];
		let [xy, rgb, cSVG] = [this.xyforPercent,this.returnRGB,this.createSVGElement.bind(this)];

		
		let tooltip = document.createElement('div');
		tooltip.setAttribute('id', 'tooltip');
		tooltip.style.display = "none";
		
		let moveTooltip = (e) => {
			tooltip.style.top = `${e.pageY+10}px`;
			tooltip.style.left = `${e.pageX+10}px`;
		}
		
		document.getElementsByTagName('body')[0].appendChild(tooltip);
		
		arr.forEach(one => {

			half = one <= 0.5 ? 0 : 1;
			tempXY = xy(radius, one-0.000001);// 360도가 되면 사라지는 것을 방지용.
			let pathOne = cSVG(parent, "path", {
				class:'onepart',
				transform:`translate(${center.x}, ${center.y}) rotate(${angle})`,
				d: `M0 ${radius} A ${radius} ${radius}, 0, ${half}, 1, ${tempXY.x}, ${tempXY.y} L 0 0`,
				fill: `${rgb()}`
			});
			pathOne.innerHTML=`<span>${one}</span>`;
			angle += 360 * one;
			
			pathOne.addEventListener('mouseenter', one => {
				tooltip.innerText = one.target.children[0].textContent;
				tooltip.style = `display:block; position:absolute; background:#fff; padding:10px;
							   border:2px solid black; top:${one.pageY+10}px; left:${one.pageX+10}px;`;
				pathOne.addEventListener('mousemove', moveTooltip)
			});
			
			pathOne.addEventListener('mouseleave', one => {
				tooltip.innerText = one.target.children[0].textContent;
				tooltip.style = `display : none;`;
				pathOne.addEventListener('mousemove', moveTooltip)
			});
		});
	}

}

class BarChart extends Chart {
	constructor(){super()}
}
