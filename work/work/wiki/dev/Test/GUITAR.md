# GUITAR 사용법

##GUITAR 다운로드

http://dev.naver.com/projects/guitar/download/note/5220 
GUITAR 다운로드
http://dev.naver.com/projects/guitar/download/note/5078
설명서 다운로드

-------------------------------------------------------------------------------------------------
##GUITAR 유의사항

다음은 GUITAR 수행하기 전 숙지할 유의사항입니다.

-	GUITAR가 수행될 때는 마우스와 키보드를 조종하므로 가능한 마우스와 키보드를 건드리지 말아야 합니다.

-	아무 행동을 하지 않으면 GUITAR가 이미지를 검색하고 있을 확률이 높습니다. 이런 경우에는 이미지를 찾지 못하거나 기타 다른 원인으로 테스트가 실패 가능성이 높습니다. 이런 경우에는 테스트 실패 메시지를 HTML 레포트로 반환하니 강제로 끄는 작업을 하지 마시고 기다리시길 바랍니다.

- 모니터 디스플레이 설정에서 앱,텍스트 크기 설정을 100%로 하시길 바랍니다. 100%가 아닌 설정으로 되어 있으면 이미지 검색을 하기 힘듭니다.

-----------------------------------------------------------------------------------------------------

##GUITAR 실행

![그림1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/3P6YpLKSyWiJ2SkbyxlK_%EA%B7%B8%EB%A6%BC1.png)
 
윈도우10에서 일반실행을 하면 ERROR 발생. 따라서 관리자 권한으로 실행해야 합니다.

![그림1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/NdqGCPPMTBmmmwcqeqrz_%EA%B7%B8%EB%A6%BC1.png)

확인 후 GUITAR 실행합니다.

----------------------------------------------------------------------------------------------
##GUITAR 첫 화면

다음과 같은 화면이 실행되고 스크립트를 작성합니다. 
 
![그림1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ZjjfpjeQoGrrRhQ8twvA_%EA%B7%B8%EB%A6%BC1.png)
 
 
파란색은 명령이 실행할 타겟, 빨간색을 실행할 명령입니다.
브라우저는 기본적으로 IE, CHROME, FIREFOX, SAFARI 등을 지원합니다.
하지만 현재 CHROME브라우저는 생성 후 URL 주소창을 찾지 못하는 문제가 발생하여 IE로 생성하길 바랍니다.

--------------------------------------------------------------------------------------------
##GUITAR 기본적인 명령어

다음은 기본적으로 많이 사용되는 명령어입니다.
	
  	ex) IE를 생성한다.
	ex) www.naver.com으로 접속한다.
	ex) “버튼”이 있으면 ~
	ex) “버튼”이 없으면 ~
	ex) “버튼”을 클릭한다.
	ex) “버튼”을 확인한다.
  
변수
	$변수이름 = 저장할 값.
	
  	ex) $number = 23으로 설정한다.
  	ex) $text = 블로그 로 설정한다.
  
환경변수
	$GUITAR_~~~
$GUITAR임의값은 사용자가 임의로 값을 넣으라는 의미가 아닌 정말로 등록된 환경변수명입니다. 10자리의 숫자를 반환합니다
	
  	ex) $GUITAR_임의값을 입력한다.
    
  | 를 사용해서 텍스트를 접합시켜 더 풍부한 변수값을 생성할 수 있습니다.
	
  	ex) $random = test_prefix_ | $GUITAR_임의값을 설정한다.
	    $random을 입력한다. ( 결과값 : test_prefix_0123456789 )
      
키보드 명령
	
  	ex) {TAB}을 누른다.
	ex) {DOWN}을 누른다.
	ex) {UP}을 누른다.
	ex) {TAB}을 누른 후 {DOWN}을 누른 후 {DOWN}을 누른 후 {DOWN}을 누른 후 {DOWN}을 누른 후 {ENTER}를 누른다.
  
대기
	대기는 테스트하는 웹브라우저의 로딩이 느려 GUITAR와 시간적 격차가 발생할 때 웹페이지의 로딩을 기다려주기 위한 용도로 사용될 수 있습니다.
	
  	ex) 1초 대기한다.
  
------------------------------------------------------------------------------------------
##이미지 캡쳐 방법

다음은 이미지를 캡쳐하는 법을 살펴보겠습니다.

![그림1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/B8NKwKFpTaCpXDraJ7gr_%EA%B7%B8%EB%A6%BC1.png)
 
캡쳐 버튼을 클릭해서 캡쳐를 시작합니다.
캡쳐할 이미지의 좌상단에 마우스를 위치하고 Ctrl + Shift + x 를 클릭해서 캡쳐를 시작하고 Ctrl + Shift + x를 클릭해서 캡쳐를 마칩니다.

![그림1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/SU3btp3vRN2Y8H8t7AC7_%EA%B7%B8%EB%A6%BC1.png)

캡쳐를 끝마치면 그림판에 본인이 캡쳐한 이미지가 올라오는데, 그림판을 취소하고 GUITAR Capture 에서 스크립트에서 사용할 파일명을 설정하고 저장하시면 캡쳐가 완료됩니다.
이렇게 생성된 이미지들은 모두 C:/GUITAR/DATA/Image 폴더에 저장됩니다.

캡쳐한 이미지는 다음과 같이 스크립트에서 사용될 수 있습니다.
		
    ex) “캡쳐한 이미지 이름“을 클릭한다.
  
![그림1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/jxHTRJeoRyaXCTfldgiJ_%EA%B7%B8%EB%A6%BC1.png)

--------------------------------------------------------------------------------------------
##인접 이미지 캡쳐

다음은 인접한 이미지를 기반으로 탐색해 명령을 수행하는 방법입니다.
 
![그림1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/xjjYC2rWTol9Z0aseZCP_%EA%B7%B8%EB%A6%BC1.png)

	ex) “인접한 이미지, 명령을 수행할 이미지”를 클릭한다.
  
이렇게 “인접한 이미지”를 나열한 후 “명령을 수행할 이미지”를 가장 마지막에 작성하시면 됩니다. 단 인접한 이미지들은 서로 20px 안으로 인접해 있어야 입접하다고 인식이 되므로 캡쳐를 하실 때 이 조건에 맞도록 주의하셔야 합니다.

캡쳐한 이미지들은 모두 C:/GUITAR/DATA/Image 폴더에서 관리되고,
다음 그림과 같이 IMG관리에서 이름과 위치를 확인할 수 있습니다. 이곳에서 이름을 확인한 후 스크립트에서 사용하시면 됩니다.

![그림1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/21chkJY2Ro2D4a7owuug_%EA%B7%B8%EB%A6%BC1.png)

-----------------------------------------------------------------------------
Mysocloud 인스턴스 생성 스크립트 및 이미지

스크립트(.txt 파일)는 GUITAR/DATA 폴더에 위치시키고
이미지는 GUITAR/DATA/image 에 위치시키면 됩니다.

구글 공유 링크입니다.
https://drive.google.com/a/in-soft.co.kr/file/d/0Bzay3unZ1ArldG96MzZ5SGp1N0E/view?usp=sharing