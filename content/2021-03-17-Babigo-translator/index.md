---
title: "バビ語変換サイト"
path: blog/babigo-translator
tags: [python, html, css, work, django]
date: 2021-03-17
cover: ./cover.jpg
excerpt: 入力された文章をバビ語に変換できます。
---

## 概要
---
ユーザーから入力された日本語文章をgooラボのひらがな化APIによってひらがな文章化し、それをバビ語に変換します。もともとはターミナル上でPythonファイルを実行して遊ぶだけのものだったのですが、せっかくなのでDjangoを使ってバビ語変換サイトを作成しました。

[Visit the site](https://aspected-helios.herokuapp.com/peacock/babigo/)

## 使用技術
---
- Python: 3.6.9
- Django: 3.1.3

<br>

その他は以下のStackShareから確認できます。<br>
- [StackShare](https://stackshare.io/zaw/babigo)

<h2 id="babigo">バビ語とは？</h2>

---
簡単に説明すると、もととなる文章の文字の間に「バビブベボ」を挿入したものです。挿入にはルールがあり、対象となる文字がア段ならその後ろにバを挿入、イ段ならビ、ウ段ならブ、エ段ならベ、オ段ならボを挿入します。

例）びわこ　→　びびわばこぼ

## ひらがな化API vs Pykakasi
---
### バビ語へ変換する際の課題
日本語文章をバビ語へ変換する際はひとつひとつの文字に対して、対象となる文字があ～お段のどれに属しているのか判別する必要があります。したがって、ユーザーから入力された文章に漢字が含まれる場合はすべて平仮名に置き換える必要があり、今回はこの課題を解決する方法としてgooラボのひらがな化APIとPythonのライブラリであるPykakasiが候補に上がりました。

### 結局どっち？
正直なところ、ひらがな化APIとPykakasiの性能差はほぼないです。ひらがな化の精度の特徴をまとめると、どちらも普通の文章なら問題なく平仮名化できますが、人名や映画やドラマのタイトルといった固有名詞の平仮名化はかなり苦手です。ただ、地名に関してはPykakasiよりひらがな化APIの方が若干優秀だったので今回はひらがな化APIを採用しました。

一応、バビ語変換器はひらがな化APIとPykakasiの2パターン作成してあるので、見たい方は[こちら](https://github.com/zoniha/babigo/blob/main/converter/hiragana_converter.py)から見ることができます。

## バビ語への変換
---
以下がバビ語変換のコードになります。

```Python
def babi_converter(hiragana: str) -> str:
    result = ''
    length = len(hiragana) - 1

    for idx, letter in enumerate(hiragana):
        next_letter = hiragana[idx+1:idx+2]

        if (next_letter in 'ぁぃぅぇぉゃゅょ') & (idx < length):
            pass
        elif letter in 'あかがさざただなはばぱまやらわゎ':
            result += (letter + 'ば')
        elif letter in 'いきぎしじちぢにひびぴみり':
            result += (letter + 'び')
        elif letter in 'うゔくぐすずつづぬふぶぷむゆるん':
            result += (letter + 'ぶ')
        elif letter in 'えけげせぜてでねへべぺめれ':
            result += (letter + 'べ')
        elif letter in 'おこごそぞとどのほぼぽもよろを':
            result += (letter + 'ぼ')
        elif letter in 'ぁゃ':
            result += (hiragana[idx-1:idx] + letter + 'ば')
        elif letter in 'ぃ':
            result += (hiragana[idx-1:idx] + letter + 'び')
        elif letter in 'ぅゅ':
            result += (hiragana[idx-1:idx] + letter + 'ぶ')
        elif letter in 'ぇ':
            result += (hiragana[idx-1:idx] + letter + 'べ')
        elif letter in 'ぉょ':
            result += (hiragana[idx-1:idx] + letter + 'ぼ')
        elif (letter in 'ー〜') & (idx < length):
            result += (letter + result[-1])
        else:
            result += letter
    return result
```

平仮名化された文章を受け取り、そこから一文字ずつ取り出し、前後の文字との関係を見ながら愚直にバビブベボを挿入しています。`elif`がたくさんで見にくいですが、やっていることはとてもシンプルです。

## 最後に
---
今回はとくに苦戦することもなくサイトの作成ができました。挙げるとすれば、ひらがな化APIのエラーを防ぐために文章から改行コードを除去する必要があることに気づいたのですが、これは`str.translate()`を使えば簡単に解決できるので問題ありませんでした。

技術的なこと以外の話をすると、今回のプロジェクトはもともと私が小学生時代に友人たちとの間で流行ったラリ語（バビ語のラリルレロ版）変換器を作成しようとし、ネットで調べたところ、アイドルや女優さんの影響もあり、バビ語の方がメジャーだということでバビ語の変換器を作成しました。そいういう意味では、今まで作成したモノたちの中ではより多くの人に需要のあるモノを作れたのではないかと思います。今回のプロジェクトには勉強の成果の発表という面はなく、ユーザーに使ってもらいたいというモチベーションで作成に向き合ったので作成していて楽しかったです。
