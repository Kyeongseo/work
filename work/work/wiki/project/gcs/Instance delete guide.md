                                                                                                IN-Soft 16.06.28
# Instance 삭제 가이드

## 로그인
### http://52.197.36.118/console/
오른쪽 상단의 __로그인__을 클릭합니다.
![1.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/88fdkLARFyLgoGxVCU6z_1.JPG)
```
로그인 아이디 : test01@gcs.co.kr
로그인 암호   : test01@gcs.co.kr
```
![2.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Z8ihXTqQNS1TmOABwsZ3_2.JPG)

__로그인__ 합니다.

---

## 인스턴스 삭제
상단 메뉴의 __서비스 관리__ 에 들어갑니다.

![3.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GFNiAnclRNSTALHudXLG_3.JPG)

왼쪽 바의 __인스턴스 목록__ 에 들어갑니다.

![그림13.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/h0Y48qdJSz2vmVJ35vyS_%EA%B7%B8%EB%A6%BC13.png)

삭제 하고자 하는 인스턴스들을 체크한 후 인스턴스 종료 버튼을 클릭합니다.

![그림14.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/PIpq6WOvS55wj3ZsMVaY_%EA%B7%B8%EB%A6%BC14.png)

팝업창이 뜨면 확인 버튼을 누른 후 인스턴스 목록에서 체크한 인스턴스들이 삭제 되는 동안 대기합니다.

삭제가 완료되면 UCloud Console에 접속하여 해당 인스턴스들이 제대로 삭제되었는지 확인합니다.

- Ucloud Console 사용법은 동영상을 참고 바랍니다.

---

Ucloud Console의 Ucloud server메뉴 제목 우측에 표시되는 개수는 일치하지 않는 경우가 많습니다.
- 웹 UI와 실제 데이터의 동기화가 실시간으로 이루어지지 않습니다.

![그림15.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/nrOiOOdSKQSbZPMbU1Jw_%EA%B7%B8%EB%A6%BC15.png)

Ucloud Console의 Ucloud server > 네트워크 메뉴의 기본 IP는 삭제되지 않으며, Zone마다 하나씩 생성됩니다.

![그림16.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/0ALPBnmiRwCq3CMTf2Zf_%EA%B7%B8%EB%A6%BC16.png)

