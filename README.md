# todo-app
Todoリストアプリ　
～　https://shimabukuroshunichi.github.io/todo-app/　～(作成開始日：7月5日)

今回は、簡単なtodoリストを作成し、そこから自分好みの要素を足していきオリジナルtodoリストを作っていきます。

## ・index.html のコード
![index](images/index.png)

## ・style.css のコード
![style1](images/style1.png)
![style2](images/style2.png)

## ・app.js のコード
![app](images/app.png)

## ・完成画面
![todo](images/todo1.png)
これで基本となるtodoリストが出来ました！
ですが、これだけまだ予定を入れるだけなので  
ここから入力した予定が画面右側に表示されるようにしていきます。

まずはindex.htmlを変更していきます。
クラスをinput-areaとtodo-displayの二つに分けて予定を入れる欄と  
それを表示する欄を作りました。(マーカーの箇所)
![index](images/index2.png)

次にstyle.cssも変更します。  
始めに作成したstyle.cssはbodyの中にdisplayとjustify-contentが入っていましたが、.containerの中に移動します。  
こうすることで入力欄と表示欄が横並びになり、見やすくなります！
![style2-1](images/style2-1.png)
![style2-2](images/style2-2.png)

## ・完成画面
![todo2](images/todo2.png)
左側で今日の予定を入力し、それを右側に表示させることができました！

ですが、このままの状態ではページを更新したり一度削除してしまうと  
せっかく作った予定が消えてしまうのでローカルストレージを使ってそれらを防ぐ機能を実装します。