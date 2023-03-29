---
id: qc-diagnostic
title: 1 変数 & 多変数の解析
---

<!-- TODO : スクショしているパワポのタイトル部分を除外する -->

本ページでは、**1 変数 & 多変数の解析** の技術について **プロセス管理** と **要因探索** の 2 つのシナリオの観点から説明します。また、機械学習モデルの透明性の技術を活用する方法も説明します。

- [プロセス管理](#プロセス管理)
    - [1 変数の解析](#1-変数の解析)
    - [多変数の解析](#多変数の解析)
- [要因探索](#要因探索)
- [機械学習モデルの透明性](#機械学習モデルの透明性)
    - [解釈可能性・説明可能性](#解釈可能性・説明可能性)
    - [反実仮想説明](#反実仮想説明)
---

## プロセス管理
**プロセス管理** では、製造工程を監視し、データから製造工程が正常に動いているかを判断します。

### 1 変数の解析
- 1 変数毎に管理限界 (閾値) を設定
- 予め定義した正常データの閾値との距離の大きさで異常が発生しているかを判断

<img src={require('./images/qc-process-management-univariate.png').default} width="500" /><br />

### 多変数の解析
- 複数の変数が関係する複雑な状況
    - 単なる 1 変数毎の閾値設定だけでは異常は検知できない
- 統計的手法を用いて異常を検知
    - 相関関係、主成分分析

<img src={require('./images/qc-process-management-multivariate.png').default} width="500" /><br />

<br/>

:::note 相関関係を考慮するとは？
例えば下図のように、センサー1 とセンサー2 に相関関係がある場合を考えます。相関関係を考慮せずに各変数ごとに閾値を設けても異常を十分に検知することが出来ません。相関関係を考慮することで、下右図のように異常 (赤点) を検知することが出来るようになります。
<img src={require('./images/qc-process-management-correlation.png').default} width="500" /><br />
:::

:::caution
一般的な相関係数 (ピアソンの相関係数) はデータが線形である関係性に有効ですが、非線形の変数間の関係性を捉えることはできません ([相関係数の例](https://ja.wikipedia.org/wiki/%E7%9B%B8%E9%96%A2%E4%BF%82%E6%95%B0))。そのため、MIC (Maximal information coefficient) のような非線形の相関関係を計算できる指標の利用、データ可視化による変数の関係性の探索、機械学習モデルの利用などが有効になってきます。
:::



---

## 要因探索
製造工程のデータや検査工程のデータなどから構築される統合データを分析して、品質不良の原因を探索します。品質統合データは複数の変数で構成されているため、多変数のデータ解析の手法を用いた分析を行います。

<img src={require('./images/qc-factor-analysis.png').default} width="500" /><br />

<br/>

### 要因探索で用いる主な手法
要因探索で用いる代表的な手法を紹介します。

#### 手法例: 線形回帰モデルを用いた多変数の解析
ナイーブな手法として**線形回帰モデル**が挙げられます。各変数の値に重み (回帰係数) を掛け合わせたものを予測値として出力します。回帰係数の大きさから、品質との相関を探索することができます。

<img src={require('./images/qc-factor-analysis-rl.png').default} width="500" /><br />

<br/>

#### 手法例: 決定木を用いた多変数の解析
**決定木**は各変数に関する条件分岐を用いて、分類や回帰を行います。
<img src={require('./images/qc-factor-analysis-dt.png').default} width="500" /><br />

<br/>

#### 手法例: AI・機械学習モデルを用いた多変数の解析
近年、予測精度が高い手法として著名な**勾配ブースティング**や**ニューラルネットワーク**を利用します。
<img src={require('./images/qc-factor-analysis-nn.png').default} width="500" /><br />

:::caution
複雑な機械学習モデルを用いることで精度の向上が期待できます。しかしながら、要因探索におけるデータ解析の観点では、単に高精度な予測モデルを構築するだけでは、何が原因で不良が発生しているのか分かりません。そのため**機械学習モデルの透明性**を考慮した開発が求められます。
:::

---
## 機械学習モデルの透明性
品質管理の分野では以前より**統計的な手法**を用いたデータ分析が行われてきました。これは解釈可能性の高いアルゴリズムを利用できるというメリットがある一方で、手法によっては制限事項や前提条件が多く、複雑なデータ・多種多様なデータ形式に対応していないという課題があります。

最先端の機械学習の手法を用いることで、複雑なデータを扱うことができます。しかしながら、その内部構造を理解するのは難しく、高い精度の予測は行えるものの、データ解析に利用できないといった課題があります。この課題に対するアプローチ方法として **解釈可能性・説明可能性** や **反実仮想説明** が挙げられます。


### 解釈可能性・説明可能性
まず主流なアプローチ方法として機械学習モデルの解釈可能性・説明可能性を利用することが挙げられます。

**解釈性可能性** の高い機械学習モデルとは、品質管理の分野で長年使われてきた統計的手法 (線形回帰モデル、決定木 etc) のようにモデルの構造が解釈しやすいモデルを指します。更に近年は **一般化加法モデル** のように、統計的な手法以外でも高い精度を実現できる解釈性可能性の高いモデルが開発されています。

また **説明可能性** が高いとは、機械学習モデルがアウトプットした予測に対して、なぜその予測を出力したのかを説明できることを指します。このケースでは機械学習モデルを Blackbox として扱います。つまり、内部の構造は考慮せず、機械学習モデルに対する入力と予測値の関係性を見ます。**SHAP** などの手法が開発されています。


<img src={require('./images/qc-interpretability-explainability-usecase.png').default} width="700" /><br />

#### 参考情報
- [解釈可能性 & 説明可能性 - Azure ML Playbook](https://konabuta.github.io/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-interpretability-explainability)
- [GitHub - SHAP](https://github.com/slundberg/shap)

<br/>

### 反実仮想説明
**反実仮想説明** は、機械学習モデルの予測が変化する (増加/減少する or 反対になる) 特徴量のサンプルを提示することで機械学習モデルを説明しようとする説明性の手法です。

例えば、品質を予測するモデルを利用したところ、品質が悪いという予測値が返されたとします。反実仮想説明は、この予測値を変化させるため、つまり品質を良くするために、特徴量をどのように変化されば良いのかを提示することができます。

<img src={require('./images/qc-counterfactual-usecase.png').default} width="700" /><br />

#### 参考情報
- [反実仮想説明 - Azure ML Playbook](https://konabuta.github.io/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-counterfactual-explanation)