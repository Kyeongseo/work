Linux 명령어
===

- artifactory
	- service artifactory start		
	- service artifactory stop
	- service artifactory check
- mv
	- mv: move
	- mv 속성 옮길문서 옮길위치(덮어쓸 문서)
	- ex) sudo mv _settings.xml settings.xml 	// _settingx.xml을 settings.xml로 이동.
- tail -f
	- tail: 파일의 마지막 부분을 출력
	- -f: 파일의 마지막 10라인을 실시간으로 계속 출력
	- -n: n만큼 라인을 출력
- rm -rf
	- rm: remove
	- -r: recursive
	- -f: force
- ps -ef
	- ps: process
	- -e: all processes
	- -f: full listing
	- ex: ps -ef | grep java
- java -version
- mvn -version