# 개발표준정의서(JavaScript)


## 문서 개요
본 표준은 프로젝트 내부에서 작성되는 모든 자바스크립트 프로그램이 공통된 구조와 형태를 가지도록 하여 프로그램의 유지보수 비용을 절감하고 생산성과 품질을 높이기 위해 작성되었습니다.   
개발자가 표준에서 정한 규칙에 따라 작업을 진행하면 쉽게 저지를 수 있는 실수가 줄어들고 일관성이 있는 코드를 작성하게 됩니다. 또한 코드가 읽기 편하게 되기 때문에 팀원 중의 누가 코드를 수정하거나 새로운 코드를 추가하더라도 빠르게 작업할 수 있게 됩니다.   


## 명명 규칙


### 기본 규칙

-	대상의 용도 및 목적을 정확하게 기술하는 서술자를 사용합니다
-	가독성 향상을 위해 영문 대/소문자를 혼합하는 낙타 표기법을 사용합니다
  - 낙타 표기법(Camel Casing Notation)은 두 개 이상의 단어로 이루어진 변수 이름에서 각 단어의 첫 글자는 소문자로 표기하고 나머지는 모두 대문자로 시작하는 방식을 말합니다

```javascript
var firstName;
var grandTotal;
var coporateCustomer;
var getUserId = function() {
    // ...
};
```

-	필요 이상의 긴 이름 사용을 지양합니다

```javascript
// 나쁜 예
PhysicalOrVirtualProductOrService

// 좋은 예
Offering 
```

-	단어 사용시 축약되지 않은 형태로 사용하되, 이름이 너무 길어지는 경우에 한하여 축약된 형태를 사용합니다

```javascript
// 나쁜 예
insertAccountNumberToDatabase

// 좋은 예
insertAccoutNoToDb

// 나쁜 예
com.smart.projectstandard.technologystandard.language

// 좋은 예
com.smart.prjstd.techstd.lang
```

-	약어 사용이 일반적인 경우 약어를 사용합니다

```javascript
var id, db, api;
```

-	표준화된 약어는 첫 글자만 대문자를 사용합니다
- 변수/함수명 중간에 약어를 사용할 경우에도 낙타 표기법을 사용합니다

```javascript
// 나쁜 예
userID, getID, sQLDB, SQLDB, findAWSKey

// 좋은 예
userId, getId, sqlDb, findAwsKey
```

-	약어 사용시 일관성 있게 사용합니다

```javascript
// 나쁜 예
var backNbr, serialNum, productNo; // number 약어 사용시, nbr, num, no의 혼용 지양
```


### 함수

-	첫 단어는 소문자로 시작하는 동사를 사용하여 변수와 쉽게 구분되도록 하며, 이후 각 단어는 대문자로 시작하는 낙타 표기법을 사용합니다

```javascript
createUserAccount(), printMailingLabel(), save(), remove();
```

-	단어 조합 시 다음과 같은 형태로 작성합니다
  -	동사 + 명사
  -	동사 + 형용사 + 명사
  -	동사 + 명사 + 전치사 + 명사

```javascript
addMember()
getLastRow()
insertDataToDb()
```

-	"-", "_", "$" 문자의 사용은 금지합니다

```javascript
open_Account(), $openAccount()
```

-	getter 메소드는 "get + field name"의 형태로 이름을 부여하며, field name의 첫 단어는 대문자로 시작합니다
-	boolean 값을 반환하는 메소드는 "get" 대신 "is", "has", "can"을 사용합니다

```javascript
getFirstName(),  getAccountNumber() 

// boolean 값을 반환하는 경우
isPersistent(), isAtEnd(), hasChildren()
```

-	setter 메소드는 "set + field name"의 형태로 이름을 부여하며, field name의 첫 단어는 대문자로 시작합니다

```javascript
setFirstName(name), 
setAccountNumber(accountNumber)
```


### 변수

-	첫 단어는 소문자로 시작하는 단어를 사용하고 이후 단어는 대문자로 시작하는 낙타 표기법을 사용합니다

```javascript
firstName, unitPrice
```

-	단어 조합 시 다음과 같은 형태로 작성합니다
  -	명사 + 명사
  -	형용사 + 명사
  -	명사 + 전치사 + 명사

