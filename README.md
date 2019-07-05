# An Example of Machine Learning Notebook Using Data on Absenteeism at Work

# Table of contents
1. Introduction
2. License
3. Required Libraries
4. Data Used
5. Hypothesis Given Data on Absenteeism at Work
6. Use Jupyter Notebook to Test Hypothesis 
7. Further Reading
8. Acknowledgements

# 1. Introduction
As Data is becoming available we are able to study a diverse array of fields: mathematics, biology, statistics, physics, computer science, design, and many more.  The field of Data Science represents our collective desire to understand and harness the abundance of data around us to build a better world.

This notebook will go over a basic Python data analysis pipeline from start to finish to show you what a typical data science workflow looks like.

In addition to providing a guide, this this exercise will try to follow along with the data analysis checklist from The Elements of Data Analytic Style, a free and quick guidebook to performing outstanding data analysis. https://leanpub.com/datastyle.

This notebook is intended to be a public resource. As such, if you see any glaring inaccuracies or if a critical topic is missing, please feel free to point it out or (preferably) submit a pull request to improve the notebook

We hope you find this example helpful. 

# 2. License
We have licensed this material so that it can be shared. 

# 3. Required Libraries

You will need Python and Jupyther Notebook installed on your computer to run this example This notebook uses several Python packages that come standard with the Anaconda Python distribution. The primary libraries that we'll be using are:

NumPy: Provides a fast numerical array structure and helper functions.
pandas: Provides a DataFrame structure to store data in memory and work with it easily and efficiently.
scikit-learn: The essential Machine Learning package in Python.
matplotlib: Basic plotting library in Python; most other Python plotting libraries are built on top of it.
Seaborn: Advanced statistical plotting library.
watermark: A Jupyter Notebook extension for printing timestamps, version numbers, and hardware information.

To make sure you have all of the packages you need, install them with conda. 

# 4. Data Used
Dataset was taken from UCI Machine Learning Repository.  A collection of databases, domain theories, and data generators that are used by the machine learning community for the empirical analysis of machine learning algorithms.

https://archive.ics.uci.edu/ml/datasets.php

The database was created with records of absenteeism at work from July 2007 to July 2010 at a courier company in Brazil.

The dataset includes 21 Attributes and 740 Records.  

Description of Attributes: 

1. Individual identification (ID)
2. Reason for absence (ICD).
Absences attested by the International Code of Diseases (ICD) stratified into 21 categories (I to XXI) as follows:
  I Certain infectious and parasitic diseases  
  II Neoplasms  
  III Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism  
  IV Endocrine, nutritional and metabolic diseases  
  V Mental and behavioural disorders  
  VI Diseases of the nervous system  
  VII Diseases of the eye and adnexa  
  VIII Diseases of the ear and mastoid process  
  IX Diseases of the circulatory system  
  X Diseases of the respiratory system  
  XI Diseases of the digestive system  
  XII Diseases of the skin and subcutaneous tissue  
  XIII Diseases of the musculoskeletal system and connective tissue  
  XIV Diseases of the genitourinary system  
  XV Pregnancy, childbirth and the puerperium  
  XVI Certain conditions originating in the perinatal period  
  XVII Congenital malformations, deformations and chromosomal abnormalities  
  XVIII Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified  
  XIX Injury, poisoning and certain other consequences of external causes  
  XX External causes of morbidity and mortality  
  XXI Factors influencing health status and contact with health services.
  And 7 categories without (CID)
  (22) patient follow-up  
  (23) medical consultation
  (24) blood donation 
  (25) laboratory examination 
  (26) unjustified absence 
  (27) physiotherapy 
  (28) dental consultation
3. Month of absence
4. Day of the week (Monday (2), Tuesday (3), Wednesday (4), Thursday (5), Friday (6))
5. Seasons (summer (1), autumn (2), winter (3), spring (4))
6. Transportation expense
7. Distance from Residence to Work (kilometers) - Will convert into miles
8. Service time 
9. Age
10. Work load Average/day 
11. Hit target (percentage)
12. Disciplinary failure (yes=1; no=0)
13. Education (high school (1), graduate (2), postgraduate (3), master and doctor (4))
14. Son (number of children)
15. Social drinker (yes=1; no=0)
16. Social smoker (yes=1; no=0)
17. Pet (number of pet)
18. Weight
19. Height
20. Body mass index
21. Absenteeism time in hours (target)

# 5.  Hypothesis Given Data on Absenteeism at Work
According to the U.S. Centers for Disease Control and Prevention (CDC), lost productivity due to absenteeism in the U.S. cost employers $225.8 billion annually, or $1,685 per employee. That's a big dent — and all due to a combination of direct and indirect costs.  
Jan 22, 2018

https://advancesystems.ie/the-prevalence-of-employee-absenteeism-infographic/

This example has been performed in order to explore Machine Learning models included in the sklearn library in Python to predict accuracy of models using employees’ absenteeism at a courier company during the time between July 2007 to July 2010.  Further, models will be tested using raw data collected and data that has been modified using outlier analysis, normalizing and emputing techniques to see difference of model accuracy between both data sets.  

# 6.  Use Jupyter Notebook to Test Hypothesis

	Step 1: Answering the question
	Step 2: Checking the data
	Step 3: Tidying the data
	Step 4: Testing our data
	Step 5: Exploratory analysis
	Step 6: Classification
	Step 7: Cross-validation
	Step 8: Parameter tuning
	Step 9: Reproducibility
	Step 10: Conclusions

# Further Reading

# Results

# Acknowledgements

Data Source:
Creators original owner and donors: Andrea Martiniano (1), Ricardo Pinto Ferreira (2), and Renato Jose Sassi (3).
E-mail address: 
andrea.martiniano'@'gmail.com (1) - PhD student;
log.kasparov'@'gmail.com (2) - PhD student;
sassi'@'uni9.pro.br (3) - Prof. Doctor.
Universidade Nove de Julho - Postgraduate Program in Informatics and Knowledge Management.
Address: Rua Vergueiro, 235/249 Liberdade, Sao Paulo, SP, Brazil. Zip code: 01504-001.
Website: http://www.uninove.br/curso/informatica-e-gestao-do-conhecimento/










