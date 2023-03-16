
# データ可視化
データを可視化することによって **直感的** にデータの特徴を把握します。


# 1 変数 & 多変数の解析
統計解析や機械学習を用いて **客観的** にデータを分析します。ここでは **プロセス管理** と **要因探索** の 2 つの分野に分けて説明します。

## プロセス管理
製造工程を監視して正常に工程が動いているかをデータから判断 & 監視する。

### 1 変数の場合
- 1 変数毎に閾値を設定
- 予め定義した正常データの閾値との距離の大きさで異常が発生しているかを判断

//TODO: プロセス管理の図を追加する

### 多変数の場合
- 複数の変数が関係する複雑な状況
    - 単なる 1 変数毎の閾値設定だけでは異常は検知できない
- 統計的手法を用いて異常を検知

#### 手法例: 相関の崩れを検知する
//TODO: 1変数と多変数の散布図グラフを追加する
**
- 相間を考慮しない **1 変数**のプロセス管理
- 相間を考慮した**多変数**のプロセス管理

#### 手法例: クラスタリング
//TODO: 新規作成





### 要因探索
製造工程のデータや検査工程のデータなどから構築される統合データを分析して、品質不良の原因を探索する。統合データ (下記イメージ図) は複数の変数で構成されているため、基本的には多変数の解析が必要となる。

#### 手法例: ロジスティック回帰モデルを構築し解釈する
//TODO: ロジスティック回帰の図を追加する

#### 手法例: 決定木モデルを構築し解釈する

//TODO: 決定木の図を追加する


→ 品質に関する予測モデルを構築できるだけでなく、"解釈・説明" できることが重要です。機械学習モデルの説明性・解釈可能性を考慮したモデル構築を行うことが求められてきます。