```javascript
memberId
firstClass
numberOfClass
```

-	"-", "_", "$" 문자의 사용은 금지합니다

```javascript
// 나쁜 예
first-name, $price, _name

// 좋은 예
firstName, price, name                    
```

-	관습적으로 Loop counter로 사용하는 i, j, k를 변수명으로 사용하는 것을 허용합니다

```javascript
var i;
for (i = 0 ; i < 10 ; i++) {
    // do something
}
```

-	예외(exception) 객체명은 error를 사용합니다

```javascript
try {
    // doSomething()
} catch (error) {
    // 
}
```

-	배열 변수의 이름은 복수형을 사용합니다

```javascript
var names = [];
var objects = [];
```


### 매개변수(parameter)

- 변수의 명명 규칙을 따릅니다


### 상수

-	모든 문자를 대문자를 쓰고, 단어와 단어 사이는 밑줄로 연결합니다

```javascript
MINIMUM_BALANCE, MAX_VALUE, DEFAULT_START_DATE
```


### 생성자 함수

-	영문 대문자로 시작하는 명사를 사용, 이후 각 단어는 영문 대문자로 시작합니다(PascalCasing)

```javascript
Customer, OrderItem, ImageSprite
```


## 선언


### 변수

-	변수는 꼭 선언해야 하며, 암묵적인 전역 변수는 절대 사용하지 않습니다

```javascript
// 나쁜 예
// j, length는 선언하지 않고 값을 할당한 암묵적 전역 변수
function doSomethingWithItems(items) {
    var i = j = 0;

    for (i = 0, length = items.length; i < length; i++) {
        doSomething(items[i]);
    }
}
```

-	모든 변수는 언제나 함수 최상단에서 선언합니다
-	자바스크립트에는 블록 단위(if, for 문 등) 변수가 없기 때문에, 위의 원칙은 블록 단위에서 사용하는 변수를 포함한 모든 변수에 적용됩니다

```javascript
// 나쁜 예
function doSomethingWithItems(items) {
    
    for (var i = 0, length = items.length; i < length; i++) {
        doSomething(items[i]);
    }
}

// 좋은 예
function doSomethingWithItems(items) {
    var i,
        length;

    for (i = 0, length = items.length; i < length; i++) {
        doSomething(items[i]);
    }
}
```

-	변수는 한 개의 var 문을 이용해 변수마다 한 줄씩 선언합니다
-	두 번째 줄부터는 한 단계 들여쓰기를 하여 변수명의 열을 맞춥니다
-	초기화하지 않은 변수는 가장 마지막 줄에 둡니다
-	변수는 언제나 적절한 값이나 null로 초기화하여 사용합니다
-	단, for 문 등 복합문에서 초기화와 동시에 사용하는 경우에는 선언을 먼저 하고 사용할 때 초기화하는 것을 허용합니다

```javascript
// 좋은 예
var firstName = "John",
    lastName = "Doe",
    length,
    i;

// 나쁜 예
var fistName = "John", lastName = "Doe",
    length, i;

// 나쁜 예
var firstName = "John",
lastName = "Doe",
length,
i;

// 나쁜 예
var length,
    i,
    firstName = "John",
    lastName = "Doe";
```


### 함수

-	함수는 선언하기 전에 먼저 사용하지 않습니다
-	자바스크립트 엔진은 함수 선언을 최상단으로 끌어올리기 때문에 선언하기 전에도 사용은 가능하지만 이런 식의 사용은 금지합니다

```javascript
// 나쁜 예
doSomething();

function doSomething() {
    // do something
}
```

-	함수는 블록 안에서 선언하지 않습니다
-	좌측 예제의 코드를 실행하면, 대부분의 브라우저는 조건문과 상관없이 첫 번째 함수를 무시하고 두 번째 함수를 선택합니다

```javascript
// 나쁜 예
if (condition) {
    function doSomething() {
        // do something
    }
} else {
    function doSomething() {
        // do something
    }
}
```

-	함수를 호출할 때는 함수명과 괄호 사이에 공백을 입력하지 않습니다

