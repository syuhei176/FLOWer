logic-on-canvas
===============


## Build
コードの変更して、適用するときにビルド

    # build all
    >> neko build.n
    # build codeiq
    neko build.n codeiq
    # build raspberrypi
    neko build.n raspberrypi

## codeiqサーバ起動
    
    # codeiqサーバに移動
    >> cd codeiq
    >> node server.js

http://localhost:8888
でサーバを起動する。

## テーマ編集

src/retro/view/Thema.hx にて変数をまとめている

## svgの適用

imagesフォルダ内のsvgをbuild時に各コンパイル先にコピーし、適用している。

## editor.cssの適用

css/editor.cssのcssもbuild時に各環境に対し、適用している。
