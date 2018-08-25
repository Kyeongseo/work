# Sublime Text
## 설치
http://www.sublimetext.com/
위의 사이트로 이동하여 설치 파일을 다운로드 후, 설치를 진행한다.

## Package Control설치
유용한 Package를 설치하여 사용 편의성을 높이기 위해서는 Package Control를 설치하여야 한다.
상단 메뉴바의 view > show console 또는 ctrl + ` 키로 콘솔창을 연다.
![sublime1-1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/imyj6RiKSSWmKWjY2VS8_sublime1-1.png)

아래의 내용을 복사해 콘솔창에 붙여넣고 실행 한다.
```
import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
```
콘솔에 Please restart Sublime Text to finish installation라는 메시지가 출력되는 것을 확인하고 프로그램을 재시작한다.
만약 위의 명령으로 작동하지 않는다면 [installation – Sublime Package Control](https://packagecontrol.io/installation)을 참고해서 다시한번 설치를 시도해보자.

## Package 설치
Preferences > package control 또는 Ctrl + P 를 이용하여 pacake control 창을 연다.
![sublime2-1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/uTrohF8T9ORx7bbC8MQz_sublime2-1.png)

Instal Package를 선택한다.
![sublime3-1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/fDxxURk2SCGRi0wXA9Vs_sublime3-1.png)

다음과 같이 설치 가능한 Package 목록이 표시된다. 필요한 Package를 설치하면 된다.
![sublime4-1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GYlrbjO9Q2GKZdnswbJC_sublime4-1.png)

## 추천 Package 목록
- alignment
- bracket highlghter
- jsfomat
- sublimecodeintel
- railccasts
- Markdown Edting
- Markdown Preview