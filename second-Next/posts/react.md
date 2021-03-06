---
title: "【React】イベントハンドラプロパティ一覧【JavaScript】"
date: "2022年01月09日"
thumbnail: "/images/thumbnail02.jpg"
---
## はじめに
　本記事は、プログラミング初学者が、学習を進めていて疑問に思った点について調べた結果を備忘録も兼ねてまとめたものです。
　そのため、記事の内容に誤りが含まれている可能性があります。ご容赦ください。
　間違いを見つけた方は、お手数ですが、ご指摘いただけますと幸いです。

### イベント属性一覧
Reactで、イベント処理はタグ内に`onClick`などのイベントハンドラ用の属性を指定することで定義できます。
Reactでのイベント処理の記述には以下の特徴があります。

- イベントは小文字ではなく camelCase で名付けられる
- イベントハンドラとして文字列ではなく関数を渡す

イベント処理を記述する際のイベント属性について以下にまとめます。

```.js
// クリック関連
 onClick	     // 要素やリンクをクリックした時に発生
 onDblClick      // 要素をダブルクリックした時に発生
 onMouseDown     // マウスでクリックした時に発生
 onMouseUp       // クリックしたマウスを上げた時に発生


// フォーム関連
 onSubmit        // フォームを送信しようとした時に発生
 onReset	     // フォームがリセットされた時に発生
 onBlur	         // ページやフォーム要素からフォーカスが外れた時に発生
 onFocus	     // ページやフォーム要素にフォーカスが当たった時に発生
 onChange        // フォーム要素の選択、入力内容が変更された時に発生

// テキスト関連
 onSelect        // テキストが選択された時に発生

// キー関連
 onKeyUp         // 押していたキーをあげた時に発生
 onKeyDown       // キーを押した時に発生
 onKeyPress      // キーを押してる時に発生

// 画像読み込み関連
 onAbort	    // 画像の読み込みを中断した時に発生
 onError	    // 画像の読み込み中にエラーが発生した時に発生
 onLoad	        // ページや画像の読み込みが完了した時に発生

// ウィンドウ関連
 onUnload        // ウィンドウを閉じた時、他のページに切り替えた時、ページをリロード（更新）した時に発生

// マウス関連
 onMouseOut      // マウスが離れた時に発生
 onMouseOver     // マウス乗った時に発生
 onMouseMove     // マウスを動かしている時に発生

```