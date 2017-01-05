# Browser connection per Domain

### 여러 도메인을 이용하여 서버 사이트 데이터를 제공하는 것이 더 나은 이유는 무엇인가? 브라우저가 한 번에 1개의 도메인에서 다운로드 받는 리소스는 몇 개인가?

각 브라우저마다 동시에 받을 수 있는 동시 연결이 제한되어 있기 때문이다.

| 브라우저           | 버전       | Connections per Hostname |
| -------------- | -------- | ------------------------ |
| Chrome         | 29 - 41  | 6 개                      |
| Chrome         | 42       | 13 개                     |
| Chrome         | 43+      | 6 개                      |
|                |          |                          |
| chromeMobile   | 29-37    | 6 개                      |
| chromeMobile   | 38       | 16 개                     |
| chromeMobile   | 39-41    | 6 개                      |
| chromeMobile   | 43-48    | 6 개                      |
| chromeMobile   | 42, 49   | 18 개                     |
|                |          |                          |
| IE             | 8        | 6 개                      |
| IE             | 9        | 6 개                      |
| IE             | 10       | 8 개                      |
| IE             | 11       | 13 개                     |
| IE             | 12       | 13 개                     |
|                |          |                          |
| IE Mobile      | 8        | 4 개                      |
| IE Mobile      | 9        | 6 개                      |
| IE Mobile      | 10       | 8 개                      |
| IE Mobile      | 11       | 12 개                     |
|                |          |                          |
| Firefox        | 거의 모든 버전 | 6 개                      |
| opera          | 거의 모든 버전 | 6 개                      |
| Safari         | 4-9      | 6 개                      |
|                |          |                          |
| android        | 1        | 4 개                      |
|                | 2        | 4 개                      |
|                | 3        | 6 개                      |
|                | 4        | 6 개                      |
|                | 5        | 6 개                      |
|                |          |                          |
| firefox mobile | 41       | 13 개                     |
|                | 43       | 10 개                     |
|                | 그외       | 6 개                      |

출처

[http://www.browserscope.org/?category=network&v=1](http://www.browserscope.org/?category=network&v=1)