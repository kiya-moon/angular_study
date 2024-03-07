# angularJS_study

</br>

### controller
- 앵귤러 애플리케이션 내에서 컨트롤러를 정의하는 데 사용됨
- 데이터와 로직을 처리하고 사용자 인터페이스와 상호작용할 수 있는 JavasScript 함수
- 주로 데이터 바인딩과 사용자 이벤트 처리를 위해 사용됨

      var app = angular.module('myApp', []);
      app.controller('myCtrl', function($scope) {
        $scope.firstName= "John";
        $scope.lastName= "Doe";
      });
### directive
- 앵귤러 애플리케이션 내에서 사용자 정의 디렉티브를 정의하는 데 사용됨
- HTML 요소의 새로운 동작이나 특정한 기능을 정의할 수 있음
- 주로 DOM 조작, 이벤트 처리, 또는 커스텀 UI 구성 요소를 만들 때 사용됨

      var app = angular.module('myApp', []);
      app.directive('myDirective', function() {
        return {
            restrict: 'E',
            template: '<h1>My Custom Directive</h1>'
        };
      });
  
      위의 코드는 <my-directive></my-directive>라는 새로운 HTML 요소를 생성하고,
      해당 요소가 나타날 때 "My Custom Directive"라는 제목을 표시

### service vs factory
[ service ]
- service는 AngularJS에서 제공하는 서비스 타입 중 하나로, 싱글톤 객체로서 애플리케이션 전체에서 공유됨
- 주로 비즈니스 로직이나 데이터 처리와 같은 공통 기능을 정의하고 제공하는 데 사용
- 생성자 함수를 사용하여 정의

        angular.module('myApp').service('myService', function() {
            this.doSomething = function() {
                // 비즈니스 로직 수행
            };
        });

[ factory ]
- 또 다른 서비스 생성 방법으로, 함수를 사용하여 서비스 객체를 반환
- 주로 객체 생성이나 데이터 공유와 같은 목적으로 사용
- factory를 사용하면 생성된 객체의 인스턴스를 여러 번 생성할 수 있음

        angular.module('myApp').factory('myFactory', function() {
            var factory = {};
            factory.doSomething = function() {
                // 비즈니스 로직 수행
            };
            return factory;
        });

> 서비스와 팩토리는 모두 애플리케이션의 구성 요소를 모듈화하고 재사용성을 높이는 데 사용됨  <br>
> 프로젝트의 구조와 요구 사항에 따라 더 적합한 것을 선택하여 사용

</br>

## Directive
### https://docs.angularjs.org/api/ng/directive
### ng-app : angular를 시작하기 위한 지시자
### ng-init : 웹페이지가 시작되면서 웹사이트의 기본 설정값을 초기화하기 위한 지시자
### ng-model : 데이터를 양방향 바인딩 해줌
### ng-repeat : 일종의 for문(filter를 걸 수도 있다)
### ng-click : onClick처럼 이벤트 핸들러를 연결해서 사용
### ng-show : 일종의 if문

</br>

## Filter
### https://docs.angularjs.org/api/ng/filter
### date filter : 
    {{ date_expression | date }} 
    {{ date_expression | date : format : timezone }} > formatter를 지정해줄 수도 있다 

</br>

## Form
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
