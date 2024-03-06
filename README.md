# angular_study

</br>

## Directive
### https://docs.angularjs.org/api/ng/directive
### ng-app : angular를 시작하기 위한 지시자
### ng-init : 웹페이지가 시작되면서 웹사이트의 기본 설정값을 초기화하기 위한 지시자
### ng-model : 데이터를 양방향 바인딩 해줌
### ng-repeat : 일종의 for문(filter를 걸 수도 있다)
### ng-click : onClick처럼 이벤트 핸들러를 연결해서 사용

</br>

## Filter
### https://docs.angularjs.org/api/ng/filter
### date filter : 
    {{ date_expression | date }} 
    {{ date_expression | date : format : timezone }} > formatter를 지정해줄 수도 있다 

</br>

### 그리고...
    <pre>{{ form_name | json }}</pre>
    form 정보를 Json 형식으로 볼 수 있음
    {
      "$error": {},
      "$name": "todoForm",
      "$dirty": false,
      "$pristine": true,
      "$valid": true,
      "$invalid": false,
      "$submitted": false
    }
    $ 표시가 붙는 것은 앵귤러에서 제공하는 기본으로 제공하는 미정의항목
    - form에 값을 입력하면 dirty는 true, pristine은 false로 바뀐다
    - validation check에 통과하면 valid는 true, invalid는 false로 바뀐다
