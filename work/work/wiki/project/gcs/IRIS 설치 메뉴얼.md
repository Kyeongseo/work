# IRIS 설치 메뉴얼

# IRIS Mysocloud를 이용한 설치 메뉴얼

## 어플리케이션 등록
- 어플리케이션 관리 > 어플리케이션 정보 관리 > 어플리케이션 정보 등록 클릭
![어플리케이션등록.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/NqU6psAeSiSA1Z4Eq722_%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%EB%93%B1%EB%A1%9D.PNG)
- 저장 버튼 클릭

## 어플리케이션 이벤트 생성
- 어플리케이션 관리 > 어플리케이션 정보 관리 > 어플리케이션 정보 검색 > 위에서 생성한 어플리케이션 선택

- 이벤트 이름: install dependencies
	- 스크립트
  
```
#!/bin/bash
cd /etc
chmod 447 sudoers
sed -i 's/Defaults    requiretty/# Defaults    requiretty/g' sudoers
chmod 440 sudoers
sudo adduser iris
echo iris-review-slaves | passwd iris --stdin
echo "iris ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
yum install -y gcc gcc-c++ autoconf automake openssl openssl-devel readline readline-devel zlib-devel zip expect > /home/iris/yum-install-log.txt
sudo su - iris -c "cd /home/iris; wget https://s3-ap-northeast-1.amazonaws.com/gcs.dev/IRIS_1.5.1_1-CentOS6.tgz --no-check-certificate >  /home/iris/iris-download-log.txt"
sudo su - iris -c "tar zxvf IRIS_1.5.1_1-CentOS6.tgz  >  /home/iris/iris-install-log.txt"
```
- 마스터 노드 워크플로우 작성시 install dependencies 스크립트 마지막에 아래 명령어 추가

```
sudo su - iris -c "touch ~/IRIS/conf/ha-default"
```

- 이벤트 이름: set master node config
	- 스크립트
  
```
#!/bin/bash
myIp=`sudo ifconfig -a | grep "inet " | grep "Bcast:" | awk '{print $2}' | awk -F: '{print $2}'`
sudo su - iris -c "echo '0|${myIp}' > /home/iris/IRIS/setup/pre-config/master"
sudo su - iris -c "echo '1'  > ~/IRIS_NODE_INDEX.txt "
```

- 이벤트 이름: set slave node config
	- 스크립트
  
```
#!/bin/bash
myIp=`sudo ifconfig -a | grep "inet " | grep "Bcast:" | awk '{print $2}' | awk -F: '{print $2}'`;
expect <<EOF
spawn scp -oStrictHostKeyChecking=no root@${eventParams_masterIp}:/home/iris/IRIS_NODE_INDEX.txt /home/iris
expect "password:"
        send "${eventParams_password}\r"
expect eof
EOF
myIndex=`awk '{print $1}' /home/iris/IRIS_NODE_INDEX.txt`
sudo su - iris -c "echo '0|${eventParams_masterIp}' > /home/iris/IRIS/setup/pre-config/master"
sudo su - iris -c "echo '${myIndex}|${myIp}' > /home/iris/IRIS/setup/pre-config/slaves"

newMyIndex=`expr $myIndex + 1`
sudo su - iris -c "echo '${newMyIndex}' > ~/MY_INDEX.txt "

expect <<EOF
spawn scp -oStrictHostKeyChecking=no /home/iris/MY_INDEX.txt root@${eventParams_masterIp}:/home/iris/IRIS_NODE_INDEX.txt
expect "password:"
        send "${eventParams_password}\r"
expect eof
EOF
```

- 이벤트 이름: set ha master node config
	- 스크립트
  
```
#!/bin/bash
sudo su - iris -c "echo '0|${eventParams_masterVip},${eventParams_activeNodeIp},${eventParams_standbyNodeIp}' > /home/iris/IRIS/setup/pre-config/master"
sudo su - iris -c "echo '1'  > ~/IRIS_NODE_INDEX.txt "
```


- 이벤트 이름: init database
	- 스크립트
  
```
#!/bin/bash
sudo su - iris -c "exit"
sudo su - iris -c "~/IRIS/bin/Admin/DatabaseInit"  
```

- 이벤트 이름: init save directory
	- 스크립트
  
```
#!/bin/bash
sudo su - iris -c "mkdir -p ~/data"
sudo su - iris -c "ln -s ~/data ~/IRIS/data/slave_disk/part00"  
```

- 이벤트 이름: init ha master node config
	- 스크립트
  
```
#!/bin/bash
sudo su - iris -c "exit"
sudo su - iris -c "sed -i '13c vip = eth0:0,${eventParams_masterVip},255.255.255.0' ~/IRIS/conf/m6.config" 
```

- 이벤트 이름: install iris
	- 스크립트
  
```
#!/bin/bash
sudo su - iris -c "~/IRIS/setup/Install.sh"
sudo su - iris -c "exit"
```

- 이벤트 이름: run iris
	- 스크립트
  
```
#!/bin/bash
expect <<EOF
spawn  sudo su - iris -c ~/IRIS/bin/Admin/IRIS-Startup
expect "Do you want continue? (y/N):"
        send "y\r"
expect eof
EOF
```
- 마스터 노드 워크플로우 작성시 run iris 스크립트 마지막에 아래 명령어 추가

```
sudo su - iris -c "rm -rf  ~/IRIS/conf/ha-default"
```

- 이벤트 이름: add slave node
	- 스크립트
  
```
#!/bin/bash
sudo su - iris -c "~/IRIS/bin/Admin/NodeAdd"
```

