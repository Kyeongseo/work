
                                                                                                IN-Soft 16.06.27
# IRIS Guide (Single Master Node)
### 로그인
### http://52.197.36.118/console/
오른쪽 상단의 __로그인__을 클릭합니다.
![1.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/88fdkLARFyLgoGxVCU6z_1.JPG)
```
로그인 아이디 : test01@gcs.co.kr
로그인 암호   : test01@gcs.co.kr
```
![2.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Z8ihXTqQNS1TmOABwsZ3_2.JPG)

__로그인__ 합니다.

## 1. Master Node 생성
### 1-1) VM 생성
상단 메뉴의 __서비스 관리__ 에 들어갑니다.

![3.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GFNiAnclRNSTALHudXLG_3.JPG)

왼쪽 바의 __인스턴스 모델 관리__ > __인스턴스 모델 검색__ 에 들어갑니다.

![4.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dhWslx7QWm9eW31lVHNT_4.JPG)

__인스턴스 모델__의 __iris-master__를 클릭합니다.

![instance-select-model.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/uEFY66DOQ6aVnTp8vixw_instance-select-model.png)

---
__+ 인스턴스 추가 생성__(초록색 버튼)을 클릭 > 신규 VM 생성 __확인__ 버튼을 누릅니다.

![instance-add-master-instance.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/a7Ek5eoISYWbdQGBoApV_instance-add-master-instance.png)


#### __Progressbar가 없어질 때까지 대기합니다.__
- VM이 생성되면 자동으로 페이지가 이동합니다. 
- (progress bar가 멈춘 상태에도 페이지 이동이 없다면 상단 탭의 인스턴스 정보를 누르면 확인할 수 있습니다.)

---  

#### __인스턴스 상태가 Running, 에이전트 상태가 Verified 될 때까지 기다립니다.__
##### VM 1개 생성과 에이전트 설치까지 약 __5분__정도 소요됩니다.

![instance-create.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/oUP6Nc9jQviX9PINRHWF_instance-create.png)

---
### 1-2) IRIS 설정 및 설치

__인스턴스 상태와 에이전트 상태 변경이 완료__되면 인스턴스 이름에 iris-master-xxx...-C1 를 클릭합니다. (__첫 번째 인스턴스__를 클릭합니다.)

![instance-select-instance.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/bn40et5oQXKyzy33ByNu_instance-select-instance.png)

__인스턴스 상세 정보__의 __내부 IP__를 복사합니다. (다른곳에 기록해둡니다.)
master node에 ssh 접근을 위해서 필요하기 때문에 __외부 접근 IP__ 또한 복사합니다. 

![8.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/cpoCVwh6R7SFh98ioW79_8.JPG)

---
### IRIS 기동 확인
- master node가 설치되어 있는 인스턴스에 ssh로 접속합니다.
```
$ ssh root@xxx.xxx.xxx.xxx          //인스턴스 목록 > 인스턴스 선택 > 인스턴스 상세정보 > 외부 접근 IP
root@xxx.xxx.xxx.xxx's password:        //Default password : gcs2016
```

- iris 계정으로 전환하여 ntop 명령으로 아이리스 node 상태를 확인한다.
```
[root@iris@iris-master-20160627-025038-889-1-C1 ~]# su - iris
[iris@iris@iris-master-20160627-025038-889-1-C1 ~]$ ntop
```

---
## __2. Data Node 생성.__
### 2-1) IRIS 설치 설정 변경.
상단 메뉴의 __서비스 관리__에 들어갑니다.

![3.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GFNiAnclRNSTALHudXLG_3.JPG)

왼쪽 바의 __인스턴스 모델 관리__ > __인스턴스 모델 검색__에 들어갑니다.

![4.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dhWslx7QWm9eW31lVHNT_4.JPG)

__인스턴스 모델__의 __iris-data__ 링크를 클릭합니다.

![slave-iris-slave-link.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/0Y0XFiQ0TmNbWULogCgt_slave-iris-slave-link.png)

---

__실행 워크플로우(들)__ 탭을 클릭합니다.

![slave-workflow-link.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/7AUgfYpLSmq73DtvZpQH_slave-workflow-link.png)

__IRIS_SLAVE__ 링크를 클릭합니다.

