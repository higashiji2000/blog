---
title: Astroでサイトを作った
description: webサイトを作りました
pubDate: 2023/3/28
heroImage: "/common/placeholder-social.png"
tags: ["dev", "astro"]
---

以前から qiita や zenn より気軽なアウトプットの場がほしいと思っていたので、以前よく名前を聞いた Astro でブログを作成してみました。  
(現在は ChatGPT の話題しか流れてこなくなった)

## 主要ライブラリ

### [Astro](https://astro.build/)

静的サイトジェネレーターです。  
必要に応じて React 等 UI コンポーネントをサイトの一部で利用することができる "Island Architecture" がメリットとされていますが、現時点では Astro 独自の機能のみで十分開発できています。  
Astro 独自の機能である Astro コンポーネントについては、React の考え方に近かったのでかなり書きやすかったです。  
ホットリロードや [Content Collections](https://docs.astro.build/ja/guides/content-collections/) による markdown ファイルの front matter のバリデーションによって、開発体験が good だとされています。  
SSG だと Next.js が一般的なので、いずれそちらも使ってみて使用感を比べてみたいと思っています。

### [tailwindCSS](https://tailwindcss.com/)

コンポーネントごとに scoped な CSS を生成できるという Astro の強みを潰してしまう選択でしたが、個人的には採用してよかったと思っています。  
一応 Figma でデザインを決めてから開発に取り掛かりましたが、実際にはもともとのデザインとかけ離れた形になりました。  
個人開発やハッカソンのように個人がコードベース全体を把握できる場面においては、純粋に考えることが少なくなることによる開発スピードの向上のメリットが可読性の低下等のデメリットを上回ると感じます。  
唯一すこし面倒だったのは、ビルド時に不要な CSS を削除する仕様です。JS で動的に tailwind のクラスを操作したい場合には工夫する必要がありました。[こちら](https://chaika.hatenablog.com/entry/2022/06/22/083000)の記事に詳しく書いてくださっています。

### [daisyUI](https://daisyui.com/)

tailwindCSS ベースの UI フレームワークです。テーマと drawer を利用しています。  
drawer は Astro の layout という書き方と相性がよく、簡単な記述でモバイルのメニューを実装できました。

## 参考にした記事等

[Astro 公式チュートリアル](https://docs.astro.build/en/tutorial/0-introduction/)  
Astro の基本はこちらで学習しました。  
英語版しかありませんが、Node.js や Git に触れたこともない人も想定した作りになっていて進めやすかったです。

[Astro でブログ置き換えの作業メモ](https://zenn.dev/yamachoo/scraps/5c573340638689)  
個人ブログを Gatsby から Astro へ移行した方のスクラップです。
環境構築の部分を参考にさせて（というかほとんどなぞらせて）いただきました。

[hiroppy's site](https://hiroppy.me/)  
Astro でブログを運用されています。
ソースコードを MIT ライセンスで公開されているので、参考にさせていただいています。

[Zenn](https://zenn.dev/)  
デザイン面を参考にしました。というか個人的に見やすいデザインを考えるにつれ自然と Zenn に寄っていきました。

[JS でのスクロール連動エフェクトには Intersection Observer が便利 - ICS MEDIA](https://ics.media/entry/190902/)  
サイドバーを作成する際に参考にさせていただきました。

## 今後の運用

技術関連のメモ置き場として備忘録的に使うのはもちろん、普通の日記みたいなのも書いていきたいと思っています。
