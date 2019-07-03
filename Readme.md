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

Data Science is the study of 

As we continue our study of Data Science has come to the forefront in the past decade. Cobbled together by people from a diverse array of fields — statistics, physics, computer science, design, and many more — the field of Data Science represents our collective desire to understand and harness the abundance of data around us to build a better world.

In this notebook, I'm going to go over a basic Python data analysis pipeline from start to finish to show you what a typical data science workflow looks like.

In addition to providing code examples, I also hope to imbue in you a sense of good practices so you can be a more effective — and more collaborative — data scientist.

I will be following along with the data analysis checklist from The Elements of Data Analytic Style, which I strongly recommend reading as a free and quick guidebook to performing outstanding data analysis.
# 2. License

# 3. Required Libraries

# 4. Data Used
Dataset was taken from UCI Machine Learning Repository.  A collection of databases, domain theories, and data generators that are used by the machine learning community for the empirical analysis of machine learning algorithms.

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

We will test a dataset to see if we are able to predict absenteeism of employees.

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










