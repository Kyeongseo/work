
>Material design 기반으로 화면을 정의합니다.
본 문서는 모바일 기반으로 작성되어있습니다.

참고 사이트

- http://davidlab.net/google-design-ko/material-design/introduction.html
- https://material.angularjs.org/lates 

### Main

```
navigation drawer (sidenav)	sidenav > cloud service 선택 화면
Wiki > C-Spider UX/UI 표준 화면 정의 > sidenav.jpg
Wiki > C-Spider UX/UI 표준 화면 정의 > Toolbar.JPG
navigation drawer(sidenav)를 사용해 메뉴들을 나타냅니다.
main toolbar와 sub toolbar를 구현합니다.
main toolbar
위 그림에서 햄버거 메뉴가 있는 부분입니다.
sub toolbar
create... 버튼이 있는 부분입니다.
create, edit, delete 버튼은 아이콘으로 구현하거나 text로 구현합니다.
list에서 item을 선택하기 전에는 create, search 버튼만 활성화되어있습니다.
https://material.angularjs.org/latest/demo/fabToolbar
검색 버튼은 어느 위치가 적합할지 확인을 위해 main/sub toolbar 모두에 구현합니다.
```

### Create

```
create cloud service > select unit service list	create cloud service > select etc. & tooltip & validation
Wiki > C-Spider UX/UI 표준 화면 정의 > Select.jpg
Wiki > C-Spider UX/UI 표준 화면 정의 > tooltipValidation.jpg
create 화면은 dialog로 구현합니다.
http://davidlab.net/google-design-ko/components/dialogs.html#dialogs-full-screen-dialogs
create cloud service 필드 순서 (임의로 작성합니다.) 
select unit service > selected unit service's spec. > select service type > select billing > select SLA > write description > check review > CREATE 
선택할 항목의 list는 select box를 이용합니다.
리스트가 적을 때는 하단으로 리스트가 노출돼 스크롤 하는 방식으로 구현합니다.
리스트가 많을 때는 다이얼로그를 사용해 리스트를 선택하는 방법을 이용합니다.
https://material.angularjs.org/latest/demo/select
unit service 선택하면 선택한 unit service spec이 보여집니다.
작성하는 필드에 대한 설명은 tooltip으로 구현합니다.
https://material.angularjs.org/latest/demo/tooltip
tooltip 아이콘은 필드 왼쪽에 위치합니다.
description은 text field로 구현합니다.
http://davidlab.net/google-design-ko/components/text-fields.html
하단의 체크박스는 위 내용을 확인했나 다시 한번 묻는 체크박스입니다.
create 버튼을 누르면 각 요소들이 알맞게 채워졌는지 validation check를 합니다.
validation check를 모두 통과하면 create 되고, 에러 발생시 해당 필드 왼쪽 하단에 요구 조건을 노출합니다.
create 후 cloud service list 목록 최상단에 생성한 cloud service가 추가되어 노출됩니다.
```

### Edit

```
edit cloud service
Wiki > C-Spider UX/UI 표준 화면 정의 > edit.jpg
list에서 item을 하나만 선택하면 edit, delete 버튼이 추가로 활성화됩니다.
edit 화면은 dialog로 구현합니다.
추후 inline edit 기능을 구현합니다.
http://davidlab.net/google-design-ko/components/data-tables.html#data-tables-interaction
edit 화면은 create 화면과 같으며 수정할 수 있는 부분만 활성화되어있습니다.
```

### Delete

```
delete cloud service
Wiki > C-Spider UX/UI 표준 화면 정의 > delete.jpg
한개 또는 여러개 선택해 삭제할 수 있습니다.
list에서 item을 여러개 선택하면 edit 버튼은 비활성화 됩니다.
item 선택후 delete 버튼을 누르면 삭제 확인 dialog가 노출되며 삭제, 취소를 선택할 수 있습니다.
Delete 선택하면 선택한 item이 삭제됩니다.
http://davidlab.net/google-design-ko/components/dialogs.html#dialogs-alerts
```


