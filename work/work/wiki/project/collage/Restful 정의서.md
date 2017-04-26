# 회원 가입 
## 회원 가입
**[Request]**
```
POST /register
{
	registerType: "facebook"
	login: "smpark",
	password: "insoft00"
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|registerType| 기본 회원 가입 or sso를 이용한 회원 가입 | O |
| login | 아이디 | O |
| password | 비밀 번호 | O |

**[Response]**
```
200 OK
{
	"id": 1,
	"login": "smpark1234"
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
| id | user id | Long |
| login | 최종 발급 된 loginId  | String |

# 로그인
## 로그인
**[Request]**
```
POST /session?login=login&password=password
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
| login | 회원 가입 시 입력 한 로그인 아이디 | O |
| password | 회원 가입 시 입력 한 비밀 번호 | O |

**[Response]**
```
200 OK
{
	"accessKey": "123abccadf4573!@44s"
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
| accessKey | 인증 키  | String |

# 내 계정
##내 계정정보 가져 오기
**[Request]**
```
GET /account
```
**[Response]**
```
200 OK
{
  	"id": 1,
  	"login": "smpark",
  	"profile": {
  		// profile
  	},
  	"point": 10000,
  	"badge": {
  		// 대표 badge
  	}
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
| id | user id  | Long |
| login | 사용자 아이디  | String |
| profile | 개인 정보  | Object |
| point | 보유한 포인트  | Long |
| badge | 대표 뱃지  | Object |

## 내 계정 > 프로파일 가져 오기
**[Request]**
```
GET /account/profile
```

**[Response]**
```
200 OK
{
	"picture": 1,
	"job": ["Chef", "Designer", "Photographer", "Actor", "Artist", "Writer", "Curator"],
	"shortIntroduction": "아이엔소프트 클라우드 사업본부의 박상민 입니다.",
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|picture| 이미지id | Long |
|job| 사용자의 직업 장르 | Array |
|shortIntroduction| 한마디 소개 | String |

## 내 계정 > 프로파일 저장
**[Request]**
```
PUT, POST /account/profile
{
	"picture": {
		// images 정보
	},
	"job": ["Chef", "Designer", "Photographer", "Actor", "Artist", "Writer", "Curator"],
	"shortIntroduction": "아이엔소프트 클라우드 사업본부의 박상민 입니다.",
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|picture| 사용자의 프로필 이미지 | X |
|job| 사용자의 직업 장르 | X |
|shortIntroduction| 한마디 소개 | X |

**[Response]**
```
200 OK
{
	"picture": 1,
	"job": ["Chef", "Designer", "Photographer", "Actor", "Artist", "Writer", "Curator"],
	"shortIntroduction": "아이엔소프트 클라우드 사업본부의 박상민 입니다.",
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|picture| 이미지id | Long |
|job| 사용자의 직업 장르 | Array |
|shortIntroduction| 한마디 소개 | String |

## 내 계정 > 탈퇴
**[Request]**
```
POST /account/secession
```
**[Response]**
```
200 OK
```
- 탈퇴 요청 시 사용자 정보는 30일간 보관된 후 자동 삭제 처리 된다.

## 내 계정 > 포인트 확인
**[Request]**
```
GET /account/point
```
**[Response]**
```
200 OK
{
	"point": 10000,
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|point| 보유한 point | Long |

## 내 계정 > 포인트 내역 확인
**[Request]**
```
GET /account/point/history?q=type%3donation&offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|q| 검색어 | X |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |
**[Response]**
```
200 OK
[ //history ]
```

## 내 계정 > 특정 포인트 내역 확인
**[Request]**
```
GET /account/point/{id}/history
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 포인트 내역 id | O |

**[Response]**
```
200 OK
{
  	"id" : 1,
  	"type": "donation",
  	"from": "smpark", 
  	"to": "parksangmin",
  	"point": 100,
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|id| 포인트 내역 아이디 | Long |
|type| 포인트 내역 유형 | String |
|from| 포인트 보내는 사람 | String |
|to| 포인트 받는 사람 | String |
|point| 포인트 | Long |

## 내 계정 > 다른 사용자에게 포인트 기부
**[Request]**
```
POST /account/point/{point}/users/{user}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|point| 기부할 포인트 | O |
|user| 기부할 이용자 | O |

**[Response]**
```
200 OK
{
 "point": 2000,
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|point| 기부 하고 남은 포인트 | Long |

## 내 계정 > 보유한 전체 뱃지 목록
**[Request]**
```
GET /account/badges
```
**[Response]**
```
200 OK
[ //badge ]
```
## 내 계정 > 현재 설정된 대표 뱃지
**[Request]**
```
GET /account/badges/rep
```
**[Response]**
```
200 OK
{
	"id": 1,
 	"name": "Collage",
  	"description": "Collage",
  	"representation": true
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|id| 뱃지 id | Long |
|name| 뱃지 이름 | String |
|description| 뱃지 설명 | String |
|representation| 대표 뱃지 여부 | Boolean |

## 내 계정 > 대표 뱃지 변경
**[Request]**
```
PUT /account/badges/{id}/rep
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 뱃지 아이디 | O |

**[Response]**
```
200 OK
{
	"id": 1,
  	"name": "Collage",
  	"description": "Collage",
  	"representation": true
  }
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|id| 뱃지 id | Long |
|name| 뱃지 이름 | String |
|description| 뱃지 설명 | String |
|representation| 대표 뱃지 여부 | Boolean |

## 내 계정 > 알림 > 메세지 목록
**[Request]**
```
GET /notifications/messages?q=confirm%3false&offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|q| 검색어(confirm: 알람 확인 유무) | X |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // message ]
```

## 내 계정 > 알림 > 메세지 확인
**[Request]**
```
GET /notifications/messages/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| message Id | O |

**[Response]**
```
200 OK
{
	"id": 1,
  	"user": { // user },
  	"message": "smpark님이 작성한 포스트에 태그 되었습니다.",
  	"messageType": "tag",
 	"actionId": 1 ,
 	"confirm": true
  }
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|id| 알림 id | Long |
|user| 알림을 발생 시킨 사용자 정보 |  Object |
|message| 알림 내용 | String |
|messageType| 알림 유형  | String |
|actionId| 해당 알림을 Tap 했을 시 이동해야할 컨텐츠 Id | Long |
|confirm| 알림 확인 유무 | Boolean |

- messageType: 태그, 댓글, 좋아요, 팔로워 등
- confirm: 메세지 GET api호출 시 confirm 속성 값을 true로 변경
- Date: Create 및 Update Date Time은 공통 속성으로 관리(추후 정의)

## 내 계정 > 알림 > 방명록 목록
**[Request]**
```
GET /notifications/guest-books?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // guestBook ]
```
## 내 계정 > 알림 > 방명록 확인
**[Request]**
```
GET /notifications/guest-books/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| guestBook Id | O |

**[Response]**
```
200 OK
{
	"id": 1,
  	"user": { // user },
  	"message": "포스팅 잘 보고 갑니다.",
  	"answer": "감사합니다."
  }
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|id| 방명록 id | Long |
|user| 방명록을 작성한 사용자 정보 |  Object |
|message| 방명록 내용 | String |
|answer| 답변 내용 | String or Null |

## 내 계정 > 알림 > 방명록 쓰기
**[Request]**
```
POST /notifications/guest-books
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|user| 방명록을 작성하는 사용자 정보 | O |
|message| 방명록 내용 | O |

**[Response]**
```
200 OK
```

## 내 계정 > 알림 > 방명록 삭제
**[Request]**
```
DELETE /notifications/guest-books/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| guestBook Id | O |

**[Response]**
```
200 OK
```
- 답변이 달린 방명록은 삭제 할 수 없다.

# 사용자
## 사용자 목록
**[Request]**
```
GET /users?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // user ]
```
## 특정 사용자
**[Request]**
```
GET /users/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 사용자 id | O |

**[Response]**
```
200 OK
{
	"id": 1,
  	"login": "smpark",
  	"profile": {
  		// profile
  	},
  	"point": 10000,
  	"badge": {
  		// 대표 badge
  	}
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
| id | user id  | Long |
| login | 사용자 아이디  | String |
| profile | 개인 정보  | Object |
| point | 보유한 포인트  | Long |
| badge | 대표 뱃지  | Object |

## 사용자 검색
**[Request]**
```
GET /users?q=login%3login&offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|q| 검색어(login: 유저 아이디) | X |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // user ]
```

# 팔로워
## 나를 팔로우 한 사용자 목록
**[Request]**
```
GET /followers?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // user ]
```

## 나를 팔로우 한 사용자 검색
**[Request]**
```
GET /followers?q=login%3login&offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|q| 검색어(login: 유저 아이디) | X |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // user ]
```

## 특정 유저의 팔로워 목록
**[Request]**
```
GET /followers/users/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 사용자 id | O |

**[Response]**
```
200 OK
[ // user ]
```

## 팔로워가 많은 사용자 목록(인기 사용자)
**[Request]**
```
GET /followers/favorite?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // user ]
```

## 팔로워가 많은 사용자 검색(인기 사용자 검색)
**[Request]**
```
GET /followers/favorite?q=login%3login&offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|q| 검색어(login: 유저 아이디) | X |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // user ]
```

# 팔로우
## 나의 팔로우 목록
**[Request]**
```
GET /following?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // user ]
```

## 나의 팔로우 검색
**[Request]**
```
GET /following?q=login%3login&offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|q| 검색어(login: 유저 아이디) | X |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // user ]
```

## 팔로우 신청
**[Request]**
```
POST /following/user/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 팔로우할 사용자 id | O |

**[Response]**
```
200 OK
```

## 팔로우 탈퇴
**[Request]**
```
DELTE /following/user/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 팔로우를 탈퇴 할 사용자 id | O |

**[Response]**
```
200 OK
```

## 특정 유저의 팔로우 목록
**[Request]**
```
GET /following/user/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 팔로우할 사용자 id | O |

**[Response]**
```
200 OK
[ // user ]
```

# 좋아요
## 내가 좋아요한 컨탠츠 목록
**[Request]**
```
GET /likes?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ //content ]
```
- content: Post and Magazine는 Contents라는 부모 Entity의 자식이다.

## 내가 좋아요한 컨텐츠 검색
**[Request]**
```
GET /likes?q=title%3collage,author%3smpark&offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|q| 검색어 | X |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ //content ]
```

## 좋아요 등록
**[Request]**
```
POST /likes/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 좋아요에 등록할 컨텐츠 id | O |

**[Response]**
```
200 OK
```

## 좋아요 삭제
**[Request]**
```
DELETE /likes/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 좋아요에서 삭제할 컨텐츠 id | O |

**[Response]**
```
200 OK
```

## 특정 컨텐츠를 좋아요한 사용자 목록
**[Request]**
```
GET /likes/contents/{contentId}/users?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|contentId| 컨텐츠 id | O |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // user ]
```

# 신고 및 공유
## 사용자 신고
**[Request]**
```
POST /users/{id}/declaration
{
    // 속성은 다음 버젼에서 정의
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| user 아이디 | O |

**[Response]**
```
200 OK
```

## contents 신고 
**[Request]**
```
POST /contents/{id}/declaration
{
    // 속성은 다음 버젼에서 정의
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| content 아이디 | O |

**[Response]**
```
200 OK
```

## contents 공유 
**[Request]**
```
POST /contents/{id}/sharing
{
    users: [ 1, 2, 3]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| content 아이디 | O |
|users| 공유 할 사용자들의 id | O |

## Hashtag
## hashtag 연관 컨텐츠 및 hashtag 목록
**[Request]**
```
GET /hashtags?q=type%3type&offset=offset&limit=limit
{
	hashtags: ["tag1", "tag2"]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|hashtags| 해쉬태그 명 | O |
|type| contents, hashtags (미 입력시 모든 타입) | X |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // content, hashtags  ]
```

# Post
## Post 목록
**[Request]**
```
GET /posts?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // post ]
```

## Post 확인
**[Request]**
```
GET /posts/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| post id | o |

**[Response]**
```
200 OK
{
	id: 1,
	title: "title",
	user: {
		// user
	},
	hashTags: ["tag1", "tag2"],
	contents: [{
		images: [{
			//image
		}],
		texts: ["저의 첫번째 포스트 입니다."]
	}]
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|id| 포스트 id | Long |
|title| 포스트 제목 | String |
|user| 작성자 정보 | Object |
|hashTags| 포스트의 해쉬태그 | Array |
|contents| 포스트의 컨텐츠 내용 | Array |

## Post 검색
**[Request]**
```
GET /posts?q=title%3collage,author%3smpark&
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|q| 검색어 | X |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // post ]
```

## Post 작성
**[Request]**
```
POST /posts
{
	title: "title",
	hashTags: ["tag1", "tag2"],
	contents: [{
		images: [{
			//image
		}],
		texts: ["저의 첫번째 포스트 입니다."]
	}]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|title| 포스트 제목 | o |
|hashTags| 포스트의 해쉬 태그 | o |
|contents| 포스트의 컨텐츠 | o |

**[Response]**
```
200 OK
```

## Post 수정
**[Request]**
```
PUT /posts
{
	id: id,
	title: "title",
	hashTags: ["tag1", "tag2"],
	contents: [{
		images: [{
			//image
		}],
		texts: ["저의 첫번째 포스트 입니다."]
	}]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 포스트 id | o |
|title| 포스트 제목 | o |
|hashTags| 포스트의 해쉬 태그 | o |
|contents| 포스트의 컨텐츠 | o |

**[Response]**
```
200 OK
```

## Post 삭제
**[Request]**
```
DELETE /posts/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 포스트 id | o |

**[Response]**
```
200 OK
```
# Contents 댓글
## 댓글 목록
**[Request]**
```
GET /replies/contents/{id}?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| contents id | o |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // reply ]
```

## 댓글 확인
**[Request]**
```
GET /replies/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 댓글 id | o |

**[Response]**
```
200 OK
{
	id: 1,
	title: "title",
	text: "text"
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|id| 댓글 id | Long |
|title| 댓글 제목 | String |
|text| 댓글 내용 | String |

## 특정 유저가 작성한 댓글 목록
**[Request]**
```
GET /replies/users/{id}?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 사용자 id | o |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // reply ]
```

## 댓글 달기
**[Request]**
```
POST /replies/contents/{id}
{
	title: "댓글 제목",
	text: "댓글 내용"
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| contents id | o |
|title| 댓글 제목 | o |
|text| 댓글 내용 | o |

**[Response]**
```
200 OK
```

## 댓글 수정
**[Request]**
```
PUT /replies
{	
	id: 1,
	title: 댓글 제목,
	text: 댓글 내용
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 댓글 id | o |
|title| 댓글 제목 | o |
|text| 댓글 내용 | o |

**[Response]**
```
200 OK
```

## 댓글 삭제
**[Request]**
```
DELETE /replies/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 댓글 id | o |

**[Response]**
```
200 OK
```

# Magazine
## Magazine 목록
**[Request]**
```
GET /magazines?offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // magazines ]
```

## Magazine 확인
**[Request]**
```
GET /magazines/{id}
```
**[Response]**
```
200 OK
{
	id: 1,
	title: "title",
	description: "description",
	cover: {
		// image
	},
	user: {
		// user
	},
	music: {
		// music
	},	
	hashTags: ["tag1", "tag2"],
	contents: [{
		// content(post, hashtagList)
	}]
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|id| 매거진 id | Long |
|title| 매거진 제목 | String |
|description| 매거진 설명 | String |
|cover| 매거진 표지 이미지 | Object |
|user| 작성자 정보 | Object |
|music| 매거진 음악 | Object |
|hashTags| 매거진 해쉬태그 | Array |
|contents| 매거진 컨텐츠 내용 | Array |

## Magazine 검색
**[Request]**
```
GET /magazines?q=title%3title&offset=offset&limit=limit
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|q| 검색어 | X |
|offset| 건너 뛰기 | X |
|limit| 갯수 제한 | X |

**[Response]**
```
200 OK
[ // Magazine ]
```

## Magazine 작성
**[Request]**
```
POST /magazines
{
	title: "title",
	description: "description",
	cover: {
		// image
	},
	music: {
		// music
	},	
	hashTags: ["tag1", "tag2"],
	contents: [{
		// content(post, hashtagList)
	}]
}
```

| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|title| 매거진 제목 | O |
|description| 매거진 설명 | X |
|cover| 매거진 표지 이미지 | O |
|music| 매거진 음악 | X |
|hashTags| 매거진 해쉬태그 | O |
|contents| 매거진 컨텐츠 내용 | O |


**[Response]**
```
200 OK
```

## Magazine 수정
**[Request]**
```
PUT /magazines
{
	id: 1,
	title: "title",
	description: "description",
	cover: {
		// image
	},
	music: {
		// music
	},	
	hashTags: ["tag1", "tag2"],
	contents: [{
		// content(post, hashtagList)
	}]
}
```

| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 매거진 아이디 | O |
|title| 매거진 제목 | O |
|description| 매거진 설명 | X |
|cover| 매거진 표지 이미지 | O |
|music| 매거진 음악 | X |
|hashTags| 매거진 해쉬태그 | O |
|contents| 매거진 컨텐츠 내용 | O |

**[Response]**
```
200 OK
```

## Magazine 삭제
**[Request]**
```
DELETE /magazines/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 매거진 아이디 | O |

**[Response]**
```
200 OK
```

**[Response]**
```
200 OK
```

# Map
## 추천 맵
**[Request]**
```
GET /maps/recommendations
{
	coordinates: [{
		x: 10,
		y: 10
	}, {
		x: 11,
		y: 10
	}]
}
```

| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|x| 추천 맵 x좌표 | O |
|y| 추천 맵 y좌표 | O |

**[Response]**
```
200 OK
[{
	// content or hashTag
	}, 
	{
	// content or hashTag
}]
```

## 추천 맵 병합
**[Request]**
```
GET /maps/recommendations/merge
{
	contents: [{
		// content
	}]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|contents| 병합할 contents 목록| O |

**[Response]**
```
200 OK
{
	// contents 
}
```

## 매거진 맵
**[Request]**
```
GET /maps/magazines
{
	coordinates: [{
		x: 10,
		y: 10
	}, {
		x: 11,
		y: 10
	}]
}
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|x| 매거진 맵 x좌표 | O |
|y| 매거진 맵 y좌표 | O |
```
**[Response]**
```
200 OK
[{
	// magazine
	}, 
	{
	// magazine
}]
```

## 매거진 맵 병합
**[Request]**
```
GET /maps/magazines/merge
{
	contents: [{
		// content
	}]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|contents| 병합할 contents 목록| O |

**[Response]**
```
200 OK
{
	// magazine 
}
```

## 포스트 맵
**[Request]**
```
GET /maps/posts
{
	coordinates: [{
		x: 10,
		y: 10
	}, {
		x: 11,
		y: 10
	}]
}
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|x| 포스트 맵 x좌표 | O |
|y| 포스트 맵 y좌표 | O |
```
**[Response]**
```
200 OK
[{
	// post
	}, 
	{
	// post
}]
```

## 포스트 맵 병합
**[Request]**
```
GET /map/posts/merge
{
	contents: [{
		// content
	}]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|contents| 병합할 contents 목록| O |

**[Response]**
```
200 OK
{
	// post 
}
```

## 피드 맵
**[Request]**
```
GET /maps/feeds
{
	coordinates: [{
		x: 10,
		y: 10
	}, {
		x: 11,
		y: 10
	}]
}
```

| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|x| feed 맵 x좌표 | O |
|y| feed 맵 y좌표 | O |

**[Response]**
```
200 OK
[{
	// content
	}, 
	{
	// content
}]
```

## 피드 맵 병합
**[Request]**
```
GET /maps/feeds/merge
{
	contents: [{
		// content
	}]
}
```

| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|contents| 병합할 contents 목록| O |

**[Response]**
```
200 OK
{
	// content 
}
```

## 좋아요 맵
**[Request]**
```
GET /maps/likes
{
	coordinates: [{
		x: 10,
		y: 10
	}, {
		x: 11,
		y: 10
	}]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|x| like 맵 x좌표 | O |
|y| like 맵 y좌표 | O |

**[Response]**
````
200 OK
[{
	// content
	}, 
	{
	// content
}]
```

## 좋아요 맵 병합
**[Request]**
```
GET /maps/likes/merge
{
	contents: [{
		// content
	}]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|contents| 병합할 contents 목록| O |

**[Response]**
```
200 OK
{
	// content 
}
```

## 검색 맵
**[Request]**
```
GET /maps/searches
{
	searches: ["search1", "search2"],
	coordinates: [{
		x: 10,
		y: 10
	}, {
		x: 11,
		y: 10
	}]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|searches| 검색어 목록| O |
|x| 검색 맵 x좌표 | O |
|y| 검색 맵 y좌표 | O |

**[Response]**
```
200 OK
[{
	// content
	}, 
	{
	// content
}]
```

## 사용자 맵
**[Request]**
```
GET /maps/user/{id}
{
	coordinates: [{
		x: 10,
		y: 10
	}, {
		x: 11,
		y: 10
	}]
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| user맵 id | O |
|x| user 맵 x좌표 | O |
|y| user 맵 y좌표 | O |

**[Response]**
```
200 OK
[{
	// content or hashtag
	}, 
	{
	// content or hashtag
}]
```

## 사용자 맵 생성
**[Request]**
```
POST /maps/user/
{
	coordinate: {
		x: 10,
		y: 10
	},
	content: {
		// contet or hashtag
	}
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|content| user맵에 추가할 컨텐츠 | O |
|x| user 맵 x좌표 | O |
|y| user 맵 y좌표 | O |

**[Response]**
```
200 OK
```

## 빈칸 선책 시 랜덤 컨텐츠
**[Request]**
```
GET /maps/random-content
```

**[Response]**
```
200 OK
{
	// contents
}
```

## 맵 몹록(추가 생성 맵 포함)
**[Request]**
```
GET /maps
```
**[Response]**
```
200 OK
[{
	// map
}]
```

## 스타트 맵 설정
**[Request]**
```
POST /maps/start
{
	id: 1
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| 맵 id | O |

**[Response]**
```
200 OK
```

## 스타트 맵 가져오기
**[Request]**
```
GET /maps/start
```

**[Response]**
```
200 OK
{
	// map
}
```

# attachment
## attachment 저장
**[Request]**
```
POST /attachments
{
	type: "image",
	attachment: {
		// attachment
	}
}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|type| 저장할 자료 유형 | O |
|attachment| 저장할 자료 | O |

**[Response]**
```
200 OK
{
	id: 1,
	type: "image",
	attachment: {
		// attachment 정보
	}
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|id| attachment id | Long |
|type| attachment 유형 | String |
|attachment| attachment 정보 | Object |


## attachment 확인
**[Request]**
```
GET /attachments/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| attachment id | O |

**[Response]**
```
200 OK
{
	id: 1,
	type: "image",
	attachment: {
		// attachment 정보
	}
}
```
| 키 | 설명 | 타입 |
| :--- | :--- | :---: |
|id| attachment id | Long |
|type| attachment 유형 | String |
|attachment| attachment 정보 | Object |

## Image 스트리밍
**[Request]**
```
GET /attachments/images/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| attachment id | O |
**[Response]**
```
200 OK
streaming
```

## Music 스트리밍
**[Request]**
```
GET /attachments/music/{id}
```
| 키 | 설명 | 필수 |
| :--- | :--- | :---: |
|id| attachment id | O |
**[Response]**
```
200 OK
streaming
```