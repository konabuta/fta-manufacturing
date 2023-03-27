---
id: ai-and-ml-in-manufacturing
title: AI・機械学習の適用
---
# 製造業における AI・機械学習
本ページでは、近年の製造業における変革のモチベーションや AI・機械学習を用いたユースケース、また AI・機械学習の利用を含むデータ活用の 5 段階のレベルについて説明します。

- [製造業の変革](#製造業の変革)
- [ユースケース](#ユースケース)
- [データ分析の手法](#データ分析の手法)
- [大規模言語モデルの登場](#大規模言語モデルの登場)

---
## 製造業の変革
以前のものづくりは、メーカーが製品を生産し、顧客に販売して終わりでした。近年はそういったビジネスモデルから脱却し、データを活用して顧客に対して継続的にサービス・価値を提供し続ける必要があります。

:exclamation: **マージン削減とコスト上昇** <br/>
&nbsp;:arrow_right: :white_check_mark: 運用効率の向上、設備保全の自動化、部品の長期運用の実現

:exclamation: **顧客ニーズの多様化と製品オファリング** <br/>
&nbsp;:arrow_right: :white_check_mark: 予測的サプリチェーン管理、製品開発、パーソナライズされた提案・契約・見積もり

:exclamation: **スキルギャップの拡大とノウハウの継承** <br/>
&nbsp;:arrow_right: :white_check_mark: 高度なレポーティング、自然なインターフェースと効率的な技術習得

---

## ユースケース
### 組み立て製造業
<img src={require('./images/discrete-usecase.png').default} width="800" /><br />


### プロセス製造業
<img src={require('./images/process-usecase.png').default} width="800" /><br />

### ガス・エネルギー業
※電力業界向けに記載しています。
<img src={require('./images/gas-energy-usecase.png').default} width="800" /><br />

#### 参考情報
- [製造業向け Azure](https://azure.microsoft.com/ja-jp/solutions/industries/discrete-manufacturing/#overview)
- [IoT Signals: Manufacturing Spotlight の 6 つの重要な知見](https://www.microsoft.com/ja-jp/industry/blog/manufacturing/2022/08/26/iot-signals/)

---
## データ分析の手法
AI・機械学習は "データ分析" で利用されます。一概に "データ分析" といってもさまざまな分析手法が存在します。ここでは代表的な 5 つの分析手法を紹介します。

- **記述的分析 (Descriptive)**
  - 過去に発生した事象に対する分析手法です。例えば、工場の稼働データを取得し、レポートやダッシュボードなどを用いて、過去の稼働率を時系列で可視化します。
- **診断的分析 (Diagnostic)**
  - 過去に発生した事象の理由・原因を分析する手法です。例えば、製品出荷後に不具合が発生した場合、その原因を探索します。
- **予測的分析 (Predictive)**
  - 将来何が起こるかを予測する手法です。例えば、製品の過去の売上データを分析し、将来の売上を予測します。
- **処方的分析 (Perspective)**
  - 目的を達成するための最適なアクションを出力する分析手法です。例えばコストを抑えながら、高速に製品を配送するための最適なルートを計算します。
- **認知的分析 (Cognitive/Artificial Intelligence)**
  - 人間の意思決定に近い分析を自律的に行ったり、高度にヒトの意思決定をサポートする手法です。例えば、強化学習によって製造工程を自動化します。

### 参考
- [データ/アナリティクスとは？](https://www.gartner.co.jp/ja/topics/data-and-analytics)
- [データ分析の種類を理解する](https://learn.microsoft.com/ja-jp/training/modules/understand-concepts-of-data-analytics/2-understand-data-analytics-types)

---
## 大規模言語モデルの登場

大量のテキストデータを用いて学習された大規模言語モデル (Large Language Model, LLM) が登場しました。製造業においても様々なユースケースが考えられます。

### ユースケース 
Azure OpenAI Service などの大規模言語モデルを活用したユースケースです。

<img src={require('./images/openai-usecase.png').default} width="800" /><br />


---

