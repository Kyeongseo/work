
                                    IN-Soft 16.06.28
# Instance 생성 가이드
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


## __1. Master Node (HA) 생성__
상단 메뉴의 __서비스 관리__ 에 들어갑니다.

![3.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GFNiAnclRNSTALHudXLG_3.JPG)

왼쪽 바의 __인스턴스 모델 관리__ > __인스턴스 모델 검색__ 에 들어갑니다.

![4.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dhWslx7QWm9eW31lVHNT_4.JPG)

__인스턴스 모델__의 __IRIS-MASTER-HA__를 클릭합니다.

![5-1.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/PaIhe6XRomJwq0ZTpNFg_5-1.jpg)

---
__+ 인스턴스 추가 생성__(초록색 버튼)을 클릭 > 신규 VM 생성 __확인__ 버튼을 누릅니다.
- 화면에서 인스턴스 그룹 설정을 보면 2개의 인스턴스가 생성되도록 설정되어있습니다.

![6.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/b3K7OgHQtB3jOonKNJsA_6.JPG)

#### __Progressbar가 없어질 때까지 대기합니다.__
- VM이 생성되면 자동으로 페이지가 이동합니다. 
- (progress bar가 멈춘 상태에도 페이지 이동이 없다면 상단 탭의 인스턴스 정보를 누르면 확인할 수 있습니다.)

---  

####__인스턴스 상태가 Running, 에이전트 상태가 Verified 될 때까지 기다립니다.__
##### VM 2개 생성과 에이전트 설치까지 약 7분정도 소요됩니다.

![7.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/t7Uv4eO8RpmQnUZFQqXN_7.JPG)

---

### __2. Data Node 생성__
상단 메뉴의 __서비스 관리__ 에 들어갑니다.

![3.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GFNiAnclRNSTALHudXLG_3.JPG)

왼쪽 바의 __인스턴스 모델 관리__ > __인스턴스 모델 검색__ 에 들어갑니다.

![4.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dhWslx7QWm9eW31lVHNT_4.JPG)

__인스턴스 모델__의 __IRIS-DATA__를 클릭합니다.

__+ 인스턴스 추가 생성__(초록색 버튼)을 클릭 > 신규 VM 생성 __확인__ 버튼을 누릅니다.
- 화면에서 인스턴스 그룹 설정을 보면 5개의 인스턴스가 생성되도록 설정되어있습니다.

![그림1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/JeB7laVT0G8avYPQk4cL_%EA%B7%B8%EB%A6%BC1.png)

---

#### __Progressbar가 없어질 때까지 대기합니다.__
VM이 생성되면 자동으로 페이지가 이동합니다. (progress bar가 멈춘 상태에도 페이지 이동이 없다면 상단 탭의 인스턴스 정보를 누르면 확인할 수 있습니다.)

---

#### __인스턴스 상태가 Running, 에이전트 상태가 Verified 될 때까지 기다립니다.__
##### VM 5개 생성과 에이전트 설치까지 약 10분 정도 소요됩니다.

![그림2.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/LYMv4OhR1yQKvnWoji5f_%EA%B7%B8%EB%A6%BC2.png)

---

## 추가 정보
### 인스턴스 그룹 설정
인스턴스 그룹이란?
-	인스턴스 생성(Scale Out)시 인스턴스를 사용자가 입력한 개수만큼 생성합니다.

인스턴스 그룹 변경 방법

1. 인스턴스 모델 상세 정보 화면에서 __편집__ 버튼을 클릭합니다.
2. 인스턴스 그룹 설정 정보를 변경합니다.
3. 저장버튼을 클릭합니다.

- 인스턴스 그룹 설정을 사용 안할 시 인스턴스 생성(Scale Out)시 인스턴스는 1개씩 생성됩니다.
- 인스턴스 그룹 설정의 사용 라디오버튼을 선택하면 인스턴스 그룹 수를 설정할 수 있는 UI가 생성됩니다.

![그림5.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/yWaSSyavSwO7x7t8ZC0q_%EA%B7%B8%EB%A6%BC5.png)

---

### Ucloud에 접속하여 생성정보가 일치하는지 확인
Mysocloud에서 생성된 Instance 정보가 실제 Ucloud상에 생성된 Instance와 정보가 일치하는지 확인이 필요할 경우 아래의 순서로 진행합니다.

1. [Ucloud Biz 홈페이지](https://ucloudbiz.olleh.com/)에 접속합니다.

2. 로그인 합니다.  
ID/PW : coregcs01@gmail.com / asdf12#4

3. 메인페이지 상단탭 우측의 __클라우드 콘솔__을 클릭합니다.
![그림6.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/wke047F8Rcuy1SKKgPTP_%EA%B7%B8%EB%A6%BC6.png)

4. 콘솔 홈이라는 새로운 브라우저가 뜨는걸 확인합니다.
![그림7.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/sTwUdS05Tbyi1BtHtclJ_%EA%B7%B8%EB%A6%BC7.png)

5. 좌측 __Ucloud server__ 하위의 __클라우드 서버__ 메뉴를 클릭합니다.
![그림8.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/etdtLRnTRd6FTYvPa9IQ_%EA%B7%B8%EB%A6%BC8.png)

6. 클라우드 서버 리스트에서 생성된 서버를 클릭하여 하단의 상세정보와 일치하는지 확인합니다.
![그림9.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/mMO7GocRgKOAq241vmyL_%EA%B7%B8%EB%A6%BC9.png)

7. 좌측 __Ucloud server__ 하위의 __네트워크__ 메뉴를 클릭합니다.

8. Mysocloud에서 생성된 인스턴스의 상세 정보 화면에서 외부 접근 IP와 일치하는 네트워크를 선택합니다.
![그림10.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/N04EB7Z7QSeYTKlxzowN_%EA%B7%B8%EB%A6%BC10.png)
![그림11.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/CpibMScQsGsWZg4znAgk_%EA%B7%B8%EB%A6%BC11.png)

9. 하단에 정보표시 탭에서 포트포워딩을 클릭하여 포워딩 리스트에 위의 서버가 등록되어 있는지 확인합니다.
![그림12.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/CaGFXSq1SCCI6s3ntrOy_%EA%B7%B8%EB%A6%BC12.png)

---

### 인스턴스, 에이전트의 상태가 Running, Verified로 변경되지 않을 경우
10분 이상 대기하여도 인스턴스 및 에이전트의 상태가 완료되지 않는 다면 
해당 인스턴스는 __Instance삭제 가이드__를 참고하여 삭제해 주세요.





