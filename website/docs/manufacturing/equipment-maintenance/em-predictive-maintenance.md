---
id: em-predictive-maintenance
title: 予知保全
---

# 予知保全
本ページでは **予知保全** における AI・機械学習の適用方法について説明します。

<!--Create agenda for me-->
- [そもそも何を予測するのか？](#そもそも何を予測するのか)
   - [1. 故障を予測する](#1-故障を予測する)
    - [2. 異常を検知する](#2-異常を検知する)
- [故障予測後のアクション](#故障予測後のアクション)
  - [機械学習モデルの透明性](#機械学習モデルの透明性)

---
## そもそも何を予測するのか？
予知保全では機械学習モデルを用いて設備の将来を予測します。代表的な 2 つの予測方法について説明します。

### 1. 既知の故障を予測する
設備が故障する前に故障を予測します。業務要件に応じて、設備が故障する確率を予測するか、設備耐用時間を予測するかを選択します。

#### 🔍 設備が故障する確率を予測する
「この設備が30日以内に故障する確率は？」といった問いに答えることができる予測方法です。一般的には故障するかどうかのフラグ (正常 or 異常) を予測します。

<img src={require('./images/labelling-for-binary-classification.png').default} width="600" />

<br/>

#### 🔍 設備耐用時間 (RUL) を予測する
「この設備はあと何日間使えますか？」といった問いに答えることができる予測方法です。一般的には時系列モデルや回帰モデルを用いて、連続的な数値である耐用時間を予測します。

<img src={require('./images/labelling-for-regression.png').default} width="600" />

<br/>

### 2. 未知の異常を検知する
既知の異常データを利用した教師あり学習と正常データのみを用いた教師あり学習の 2 種類があります。

#### 🔍 正常データを利用した学習
設備の正常時のデータのみを用いて、異常を検知するモデルを構築します。一般的には、教師なし学習の手法を用います。


<img src={require('./images/em-anomaly-detection.png').default} width="400" /><br />

<br/>

### 参考情報
- [製造業における予測メンテナンスの概要](https://learn.microsoft.com/ja-jp/azure/architecture/industries/manufacturing/predictive-maintenance-overview)
---
## 故障予測後のアクション
高い精度で故障を予測することに加えて、その後のメンテナンスを効率化することもできます。

- **故障の種類の分類**
  - 故障のパターンは多岐にわたります。故障の種類を分類し、メンテナンスに必要なリソースを迅速に確保します。
- **故障の原因分析と対策**
  - 故障に寄与している変数から故障原因を探索し対策をすることで今後の故障を防止します。

### 機械学習モデルの透明性
**解釈可能性・説明可能性** や **反実仮想説明** などといった機械学習の透明性の技術を用いることで、設備故障の種類を分類したり、故障原因のヒントを得ることができます。


<img src={require('./images/em-predictive-maintenance-process.png').default} width="600" /><br />


### 参考情報
- [解釈可能性 & 説明可能性 - Azure ML Playbook](https://konabuta.github.io/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-interpretability-explainability)
- [反実仮想説明 - Azure ML Playbook](https://konabuta.github.io/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-counterfactual-explanation)

---
