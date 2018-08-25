																								IN-Soft 16.06.20
# IRIS Guide
###로그인
###http://52.197.36.118/console/
오른쪽 상단의 __로그인__을 클릭합니다.
![1.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/88fdkLARFyLgoGxVCU6z_1.JPG)
```
로그인 아이디 : test01@gcs.co.kr
로그인 암호   : test01@gcs.co.kr
```
![2.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Z8ihXTqQNS1TmOABwsZ3_2.JPG)

__로그인__ 합니다.

## __1. Master Node (HA) 생성__
###1-1) VM 생성
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

####__Progressbar가 없어질 때까지 대기합니다.__
- VM이 생성되면 자동으로 페이지가 이동합니다. 
- (progress bar가 멈춘 상태에도 페이지 이동이 없다면 상단 탭의 인스턴스 정보를 누르면 확인할 수 있습니다.)

---  

####__인스턴스 상태가 Running, 에이전트 상태가 Verified 될 때까지 기다립니다.__
#####VM 2개 생성과 에이전트 설치까지 약 __7분__정도 소요됩니다.

![7.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/t7Uv4eO8RpmQnUZFQqXN_7.JPG)

---
###1-2) IRIS 설정 및 설치

__인스턴스 상태와 에이전트 상태 변경이 완료__되면 인스턴스 이름에 IRIS-MASTER-HA-xxx...-C1 를 클릭합니다. (__첫 번째 인스턴스__를 클릭합니다.)

![7.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/eWuX9yXHQbOx4RZAWfLN_7.JPG)

__인스턴스 상세 정보__의 __내부 IP__를 복사합니다. (다른곳에 기록해둡니다.)

![8.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/cpoCVwh6R7SFh98ioW79_8.JPG)

__뒤로 돌아가 두 번째 인스턴스(IRIS-MASTER-HA-xxx...-C2)를 클릭 > 인스턴스 상세정보의 내부 IP복사합니다. (다른 곳에 기록해둡니다.)__
![7.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/U4PTtnJQuuQFBGUeLKp4_7.JPG)

![8.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/iiPUH3YtRdCllu0tixIP_8.JPG)

---
복사 후 다시 뒤로 돌아가(인스턴스 모델 조회 화면) 상단 탭의 __실행 워크플로우(들)__를 클릭합니다.
- (인스턴스 모델 관리 > 인스턴스 모델 검색 > IRIS-MASTER-HA > 실행 워크플로우(들) 탭 )

![9.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/jHKcb1ayROmo0ZqGrKvo_9.JPG)

__(IRIS-MASTER-HA) IRIS 설치 가이드를 참고로 워크플로우를 구성해놓았습니다.__
- 현재 테스트 계정에는 KT Ucloud에서 생성한 가상 IP가 설정되어있습니다.

__IRIS-MASTER-HA__를 클릭합니다.

__어플리케이션 목록 버튼__을 클릭 > __set-ha-master-node-config__ 편집 버튼을 클릭합니다.

![10.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/kGzRwnaCTfSw6Zf4NYSP_10.JPG)

__파라미터 목록 조회__를 클릭 > 아래와 같이 값을 입력 > __저장__합니다.
```
파라미터 이름	: 파라미터 값
activeNodeIp	: 첫번째 복사해둔 IP
standbyNodeIp	: 두번째 복사해둔 IP
```
__masterVip 값에는 KT ucloud에서 생성한 가상IP를 넣어놓았습니다.__

![11.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/emukDEIBTHS3o6VcxeWx_11.JPG)

---

__가상 IP를 변경하여 실행하려면 이 부분을 참고하세요. (기본값으로 실행시 Skip)__

__참고. 생성할 마스터 노드 가상 IP 변경__
```
인스턴스 모델 관리 > 인스턴스 모델 검색 > IRIS-MASTER-HA 선택 > 실행 워크플로우(들) > IRIS-MASTER-HA > 
어플리케이션 목록 버튼을 클릭 > set-ha-master-node-config 이벤트 편집 버튼 클릭 > 
파라미터 목록 조회 클릭 > masterVip 파라미터 값 수정 > 저장 > 확인.
```
```
인스턴스 모델 관리 > 인스턴스 모델 검색 > IRIS-MASTER-HA 선택 > 실행 워크플로우(들) > IRIS-MASTER-HA > 
어플리케이션 목록 버튼을 클릭 > init ha master node config 이벤트 편집 버튼 클릭 > 
파라미터 목록 조회 클릭 > masterVip 파라미터 값 수정 > 저장 > 확인.
```
---

저장 후 __인스턴스 모델 조회__로 돌아갑니다. 

![10.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/1WczKSdQrKESRB3N78Ti_10.JPG)

__실행__ (파란색 버튼)을 클릭 > __전체 선택__ > __선택__(파란색 버튼) > 워크플로우 관리 __확인__을 누릅니다.

__>> IRIS 설치가 시작됩니다.__

![12.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/UKPXe6GTTNCkQRDwaKEd_12.JPG)

워크플로우 실행 이벤트를 __실행__(파란색 버튼) 옆 __실행 이력__(흰색 버튼)을 누르거나 왼쪽 메뉴에서 __서비스 로그보기__에 들어가면 실행 이력을 볼 수 있습니다.

---
###IRIS 기동 확인
- master node가 설치되어 있는 인스턴스에 ssh로 접속합니다.
```
$ ssh root@xxx.xxx.xxx.xxx			//인스턴스 목록 > 인스턴스 선택 > 인스턴스 상세정보 > 외부 접근 IP
root@xxx.xxx.xxx.xxx's password:		//Defaulf password : gcs2016
```

