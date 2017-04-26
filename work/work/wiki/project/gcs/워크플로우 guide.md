                                                                                                IN-Soft 16.06.28
# 워크플로우 가이드

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

## Master Node HA구성
상단 메뉴의 __서비스 관리__ 에 들어갑니다.

![3.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GFNiAnclRNSTALHudXLG_3.JPG)

왼쪽 바의 __인스턴스 모델 관리__ > __인스턴스 모델 검색__ 에 들어갑니다.

![4.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dhWslx7QWm9eW31lVHNT_4.JPG)

__인스턴스 모델__의 __IRIS-MASTER-HA__를 클릭합니다.

![5-1.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/PaIhe6XRomJwq0ZTpNFg_5-1.jpg)

상단 실행워크플로우(들)탭을 클릭합니다.
<a id="autoPlay" href="#autoPlay-dec">자동실행 상태(None)</a>으로 되어 있는지 확인합니다.

![그림17.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/7iiNKhYFRi6zUpkj3izO_%EA%B7%B8%EB%A6%BC17.png)

등록되어있는 워크플로우(__IRIS-MASTER-HA__)를 클릭합니다.

워크 플로우 디자이너 화면에서 2번째 이벤트(set master node config)의 편집 버튼을 클릭합니다.

![그림19.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/tWRtQmeFS88aZ22QkXGa_%EA%B7%B8%EB%A6%BC19.png)

스크립트 편집 화면에서 파라미터 목록 조회 탭을 클릭 합니다.

![그림20.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/L58VYUZ8Rb6FhP8j0dYL_%EA%B7%B8%EB%A6%BC20.png)

