---
id: em-demonstration
title: デモンストレーション
---

# デモンストレーション
---
## 回帰モデルによる RUL の予測
### 概要
設備稼働データと稼働時間のデータを用いて、設備の耐用時間を予測する回帰モデルを構築します。また、説明可能性を確保するために、Responsible AI Toolbox の dashboard 機能を用いて、モデルのデバッグ・アセスメントを行います。

### コード
- [1-phm08-rul-regression.ipynb](https://github.com/konabuta/fta-manufacturing/blob/main/equipment-maintenance/notebooks/1-phm08-rul-regression.ipynb)

### ポイント
- 機械学習モデルの説明可能性
    - 変数重要度 (Global と Local)
- 反実仮想説明によるモデルの説明
    - 設備耐用時間を延ばすデータサンプルの生成
### 補足
#### Global な変数重要度の可視化

<img src={require('./images/em-demo-rul-regression-global.gif').default} width="800" /><br />


#### Local な変数重要度の可視化

<img src={require('./images/em-demo-rul-regression-local.gif').default} width="800" /><br />

#### 反実仮想説明によるモデルの説明

<img src={require('./images/em-demo-rul-regression-counterfactual.gif').default} width="800" /><br />

---

## 分類モデルによる設備異常の予測
### 概要
設備稼働データと故障の有無を示すフラグデータを用いて、設備の故障を予測する分類モデルを構築します。また説明可能性を確保するために、Responsible AI Toolbox の dashboard 機能を用いて、モデルのデバッグ・アセスメントを行います。
### コード
- [2-phm08-flag-classificationl.ipynb](https://github.com/konabuta/fta-manufacturing/blob/main/equipment-maintenance/notebooks/2-phm08-flag-classification.ipynb)

### ポイント
- 機械学習モデルの説明可能性
    - 変数重要度 (Global と Local)
- 反実仮想説明によるモデルの説明
    - 設備異常を発生させないデータサンプルの生成

### 補足
#### Global な変数重要度の可視化

<img src={require('./images/em-demo-flag-classification-global.gif').default} width="800" /><br />


#### Local な変数重要度の可視化

<img src={require('./images/em-demo-flag-classification-local.gif').default} width="800" /><br />

#### 反実仮想説明によるモデルの説明

<img src={require('./images/em-demo-flag-classification-counterfactual.gif').default} width="800" /><br />

---