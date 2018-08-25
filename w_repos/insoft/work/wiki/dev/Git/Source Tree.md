# SourceTree


## 홈페이지
http://sourcetreeapp.com/


## 다운로드
http://sourcetreeapp.com/download
윈도7 이상과 Mac OS X 10.7 이상만 지원합니다.


## 라이센스 발급
http://www.sourcetreeapp.com/register/
위 페이지에서 **Register SourceTree now** 링크를 눌러서 이동한 후 등록하면 됩니다. 등록 후에는 본인의 Licenses 페이지에서 SourceTree 라이센스 파일을 다운로드 받습니다.
라이센스 발급은 무료이며, 한번 등록해 두면 나중에 편합니다.


## 설치
설치 과정은 이미지로 대체하며, 필요한 부분만 설명을 추가하도록 하겠습니다.

![sourcetree 002.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/InGSiuaQZiXJ8rCbyCQW_sourcetree%20002.png)

![sourcetree 003.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Lkt0Jj8ZTamDIwM7N4RL_sourcetree%20003.png)

![sourcetree 004.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/tHp0ES76TIeBx1xGwN0k_sourcetree%20004.png)

![sourcetree 005.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/qNcw5MZZQgaZHhNhJX8v_sourcetree%20005.png)

![sourcetree 006.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/gXorxE9nQ6HHeS79d5Rn_sourcetree%20006.png)

![sourcetree 007.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/AdxyY82hSKCOU1aLSNKa_sourcetree%20007.png)

![sourcetree 008.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/bLtDYTLLSPqnk4RPz7uN_sourcetree%20008.png)

**Configure automatic line ending handling by default (recommended)** 항목을 체크하면 Git의 `core.autocrlf` 옵션을 `true`로 설정합니다.
core.autocrlf 옵션에 대한 자세한 설명은 아래 링크의 문서를 참고하세요.

[Pro Git 7.1 Git맞춤 - Git 설정하기](http://git-scm.com/book/ko/v1/Git%EB%A7%9E%EC%B6%A4-Git-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0#소스-포맷과-공백)

![sourcetree 009.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Dy8HArjUQqnA0DiDtdqy_sourcetree%20009.png)

![sourcetree 010.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/WT5x3d1UQoyrOnwnSai6_sourcetree%20010.png)

전역 ignore 파일을 사용할 것인지를 묻고 있습니다.
`Yes`를 선택하면 .exe, .dll, .obj, .suo, .bak 등의 일반적으로 VCS에 올리지 않는 파일을 무시하고 SourceTree에서 보이지 않도록 합니다.
`도구 > 옵션 > Git` 메뉴에서 전역 ignore 파일을 수정할 수 있습니다.

![sourcetree 011.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/tXBxaagcQxSsxJzU4WtU_sourcetree%20011.png)

Bitbucket 계정을 입력하는 과정입니다. 건너뛰어도 무방합니다.



# 저장소 복제(Clone)

![sourcetree 012.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/6Ns5P7LXRhum0ALgJsXI_sourcetree%20012.png)

설치가 완료되고 SourceTree가 실행되면, 툴바에서 `복제 / 생성(Clone / New)` 메뉴를 선택하여 저장소를 `복제(Clone)`합니다.

![sourcetree 014.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/HKjPhy6LT2W8laaT6D5y_sourcetree%20014.png)

위 화면에서는 PublicMesh를 복제하고 있습니다. 아래의 주소를 `소스 경로/URL`에 넣고 `목적지 경로`를 클릭하면 소스 경로(publicmesh_for_ktccp)에 따라서 목적지 경로가 자동으로 설정됩니다.

![sourcetree 015.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/RZFUGnMHSejATKEQYh1S_sourcetree%20015.png)

![sourcetree 013.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ghrS3EbSaOf5X3EpKh9i_sourcetree%20013.png)

목적지 경로에서 사용하는 프로젝트 디렉토리를 변경하려면, 도구 > 옵션 > 일반 메뉴에 있는 `프로젝트 폴더`를 바꾸면됩니다.

![sourcetree 016.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/2SIxWSvfTim8M1vogwAy_sourcetree%20016.png)

목적지 경로 지정까지 완료되었으면 `클론(Clone)` 버튼을 눌러서 원격저장소(GitLab)에서 로컬저장소로 프로젝트 저장소를 내려 받습니다.

![sourcetree 017.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/MWhk9GhEQ3CmW1d2w8fW_sourcetree%20017.png)

`출력 전부 보기`를 체크하면 Clone 시 사용하는 명령어(`git -c diff.mnemonicprefix=false -c core.quotepath=false clone --recursive git@gitlab.com:insoft.cloud/publicmesh_for_ktccp.git D:\dev\repos\publicmesh_for_ktccp`)와 표준출력 내용을 모두 볼 수 있습니다. 이 명령어는 Git Bash 등의 커맨드 라인에서 그대로 사용할 수 있는 좋은 참고자료입니다.
`도구 > 옵션 > 일반` 메뉴에서 `항상 명령창 내용을 전부 표시`를 체크하면 언제나 표준 출력을 참고할 수 있습니다.


## 라이센스 등록

![sourcetree 018.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/7ZvCD9AhTtGXAXVToPo5_sourcetree%20018.png)

`파일 > 등록` 메뉴를 선택합니다.

![sourcetree 019.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/b5OeVuE0QsKZjylmfO4p_sourcetree%20019.png)

등록 창이 뜨면 `라이센스 입력` 버튼을 누릅니다.

![sourcetree 020.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Ax4rD51sS4KRz6a9E0eF_sourcetree%20020.png)

라이센스를 발급 받은 후 다운로드 받아둔 sourcetree.license 파일을 선택합니다.

![sourcetree 021.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/qYEmkcetTiStGOtuMPS7_sourcetree%20021.png)


