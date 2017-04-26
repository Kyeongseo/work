\#!/bin/bash
------------

###yum install -y
설치시 묻지 않고 설치하기.

###계정 생성
- adduser xxx
- passwd xxx

###/etc/sudoers 파일에 xxx 계정 등록.
- ucloud
- echo "xxx ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
- xxx 계정에서 sudo 사용할 수 있게 /etc/sudoers 파일에 iris정보를 등록.

> If you don’t want to be prompted for any password while running sudo then we can use the NOPASSWD

- Defaults    !authenticate
- Another sudo option that can be used to control the prompt for a password is the global flag: authenticate. This is by default ON and this means that it will ask the user to authenticate with a password.


-----------------------------
- ec2
- ec2-user ALL = NOPASSWD: ALL

###xxx 계정으로 작업 수행
- sudo su - xxx
  - sudo. root 권한으로 프로그램 실행.

- su - xxx
  - 계정이 xxx로 변경됨.(substitute user)

###wget
- 네트워크 상에서 데이터를 다운로드 받는다. (상호작용 필요 X)
- html이나 xhtml 페이지를 다운로드 받아서 로컬 파일시스템에 저장.

###tar zxvf filename.tgz .. 압축 해제

- z: gzip으로 압축된 tar 풀기 (Z: compress로 압축된 tar 풀기).
- x: 푼다
- v: 화면에 표시한다.
- f: 파일로 푼다..?

> zxvf = tgz(tar+gz) 압축 풀기

###master file, slaves filename
- vi /home/xxx/XXX/setup/pre-config/master
  - 0|000.000.000.000
- vi /home/xxx/XXX/setup/pre-config/slaves
  - 1|000.000.000.001

> XXX/setup/Install.sh  설치 스크립트 실행.

###insert 모드 해제
- esc 다음 : w(저장), q(종료)

###재접속
- exit
- su - xxx

###Master노드 초기화 실행.

__노드. 가상 머신이 실행되는 서버__

- cd ~ /XXX/bin/Admin
- ./DatabaseInit

###userdata
__인스턴스 생성시 userdata 안에 실행할 스크립트 넣어 놓으면 인스턴스가 시작되고 스크립트의 명령이 실행됨.__



###Slaves노드 데이터 저장 디렉토리 생성
- mkdir -p ~/data

- p 옵션. directory 구조를 한번의 command 사용으로 만들때 사용. 존재하지 않는 중간 디렉토리를 알아서 생성.


------------------------------------


- ln. Link의 약어. 리눅스 파일시스템에서 링크파일을 만드는 명령어.
- ln -s. Symbolic Link 심볼릭링크. 단순히 원본파일을 가리키도록 링크만 시켜둔것. 바로가기 같은 느낌. 심볼릭 링크 디렉토리 생성.
- ln -s ~/data ~/XXX/data/slave_disk/part00

###자동화 시 유의 사항.
- master 노드, slave 노드의 IP가 모두 수집된 상태에서 설치 진행.
- ucloud API를 이용해 IP 수집.
- 수집한 IP를 이용해 각 VM에 아래 파일 생성.(IP는 수집된 것으로 대체)
- 슬레이브 노드는 데이터 저장 디렉토리 생성 및 링크가 필요

###chmod
- 파일권한 변경
- chmod [권한] [파일]

__UGO__

| rwx |rwx  |rwx  |
|-----|-----|-----|
|user권한|group권한|other권한|


--------------------------------------
