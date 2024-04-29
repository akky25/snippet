Unix スタイルのファイルシステムの絶対パス（スラッシュ/から始まる）が文字列 path として与えられたとき、現在のカレントディレクトリ名を答えてください。例えば/home/sakamoto なら sakamoto になります。ただしルートディレクトリの場合は特別に root という名前になります。  
入力は次の形式に必ず従っています

- パスは必ず単一のスラッシュ / で始まります。
- パスには/home//sakamoto のように単一のスラッシュ/が二連続で来ることはない
- パスには.や..が含まれる可能性があります。
- /../home のようにルートディレクトリより上を指すパスが来る事はない

例

```ts
Input: path = "/home/sakamoto";
Output: "sakamoto";
Input: path = "/home/./sakamoto";
Output: "sakamoto";
Input: path = "/home/../sakamoto";
Output: "home";
Input: path = "/home/../";
Output: "root";
```
