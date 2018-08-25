# Git ([Git 소개](https://torchpad.com/workspace/wikis/insoft-cloud/pages/dev/git/Git+%EC%86%8C%EA%B0%9C) 발췌)
### Why Git?

- 로컬 저장소
- 원격 저장소
- 빠릅니다
- 커밋에 부담이 없습니다
- 원격 저장소와 연결이 끊겨도 계속 버전관리가 가능합니다
- 원격 저장소가 삭제되어도 로컬저장소로 복원이 가능합니다
- 스테이지 영역의 존재
- 편리한 브랜치(branch) & 머지(merge)

## 다운로드
http://git-scm.com/download/win


## 설치

![Git Installation 001](https://gitlab.com/uploads/visavis2k/document/51b71118a4/Git_Installation_001.png)

![Git Installation 002](https://gitlab.com/uploads/visavis2k/document/9ce31d16fa/Git_Installation_002.png)

라이센스 동의


![Git Installation 003](https://gitlab.com/uploads/visavis2k/document/5d476873a7/Git_Installation_003.png)

설치 위치 지정


![Git Installation 004](https://gitlab.com/uploads/visavis2k/document/2f79eb2dd9/Git_Installation_004.png)

시작 메뉴 바로가기 설정

![Git Installation 005](https://gitlab.com/uploads/visavis2k/document/dc31a84b18/Git_Installation_005.png)

Unix 도구를 윈도 명령 프롬프트에서도 사용할 수 있게 선택합니다. "ls", "grep", "find", "vi" 등의 도구를 사용할 수 있게 되며, 대신 윈도용 "find", "sort" 등의 도구는 사용할 수 없게 됩니다.

![Git Installation 006](https://gitlab.com/uploads/visavis2k/document/6a226d7107/Git_Installation_006.png)

첫번째 옵션을 선택하면, 커밋할 때 자동으로 개행문자 CRLF(Window-style)를 LF(Unix-style)로 변환해주고 반대로 Checkout할 때 개행문자 LF를 CRLF로 변환해 줍니다(윈도 사용자를 위한 옵션).
두번째 옵션을 선택하면 커밋 시 개행 문자를 LF로 변환해주고 Checkout할 때는 저장소에서 가져온 그대로 사용하도록 해줍니다(Linux, Mac 사용자를 위한 옵션).

![Git Installation 007](https://gitlab.com/uploads/visavis2k/document/c322bc3223/Git_Installation_007.png)

![Git Installation 008](https://gitlab.com/uploads/visavis2k/document/bf021b6294/Git_Installation_008.png)


## 이름과 이메일 주소 설정

전역으로 사용할 사용자 이름과 이메일 주소를 아래와 같이 설정합니다. 입력한 사용자 정보는 커밋할 때마다 사용됩니다.

```bash
$ git config --global user.name "사용자 이름"
$ git config --global user.email 이메일주소
```