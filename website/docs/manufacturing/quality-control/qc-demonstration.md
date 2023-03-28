---
id: qc-demonstration
title: デモンストレーション
---
# デモンストレーション
---
## 解釈可能性の高い機械学習モデルを用いた品質不良の分析
### 概要
製造工程のデータと検査工程のデータの統合データを用いて、品質予測モデルを構築します。従来の統計的な手法であるロジスティック回帰や決定木によるモデル構築と解釈、また、一般化加法モデルによるモデル構築と解釈を行います。

### コード
- [qc-interpretability.ipynb](https://github.com/konabuta/fta-manufacturing/tree/main/quality-control/notebooks/qc-interpretable-model.ipynb)
### ポイント
- 機械学習アルゴリズム
    - ロジスティック回帰は各変数に重みを掛け合わせた値の和が予測値となる
    - 決定木は各変数に関する条件分岐で予測値が出力される
    - 一般化加法モデルは各変数に関する滑らかな曲線の足し合わせで予測値が出力される
- モデルの解釈
    - Global と Local の違い


### 補足
#### ロジスティック回帰 - Global な変数重要度の可視化
<img src={require('./images/qc-demo-interpretability-lr-global.gif').default} width="800" /><br />

#### ロジスティック回帰 - Local な変数重要度の可視化
<img src={require('./images/qc-demo-interpretability-lr-local.gif').default} width="800" /><br />

#### 決定木 - Global な変数重要度の可視化
<img src={require('./images/qc-demo-interpretability-dt-global.gif').default} width="800" /><br />

#### 決定木 - Local な変数重要度の可視化
<img src={require('./images/qc-demo-interpretability-dt-local.gif').default} width="800" /><br />

#### 一般化加法モデル (EBM) - Global な変数重要度の可視化
<img src={require('./images/qc-demo-interpretability-ebm-global.gif').default} width="800" /><br />

#### 一般化加法モデル (EBM) - Local な変数重要度の可視化
<img src={require('./images/qc-demo-interpretability-ebm-local.gif').default} width="800" /><br />

---

## 説明性の技術による品質不良の分析
### 概要
設備工程データと品質を表す教師データを用いて、製品品質を予測する分類モデルを構築します。また、説明可能性を確保するために、Responsible AI Toolbox の dashboard 機能を用いて、モデルのデバッグ・アセスメントを行います。

### コード
- [Notebooks](https://github.com/konabuta/fta-manufacturing/tree/main/quality-control/notebooks/qc-explainability-counterfactual.ipynb)
### ポイント
- 機械学習モデルの説明可能性
    - 変数重要度 (Global と Local)
- 反実仮想説明によるモデルの説明
    - 品質不良を解消するデータサンプルの生成


### 補足
#### Global な変数重要度の可視化

<img src={require('./images/qc-demo-explainability-global-feature-importance.gif').default} width="800" /><br />


#### Local な変数重要度の可視化

<img src={require('./images/qc-demo-explainability-local-feature-importance.gif').default} width="800" /><br />

#### 反実仮想説明によるモデルの説明

<img src={require('./images/qc-demo-explainability-counterfactual.gif').default} width="800" /><br />

---
## 異常画像検知モデルの構築と説明
>コンテンツ作成中...