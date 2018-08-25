# Why Git?

- 로컬 저장소
- 원격 저장소
- 빠릅니다
- 커밋에 부담이 없습니다
- 원격 저장소와 연결이 끊겨도 계속 버전관리가 가능합니다
- 원격 저장소가 삭제되어도 로컬저장소로 복원이 가능합니다
- 스테이지 영역의 존재
- 편리한 브랜치(branch) & 머지(merge)

# 다운로드
http://git-scm.com/download/win


# 설치

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


# 이름과 이메일 주소 설정

전역으로 사용할 사용자 이름과 이메일 주소를 아래와 같이 설정합니다. 입력한 사용자 정보는 커밋할 때마다 사용됩니다.

```bash
$ git config --global user.name "사용자 이름"
$ git config --global user.email 이메일주소
```

# Unix 도구 사용

설치 시 Unix 도구를 사용할 수 있도록 선택했으면, 아래와 같이 vi 등의 Unix 도구를 사용할 수 있습니다.

```bash
$ ps
$ du -si
$ cd ~
$ ls -al
$ vi ~/.bashrc
:q
```

# SSH Key 생성

* 시작 > 모든 프로그램 > Git > Git Bash를 실행합니다
* Git Bash에서 `ls -a ~/.ssh` 명령을 실행하여 `id_rsa.pub` 혹은 `id_dsa.pub` 파일이 있는지 확인합니다
* 위의 파일이 없으면 `ssh-keygen -t rsa -C "이메일주소"` 명령을 실행합니다
* file, passphrase를 입력하라는 질문에는 모두 엔터를 입력하여 기본 값을 사용합니다
* `clip < ~/.ssh/id_rsa.pub` 명령으로 `~/.ssh/id_rsa.pub` 파일의 내용을 클립보드로 복사합니다.

```bash
Daniel@PROBOOK4520S ~
$ ls -al ~/.ssh
ls: /c/Users/Daniel/.ssh: No such file or directory

Daniel@PROBOOK4520S ~
$ ssh-keygen -t rsa -C "visavis2k@gmail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Daniel/.ssh/id_rsa):
Created directory '/c/Users/Daniel/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/Daniel/.ssh/id_rsa.
Your public key has been saved in /c/Users/Daniel/.ssh/id_rsa.pub.
The key fingerprint is:
41:47:83:1a:09:cc:63:08:d5:55:2b:5c:55:df:a4:bb visavis2k@gmail.com
The key's randomart image is:
+--[ RSA 2048]----+
|.o.=.o.o++=..   .|
|  . *.oo.o . . + |
|   . .ooo     o .|
|      .. .     . |
|        S     .  |
|               . |
|              E  |
|                 |
|                 |
+-----------------+

Daniel@PROBOOK4520S ~
$ clip < ~/.ssh/id_rsa.pub
```

# GitLab 가입 및 키등록

* GitLab [가입](https://gitlab.com/users/sign_up) 페이지에서 폼을 채운 후 __Sign up__ 버튼을 누릅니다
* 가입 시 등록한 이메일 계정을 확인하여 __Confirmation instructions__라는 제목의 이메일 내용 중, __Confirm my account__ 링크를 클릭하여 가입을 마무리합니다
* [로그인](https://gitlab.com/users/sign_in) 페이지에서 로그인 합니다
* `Profile Settings > SSH Keys` 메뉴로 이동한 후 __Add SSH Key__ 버튼을 누른 후 [위에서](#ssh-key) 생성한 후 클립보드에 저장한 SSH Key를 등록합니다(<kbd>Ctrl</kbd> <kbd>V</kbd>)
