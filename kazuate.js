let answer = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + answer);

let a = 0;
function hantei() {
  let yoso = Number(document.getElementById('yoso').value);
  document.getElementById('result').textContent = '';

  if (yoso === answer) {
    document.getElementById('result').textContent = '正解！おめでとう！';
  } else if (yoso > answer) {
    document.getElementById('result').textContent = 'まちがい.答えは、もっと小さいですよ。';
  } else if (yoso < answer) {
    document.getElementById('result').textContent = 'まちがい.答えは、もっと大きいですよ。';
  }
  if (a >= 3) {
    document.getElementById('result').textContent = '答えは ' + answer + ' でした。すでにゲームは終わっています。';
  }
  a++;
  document.getElementById('kaisu').textContent = a;
  document.getElementById('answer').textContent = yoso;
}

document.getElementById('checkButton').addEventListener('click', hantei);