![slave-workflow-iris-slave-link.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/joVisH1SCWVxAjC0Kcbg_slave-workflow-iris-slave-link.png)

__set data node config__ 항목에 있는 편집 버튼을 클릭합니다.
(아래 이미지에서 붉은 상자로 표시한 버튼입니다)

![slave-workflow-set_slave_node_config.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/uOp5W1xLSmq1iGRsvutM_slave-workflow-set_slave_node_config.png)

__파라미터 목록 조회__ 탭을 클릭합니다.

![slave-workflow-set_slave_node_config-parameter_list_tab.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/43Bd8wCZRpCAbp0YyG4c_slave-workflow-set_slave_node_config-parameter_list_tab.png)

__masterIp__ 파라미터에 대한 파라미터 값 입력 항목에 위에서 복사한 master node의 __내부 IP__ 값을 넣고, __저장__ 합니다(저장 버튼 클릭 후 확인 버튼 클릭).

![slave-workflow-set_slave_node_config-master_ip.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Ql1QOoY2S7S6CVO7YBnW_slave-workflow-set_slave_node_config-master_ip.png)

__인스턴스 모델 조회__ 링크를 클릭한다.

![slave-workflow-instance_model_link.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/H70tus4Sm6nIOgoA8ivQ_slave-workflow-instance_model_link.png)

__인스턴스 모델 상세 정보__ 탭을 클릭한다.

![slave-workflow-instance_model_description.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ZhrQri7ROq3o1O0hIRjI_slave-workflow-instance_model_description.png)

---

### 2-2) VM 생성

__인스턴스 추가 생성__ 버튼을 클릭한다.

![slave-instance_add.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/q52fG7kQSqSHP503Rm2k_slave-instance_add.png)

KT Ucloud API의 호출 빈도 제한 때문에 현재 6개의 인스턴스가 생성되도록 설정되어있습니다. data node의 인스턴스가 더 필요하면 6개의 data node가 모두 생성된 후(인스턴스 상태, 에이전트 상태가 __Running__ 이 되면) data node생성을 다시 한번 수행해주세요.

만약 한 번에 생성할 인스턴스 수를 바꾸고 싶으면, __편집__ 버튼을 클릭한 후 __인스턴스 그룹 수__ 항목의 값을 변경하면 됩니다.

---

#### __Progressbar가 없어질 때까지 대기합니다.__
VM이 생성되면 자동으로 페이지가 이동합니다. (progress bar가 멈춘 상태에도 페이지 이동이 없다면 상단 탭의 인스턴스 정보를 누르면 확인할 수 있습니다.)

---

#### __인스턴스 상태가 Running, 에이전트 상태가 Verified 될 때까지 기다립니다.__
##### VM 6개 생성과 에이전트 설치까지 약 __10분__ 정도 소요됩니다.

![14.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/FipsD7QcQ9GvbfMAJhWb_14.JPG)

실행 워크플로우가 자동 실행 상태로 되어있으므로 __VM이 생성되면 자동으로 IRIS 설치를 실행__합니다.

(실행 워크플로우(들) 탭 > 실행 이력을 들어가거나 왼쪽 바에서 서비스 로그보기에 들어가면 서비스 로그를 볼 수 있습니다.)

![15.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GGXTBGjQOCi7tAj6XTfY_15.JPG)


## __3. VM 종료__

__테스트 종료시 VM을 삭제합니다.__

__서비스 관리 > 인스턴스 목록 > 삭제할 인스턴스 선택 > 인스턴스 종료(빨간색 버튼)__

![18.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dx6AT4r5TSCzMyY96G95_18.JPG)

KT Ucloud API의 호출 빈도 제한 때문에 되도록 한 번에 적은 수를 선택한 후 삭제를 수행해 주시길 바랍니다. 만약 삭제를 수행한 인스턴스가 삭제되지 않고 남아있으면 다시 선택한 후 삭제 하면 됩니다.
삭제할 인스턴스의 체크박스를 선택하기 어려운 경우에는 __인스턴스 이름__을 클릭하여 상세 정보 화면으로 이동한 후 __종료__ 버튼을 클릭해 주세요.

---

인스턴스 상태가 __Terminating__(분홍색)으로 바뀌며 시간이 지나면 자동으로 사라집니다. 
![19.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/tAhUQToEQMmimoEGlqTX_19.JPG)