기작성 되어있는 파라미터 중 activeNodeIp, standbyNodeIp에 해당 인스턴스 모델로 생성 된 인스턴스들의 내부 IP를 active, standby역할에 알맞게 넣어 줍니다.
- masterVip항목은 수정하지 않습니다.
- <p id="changeVip">masterVip항목 수정시 [vip변경하기](#changeVip-dec)를 참고하세요.</p>

![그림21.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/mX73g2oTps0pvHTTMwwE_%EA%B7%B8%EB%A6%BC21.png)

수정이 완료되었으면 다시 인스턴스 모델 > 실행 워크플로우 화면으로 돌아가 __IRIS-MASTER-HA__ 워크 플로우의 실행 버튼을 클릭합니다.

![그림22.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/LN0D18tXSsmylbYbrCmp_%EA%B7%B8%EB%A6%BC22.png)

인스턴스 선택 창이 뜨면 모든 인스턴스에 체크한 후 선택 버튼을 클릭 > 컨펌창 > 확인 버튼 클릭합니다.

![그림23.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/s2AtC2lWQ2S0jMAPj03o_%EA%B7%B8%EB%A6%BC23.png)

워크 플로우 진행 사항이 우측 상단에 표시되며, 실행 이력버튼을 클릭하면 서비스 로그 보기 화면에서 진행 사항을 확인 할 수 있습니다.
- 서비스 로그화면에서는 아직 워크플로우 진행사항에 맞게 동기화되어 결과가 화면에 표시되지 않습니다.
- 리프레쉬 필요

![그림24.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/lffUi3G6T3GFqFfhhXGn_%EA%B7%B8%EB%A6%BC24.png)

![그림25.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/UrwnPGvlTluHQ1BBLvdO_%EA%B7%B8%EB%A6%BC25.png)

Master Node HA구성이 완료되면 Data Node구성으로 넘어갑니다.

## Data Node 구성

상단 메뉴의 __서비스 관리__ 에 들어갑니다.

![3.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GFNiAnclRNSTALHudXLG_3.JPG)

왼쪽 바의 __인스턴스 모델 관리__ > __인스턴스 모델 검색__ 에 들어갑니다.

![4.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dhWslx7QWm9eW31lVHNT_4.JPG)

__인스턴스 모델__의 __IRIS-DATA__를 클릭합니다.

기생성 되어 있는 __IRIS-DATA__ 워크 플로우의 실행 버튼을 클릭합니다.

데이터 노드로 사용할려는 인스턴스들을 체크한 후 선택 버튼 >  컨펌창  > 확인 버튼 클릭합니다.

워크 플로우 진행 사항이 우측 상단에 표시되며, 실행 이력버튼을 클릭하면 서비스 로그 보기 화면에서 진행 사항을 확인 할 수 있습니다.

**여러개의 인스턴스를 다중선택하여 동시에 IRIS-DATA 워크 플로우를 적용하면 IRIS NODE ID가 중복되는 경우가 발생합니다.**
**하나의 인스턴스씩  IRIS-DATA 워크 플로우를 적용하길 권장합니다.**

![그림26.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Bn34VWnWQQSMX9clDOLl_%EA%B7%B8%EB%A6%BC26.png)



모든 인스턴스에 워크플로우 실행이 완료되면 IRIS가 정상적으로 기동하는지 확인합니다.

## IRIS 기동 확인 

IRIS의 액티브 마스터 노드로 사용한 인스턴스의 상세 정보 페이지로 이동하여 외부 접근 IP를 확인합니다.

![그림27.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/sgiNIpYSSwaAOk4ZY1lO_%EA%B7%B8%EB%A6%BC27.png)

해당 ip에 ssh로 접속하여 iris의 기동 상태를 확인합니다.

```
$ ssh root@14.63.227.239
root@14.63.227.239's password:
[root@IRIS-MASTER-HA-20160628-085307-454-0-C2 ~]# su - iris
[iris@IRIS-MASTER-HA-20160628-085307-454-0-C2 ~]$ ntop
    NODE_ID,  SYS_STATUS,  ADM_STATUS,     UPDATE_TIME,         IP     ,  CPU(%), LOADAVG, MEM:P(%), MEM:F(%), DISK(%)
=======================================================================================================================
NODE:     0,       VALID,      ENABLE,  20160629111503,    172.27.0.170,    2.61,    0.00,     9.15,     0.00,   11.97
NODE:     1,       VALID,      ENABLE,  20160629111501,     172.27.0.94,    3.91,    0.00,     7.96,     0.02,   12.25
NODE:     2,       VALID,      ENABLE,  20160629111500,    172.27.0.185,    0.90,    0.00,     7.98,     0.02,   12.25
NODE:     3,       VALID,      ENABLE,  20160629111504,    172.27.0.201,    2.40,    0.00,     8.00,     0.02,   12.25
NODE:     4,       VALID,      ENABLE,  20160629111501,     172.27.0.35,    0.30,    0.00,     7.96,     0.02,   12.25
```
---

## 추가 정보

<p id="autoPlay-dec"><a href="#autoPlay"> <i class="fa fa-undo" aria-hidden="true"></i> </a> 자동 실행 상태란?</p>
인스턴스의 상태에 따라 워크플로우가 자동으로 실행 되는 기능

![그림28.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/efUsgb5VSm6BlLRLF4Sq_%EA%B7%B8%EB%A6%BC28.png)

---

<p id="changeVip-dec"><a href=#changeVip> <i class="fa fa-undo" aria-hidden="true"></i> </a> VIP 변경하기</p>
Vip가 변경되었거나, 이미 사용중이라 새로 추가하여 적용하여야 할 경우 아래와 같이 진행한다.

1. [ucloud](https://ucloudbiz.olleh.com/) 홈페이지에 접속하여 로그인한다.
2. 상단의 클라우드 콘솔 버튼을 클릭하여 `콘솔 홈` 페이지로 이동한다.
3. Ucloud server <i class="fa fa-arrow-right" aria-hidden="true"></i> 네트워크 <i class="fa fa-arrow-right" aria-hidden="true"></i> 가상 IP 탭으로 이동한다.
![추가정보1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ntYRU3ysQhq1NUHzBM3R_%EC%B6%94%EA%B0%80%EC%A0%95%EB%B3%B41.png)

4. 가상 IP 생성 버튼을 클릭하자.
5. 아래와 같은 가상 IP 정보를 입력하는 팝업창이 뜨면 알맞은 값을 선택한 후 확인 버튼을 클릭한다.  
  - Availability Zone: Instance Model에 설정된 ucloud-Zone을 선택한다.
  - 네트워크: 기본설정을 선택한다.
  - 이름: 식별이 가능하도록 이름을 입력한다.  
![추가정보2.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/8z31y2qDRgiLLIwnnnjY_%EC%B6%94%EA%B0%80%EC%A0%95%EB%B3%B42.png)

6. 생성이 완료되면 부여된 IP로 워크플로우의 파라미터 정보를 3군데 수정한다.
	- IRIS-MASTER-HA 워크플로우의 2번째 이벤트 `set ha master node config`와   
  4번째 `init ha master node config`의 편집창에 들어가 masterVip 값을 변경합니다.
  - IRIS-DATA 워크 플로우의 2번째 이벤트 `set slave node config`의 편집창에 들어가 masterIp의 값을 변경합니다.

