---
id: qc-azure
title: Azure による実装
---

## 品質管理アーキテクチャ
品質管理を Azure 行うためのアーキテクチャ例を紹介します。
<img src={require('./images/qc-azure-architecture.png').default} width="1000" /><br />

### 可視化
データの可視化は **Power BI** を用います。デフォルトに準備されているビジュアルでヒストグラムや散布図を作成することができます。
<img src={require('./images/qc-azure-architecture-powerbi.png').default} width="600" /><br />

<br />

一方で、管理図やパレート図はデフォルトで準備されているビジュアルでは作成できませんが、カスタムビジュアルや Data Analysis Expression (DAX) を用いて作成することができます。
<img src={require('./images/qc-azure-architecture-powerbi-custom.png').default} width="600" /><br />

<br />

高度な分析手法も利用できます。Quick insight で自動的にデータの特徴を分析します。Key Influencer では統計的な手法を用いてある指標に相関のある変数を出力することができます。
<img src={require('./images/qc-azure-architecture-powerbi-ai.png').default} width="600" /><br />

<br/>

### データ分析、AI・機械学習
**Azure Machine Learning** を用いて機械学習のライフサイクルを回して行きます。AutoML や Designer を用いて迅速にモデルを構築したり、モデルの説明可能性の機能を用いて透明性を高めることができます。
<img src={require('./images/qc-azure-architecture-azureml.png').default} width="600" /><br />

<br/>

### データウェアハウス
**Azure Synapse Analytics** は大規模データのデータ前処理、蓄積、分析を行うためのサービスです。パイプラインやデータフローを用いて、製造工程やオンプレミス & クラウド上の各業務システムからデータを抽出します。
<img src={require('./images/qc-azure-architecture-synapse.png').default} width="600" /><br />