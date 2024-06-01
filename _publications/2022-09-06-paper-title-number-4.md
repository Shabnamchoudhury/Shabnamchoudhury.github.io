---
title: "A Multithreaded Model for Cancer Tissue Heterogeneity: An Application"
collection: publications
permalink: /publication/2022-09-06-paper-title-number-4
excerpt: ''
venue: 'bioRxiv'

---

Studying the heterogeneity in cancerous tissue is challenging in cancer research. It is vital to process the realworld data efficiently to understand the heterogeneous nature of
cancer tissue. GPU compatible models, which can estimate the
subpopulation of cancerous tissue, are fast if the size of input
data, i.e., the number of qPCR (quantitative polymerase chain
reaction) gene expression reading is extensive. In the real world,
we rarely get that much data to reap the benefits of a GPU’s
parallelism. Real experimental data from fibroblasts are much
less, and models using those data on a GPU are slower than the
CPU multithreaded application. This paper will show a method
to run GPU-compatible models for cancer tissue heterogeneity
on a multithreaded CPU. Further, we also show that the model
running on a multithreaded CPU is faster than the model running
on a GPU with real experimental data.

