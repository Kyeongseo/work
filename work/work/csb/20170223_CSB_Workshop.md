CSB Workshop
===
__2017.02.23__

####CSB과제 추진 현황_강동재

c-spider 특징
- 워크스페이스 (CSP, CSB, CSC)
- 중계 (SLA - 서비스 신뢰성)
- 다중 클라우드
- 에이전트 (에이전트기반 딥 모니터링)
- 소프트웨어 마켓 플레이스 (인프라 + 응용까지 되는 융합 서비스)

추진 일정
- 구현 단계(현재는 구현 단계 마지막)
- 통합/시연 단계 (3월)
- 시연/검증 단계 (4월, 4차 워크샵은 5월 초/중순)

기술 이전
- 3월 15일 이후

TODOs
- 기술 통합
- 자체 결과물 적용 방안 및 시나리오 구체화

현안사항
- 각 기관 통합 담당자, ETRI 파견 업무 조율(3월)
- 문서 잘 작성 해주길 바란다. (4차년도 마무리 + 5차년도 계획)

####업무 추진 현황 및 이슈, 향후일정_ETRI
__C-Spider 워크스페이스, C-Spider 엔진, C-Spider 에이전트__

C-Spider 워크스페이스
- API
	- 엔키아. 사용자 인증포탈(9개) / CSP(39개)
	- 아이엔소프트. CSB(45개) / CSC(13개)
- DB
	- v0.951
- 과금과 미터링은 5차년도 이슈로 넘길것을 제안. (api, db)
- 자원 모니터링만 이번차년도에 하려고함.
- 통합 일정은 3월

C-Spider 중개 엔진
- 연구 추진 실적
	- c-spider 서브 시스템 설계 (Restful api)
		- sla schema/SLO 정의
		- Monitoring metric
	- c-spider 서브 시스템 개발
		- Restlet
		- Restful API 기반
		- openstack 기반 
	- c-spider 에이전트
		- 모니터링
	- cloud 관리
		- cloud info
	 	- 등록 정보 : cloud credential
	 	- cloud 플랫폼 자원 정보 제공 (vm spec, network, ip pools..)
	 - 이미지 관리
	 	- 클라우드에 존재하는 이미지 등록(사용) 
	 	- UUID(id) 제공해 unit service와 연동.
	 	- image validation 2차 제공 예정
	 - 단위 서비스 관리
	 	- 단위 서비스와 클라우드 서비스 1:1
	 - 클라우드 서비스 관리
	 	- 단위 서비스 SLA형태로 변경 예정(3월 초)
	 	- 클라우드 서비스 검색 / 실행
	 		- Async 동작 (UserServiceIDtoInfo) 상태변화 계속 체크해야함.
	 	- 라이프 사이클 ( 실행 > 팬딩 > api호출 > running)
- 이슈
	- 사용자 관리 (인증)
	- SLA (3월)

C-Spider 연결관리
- 서비스 모니터링 모듈(KINX + ETRI)
- 메타데이터 관리 모듈
- 엔진/연결관리기 블록
	- 4차년도(1종) : 동종 멀티(openstack 3set)
	- 5차년도(5종) : 이종 멀티(cloudIT,openstack,ec2,azure,gce,reckspace)
	- LibCloud 기반 연결관리 공통 프레임워크 통합개발 드라이버 Poc 개발/시험 완료
- 에이전트 서브시스템
	- 설계
	- 4차년도 : VM 자원 사용량 수집 및 제공
	- 5차년도 : VM 미터링 정보 수집 및 제공
	- 5차년도 : VM 대상으로 응용 소프트웨어 설치 및 정보 제공
	- VM 모니터링 관리
- 테스트 베드 구축
	- liberty 2set
	- mitaka 1set

####아이엔소프트

####NKIA

####KINX