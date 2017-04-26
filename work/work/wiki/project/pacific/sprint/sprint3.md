# Sprint 3

## 고려해야 할 사항
- 데모 서버 준비
- 공통 컴포넌트는 업무 구현 시 서브 태스크로 다룬다
- 컨퍼런스 (3/12)
  - 8th Cloud & Data Center World 2015(경민성, 박규태 종일)
  - 디딤 클라우드(최순, 박상민? 14:00~17:00)
- SKT 안드로이드 앱 - Speech to Text 데모 앱
  - 분석
  - 기획
  
## 스프린트 기간
2015년 3월 2일 ~ 2015년 3월 20일

## Features
- Cloud 지원
  - Amazon only
- jstree ==> dynatree 로 변경작업
  - 드래그 앤드 드랍 구현을 필요
  - 간단한 작업이기 때문에 먼저 jstree를 대체하는게 좋다
- 메뉴 정의
  - 사용자를 고려한 최소한의 메뉴 기획
- 아래 serverside 구현의 화면 CRUD / List
  - Variable CRUDL
  - Application CURDL
  - Script CRUDL
  - EventChain CRUDL
  - Tree Control
  - Connection CRUDL
  - Security CRUDL
  - Instance Template CRUDL
  - Instance CRUDL
  - variable serverside
  - application serverside
  - script serverside
  - event chain serverside
  - 국제화 적용
  - 사용자 권한 처리 - 모든 모듈
  - 어드민
    - 사용자 목록
    - 사용자 권한 관리
  - 대쉬보드
    - 사용자 메인 화면
  - Instance 목록
    - Region
    - Status
  - Instance 실행 시간
    - 내용은 차후
  - notification

# Tasks
- 이상용G
  - 3d : Variable CRUDL
  - 3d : EventChain CRUDL
  - 3d : Script / EventChain 수행
  - 국제화
  - 2d : tree control
  - 3d : ** notification
    - notification 구현시 고려사항
    - 사용자별로 받을 수 있어야하고
    - 전체 사용자한태도...
- 최순S
  - 1d: Connection CRUDL(Tag)
  - 1d: Script CRUDL (Tag)
    - Script Type : Scale Out / Scale In / ConfigUpdate / BinaryUpdate / Curstum / Reboot
  - 3d: Security CRUDL(Cloud Driver 연계)(Tag)
  - 국제화
  - 1d: faq
  - 2d: Application CRUDL(Tag)
    - 고려사항 : isOpen 필드로 
    - Install script만 들어가도록..
    - application upload / properties화
  - 5d: Shape 형상 CRUDL
    - 형상에 관련 정보를 Details 로 해당 상세로 이동
    - Scale out / Scale In
    - Application Tag 등록(Order)
    - Varaible Tag 등록
    - Event Chain Tag 등록(Order)
    - Script Type 별로
- 박상민S
  - jstree => dynatree package 만 설치
  - angular-redis package 설치
  - 4d: Instance CRUDL(Tag) 
    - R 
    - U : 이름수정 정도…
    - D : scale In
    - L : 전체 인스턴스 리스트
  - 4d: 데쉬보드 개인화 화면 설정
    - 내용은 차후 결정
    - type : list / chart
  - 국제화
  - 5d: ** 사용자 권한 jhipster 고민.... 


# Android Speech App 관련
5월 까지 박규태C - sprint 별계로… 진행

---

# Sprint 3 회고

구글 드라이브에 정리했습니다.

[Spring 3 회고](https://docs.google.com/a/in-soft.co.kr/document/d/1lI_wlbz4YIlx1csTTLHtWo5ET5heiChNf2QGaDmTXk8/edit)