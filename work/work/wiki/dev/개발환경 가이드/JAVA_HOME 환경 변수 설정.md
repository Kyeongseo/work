# JAVA_HOME 환경 변수 설정
## 시스템 설정

System에서 JAVA를 사용할 수 있도록 환경 변수 설정을 해준다.
제어판 > 시스템 및 보안 > 시스템 메뉴로 이동 하여 고급 시스템 설정을 클릭 한다.

![java3.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GfumT3T3SCWmCGWEfhUs_java3.png)

팝업 된 시스템 속성 창에서 환경 변수 버튼을 클릭 한다.

![java4.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/2Z974lURRgOu7ARlynQN_java4.png)

시스템 변수의 새로 만들기 버튼을 클릭 한다.

![java5.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/uWzABcZeRdy4wg7yLKcC_java5.png)

변수 이름: JAVA_HOME , 변수 값: "자바 JDK가 설치 된 경로" (기본 경로를 변경 하지 않았다면 아래와 같다.)를 입력하고 확인 버튼을 클릭 한다.

![java6.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Jyd6ZYcTKmwsU0reOGrk_java6.PNG)

시스템 변수의 Path항목을 찾아 편집 버튼을 클릭 한다.

![java7.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/tF0HyVkyTWgLDO65LaA9_java7.PNG)

새로 만들기 버튼을 클릭 한 후, %JAVA_HOME%\bin 입력하고 확인 버튼을 클릭 한다.

![java9.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/2HfQfy6LQkGEGqFlIGhm_java9.png)

## 확인

설정을 완료 한 후, 다시 윈도우 명령 프롬프트 창을 열어 echo %JAVA_HOME% 을 입력하여 Path가 제대로 출력 되는지 확인한다.

![java10.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/wzlst8olSKOwVL7dREPQ_java10.PNG)

javac 명령어를 입력하여 아래와 같이 나오는지 확인한다.

```bash
C:\Users\user>javac
Usage: javac <options> <source files>
where possible options include:
  -g                         Generate all debugging info
  -g:none                    Generate no debugging info
  -g:{lines,vars,source}     Generate only some debugging info
  -nowarn                    Generate no warnings
  -verbose                   Output messages about what the compiler is doing
  -deprecation               Output source locations where deprecated APIs are used
  -classpath <path>          Specify where to find user class files and annotation processors
  -cp <path>                 Specify where to find user class files and annotation processors
  -sourcepath <path>         Specify where to find input source files
  -bootclasspath <path>      Override location of bootstrap class files
  -extdirs <dirs>            Override location of installed extensions
  -endorseddirs <dirs>       Override location of endorsed standards path
  -proc:{none,only}          Control whether annotation processing and/or compilation is done.
  -processor <class1>[,<class2>,<class3>...] Names of the annotation processors to run; bypasses default discovery process
  -processorpath <path>      Specify where to find annotation processors
  -parameters                Generate metadata for reflection on method parameters
  -d <directory>             Specify where to place generated class files
  -s <directory>             Specify where to place generated source files
  -h <directory>             Specify where to place generated native header files
  -implicit:{none,class}     Specify whether or not to generate class files for implicitly referenced files
  -encoding <encoding>       Specify character encoding used by source files
  -source <release>          Provide source compatibility with specified release
  -target <release>          Generate class files for specific VM version
  -profile <profile>         Check that API used is available in the specified profile
  -version                   Version information
  -help                      Print a synopsis of standard options
  -Akey[=value]              Options to pass to annotation processors
  -X                         Print a synopsis of nonstandard options
  -J<flag>                   Pass <flag> directly to the runtime system
  -Werror                    Terminate compilation if warnings occur
  @<filename>                Read options and filenames from file
```