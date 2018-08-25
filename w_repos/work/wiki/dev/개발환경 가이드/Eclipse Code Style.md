# Eclipse Code Style 적용

이클립스에서 Code Format/Clean Up 시 사용하는 Code Style Profile의 import 방법과 사용법을 설명합니다.

# Code Style Profile 다운로드

[Trello Card](https://trello.com/c/c5FxwuN9/123-eclipse-code-style-formatter-clean-up-profile)에 첨부되어 있습니다.
최신 버전을 원한다면 위 카드로 이동한 후 받으세요.

[Download - Formatter Profile](https://trello-attachments.s3.amazonaws.com/548a6f4b442a1107ca164a1b/54b37ba087a14bc53eaad0ef/c74c86db80d9c0cd7cfd253957aca725/insoft_cloud_hq_formatter.xml)

[Download - Clean Up Profile](https://trello-attachments.s3.amazonaws.com/548a6f4b442a1107ca164a1b/54b37ba087a14bc53eaad0ef/402d5c5176c9ea31880a8158f74e25ad/insoft_cloud_hq_cleanup.xml)


# Import


## Formatter

이클립스의 `Window > Preferences` 메뉴로 Preferences 창을 띄운 후, `Java > Code Style > Formatter`를 선택합니다.

![Formatter](http://i.imgur.com/nqL5XTc.png)

`Import` 버튼을 선택하여 파일 선택창을 엽니다.

![Import](http://i.imgur.com/gdEQ2IO.png)

**insoft_cloud_hq_formatter.xml** 파일을 선택하여 import합니다.

![Select insoft_cloud_hq_formatter.xml](http://i.imgur.com/bnFEM1q.png)

적용이 완료되었습니다!


## Clean Up

이클립스의 `Window > Preferences` 메뉴로 Preferences 창을 띄운 후, `Java > Code Style > Clean Up`을 선택합니다.

![Clean Up](http://i.imgur.com/xcS1Y6U.png)

`Import` 버튼을 선택하여 파일 선택창을 엽니다.

![Import](http://i.imgur.com/DTZKtU8.png)

**insoft_cloud_hq_cleanup.xml** 파일을 선택하여 import합니다.

![Select insoft_cloud_hq_cleanup.xml](http://i.imgur.com/PUjgeqD.png)

적용이 완료되었습니다!



# Usage

## Formatter

Formatter는 다음과 같이 여러가지 상황에서 적용이 가능합니다.

- 소스 코드의 일부를 선택한 후 적용할 수 있습니다

![Selected area](http://i.imgur.com/kBuJS2v.png)

- 하나 혹은 여러 개의 파일/디렉토리를 선택한 후에 적용할 수 있습니다
- 디렉토리를 선택한 경우 하위의 모든 파일에 Formatter가 적용됩니다

![File and Directory](http://i.imgur.com/SCjDyuw.png)


## Clean Up

Clean Up은 다음과 같이 여러가지 상황에서 적용이 가능합니다.

- 하나 혹은 여러 개의 파일/디렉토리를 선택한 후에 적용할 수 있습니다
- 디렉토리를 선택한 경우 하위의 모든 파일에 Clean Up이 적용됩니다
- Formatter와는 다르게 창이 뜹니다
	-  `Next` 버튼을 누른 후 코드가 어떻게 변경되는 지 확인합니다
	-  `Finish` 버튼을 눌러서 적용합니다

![File and Directory](http://i.imgur.com/GfZzQn3.png)

- Clean Up은 소스 코드의 일부에만 적용 할 수는 없습니다.
- Clean Up을 실행하면 Formatter도 함께 적용됩니다. 따라서 둘 다 적용할 필요가 있을 때는 Clean Up만 실행해 주면됩니다
