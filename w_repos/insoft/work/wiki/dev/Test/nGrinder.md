## nGrinder 컨트롤러
- URL: http://52.68.232.195:8080/login
- 계정
    + User ID: 이메일 주소의 `@` 마크 앞 부분
    + Password: insoft00
        * 위의 초기 패스워드는 반드시 변경하세요
- 사용자 가이드
    + https://github.com/naver/ngrinder/wiki/user-guide
- `admin` 계정의 스크립트 사용
    + `admin`이 작성한 스크립트를 사용하기 위해서는 우상단의 메뉴를 이용해서 사용자 전환을 하면 됩니다.
        * `사용자 이름 > Switch To Other User`, `Switch To`에 `admin` 입력

## nGrinder 에이전트
- nGrinder 컨트롤러는 에이전트를 이용해서 대상 사이트에 부하를 줍니다. 따라서 1개 이상의 에이전트가 꼭 설치되어 있어야합니다.
- 에이전트 설치 방법
    * admin(admin/admin) 계정으로 컨트롤러에 로그인합니다.
    * 우상단에 있는 `admin` 메뉴를 클릭한 후, `Download Agent` 링크를 클릭합니다.
    * 다운로드한 에이전트의 압축을 해제한 후 `run_agent.sh` 파일 실행하면 에이전트가 실행됩니다.
    * nGrinder 3.3 부터 에이전트는 컨트롤러에서 다운로드 받습니다. 다운로드 후에는 컨트롤러에 접속하기 위한 기본 설정이 이미 다 되어 있기 때문에 `run_agent.sh` 파일을 실행하면 에이전트는 컨트롤러에 접속합니다.
    * 에이전트는 `~/.ngrinder_agent/agent.conf` 파일을 찾은 후, 없으면 `__agent.conf` 파일을 `~/.ngrinder_agent/agent.conf` 파일로 복사한 후 사용합니다.


## 테스트 스크립트
- URL: http://52.68.232.195:8080/script/
- 테스트 케이스 저장소(SVN)
    + URL: http://52.68.232.195:8080/svn/admin
    + 계정: 본인의 nGrinder 계정을 사용하면 됩니다
    + 미리 샘플 테스트 케이스를 만들어서 저장해 두었습니다
        * http://52.68.232.195:8080/svn/admin/QA-Playground/src/main/java/TestRunner.groovy
        * IDEA
            - `File > New > Project from Version Control > Subversion`을 실행한 후, `http://52.68.232.195:8080/svn/admin/QA-Playground`을 Repository URL로 입력하여 체크아웃합니다
            - TestRunnder.groovy 클래스의 `testAddCommentToMakerContent` 메소드를 이용해 테스트를 실행해 볼 수 있습니다 
        * nGrinder 컨트롤러
            - 아래 주소에서 Validate Script 버튼을 클릭하여 실행해 볼 수 있습니다 
            - http://52.68.232.195:8080/script/detail/QA-Playground/src/main/java/TestRunner.groovy
        * `TestRunner.groovy`는 로그인이 필요한 경우의 테스트 샘플입니다
            - `ktpark@in-soft.co.kr` 계정으로 EMP에 로그인한 후, `http://kb-qa.play-ground.gq/maker/detail/300` 콘텐츠에 댓글을 입력합니다
            - 이 코드를 참고하여 `LoginAbility`를 상속한 후 TC를 작성하면 됩니다
- 테스트 스크립트 생성
    + `Create a script` 버튼을 클릭
    + Script Name에서 `Groovy`를 선택하여 단일 TC 작성이 가능합니다
    + `URL to be tested`
        * 이 항목에 입력하는 값으로 기본 요청 코드를 작성해 줍니다
        * 따라서 임의의 값을 입력해도 상관 없습니다
    + Script Name에서 `Groovy Maven Project`를 선택하면 Maven 프로젝트 생성이 가능합니다
        * Maven 프로젝트를 생성한 후 이를 IntelliJ에서 import하면 로컬 개발환경에서 TC를 작성할 수 있습니다
            - 참고: https://github.com/naver/ngrinder/wiki/Import-Groovy-Maven-Project-in-IntelliJ
        * IntelliJ에서 TC 실행 시 UnsupportedOperationException이 발생하면, `File > Project Structure`를 실행한 후 `Global Libraries`에서 Groovy 관련 항목을 삭제합니다
        * Maven 프로젝트에서 TC를 작성한 후 커밋하면 nGrinder 컨트롤러에서도 보고 실행할 수 있습니다
- nGrinder Recorder를 이용한 테스트 녹화
    * 가이드
        - https://github.com/naver/ngrinder/blob/master/ngrinder-recorder/README.md#ngrinder-recorder-chrome-extension
        - https://github.com/naver/ngrinder/wiki/nGrinder-Recorder-Guide
    * 설치 방법
        + nGrinder Recorder를 다운로드하고 압축 프로그램으로 강제로 압축을 해제합니다
            * https://github.com/naver/ngrinder/wiki/ngrinder-recorder-1.0.crx
        + 크롬 주소줄에 아래 주소를 입력하고 확장 프로그램 페이지로 이동합니다
            * chrome://extensions
        + `개발자 모드` 체크박스를 체크합니다
            * `압축해제된 확장 프로그램 로드` 버튼을 클릭합니다
            * 위에서 압축해제한 nGrinder Recorder 디렉토리를 선택합니다
                - css, images, js 디렉토리가 하위 디렉토리로 존재있는 디렉토리입니다
            * `개발자 모드`` 체크박스를 언체크합니다
            * 크롬 재실행시 나오는 경고가 나오면 `취소` 버튼을 클릭하여 무시합니다
    * Chrome Extension 참고: https://developer.chrome.com/extensions/packaging

