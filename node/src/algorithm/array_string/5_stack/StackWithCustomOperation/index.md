例題  
CustomStack クラスを実装  
CustomStack(int maxSize) は、スタックの最大要素数である maxSize を持つオブジェクトを初期化します。  
void push(int x) スタックが maxSize に達していない場合、スタックの上部に x を追加します。  
int pop() スタックの上部をポップして返すか、スタックが空の場合は-1 を返します。  
void decrement(int k, int val) スタックの下から k 要素の値を val だけ減少させます。スタックに k 要素未満がある場合は、スタック内のすべての要素を減少させます。  
例

```
stk = CustomStack(2)
stk.push(1) 　　　　　# [1]
stk.push(2) 　　　　　# [1, 2]
stk.pop() 　　　　　# Return 2
stk.push(3) 　　　　　# [1, 3]
stk.push(4) 　　　　　# [1, 3] 最大サイズは 2 なので追加しない
stk.decrement(1, 1) 　 # [0, 3] 下から 1 番目の要素を 1 減少させる
stk.pop() 　　　　　# Return 3
stk.pop() 　　　　　# Return 0
stk.pop() 　　　　　# Return -1
```
