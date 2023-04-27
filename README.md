# feature-react-dnd-sort

React.jsのドラッグ＆ドロップパッケージ`@dnd-kit/core`を用いた並び替え機能

※ npmパッケージURL：[@dnd-kit/core](https://www.npmjs.com/package/@dnd-kit/core)

## THE REAZON FOR CHOOSING THIS PACKAGE

React.jsにおいてドラッグ＆ドロップ処理を行う場合、下記3種類が候補に上がる。

- [react-dnd](https://www.npmjs.com/package/react-dnd)
- [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)
- [@dnd-kit/core](https://www.npmjs.com/package/@dnd-kit/core)

`react-dnd`はパッケージの更新が古い（2023/4現在）、かつ、実装が複雑そうなため、不採用とし、`react-beautiful-dnd`はStrict モードを使用できないため、不採用とした。

最初は`@dnd-kit/core`は情報量から懸念があったが、充分量の情報がネット上に落ちている、かつ、複雑性は低いため、とっつきやすいため、採用。

以上が、`@dnd-kit/core`を選択した簡単な背景。