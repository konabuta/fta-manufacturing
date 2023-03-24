#!/bin/bash
conda env create -f ../environments/factory-em-blackbox.yaml
conda env create -f ../environments/factory-em-glassbox.yaml


conda activate factory-em-blackbox
ipython kernel install --user --name=factory-em-blackbox
conda activate factory-em-glassbox
ipython kernel install --user --name=factory-em-glassbox