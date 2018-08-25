# EChart 가이드

## 기본 사용법

echart.min.js 파일을 페이지에 script 태그를 이용해서 삽입합니다.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- including ECharts file -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/3.3.2/echarts.min.js"></script>
</head>
</html>
```

차트가 삽입될 div 태그를 만든 후 원하는 id 속성 값을 넣고 width, height 값도 지정합니다.

```
<body>
    <!-- preparing a DOM with width and height for ECharts -->
    <div id="main" style="width: 600px;height:400px;"></div>
</body>
```

이제 [echarts.init](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.init) 함수를 사용하여 차트를 생성합니다. 차트 생성에 대한 옵션은 setOption 함수를 이용하여 지정합니다(아래 코드에서 echarts는 echarts.min.js 파일에서 생성하는 전역 변수입니다).

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- including ECharts file -->
    <script src="echarts.js"></script>
</head>
<body>
    <!-- prepare a DOM container with width and height -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
        // based on prepared DOM, initialize echarts instance
        var myChart = echarts.init(document.getElementById('main'));
 
        // specify chart configuration item and data
        var option = {
            title: {
                text: 'ECharts entry example'
            },
            tooltip: {},
            legend: {
                data:['Sales']
            },
            xAxis: {
                data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
            },
            yAxis: {},
            series: [{
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
 
        // use configuration item and data specified to show chart
        myChart.setOption(option);
    </script>
</body>
</html>
```

위 코드를 보면, echarts.init 함수에 처음에 생성한 div 요소의 참조를 넘겨서 차트 인스턴스를 생성하는 것을 볼 수 있습니다.

생성한 차트 인스턴스의 setOption 함수를 호출하면서 차트의 모양/데이터를 정의한 option 객체를 인수로 넘기면 원하는 모양의 차트가 생성됩니다.

위의 코드로 생성한 차트의 모양은 아래 링크에서 확인할 수 있습니다.

[기초 예제](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/getting-started)

## 차트 유형 별 옵션

아래 그림은 바 차트와 파이 차트의 소스 코드를 비교(diff)한 것이다.

option 객체를 보면 legend나 xAxis, yAxis 속성은 바차트에만 있고 파이차트에는 없는 것을 볼 수 있다, 반면 series.radius, series.roseType 속성은 파이차트에만 있다.

그리고 차트에 표현할 데이터를 명시하고 있는 series.data 속성을 보면 그 값의 구성이 매우 다른 것을 볼 수 있다.

이와 같은 차이는 각 차트의 표현 방식에 따른 옵션과 데이터의 구성 방식이 다를 수 밖에 없기 때문에 발생한다.

일례로 파이차트에 xAxis, yAxis 옵션을 추가하면 의미없는 X/Y 축이 표현되는 것을 볼 수 있을 것이며, 반지름을 의미하는 series.radius 속성은 바차트에는 의미가 없을 것이다.

따라서 차트 옵션은 레퍼런스 문서를 참고하여 차트 유형 별로 다르게 적용해야 한다. 설정 Option과 차트 예제 페이지를 참고하면 되며, 특히 차트 예제 페이지는 원하는 차트 유형을 선택한 후 코드를 수정해 가면서 옵션을 적용해 볼 수 있어서 큰 도움이 된다.

## 예제 소스 다운로드 방법

ECharts Gallery 페이지의 우상단에 보면 下载本示例라고 적힌 링크(아래 이미지 참고)가 있습니다. 이 링크를 클릭하면 소스 코드를 HTML 형식으로 다운로드 합니다.

예제의 JS 코드가 의존하는 jQuery 등의 라이브러리나 데이터를 담은 JSON 파일은 함께 다운로드 되지 않으므로, 동작을 로컬에서 확인하려면 코드 내용을 살펴서 필요한 의존성을 직접 설정해야 하는 경우도 있습니다.

## Bower를 통한 설치

bower install echarts --save

https://libraries.io/bower/echarts

## 참고 URL

[기본 정보](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Introduction%20of%20ECharts%20features)

[설정 Option](https://ecomfe.github.io/echarts-doc/public/en/option.html)

[API](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts)

[차트 예제](https://ecomfe.github.io/echarts-examples/public/)

## echart-ng

[GitHub](https://github.com/bornkiller/echarts-ng)

[Showcase](https://github.com/bornkiller/echarts-showcase)