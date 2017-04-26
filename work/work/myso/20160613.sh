#!/bin/bash
#tomcat process kill
pid=`ps aux | grep catalina | grep -v color | grep -v grep | awk '{print $2}'`
if [ -n "$pid" ]; then
    echo "Killing process ID: $pid"
    sudo kill -9 $pid
    echo "Done"
else
    echo "Tomcat is not running"
fi

#move webapps and remove files , directories
cd /usr/local/apache-tomcat-7.0.54/webapps/

echo "move into webapps"

sudo rm -rf *.*
sudo rm -rf *

echo "remove everything"

#move console.war file
mv /workspace/dev/console.war /usr/local/apache-tomcat-7.0.54/webapps/

echo "console.war move from dev to webapps"

#restart tomcat

cd /usr/local/apache-tomcat-7.0.54/bin

sudo sh startup.sh

exit
