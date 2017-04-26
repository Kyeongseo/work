#!/bin/bash
yum install -y gcc gcc-c++ autoconf automake openssl openssl-devel readline readline-devel zlib-devel zip
sudo adduser iris
echo iris-review-slaves | passwd iris --stdin
echo "iris ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
sudo su - iris -c "cd /home/iris; wget https://s3-ap-northeast-1.amazonaws.com/gcs.dev/IRIS_1.5.1_1-CentOS6.tgz --no-check-certificate;tar zxvf IRIS_1.5.1_1-CentOS6.tgz"

#http://dev.naver.com/projects/dist/forum/5402
#sudo: sorry, you must have a tty to run sudo 
# remote 서버의 /etc/sudoers 파일 에서 다음과 같이 requiretty 항목을 주석처리합니다. (CentOS 기준) 
#Defaults requiretty 
#아니면 ssh 실행시 -t 옵션을 사용합니다. 
#[userA@ServerA ~]$ ssh -t ServerB &quot;sudo ls -l /root&quot; 

