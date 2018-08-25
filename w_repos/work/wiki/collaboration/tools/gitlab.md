# Eclipse Mylyn을 통해 Gitlab Issues 사용하기

## Mylyn Gitlab Connector 설치

Eclipse에서 GitLab 커넥터를 제공하지 않기 때문에 따로 설치가 필요합니다.   
여기에서는 [Mylyn Gitlab Connector](https://github.com/pweingardt/mylyn-gitlab)를 설치해봅니다.   

Eclipse의 `Help > Install New Software`를 클릭합니다.

![](https://lh5.googleusercontent.com/HqSqmxcqVTnZRAuZpypjaYpdQ8NbWqJ40qnLZr-MBFM=w412-h382-no)

소프트웨어 사이트를 추가하기 위해서 우상단의 `Add`를 클릭합니다.

![](https://lh5.googleusercontent.com/_aNgS-6-id7w0j93xc3j-zhgxKqbZ9ni0yGa75G-q5s=w620-h592-no)

**Add Repository** 창이 뜨면 Name에는 **Mylyn Gitlab Connector**, Location에는 **http://pweingardt.github.com/mylyn-gitlab**을 입력합니다.

![](https://lh6.googleusercontent.com/C9C7WqWeueV3rTO4Ut4cdIpLk9atcJi4xH2N6EDa2xc=w565-h229-no)

설치 가능한 소프트웨어 목록에서 **Mylyn Connectors**를 체크합니다.

![](https://lh5.googleusercontent.com/FQyACoPUbXP7-xJ-TYko4nozPRWYsYLXoS8lel6xQek=w620-h592-no)

**Next**를 클릭해서 계속 진행합니다.

![](https://lh3.googleusercontent.com/nM_I_nZJhP9ngJtckkqPsA0HsG_SdSkbfKh-IMHWD74=w620-h592-no)

![](https://lh5.googleusercontent.com/eIhP69rGbaFjq_iL5iURAHvPeka7_gktz9J-TgEi08c=w620-h592-no)

Mylyn Gitlab Connector는 EPL 라이센스로 제공됩니다. 라이센스에 동의합니다.

![](https://lh5.googleusercontent.com/_1DEoIp6whxBxBwcL1hvGCUVK73pBFmppJEm0TmS8W0=w620-h318-no)

서명이 없는 콘텐츠를 포함한 소프트웨어를 설치하려 한다는 경고입니다.

![](https://lh5.googleusercontent.com/bqSaZOeiHFgur4gCXFSz76VZ16cVJOHttRAAEIap3tc=w620-h213-no)

설치가 완료되면 Eclipse를 재시작합니다.

![](https://lh4.googleusercontent.com/U6jNsrUYY_RSUkYM4fZncc2i3vGAcSFXiCWCU0UAeUo=w620-h193-no)


## Mylyn에 GitLab 연결

**Task List** 뷰에서 `▼`를 클릭한 후 다시 `Add Repository`를 클릭합니다.

> Task List 뷰는 `Window > Show View`에서 선택해서 열 수 있습니다.

![](https://lh4.googleusercontent.com/aMyutxDXrts5KG7XxSyiuxirYXsAhSwMFC9V_GS4tzs=w274-h279-no)

**Add Task Repository** 창에서 **Gitlab issues**를 선택하고 **Next**를 클릭합니다.

![](https://lh3.googleusercontent.com/sA8c46_LreQwwHy8g0m48Qk3f6DCnNCEZOJirLbQVlY=w620-h459-no)

Server에는 `https://gitlab.com/insoft.cloud/pacific.git`를 넣습니다.   
Label에는 `Pacific`을 입력합니다.   
GitLab User ID와 Password를 입력한 후 꼭 **Save Password**를 체크합니다. 연동할 때마다 암호을 입력 받는 기능을 아직 지원하지 않습니다.

입력을 완료한 후 **Finish**를 클릭합니다.

![](https://lh3.googleusercontent.com/9dTjDCkrErJTEgK032HCMkpyMkiGCBam3P4oVBhjA9c=w619-h473-no)

**Add new query** 창이 뜨면서 Task List를 조회할 질의를 지금 작성할 것인지를 묻습니다.

![](https://lh4.googleusercontent.com/GydVRXtqSDgagT48kYIdffq54JfScu3qJiNhZG9jZp8=w620-h474-no)

**Query title**에는 `All`을 입력하고 모든 State를 선택해서 프로젝트의 모든 이슈를 가져오도록 설정했습니다. 

![](https://lh4.googleusercontent.com/fXYcdyTIp3wzYV2vnkz0hucwHvhskPQLwFDVRRbB4lo=w619-h418-no)

질의 작성을 완료하면 Task List에서 GitLab의 모든 이슈를 볼 수 있습니다.

![](https://lh4.googleusercontent.com/OGuenaG8lrAwzNW-uuZHYDi22Bevnj1SK5BcTkUKuQo=w323-h243-no)

이슈를 더블 클릭하면 편집기에서 이슈 내용을 수정하거나 댓글을 다는 등의 동작을 할 수 있습니다.

![](https://lh5.googleusercontent.com/iuC_NF48RKMZY2xpg6e3iZYPNjOhNhI0bMigRuYwMOU=w620-h204-no)

**New Task**를 클릭해서 새 이슈(Task)를 등록할 수도 있습니다.

![](https://lh3.googleusercontent.com/SyL-4jWRELqXTBdL-zPqCPhwyyREQN6Ac4uiccdnYSw=w375-h225-no)

이슈(Task)를 저장할 Repository를 선택합니다. **Pacific**을 선택하면 됩니다.

![](https://lh5.googleusercontent.com/S2l9q4DvEbVE-HnUj8h7N7synA4uUbA5CKbKNjXsMN4=w581-h480-no)

새 이슈(Task)를 입력하는 화면이 열립니다.

![](https://lh4.googleusercontent.com/VdvSWsHCKo93Mjh-PTEUtYynSUA3r_Fdw3Y6FCozkkc=w620-h249-no)


---

# GitLab 암호 설정하기

Google 계정 등으로 GitLab에 등록한 경우 설정된 암호가 없기 때문에 Eclipse Mylyn 연동에 문제가 있습니다. 구글을 통해서만 GitLab에 로그인하기 때문에 암호를 설정할 필요가 없었기 때문입니다.   
GitLab에 새 암호를 등록하려면 아래와 같이 진행하면 됩니다.

GitLab 우측 상단에 있는 `Profile settings`를 클릭합니다.

![Gitlab newpassword for googler 001.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/CTRzRrOTcqyjPOZIapIm_Gitlab%20newpassword%20for%20googler%20001.png)

**Profile** 메뉴로 이동하면 `Password`를 클릭합니다.

![Gitlab newpassword for googler 002.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/hAbVLCfKQ8WfZ9W4xl7C_Gitlab%20newpassword%20for%20googler%20002.png)

`Forgot your password?`를 클릭합니다.

![Gitlab newpassword for googler 003.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/i4GxGEfbT5WBA2Aq3x0I_Gitlab%20newpassword%20for%20googler%20003.png)

등록된 이메일 주소로 아래와 같은 메일이 옵니다. `Change my password`를 클릭합니다.

![Gitlab newpassword for googler 004.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/y6J5PzBTAG48haVMBRE2_Gitlab%20newpassword%20for%20googler%20004.png)

**Change your password**로 이동하면, 새로운 암호를 등록합니다.

![Gitlab newpassword for googler 005.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/sXHqCiTJRiyKN5jPf8rP_Gitlab%20newpassword%20for%20googler%20005.png)

이제 Email 혹은 Username과 설정한 암호를 이용해서 GitLab에 로그인 할 수 있습니다.

