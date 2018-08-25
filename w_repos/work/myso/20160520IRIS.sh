#!/bin/bash
cd /etc/sudoers

$ sed -i 's/{ORIGINAL}/{CHANGE}/g' {FILE_NAME}


#!/bin/bash
yum install -y sudo
cd /etc
chmod 777 sudoers
sudo sed -i 's/Defaults    requiretty/#Defaults    requiretty/g' /sudoers

yum install -y gcc gcc-c++ autoconf automake openssl openssl-devel readline readline-devel zlib-devel zip
sudo adduser iris
echo iris-review-slaves | passwd iris --stdin
echo "iris ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
sudo su - iris -c "cd /home/iris; wget https://s3-ap-northeast-1.amazonaws.com/gcs.dev/IRIS_1.5.1_1-CentOS6.tgz --no-check-certificate;tar zxvf IRIS_1.5.1_1-CentOS6.tgz"


#!/bin/bash
cd /etc
chmod 447 sudoers
sed -i 's/Defaults    requiretty/# Defaults    requiretty/g' sudoers
chmod 440 sudoers
yum install -y gcc gcc-c++ autoconf automake openssl openssl-devel readline readline-devel zlib-devel zip
sudo adduser iris
echo iris-review-slaves | passwd iris --stdin
echo "iris ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
IP=`ifconfig -a | grep "inet " | grep "Bcast:" | awk '{print $2}' | awk -F: '{print $2}'`
echo $IP
sudo su - iris -c "cd /home/iris; wget https://s3-ap-northeast-1.amazonaws.com/gcs.dev/IRIS_1.5.1_1-CentOS6.tgz --no-check-certificate; tar zxvf IRIS_1.5.1_1-CentOS6.tgz; cd /home/iris/IRIS/setup/pre-config; "

sudo su - iris -c "cd /home/iris/IRIS/setup/pre-config; sed -i -e '/^0/d' "

