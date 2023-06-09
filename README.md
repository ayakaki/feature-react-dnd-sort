# feature-react-dnd-sort

React.js のドラッグ＆ドロップパッケージ`@dnd-kit/core`を用いた並び替え機能

※ npm パッケージ URL：[@dnd-kit/core](https://www.npmjs.com/package/@dnd-kit/core)

## THE REAZON FOR CHOOSING THIS PACKAGE

React.js においてドラッグ＆ドロップ処理を行う場合、下記 3 種類が候補に上がる。

- [react-dnd](https://www.npmjs.com/package/react-dnd)
- [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)
- [@dnd-kit/core](https://www.npmjs.com/package/@dnd-kit/core)

`react-dnd`はパッケージの更新が古い（2023/4 現在）、かつ、実装が複雑そうなため、不採用とし、`react-beautiful-dnd`は Strict モードを使用できないため、不採用とした。

最初は`@dnd-kit/core`は情報量から懸念があったが、十分量の情報がネット上に落ちている、かつ、複雑性は低く、とっつきやすいため、採用。

以上が、`@dnd-kit/core`を選択した簡単な背景。

## MOTION

ルートパスで下記の動作を確認可能。
![dnd_playview](https://user-images.githubusercontent.com/65984887/235328129-4ebe9d11-02b8-48c1-a738-423980b2a951.gif)
