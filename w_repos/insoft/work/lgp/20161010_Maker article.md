Maker article 중복 코드 제거 (Main, My page, Search)
- Main, My page, Search file 마다 maker article 코드가 따로 들어있어 수정시 3개 파일 모두 수정해야하는 불편함이 있습니다.
하나의 로직으로 수정할 수 있도록 변경하고 중복 코드를 제거합니다.

---
MAIN (pc)
- makersType1
 - class="article article1"

- makersType2M
 - class="article2In"
  - class="article"
  - class="article article2_1"
  - class="article article2_1 article3_1"

- makersType3
 - class="article article3"

- makersType4
 - class="article article2"
 - class="article article7"