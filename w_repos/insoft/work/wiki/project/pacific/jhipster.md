# jhipster설치가이드
# [jhipster](https://jhipster.github.io/)

## 설치 준비
1. [JAVA](http://www.oracle.com/technetwork/java/javase/downloads/index.html)설치
2. [Maven](http://maven.apache.org/) 설치
3. [Git](http://git-scm.com/) 설치
4. [Node.js](http://nodejs.org/) 설치
5. Yeoman 설치
    ```
    npm install -g yo
    ```

6. bower 설치
    ```
    npm npm install -g bower
    ```

7. grunt 설치
    ```
    npm install -g generator-jhipster
    ```

- [jhipster 설치시 아래와 같은 오류사항 해결 방법](https://github.com/cthackers/adm-zip/issues/121)
- ADM-ZIP 설치
    ```
    npm install adm-zip
    ```
```xml
D:\Perso\missa>npm install -g generator-jhipster
> fidonet-mailer-binkp-crypt@0.0.21 install C:\Users\A10282\AppData\Roaming\npm
node_modules\generator-jhipster\node_modules\yeoman-generator\node_modules\down
oad\node_modules\decompress\node_modules\decompress-unzip\node_modules\adm-zip\
ode_modules\fidonet-mailer-binkp-crypt
> node-gyp configure build

\
C:\Users\A10282\AppData\Roaming\npm\node_modules\generator-jhipster\node_module
\yeoman-generator\node_modules\download\node_modules\decompress\node_modules\de
ompress-unzip\node_modules\adm-zip\node_modules\fidonet-mailer-binkp-crypt>node
"C:\Program Files\nodejs\node_modules\npm\bin\node-gyp-bin\\..\..\node_modules\
ode-gyp\bin\node-gyp.js" configure build
gyp ERR! configure error
gyp ERR! stack Error: Can't find Python executable "python", you can set the PY
HON env variable.
gyp ERR! stack     at failNoPython (C:\Program Files\nodejs\node_modules\npm\no
e_modules\node-gyp\lib\configure.js:103:14)
gyp ERR! stack     at C:\Program Files\nodejs\node_modules\npm\node_modules\nod
-gyp\lib\configure.js:64:11
gyp ERR! stack     at FSReqWrap.oncomplete (evalmachine.:99:15)
gyp ERR! System Windows_NT 6.1.7601
gyp ERR! command "node" "C:\\Program Files\\nodejs\\node_modules\\npm\\node_mod
les\\node-gyp\\bin\\node-gyp.js" "configure" "build"
gyp ERR! cwd C:\Users\A10282\AppData\Roaming\npm\node_modules\generator-jhipste
\node_modules\yeoman-generator\node_modules\download\node_modules\decompress\no
e_modules\decompress-unzip\node_modules\adm-zip\node_modules\fidonet-mailer-bin
p-crypt
gyp ERR! node -v v0.12.0
gyp ERR! node-gyp -v v1.0.2
gyp ERR! not ok
npm ERR! Windows_NT 6.1.7601
npm ERR! argv "C:\\Program Files\\nodejs\\\\node.exe" "C:\\Program Files\\nodej
\\node_modules\\npm\\bin\\npm-cli.js" "install" "-g" "generator-jhipster"
npm ERR! node v0.12.0
npm ERR! npm  v2.5.1
npm ERR! code ELIFECYCLE

npm ERR! fidonet-mailer-binkp-crypt@0.0.21 install: `node-gyp configure build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the fidonet-mailer-binkp-crypt@0.0.21 install script 'node-g
p configure build'.
npm ERR! This is most likely a problem with the fidonet-mailer-binkp-crypt pack
ge,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     node-gyp configure build
npm ERR! You can get their info via:
npm ERR!     npm owner ls fidonet-mailer-binkp-crypt
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     D:\Perso\missa\npm-debug.log
```
## application 설치

- jhipster를 설치할 폴더로 이동하여 명령어 입력
    ```
    yo jhipster 
    ```

- 옵션 설명
    + May JHipster anonymously report usage statistics to improve the tool over time
        * 툴 개선을 위해 사용 통계를 제공 하겠는가?
    +  What is the base name of your application? (jhipster)
        *  application의 기본 이름은 무엇인가? (디폴트 jhipster)
    +   What is your default Java package name? (com.mycompany.myapp)
        *   java 기본 패키지는 무엇인가?
    +   Do you want to use Java 8? (Use arrow keys)
        *   Java8 을 사용하겠는가? (화살표 키를 사용하여 선택)
    +   Which *type* of authentication would you like to use?
        *   인증방식은 어떤것을 사용하겠는가?
    +    Which *type* of database would you like to use?
        *    데이터 베이스 유형은 무엇으로 하겠는가?
    +     Which *production* database would you like to use? (Use arrow keys)
        *     어떠한 데이터베이스를 사용 하겠는가?
    +     Which *development* database would you like to use? (Use arrow keys)
        *     개발시 어떠한 데이터 베이스를 사용하겠는가?
    +     Do you want to use clustered HTTP sessions? (Use arrow keys)
        *     클러스터 HTTP 세션을 사용 하겠는가?
    +     Do you want to use WebSockets? (Use arrow keys)
        *     웹 소켓을 사용 하겠는가?
    +     Would you like to use Maven or Gradle for building the backend?
        *     maven 또는 Gradle을 사용하여 백엔드를 구축하겠는가?
    +     Would you like to use Grunt or Gulp.js for building the frontend?
        *     Grunt 또는 Gulp를 사용하여 프론트 엔드를 구축하겠는가?
    +      Would you like to use the Compass CSS Authoring Framework?
        *      css제작 프레임워크를 사용 하겠는가?
        *      NO로 하세요.

## application 실행
``` 
mvn spring-boot:run
```
- java, maven 환경변수 설정이 되어있어야 합니다.
- 초기 실행시 시간이 많이 소요 됩니다.