```javascript
// 좋은 예
doSomething(item)

// 나쁜 예
// 복합문처럼 보임
doSomething (item)
```

-	선언과 동시에 함수를 호출하는 경우에는 함수의 앞뒤에 괄호를 추가합니다

```javascript
// 나쁜 예
// 변수에 익명 함수를 할당하는 것으로 착각하기 쉬움
var User = function() {
    return {
        id: "1",
        name: "John"
    }
}();

// 좋은 예
var User = (function() {
    return {
        id: " 1",
        name: "John"
    }
})();
```


## 문장과 표현식


### 단순문

-	한 줄에는 한 문장만 씁니다

```javascript
// 좋은 예
argv++; 
argc--;

// 나쁜 예 
argcv++; argc--;
```


## 복합문

-	다음의 모든 복합문에는 중괄호를 꼭 사용합니다
  -	if
  -	for
  -	while
  -	do ... while
  -	try ... catch ... finally

```javascript
// 나쁜 예
if (condition)
    doSomething();

// 나쁜 예
if (condition) doSomething();

// 좋은 예
if (condition) {
    doSomething();
}
```

-	시작 중괄호는 복합문이 시작하는 줄에 입력합니다

```javascript
// 나쁜 예
if (condition)
{
    doSomething();
}
else
{
    doSomethingElse();
}

// 좋은 예
if (condition) {
    doSomething();
} else {
    doSomethingElse();
}
```

-	복합문을 시작하는 괄호를 열기 전과 닫은 후에는 공백을 하나씩 입력합니다

```javascript
// 좋은 예
if (condition) {
    doSomething();
}

// 나쁜 예
if(condition){
    doSomething();
}

// 나쁜 예
if ( condition ) {
    doSomething();
}
```


### return 문

-	괄호를 사용하지 않는 것을 원칙으로 하며, 반환 값을 명확하게 하기 위한 경우에는 괄호를 사용합니다

```javascript
return;
return myDisk.size();
return (size ? size : defaultSize);
```


### with 문

- with 문은 문맥 파악을 어렵게 하기 때문에 사용을 금지합니다


### for 반복문

-	continue 문의 사용은 지양하며, continue 문 대신 조건문을 사용하는 것을 권장합니다

```javascript
var values = [1, 2, 3, 4, 5, 6, 7];
    i,
    len;

// 나쁜 예
for (i = 0, len = values.length; i < len; i++) {
    if (i != 2) {
        continue;
    }
    process(values[i]);
}

// 좋은 예
for (i = 0, len = values.length; i < len; i++) {
    if (i != 2) {
        process(values[i]);
    }
}
```


### for ... in 반복문

-	for ... in 반복문을 사용할 때는 반드시 hasOwnProperty() 메서드를 사용하여 현재 인스턴스의 프로퍼티만을 걸러냅니다
-	프로토타입 체인의 모든 프로퍼티를 대상으로 for ... in 반복문을 사용하는 특수한 경우에는 꼭 주석을 달아서 설명합니다

```javascript
var property;

for (property in object) {
    if (object.hasOwnProperty(property)) {
        // do something
    }
}
```


### switch 문

-	switch 문 안의 각 case 문은 한 단계 들여쓰기 하며, 첫 번째 case 문을 제외한 나머지 case 문과 default 문의 시작 전에 빈 줄을 삽입합니다
-	모든 case 문은 break, return, throw로 마쳐야 합니다
-	불가피하게 다음 case 문까지 실행하는 case 문을 사용해야 하는 경우에는 주석을 달아서 그 의도를 명확하게 해야합니다
-	switch 문에 default 케이스가 필요 없다면 주석을 달아서 이를 알려야 합니다

```javascript
// 좋은 예
switch (condition) {

    // 다음 case 문에서 처리
    case "first":
    case "second":
        doSomething();
        break;

    case "third":
        return true;

    default:
        throw new Error("여기까지 실행되면 안됩니다.");
}

// 나쁜 예
switch (condition) {
    case "first":
        doSomething();
        break;
    case "second":
        return true;
}

switch (condition) {
    case "first":
    case "second":
        doSomething();
        break;
    
    case "third":
        return true;
}
```


## 들여쓰기

