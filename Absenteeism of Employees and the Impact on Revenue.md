# Absenteeism of Employees:  Using Machine Learning to predict the absenteeism of employees in hours 

According to the U.S. Centers for Disease Control and Prevention (CDC), lost productivity due to absenteeism in the U.S. cost employers $225.8 billion annually, or $1,685 per employee. That's a big dent — and all due to a combination of direct and indirect costs.  
Jan 22, 2018

https://advancesystems.ie/the-prevalence-of-employee-absenteeism-infographic/

We will test a dataset to see if we are able to predict absenteeism of employees. 

# Information on Dataset 

Dataset was taken from UCI Machine Learning Repository.  A collection of databases, domain theories, and data generators that are used by the machine learning community for the empirical analysis of machine learning algorithms.

The database was created with records of absenteeism at work from July 2007 to July 2010 at a courier company in Brazil.

Source:
Creators original owner and donors: Andrea Martiniano (1), Ricardo Pinto Ferreira (2), and Renato Jose Sassi (3).
E-mail address: 
andrea.martiniano'@'gmail.com (1) - PhD student;
log.kasparov'@'gmail.com (2) - PhD student;
sassi'@'uni9.pro.br (3) - Prof. Doctor.
Universidade Nove de Julho - Postgraduate Program in Informatics and Knowledge Management.
Address: Rua Vergueiro, 235/249 Liberdade, Sao Paulo, SP, Brazil. Zip code: 01504-001.
Website: http://www.uninove.br/curso/informatica-e-gestao-do-conhecimento/

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


## Code

The following notebooks and scripts, stored in this repository, have been
developed for the dataset.

1. [usage]: shows how to load the datasets and develop, train and test your own
   models with it.
4. [features]: features extraction from the audio (used to create
   `features.csv`).
2. [analysis]: exploration of the metadata, data and features.
4. [features]: features extraction from the audio (used to create
   `features.csv`).
5. [webapi]: query the web API of the [FMA]. Can be used to update the dataset.
6. [creation]: creation of the dataset (used to create `tracks.csv` and
   `genres.csv`).

[usage]:     ??????


## Usage

1. Download data, verify its integrity, and uncompress the archives.
	```sh
	curl -O https://os.unil.cloud.switch.ch/fma/fma_metadata.zip

	echo "f0df49ffe5f2a6008d7dc83c6915b31835dfe733  fma_metadata.zip" | sha1sum -c -
	
	unzip fma_metadata.zip
	
	```

	If you get any error while decompressing the archives (especially with the
	Windows and macOS system unzippers), please try [7zip]. That is probably an
	[unsupported compression issue](https://github.com/mdeff/fma/issues/5).

1. Optionally, use [pyenv] to install Python 3.6 and create a [virtual
   environment][pyenv-virt].
	```sh
	pyenv install 3.6.0
	pyenv virtualenv 3.6.0 fma
	pyenv activate fma
	```

1. Clone the repository.
	```sh
	git clone https://github.com/mdeff/fma.git
	cd fma
	```

1. Checkout the revision matching the data you downloaded (e.g., `beta`, `rc1`,
   `v1`). See the [history](#history) of the dataset.
	```sh
	git checkout rc1
	```

1. Install the Python dependencies from `requirements.txt`. Depending on your
   usage, you may need to install [ffmpeg] or [graphviz]. Install [CUDA] if you
   want to train neural networks on GPUs (see
   [Tensorflow's instructions](https://www.tensorflow.org/install/)).
	```sh
	make install
	```

1. Fill in the configuration.
	```sh
	cat .env
	AUDIO_DIR=/path/to/audio
	FMA_KEY=IFIUSETHEAPI
	```

1. Open Jupyter or run a notebook.
	```sh
	jupyter-notebook
	make baselines.ipynb
	```

[7zip]:       http://www.7-zip.org
[pyenv]:      https://github.com/pyenv/pyenv
[pyenv-virt]: https://github.com/pyenv/pyenv-virtualenv
[ffmpeg]:     https://ffmpeg.org/download.html
[graphviz]:   http://www.graphviz.org/
[CUDA]:       https://en.wikipedia.org/wiki/CUDA

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

