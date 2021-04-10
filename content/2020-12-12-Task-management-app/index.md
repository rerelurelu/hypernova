---
title: "Task management app with Django"
path: blog/task-management-app
tags: [python, html, css, work]
date: 2020-12-12
cover:
excerpt: Djangoを利用してToDoリストを作成しました。
---

# 概要
DjangoでToDoリストを作成しました。
具体的な機能は以下のとおりです。

- ToDoの一覧表示機能
- ToDoの詳細表示機能
- ToDoの作成機能
- ToDoの編集機能
- ToDoの削除機能
- ToDoのキーワード検索機能
- ユーザー登録機能
- ログイン機能
- ログアウト機能
- ユーザーのパスワードリセット機能

<br>
<br>

完成したものやソースコードは以下のリンクから見ることができます。<br>

- [ToDo App]()
- [The source code of the ToDo app]()
- [The source code of the User Registration and Login]()

<br>
<br>

# 作成した目的
Djangoを利用して過去に作成した画像認識アプリは入力画像をサーバー側で加工し、その画像を表示させるというものだったので、CRUD機能を利用したモノを作成することでDjangoについての理解を深めることが目的です。

<br>
<br>

# 使用方法
- ユーザー登録
- ToDo作成と削除

<br>
<br>

# 使用技術
- python: 3.9.0
- Django: 3.1.5

その他は以下のStackShareから確認することができます。

[StackShare](https://stackshare.io/zaw/zaw-site)

<br>
<br>

# 作成に関して
CRUD機能の実装に関してはDjangoのクラスベース汎用ビューを使用すれば良いのでDjangoのドキュメントを参考にしながら簡単に実装することができました。

問題となったのは、ユーザー登録に独自のバリデーションを加えたためエラーメッセージをまとめて扱うことができず、HTMLで出力した際にレイアウトが崩れてしまうことでしたが、Sign upフォームに予めバリデーション内容の説明を記述しておくことでバリデーションエラーが発生した際に「Invalid　○○」と表示するだけで済むようにして解決しました。
<br>
<br>
