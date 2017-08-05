((m) => {
	let module = m || window;
	// 순수 데이터 처리로직
	class JsData {
		constructor(surveyData,surveyActionData) {
			this._rawData = surveyActionData;
			this._subjects = this.makeSubject(surveyData);
			this._checkRules = [];
			this._result = {};
		}
		
		makeSubject(surveyData) {
			let arr = [];
			for(let one in surveyData) {
				if(!(surveyData.hasOwnProperty(one))) continue;
				arr.push(one);
			}
			arr.splice(arr.indexOf("title"),1); 			// title은 날린다.
			return arr;
		}
		
		// 체크 알고리즘을 추가한다.
		addCheckRule(checkRule) {
			this._checkRules.push(checkRule);
		}
		
		// 저장된 체크 알고리즘을 순회한다.
		runCheckRules(oneData, targetRules) {
			let tempResult = [];
			let temp;
			
			for(let i = 0; i < targetRules.length; i++) {
				temp = this._checkRules[i](oneData, targetRules[i])
				if(!temp) return false;
				tempResult.push(temp);
			}
			return tempResult;
		}
		
		// 가공된 데이터의 각 항목 갯수를 카운트 한다.
		enterResultNum(data) {		
			let i = 0, len = data.length-1, temp = this.result['result'];
			for(i; i < len; i++) {
				temp[data[i]] = temp[data[i]] || {};
				temp = temp[data[i]];
			}
			temp[data[i]] = temp[data[i]] ? temp[data[i]] + 1 : 1;
		}
		
		// 해당 데이터를 가져와서 targetRules에 따라서 데이터 가공 하여 갯수를 카운트 한뒤 반환하게 한다.
		getData(targetRules) {
			let len = this._rawData.length, i = 0, temp;
			this.result = {}; // 초기화
            this.result['targetRules'] = targetRules;
            this.result['result'] = {};

			for(i; i < len; i++) {
				temp = this.runCheckRules(this._rawData[i], targetRules);
				if(temp) this.enterResultNum(temp);
			}
			return this.result;
		}
	}
	
	m.JsData = JsData;
	
})(window)