-	들여쓰기는 공백 4개를 사용합니다
-	탭은 사용하지 않습니다(탭 사용 시 공백 4개가 들어가도록 에디터 설정을 변경하세요)

```javascript
// 좋은 예
if (true) {
    doSomething() {
        doAnother();
    }
}
```

-	한 줄은 최대 140자입니다
-	줄 길이가 140자를 넘어가면 연산자(콤마, 더하기) 뒤에서 줄을 바꿉니다

```javascript
// 좋은 예
doSomething(argument1, argument2, argument3, 
        argument4, argument5, argument6);

// 나쁜 예
doSomething(argument1, argument2, argument3
        , argument4, argument5, argument6);
```


## 공백

-	주석 전에는 빈 줄 추가합니다

```javascript
switch (condition) {
    ▨
    // 다음 case 문으로 넘깁니다
    case "first":
    case "second":
        ▨
        // do something

    default:
        throw new Error("여기까지 실행되면 안됩니다.");
}    
```

-	메소드 사이에는 빈 줄을 추가합니다

```javascript

someMethod() {
    var localVar1;

    // do something
}
▨
anotherMethod() {
    var localVar2;

    // do something
}
```

-	메서드 안의 지역 변수와 첫 번째 문장 사이에는 빈 줄을 추가합니다

```javascript
doSomething() {
    var userName = "John",
        age = 20,
        address = null;
    ▨
    if (age < 30) {
        // do something
    }
}
```

-	논리적으로 관련 있는 코드들을 분류하기 위해서 빈 줄을 사용합니다

```javascript
function bar(p) {
    var i;
    for (i = 0; i < 10; i++) {
        // do something
    }
    ▨
    switch (p) {
        case 0:
            map.set(0);
            break;

        case 1:
            break;

        default:
            map.reset();
    }
}
```


### Blank spaces

-	복합문을 시작하는 괄호를 열기 전과 닫은 후에는 공백을 하나씩 입력합니다

```javascript
// 좋은 예
if▨(condition)▨{
    doSomething();
}

// 나쁜 예
if(condition){
    doSomething();
}

// 나쁜 예
if▨(▨condition▨)▨{
    doSomething();
}
```

-	각 매개변수를 구분하는 콤마 뒤에는 공백을 하나씩 입력합니다

```javascript
doSomething(param1,▨param2,▨param3);
```

-	할당 연산자와 논리 연산자를 두 개의 피연산자에 사용할 때는 연산자의 앞뒤에 공백을 입력합니다

```javascript
// 좋은 예
var found = (values[i]▨===▨item);

// 좋은 예
if (found▨&&▨(count▨>▨10)) {
    // do something
}

// 좋은 예
a += c▨+▨d;
a = (a▨+▨b)▨/▨(c▨*▨d);

// 나쁜 예
if (found &&(count>10)) {
    // do something
}

// 나쁜 예
for (i=0; i<count; i++) {
    process(i);
}
```

-	for 문장 내의 표현식은 공백으로 분리합니다

```javascript
for (expr1;▨expr2;▨expr3)
```


## 기타 (프로그래밍 관례)

-	문자열을 감싸는 따옴표는 반드시 큰따옴표를 사용합니다

```javascript
// 좋은 예
var userName = "John";

// 나쁜 예
var userName = 'John';
```

-	8진수는 사용하지 않습니다

```javascript
// 나쁜 예
// 십진수 10이 아니라 8진수 8을 의미한다
var num = 010;
```

-	소수점이 숫자 앞이나 뒤에 있으면 안됩니다

```javascript
// 나쁜 예
var num = 10.;
var num = .1;

// 좋은 예
var num = 10.0;
var num = 10.00;
```

-	undefined는 사용하지 않습니다
-	객체 타입의 변수를 선언만하고 값은 나중에 대입하는 경우에는 null로 변수를 초기화합니다
-	부득이한 경우(외부 라이브러리 사용 등)에 변수가 정의 되었는지 확인하고 싶을 때는 typeof 연산자를 사용합니다

```javascript
// 좋은 예
if (typeof variable == "undefined") {
    // do something
}

var num = 10,
    userName = "John",
    user = null,
    company = null;

// 나쁜 예
if (variable == undefined) {
    // do something
}
```