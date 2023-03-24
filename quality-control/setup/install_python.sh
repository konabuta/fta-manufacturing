#!/bin/bash
conda env create -f ../environments/factory-qc-blackbox.yaml
conda env create -f ../environments/factory-qc-glassbox.yaml


conda activate factory-qc-blackbox
ipython kernel install --user --name=factory-qc-blackbox
conda activate factory-qc-glassbox
ipython kernel install --user --name=factory-qc-glassbox