# Master Node 워크플로우 작성
- 서비스 관리 > 인스턴스 모델 관리 > 인스턴스 모델 검색 > iris-master 모델(미리 생성이 되어 있어야 한다.) 선택
- 상단 탭에서 어플리케이션 > 어플리케이션 관리 버튼 클릭 > 위에서 등록한 어플리케이션 선택
- 상단 탭 실행 워크플로우 > 워크 플로우 추가 버튼 클릭
- 워크플로우 이름 입력
- 자동실행 상태 Running 설정
![워크플로우-마스터.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/nxYFwLKSBuDtH6BZbnbj_%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EB%A7%88%EC%8A%A4%ED%84%B0.PNG)

- Install dependencies > set Master node config > install iris > init database > run iris 순으로 디자인
![워크플로우-마스터-디자인.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/rulaVauKQsu8To8eHgsm_%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EB%A7%88%EC%8A%A4%ED%84%B0-%EB%94%94%EC%9E%90%EC%9D%B8.PNG)

- 인스턴스 모델 상세 정보 > 인스턴스 추가 생성 버튼 클릭

# Slave Node 워크플로우 작성
- Master node의 인스턴스가 생성되고 iris가 실행 상태여야 한다.
- 서비스 관리 > 인스턴스 모델 관리 > 인스턴스 모델 검색 > iris-slave 모델(미리 생성이 되어 있어야 한다.) 선택
- 상단 탭에서 어플리케이션 > 어플리케이션 관리 버튼 클릭 > 위에서 등록한 어플리케이션 선택
- 상단 탭 실행 워크플로우 > 워크 플로우 추가 버튼 클릭
- 워크플로우 이름 입력
- 자동실행 상태 Running 설정
![워크플로우-슬레이브.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/7fYzz3DfRSuyZgbCgZve_%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EC%8A%AC%EB%A0%88%EC%9D%B4%EB%B8%8C.PNG)

- set slave node config이벤트 편집 버튼을 클릭 한다.
- masterIp, password 파라미터를 추가한다.
- master instance의 ip(private)와 master instance의 password를 입력한다.
![워크플로우-슬레이브-파라미터.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/XJcFXxB0QD2q5SrE97PQ_%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EC%8A%AC%EB%A0%88%EC%9D%B4%EB%B8%8C-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0.PNG)

- Install dependencies > set slave node config > install iris > init save directory > run iris > add slave node 순으로 디자인
![워크플로우-슬레이브-디자인.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/x9w2T1hJRrmYN6zo14gR_%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EC%8A%AC%EB%A0%88%EC%9D%B4%EB%B8%8C-%EB%94%94%EC%9E%90%EC%9D%B8.PNG)

- 인스턴스 모델 상세 정보 > 인스턴스 추가 생성 버튼 클릭

# IRIS 기동 확인
- master node가 설치되어 있는 instance에 ssh로 접속한다.
```
$ ssh root@14.63.224.107
root@14.63.224.107's password:
```

- iris 계정으로 전환하여 ntop 명령으로 아이리스 node 상태를 확인한다.
```
[root@iris-master-20160603-082601-705-1-C1 ~]# su - iris
[iris@iris-master-20160603-082601-705-1-C1 ~]$ ntop
```

# MASTER NODE 이중화 구성 워크 플로우
- 이중화 구성(active node, standby node)할 인스턴스가 런닝상태여야 한다.
	- iris-master-ha라는 인스턴스 모델을 만들고 인스턴스를 2개 생성해 놓는다.
- ucloud console(https://ucloudbiz.olleh.com) > ucloud server > 네트워크 > 가상IP(VIP) > 가상IP생성 버튼 클릭하여 vip를 하나 생성한다.
![vip.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/czSZzaYPQueXuqkX1LJU_vip.PNG)
- 서비스 관리 > 인스턴스 모델 관리 > 인스턴스 모델 검색 > iris-master-ha 모델(미리 생성이 되어 있어야 한다.) 선택
- 상단 탭에서 어플리케이션 > 어플리케이션 관리 버튼 클릭 > 위에서 등록한 어플리케이션 선택
- 상단 탭 실행 워크플로우 > 워크 플로우 추가 버튼 클릭
- 워크플로우 이름 입력
- 자동실행 상태 None 설정
- set ha master node config 이벤트 편집 버튼을 클릭 한다.
- masterVip, activeNodeIp, standbyNodeIp 파라미터를 추가한다.
	- masterVip: 위의 ucloud console에서 생성한 vip입력
  - activeNodeIp: active master node로 사용할 인스턴스의 private ip 입력
  - standbyNodeIp: standby master node로 사용할 인스턴스의 private ip 입력
![setmasterhaconfig.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/JqViIeWIQTGxgZO3pQSW_setmasterhaconfig.PNG)


- init ha master node config 이벤트 편집 버튼을 클릭 한다.
- masterVip 파라미터를 추가한다.
	- masterVip: 위의 ucloud console에서 생성한 vip입력
![initmasternodeconfig.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/gtmKuiYQjefBqxqZBaoQ_initmasternodeconfig.PNG)

- Install dependencies > set ha master node config > install iris > init ha master node config > init database > run iris 순으로 디자인
![ha.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/8VzGUG4Q9eCdftVDk5tw_ha.PNG)

- 인스턴스 모델 조회(iris-master-ha) > 실행 워크플로우 > 위에서 생성한 워크 플로우 실행 버튼 클릭 > active, standby node용으로 생성해놓은 인스턴스 2개 선택 > 워크 플로우 실행

- 이중화 구성되어 있는 마스터 노드의 슬레이브 노드 설정 시 마스터 IP에는 VIP를 입력한다.