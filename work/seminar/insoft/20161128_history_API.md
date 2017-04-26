History
===

- history 인터페이스는 브라우저의 세션 히스토리를 조작할 수 있게 합니다. 세션 히스토리에는 탭에서 방문했던 페이지들이나, 현재 페이지가 로딩된 프레임들이 포함됩니다.

---
__Properties__

- history 인터페이스는 어떤 속성도 상속받지 않습니다.

- history.length
	- 세션 히스토리의 현재 로딩된 페이지를 포함한 요소 숫자들을 반환.
	- 새로운 탭의 로딩된 페이지는 1을 반환.

- history.scrollRestoration
	- 웹 어플리케이션에서 히스토리 네비게이션의 default 스크롤 복원 기능을 명시적으로 선언합니다. 이 속성은 auto, manual이 있다.

- history.state
	- 히스토리 스택의 가장 상위에 있는 상태 값을 반환. popstate 이벤트 콜 없이 바로 상태를 볼 수 있는 방법.


- history.current, next, previous > 더이상 안씀.

---
__Method__

- history 인터페이스는 어떤 메서드도 상속받지 않습니다.

- history.back()
	- 세션 히스토리의 이전 페이지로 갑니다. 브라우저 백버튼을 눌렀을 때와 똑같은 효과. == history.go(-1)
	- 세션 히스토리에서 첫번째 페이지를 벗어나면 아무 효과가 없으며 예외가 발생하지 않습니다.

- history.forward()
	- 세션 히스토리의 다음 페이지로 갑니다. 브라우저 앞으로가기 버튼을 눌렀을 때와 같은 효과. == history.go(1)
	- 세션 히스토리에서 가장 최근 페이지에서 이 메소드를 호출하면 아무 효과가 없으며 예외가 발생하지 않습니다.

- history.go()
	- 세션 히스토리의 특정 페이지롤 로딩합니다. 현재 페이지의 상대적인 위치에 따라 페이지의 순서가 정의됩니다. (ex. -1은 이전페이지, 1은 다음페이지) 만약 세션 히스토리의 방문 페이지가 없을 경우, out-of-bound 값을 지정한다면 이 메서드는 아무 기능도 하지 않습니다. 변수 값을 넘기지 않거나, 0의 값을 가진 go()메서드는 현재 페이지를 재로딩 합니다. // ie 에서는 비표준이다.

- history.pushState()
	- 지정한 타이틀과 URL을 세션 히스토리 스택에 밀어 넣습니다. 만약 데이터가 DOM에 의해 이해하기 어렵다고 간주되면 사용자는 동기화를 위한 javascript 객체를 지정해야합니다.
	- The pushState(state, title, url) method adds a state object entry to the history.
		- state : pushState에 의해 생성된 새로운 history entry를 포함하고있는 자바스크립트 객체. 사용자가 새로운 상태로 이동할 때 마다, popstate 이벤트가 발생하고, 이 이벤트의 state 프로퍼티는 history entry's state 객체를 포함.
		- title : firefox는 title 변수 무시.
		- url : default// 현재 사용하는 URL. 
	- window.onpopstate()와 연관.
	- http 헤더안에 referer 변경 가능.

- history.replaceState()
	- 특정 데이터, 제목 밑 URL을 히스토리 스택에서 가장 최신 엔트리로 수정합니다. 만약 데이터가 DOM에 의해 이해하기 어렵다고 간주되면 사용자는 동기화를 위한 javascript 객체를 지정해야합니다. // firefox는 title 변수 무시.
	- The replaceState(data, title, url) method updates the state object, title, and optionally the URL of the current entry in the history.
	- window.onpopstate()와 연관.
	- 새로운 히스토리를 생성하는 대신 현재의 히스토리 엔트리를 변경.(global browser history에서는 새로운 엔트리 생성.)
	- state 객체나 사용자의 동작에 따라 현재 히스토리 엔트리 URL 업데이트시 유용.

---
popstate 이벤트
- 활성화된 히스토리 엔트리에 변화가 있을 때 마다 실행. pushState, replaceState 함수에 의해 현재 활성화 되어있는 히스토리 엔트리가 조작 및 변경 된다면, popstate 이벤트의 state 객체는 히스토리 엔트리의 state 객체에서 복사.
- The event occurs when the window's history changes