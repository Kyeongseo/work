# 위자드 템플릿 사용 가이드 
## Dependency
- Core FrameWork
    + angular.js
    + bootstrap.js
    + bootstrap.css
    
--- 
- mainWizardTemplate
    + smWizard.css
    + smWizard.html
    + smWizardDirective.js
    + smWizardDirectiveCtrl.js

---
- images (optional)
    + awesome font (check 표시)
    + metornic syncfusion-icons-white.png (하단 버튼의 화살표)

## Directive 적용
- restrict
    + EACM
- replace
    + true
- attribute
    + data
- Element restrict 사용 예
    + ``` $scope.wizardData = {...}; ```
    + ``` <sm-wizard-directive data="wizardData"></sm-wizard-directive> ```
    + data attrubite에 wizardTemplate정의 wizardData(Json Data - 아래에서 설명)가 들어갑니다.

## WizardData 정의
- title
    + String
    + 위자드 제목
- end_index
    + String
    + 위자드 서브밋이 가능한 목차
- submitOption
    + Object
        * type : form, controller
            - String
        * action : sumit url, $scope.functionName
            - String
    + 서브밋 버튼 클릭 시 폼값을 form의 action url로 보낼 것 인지 함수를 지정하여 콜백 받을 것인지 선택
- itemContents
    + Array
    + 위자드의 입력 필드 목록
- itemContents >
    * title
        - String
        - 위자드 Step 제목
    * subTitle
        - String
        - 위자드 필드의 제목
    * contents
* itemContents > contents   
    - Array
        + label
            * String
            * 입력 필드의 제목
        + form
* itemContents > contents > form
    * Object
        - type : text, password, checkbox, radio, select
            + String
        - help: 입력 필드의 설명
            + String
        - name: 입력 필드의 Key값 (Unique)
            + String
            + checkbox Type 시 Array
        - value: 입력 필드의 기본 값
            + String
            + 기본값이 없을시 빈문자열 사용 ("")
            + checkbox Type 시 Array
        - *values: radio Type 사용 시 필요
            +  Array
            +  radio버튼 별 값
        - *serverData: server에서 Data를 받아와 입력필드를 구성해야 할 경우 사용하는 값
            + 현재 Select Type만 사용가능함
* itemContents > contents > form > Object > serverData
    * use : true, false
        - Boolean
    * options
        - use : false의 경우
            + Array
            + select 의 option값 목록
            + name: select의 label 값
            + value: select초기 선택 값(일치하는 값이 없을 시 선택해주세요 text표시)
        - use : true의 경우
            + Object {url: "", optionData: funtionName(returnType : array)}
            + url : select 의 option값을 받아올 수 있는 url
            + optionData : server에서 받아온 값을 array형태로 리턴해주는 scope함수 (restfull return값이 각기 다른 경우가 있기에 사용)


## WizardData Sample
- submitOption : form , serverData : {use: false } 시
```
{
    "title": "위자드 테스트",
    "end_index": "2",
    "submitOption": {
        "type": "form",
        "action": "/"
    },
    "itemContents": [{
        "title": "테스트 01",
        "subTitle": "텍스트 입력 필드",
        "contents": [{
            "label": "이름",
            "form": {
                "type": "text",
                "help": "이름을 입력하세요",
                "name": "user_name",
                "value": "park"
            }
        }, {
            "label": "나이",
            "form": {
                "type": "number",
                "help": "나이를 입력하세요",
                "name": "user_age",
                "value": 29
            }
        }, {
            "label": "email",
            "form": {
                "type": "email",
                "help": "email 입력하세요",
                "name": "user_email",
                "value": "123@a.a"
            }
        }, {
            "label": "password",
            "form": {
                "type": "password",
                "help": "password 입력하세요",
                "name": "user_password",
                "value": "123123123"
            }
        }]
    }, {
        "title": "테스트 02",
        "subTitle": "체크 박스",
        "contents": [{
            "label": "checkboxTest",
            "form": {
                "type": "checkbox",
                "help": "선택하세영",
                "name": ["user_checkbox01", "user_checkbox02"],
                "value": [false, true]
            }
        }]
    }, {
        "title": "테스트 03",
        "subTitle": "라디오 버튼",
        "contents": [{
            "label": "radioButton Test",
            "form": {
                "type": "radio",
                "help": "선택하세요.",
                "name": "user_selectedRadio",
                "values": ["1", "2"],
                "value": "2"
            }
        }]
    }, {
        "title": "테스트 04",
        "subTitle": "셀렉트 박스",
        "contents": [{
            "label": "국가 선택",
            "form": {
                "type": "select",
                "help": "사용자의 국가",
                "name": "user_selectedCombobox",
                "serverData": {
                    "use": false,
                    "options": [{
                        "name": "미국",
                        "value": "us"
                    }, {
                        "name": "한국",
                        "value": "korea"
                    }]
                },
                "value": ""
            }
        }]
    }]
}
```
- submitOption : controller , serverData : {use: true } 시
```
{
	"title": "위자드 테스트",
	"end_index": "2",
	"submitOption": {
		"type": "controller",
		"action": "returnData"
	},
	"itemContents": [{
		"title": "테스트 01",
		"subTitle": "텍스트 입력 필드",
		"contents": [{
			"label": "이름",
			"form": {
				"type": "text",
				"help": "이름을 입력하세요",
				"name": "user_name",
				"value": "park"
			}
		}, {
			"label": "나이",
			"form": {
				"type": "number",
				"help": "나이를 입력하세요",
				"name": "user_age",
				"value": 29
			}
		}, {
			"label": "email",
			"form": {
				"type": "email",
				"help": "email 입력하세요",
				"name": "user_email",
				"value": "123@a.a"
			}
		}, {
			"label": "password",
			"form": {
				"type": "password",
				"help": "password 입력하세요",
				"name": "user_password",
				"value": "123123123"
			}
		}]
	}, {
		"title": "테스트 02",
		"subTitle": "체크 박스",
		"contents": [{
			"label": "checkboxTest",
			"form": {
				"type": "checkbox",
				"help": "선택하세영",
				"name": ["user_checkbox01", "user_checkbox02"],
				"value": [false, true]
			}
		}]
	}, {
		"title": "테스트 03",
		"subTitle": "라디오 버튼",
		"contents": [{
			"label": "radioButton Test",
			"form": {
				"type": "radio",
				"help": "선택하세요.",
				"name": "user_selectedRadio",
				"values": ["1", "2"],
				"value": "2"
			}
		}]
	}, {
		"title": "테스트 04",
		"subTitle": "셀렉트 박스",
		"contents": [{
			"label": "사용자 목록",
			"form": {
				"type": "select",
				"help": "사용자 목록",
				"name": "user_selectedCombobox",
				"serverData": {
					"use": true,
					"options": {
						"url": "/v1.0/certify/user",
						"optionData": "selectOption"
					}
				},
			}
		}]
	}]
}
```

## Wizard Test
- Login 후 좌측 메뉴의 Wizard Test 선택
- textarea에 원하는 wizard형태의 json Data 입력
- draw Wizard 버튼 클릭
- json data와 일치하는 wizard가 출력되는지 확인
   
