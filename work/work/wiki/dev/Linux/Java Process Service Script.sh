#!/bin/bash
#
# C-Spider Develop Server
#
# desciption: start/stop script for the C-Spider Develop Server
PROCESS_NAME=c-spider.war
RETVAL=0
 case "$1" in
start)
PID=`ps -eo pid,command | grep ${PROCESS_NAME} | grep -v grep | awk '{print $1}'`
if [[("${PID}" != "")]]; then
 logger -s "${PROCESS_NAME}(pid ${PID}) is already running."
 exit;
fi
logger -s "Starting C-Spider Develop Server"
java -jar -Dspring.profiles.active=dev /home/ec2-user/c-spider/dev/${PROCESS_NAME} > /home/ec2-user/log/csc-dev.txt &
PID=`ps -eo pid,command | grep ${PROCESS_NAME} | grep -v grep | awk '{print $1}'`
logger -s "${PROCESS_NAME} (pid ${PID}) is running."
RETVAL=$?
;;
stop)
PID=`ps -eo pid,command | grep ${PROCESS_NAME} | grep -v grep | awk '{print $1}'`
if [[("${PID}" == "")]]; then
 logger -s "${PROCESS_NAME} is not running."
 exit;
fi
logger -s "Stopping C-Spider Develop Server"
kill -9 $PID
RETVAL=$?
;;
restart)
 $0 stop
 $0 start
 ;;
*)
echo "Usage: $0 {start|stop|restart}"
exit 1
esac
exit $RETVAL