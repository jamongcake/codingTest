# 알고리즘 테스트



○ 다음 다차원 배열을 1차원 배열로 변환하는 함수를 만드시오.

```[1,2,{aa:11}, [1,2,[3,[45,7,3]],[3,45,2]], 3,[2], [4,3] ];```

```javascript
// javascript

var testTarget = [1,2,{aa:11}, [1,2,[3,[45,7,3]],[3,45,2]], 3,[2], [4,3] ];
var result = [];
function transDemension(target) {
  target.map( x => (x instanceof Array)? transDemension(x) : result.push(x) );
  return result;
}
```



○  n ~ z 까지의 합을 구하는 함수를 만드시오.

```javascript
// loop 이용
function addTotal(n , z) {
  var maxNum = Math.max(n,z)
      minNum = Math.min(n,z),
  	  result = 0;
  
  for( var i = minNum; i <= maxNum; i++){
    result += i;
  }
  return result;
}

// 공식 이용
function addTotal2(n, z) {
  var maxNum = Math.max(n,z)
      minNum = Math.min(n,z);
  return ( maxNum + minNum ) * ( maxNum - minNum) /2
}

// 재귀이용
function addRecusive(n, z) {
  var maxNum = Math.max(n,z)
      minNum = Math.min(n,z),
      result = 0;
  function recusive(result, count, maxNum) {
    return count > maxNum ? result: recusive(result+count, count +1 , maxNum);
  }
  return recusive( result, minNum, maxNum);
}
```



○ n ~ z 까지의 곱을 구하는 함수를 만드시오.

```javascript
// loop 이용
function multipleTotal(n , z) {
  var maxNum = Math.max(n,z)
  	  minNum = Math.min(n,z),
      result = 1;
  
  for(var i = n; i <= z; i++) {
    result *= i;
  }
  return result;
}

// 재귀이용
function multipleR(n, z) {
  var maxNum = Math.max(n,z)
  	  minNum = Math.min(n,z);
  
  function R(minNum, maxNum) {
    return minNum === maxNum? minNum : minNum * R(minNum +1 , maxNum);
  }
  
  return R(minNum, maxNum);
}
```



○ 해당 수가 소수인지를 판별하는 함수를 만드시오

```javascript
// 합성수일 경우에는 제곱근 이하의 수에서 한개 이상의 값이 존재한다.
function checkNum(number) {
  var sqrtInt = parseInt(Math.sqrt(number));
  for( var i = 2; i <= sqrtInt; i++) {
    if( number % i === 0 ) {
      return False;
    }
  }
  return True;
}
```

