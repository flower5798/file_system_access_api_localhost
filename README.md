# File System Access APIでディレクトリ内のファイル読み込み＆書き換え

実際にFile System Access APIを使っている処理は views/templates/index.ejs を参照。

## 記載している処理
指定したフォルダ中の temp.json という名前のファイルの内容を書き換え。

「exec dir control」をクリックすると作業フォルダ選択が立ち上がるので、対照のフォルダを選択。

フォルダ内に temp.json という名前のファイルが存在する場合、

1. 現在の内容をコンソールに表示
2. 内容を書き換え
3. 書き換え後の内容をコンソールに表示

という内容の処理を行う。