- iris 계정으로 전환하여 ntop 명령으로 아이리스 node 상태를 확인한다.
```
[root@iris-master-20160620-082601-705-1-C1 ~]# su - iris
[iris@iris-master-20160620-082601-705-1-C1 ~]$ ntop
```

---
## __2. Slave Node 생성.__
###2-1) IRIS 설치 설정 변경.
상단 메뉴의 __서비스 관리__에 들어갑니다.

![3.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GFNiAnclRNSTALHudXLG_3.JPG)

왼쪽 바의 __인스턴스 모델 관리__ > __인스턴스 모델 검색__에 들어갑니다.

![4.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dhWslx7QWm9eW31lVHNT_4.JPG)

__인스턴스 모델__의 __IRIS-SLAVE__를 클릭합니다.

![5.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/gNzvfxh1RTqtcb8g3PTb_5.JPG)

---
__가상 IP와 마스터 노드의 password를 다른 값으로 변경하려면 이 부분을 참고하세요. (기본값으로 실행시 Skip)__

- __현재 테스트 계정에는 KT ucloud에서 생성한 가상 IP와 마스터 노드의 password가 설정되어있습니다.__
- __가상 IP와 마스터 노드의 password 변경 시__ 실행 워크플로우가 __자동 실행 상태__로 되어있으므로 __VM 생성 전에 바꿔줘야 합니다. (기본값으로 실행시 Skip)__ 

![16.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/kx5VxiwyQmaWuQ6yXl7o_16.JPG)

- __set slave node config 스크립트 파라미터 목록__ (KT ucloud 가상 IP, 마스터 노드 password)

![17.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/OjJ2VdqAQcGzCi9hFSBG_17.JPG)


__참고 1. 생성할 슬레이브 노드 가상 IP 변경__
```
인스턴스 모델 관리 > 인스턴스 모델 검색 > IRIS-SLAVE 선택 > 실행 워크플로우(들) > IRIS-SLAVE >
어플리케이션 목록 버튼을 클릭 > set slave node config 이벤트 편집 버튼 클릭 > 파라미터 목록 조회 클릭 > 
masterIp 파라미터 값 수정 > 저장 > 확인.
```

__참고 2. 마스터 노드 password 변경__
```
--password 확인방법--
인스턴스 모델 관리 > 인스턴스 모델 검색 > IRIS-MASTER-HA 선택 > 인스턴스 모델 상세정보 >
클라우드 설정 풀 정보 (pool)> 인스턴스 암호 정보 확인 // default password : gcs2016

--변경방법--
인스턴스 모델 관리 > 인스턴스 모델 검색 > IRIS-SLAVE 선택 > 실행 워크플로우(들) > IRIS-SLAVE >
어플리케이션 목록 버튼을 클릭 > set slave node config 이벤트 편집 버튼 클릭 > 파라미터 목록 조회 클릭 > 
password 파라미터 값 수정 > 저장 > 확인.
```

---
###2-2) VM 생성
__+ 인스턴스 추가 생성__(초록색 버튼)을 클릭 > 신규 VM 생성 __확인__ 버튼을 누릅니다.
- 화면에서 인스턴스 그룹 설정을 보면 6개의 인스턴스가 생성되도록 설정되어있습니다.

![13.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ITp8lLH3SVKy4wMhgdVw_13.JPG)

---
####__KT Ucloud API 문제로 6개씩 생성합니다.__
__12개__의 Slave node가 필요시 6개의 Slave node가 모두 생성된 후(인스턴스 상태, 에이전트 상태가 __Running__ )이 되면 Slave node생성을 다시 한번 수행해주세요.

---

####__Progressbar가 없어질 때까지 대기합니다.__
VM이 생성되면 자동으로 페이지가 이동합니다. (progress bar가 멈춘 상태에도 페이지 이동이 없다면 상단 탭의 인스턴스 정보를 누르면 확인할 수 있습니다.)

---

####__인스턴스 상태가 Running, 에이전트 상태가 Verified 될 때까지 기다립니다.__
#####VM 6개 생성과 에이전트 설치까지 약 __10분__ 정도 소요됩니다.

![14.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/FipsD7QcQ9GvbfMAJhWb_14.JPG)



실행 워크플로우가 자동 실행 상태로 되어있으므로 __VM이 생성되면 자동으로 IRIS 설치를 실행__합니다.

(실행 워크플로우(들) 탭 > 실행 이력을 들어가거나 왼쪽 바에서 서비스 로그보기에 들어가면 서비스 로그를 볼 수 있습니다.)

![15.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GGXTBGjQOCi7tAj6XTfY_15.JPG)

- __12개의 Slave Node__가 필요한 경우 __6개의 Slave node가 모두 생성된 후__(인스턴스 상태, 에이전트 상태가 __Running__ )이 되면 Slave node생성을 다시 한번 수행해주세요.

## __3. VM 종료.__
__테스트 종료시 VM을 삭제합니다.__

__서비스 관리 > 인스턴스 목록 > 6개 선택 > 인스턴스 종료(빨간색 버튼)__

![18.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dx6AT4r5TSCzMyY96G95_18.JPG)

---
####__KT Ucloud API 문제로 6개씩 삭제합니다.__
__전체 삭제 시 6개의 Slave node가 모두 삭제된 후 삭제를 수행해주시기바랍니다.__

---

인스턴스 상태가 __Terminating__(분홍색)으로 바뀌며 시간이 지나면 자동으로 사라집니다. 
![19.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/tAhUQToEQMmimoEGlqTX_19.JPG)


