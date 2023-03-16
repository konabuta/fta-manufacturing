# 予知保全
## そもそも何を予測するのか？
- A. 故障を予測する
  - 設備が故障する確率を予測する
    - この設備が 30 日以内に故障する確率は？
  - 設備耐用時間を予測する
    - この設備が利用できる日数は？
- B. 異常を検知する
  - この設備は通常を異なる挙動をしていますか？


## A. 故障を予測する
//TODO:予測メンテナンスソリューションのための Azure ガイドブックの内容を記載

### 設備が故障する確率を予測する
#### 機械学習モデルによる予測
- 分類モデル
  - ロジスティック回帰、決定木、ランダムフォレスト、ニューラルネットワーク など


### 設備耐用時間 (RUL) を予測する
#### 機械学習モデルによる予測
- 回帰モデル
  - 重回帰モデル、主成分回帰、LightGBM など
- 時系列予測
  - ARIMA、RNN、LSTM など

### 参考情報
- [製造業における予測メンテナンスの概要](https://learn.microsoft.com/ja-jp/azure/architecture/industries/manufacturing/predictive-maintenance-overview)

## B. 異常を検知する
既知の異常データを利用した教師あり学習と正常データのみを用いた教師あり学習の 2 種類があります。
### 既知の異常データを利用した学習

### 正常データを利用した学習

### 参考情報
