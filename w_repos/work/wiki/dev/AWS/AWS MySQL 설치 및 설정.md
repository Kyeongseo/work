# 아마존 MySQL설치 및 설정
## Security Group 추가
![캡처.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/l0HGh2SRwCOT7YeBNaJI_%EC%BA%A1%EC%B2%98.PNG)
- 위 이미지와 같이 SSH와 MYSQL접근 가능하도록 Inbound Rule을 설정한다.

## Quick Start
![캡처2.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/HcgUVPj4Spiu1MQFBUCp_%EC%BA%A1%EC%B2%982.PNG)
- 아마존 리눅스를 사용하여 인스턴스를 만들도록 하겠다. Select버튼을 클릭하자.

![3.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/zKoSXuCATeWMNlyEVHW2_3.PNG)
- 인스턴스 타입은 t2.medium으로 할거다. 체크박스 선택 후 Next버튼을 클릭하자.

![4.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/MPI8E5mKQqIgxHZzSkVQ_4.png)
![5.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/bUvHcxo5SSWew0SiBw7w_5.png)
- 생성될 인스턴스의 기본정보를 확인할 수 있다.
- Security Groups의 Edit버튼을 눌러 처음에 만들어 둔 Security로 변경하고 Launch버튼을 클릭하자.

![7.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/kz6aZ8IyQmOhO7Ej7Szx_7.PNG)
- 기존에 Key pair를 생성하지 않았다면 Create a new key pair를 선택하고 이름을 입력한 후 Download Key Pair 버튼을 클릭하여 pem파일을 다운받자.
- Download 받은 pem파일은 추후 다시 받을 수 없으니 잘 보관하도록..!
- Launch Instances 버튼을 클릭하면 Instance가 생성된다.
	- Security 와 Keypair등은 Region별로 관리가 된다. (Tokyo Region에서 생성한 Keypair는 Virginia에서 사용할 수 없다.)

## MySQL 설치
- SSH로 생성한 인스턴스에 접속하도록 하자. (필자는 GitBash사용)
- 명령어는 아래와 같다.
``` 
ssh -i 'pemkey' ec2-user@'domain'
```
- pemkey는 다운로드 받은 pem파일의 경로 domain은 생성한 인스턴스의 DNS 나 IP값을 넣으면 된다.
![8.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/KObk6Zq8SuKqUxUIGG9i_8.PNG)
- SSH접속
``` ssh
park@PARK-PC ~
$ ssh -i /c/keys/testKeypair.pem ec2-user@52.69.70.62
The authenticity of host '52.69.70.62 (52.69.70.62)' can't be established.
ECDSA key fingerprint is 17:03:13:86:08:79:79:8b:ae:53:f0:ca:cf:67:6b:10.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '52.69.70.62' (ECDSA) to the list of known hosts.

       __|  __|_  )
       _|  (     /   Amazon Linux AMI
      ___|\___|___|

https://aws.amazon.com/amazon-linux-ami/2015.03-release-notes/
18 package(s) needed for security, out of 46 available
Run "sudo yum update" to apply all updates.
[ec2-user@ip-172-31-3-29 ~]$
```
- 접속에 성공하면 위와같은 문구가 출력이 된다.
- 보안 강화를 위해 yum 업데이트를 실시하자. (root권한이 없기때문에 sudo를 사용하여야 한다.)
``` 
sudo yum update 
```
- MySQL 설치
```
sudo yum install mysql-server
sudo yum install mysql-devel
sudo chgrp -R mysql /var/lib/mysql
sudo chmod -R 770 /var/lib/mysql
```
- MySQL Start
```
sudo service mysqld start
```
- Root 패스워드를 변경하자.
```
/usr/bin/mysqladmin -u root password yourpasswordhere
```
- Root로 로그인하자.
```
mysql -u root -p
```
- 사용자를 추가하고 다른 ip에서 접속할 수 있도록 설정하자.
```
mysql> CREATE USER 'myuser'@'%' IDENTIFIED BY 'yourpasswordhere';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'%' WITH GRANT OPTION;
```
- Character set 확인
```
mysql> show variables like 'char%';
+--------------------------+----------------------------+
| Variable_name            | Value                      |
+--------------------------+----------------------------+
| character_set_client     | utf8                       |
| character_set_connection | utf8                       |
| character_set_database   | latin1                     |
| character_set_filesystem | binary                     |
| character_set_results    | utf8                       |
| character_set_server     | latin1                     |
| character_set_system     | utf8                       |
| character_sets_dir       | /usr/share/mysql/charsets/ |
+--------------------------+----------------------------+
8 rows in set (0.00 sec)
```
- config 설정을 변경하여 uf8로 바꾸자
- etc/my.cnf를 vi에디터로 열고 아래의 내용을 붙여넣자.
```
sudo vi /etc/my.cnf
```
```
#
# * Fine Tuning
#
key_buffer              = 16M
max_allowed_packet      = 16M
thread_stack            = 192K
thread_cache_size       = 8

#
# * Query Cache Configuration
#
query_cache_limit       = 1M
query_cache_size        = 16M

#
# * Character set
#
character-set-client-handshake
init_connect            = "SET collation_connection = utf8_general_ci,NAMES utf8"
character-set-server    = utf8
collation-server        = utf8_general_ci
```
- 주의 : [mysqld]아래행에 넣어야한다. [mysql_safe]밑에 넣으면 안 됨
- mysql 리스타트
```
sudo service mysqld restart
```
- 다시 확인해보자
```
mysql> show variables like 'char%';
+--------------------------+----------------------------+
| Variable_name            | Value                      |
+--------------------------+----------------------------+
| character_set_client     | utf8                       |
| character_set_connection | utf8                       |
| character_set_database   | utf8                       |
| character_set_filesystem | binary                     |
| character_set_results    | utf8                       |
| character_set_server     | utf8                       |
| character_set_system     | utf8                       |
| character_sets_dir       | /usr/share/mysql/charsets/ |
+--------------------------+----------------------------+
8 rows in set (0.00 sec)
```
- 다음과 같이 변경된 것을 확인할 수 있다.


