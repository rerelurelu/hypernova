---
title: "Task management app with Django"
path: blog/task-management-app
tags: [python, html, css, django]
date: 2020-02-09
cover: ./app-image.jpg
excerpt: Djangoを利用してToDoリストを作成しました。
---

## 概要
---
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

完成したものやソースコードは以下のリンクから見ることができます。<br>

- [ToDo App](https://aspected-helios.herokuapp.com/markab/)
- [The source code of the ToDo app](https://github.com/zoniha/helios/tree/main/markab)
- [The source code of the User Registration and Login](https://github.com/zoniha/helios/tree/main/accounts)

## 作成した目的
---
Djangoを利用して過去に作成した画像認識アプリは入力画像をサーバー側で加工し、その画像を表示させるというものだったので、CRUD機能を利用したモノを作成することでDjangoについての理解を深めることが目的です。

## 使用方法
---
- ユーザー登録

![sign up](https://user-images.githubusercontent.com/43092452/114406275-5e2f3b80-9be2-11eb-80ec-a91c3a096ef0.gif)

- ログイン

![login](https://user-images.githubusercontent.com/43092452/114406265-5cfe0e80-9be2-11eb-8e97-2b00128d188a.gif)

- ToDoの作成

![create](https://user-images.githubusercontent.com/43092452/114406099-38099b80-9be2-11eb-92ff-6a5c5fe79063.gif)

- ToDoの編集

![update](https://user-images.githubusercontent.com/43092452/114406278-5f606880-9be2-11eb-8177-b9cb57c6e60c.gif)

- ToDoの検索

![search](https://user-images.githubusercontent.com/43092452/114406272-5e2f3b80-9be2-11eb-8ff4-bce97fed2297.gif)

- ToDoの削除

![task_delete](https://user-images.githubusercontent.com/43092452/114406277-5ec7d200-9be2-11eb-9ecb-a6f70b91569d.gif)

- ユーザー削除

![delete_user](https://user-images.githubusercontent.com/43092452/114406245-58d1f100-9be2-11eb-9368-f0c4ca5e5c71.gif)

## 使用技術
---
- Python: 3.9.0
- Django: 3.1.5

<br>

その他は以下のStackShareから確認できます。

- [StackShare](https://stackshare.io/zaw/zaw-site)

## 作成に関して
---
CRUD機能の実装に関してはDjangoのクラスベース汎用ビューを使用すれば良いのでDjangoのドキュメントを参考にしながら簡単に実装することができました。

問題となったのは、ユーザー登録に独自のバリデーションを加えたためエラーメッセージをまとめて扱うことができず、HTMLで出力した際にレイアウトが崩れてしまうことでしたが、Sign upフォームにあらかじめバリデーション内容の説明を記述しておくことでバリデーションエラーが発生した際に「Invalid　○○」と表示するだけで済むようにして解決しました。
