# Allergy Alert
## Overview 
"Allergy Alert" is a web application designed to help users determine whether a food product is safe for consumption based on their declared allergies. Users can specify their allergies, upload an image of the product's ingredients, and the system will analyze the ingredients to provide an alert if any allergens are detected.
![Logo](https://github.com/yassineerrakkas/Allergy-Alert/assets/118397882/483658c1-e65c-4c4c-a446-5644743c30a9)
## Table of contents
* [Team members](#team-members)
* [Technologies Used](#technologies-used)
  * [Backend](#backend)
  * [Frontend](#frontend)
  * [OCR](#ocr)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation and run](#installation-and-run)
  * [Usage](#usage)
  
## Team members 
The "Allergy Alert" project is a collaborative effort undertaken by a dynamic team of data engineering students:
- [BENABDELLAH Noha](https://github.com/nohabenabdellah)
- [BENSALIM Kaoutar](https://github.com/BENSALIMKaoutar)
- [ERRAKKAS Yassine](https://github.com/yassineerrakkas)
## Technologies Used 

### Backend 

* Framework: Spring Boot with Maven structure.
  ![abc](https://github.com/yassineerrakkas/Allergy-Alert/assets/118397882/87b9c950-8659-42da-8e4a-5d0debc43ee3)
* Architecture: Model-View-Controller (MVC).
* Language: Java.
  ![ab](https://github.com/yassineerrakkas/Allergy-Alert/assets/118397882/189fc0d0-dfcd-4f24-a6fe-172c477f27d0)

### Frontend 

* Library: React with Node.js.
* UI Design: Responsive and user-friendly.
![a](https://github.com/yassineerrakkas/Allergy-Alert/assets/118397882/2af81597-bc76-4960-9ded-e8cfd7900965)

### OCR 

* Framework: Flask.
* Purpose: Extract text from ingredient images.
  
## Getting Started

### Prerequisites

* an IDE for example: [IntelliJ IDEA](https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows)
* [Java Development Kit (JDK)](https://download.oracle.com/java/17/archive/jdk-17.0.9_windows-x64_bin.msi)
* [Node.js](https://nodejs.org/dist/v20.10.0/node-v20.10.0-x64.msihttps://nodejs.org/dist/v20.10.0/node-v20.10.0-x64.msi)
* [Python](https://www.python.org/ftp/python/3.12.0/python-3.12.0-amd64.exe)
### Installation and run
First, clone the repository.
   ```
   git clone https://github.com/yassineerrakkas/Allergy-Alert.git
```

#### Backend (Spring Boot)

1. Navigate to the `backend` directory.

   ```
   cd ./backend
   ```
2. change the file `properties` in order to adapt it to your own database (url, username, password).
3. run the `AllergyAlertBeApplication` Class.

#### Frontend (React)

1. Open the `frontend` directory.
 ```
   cd ./frontend
```
2. Run `npm install` to install dependencies.
3. Execute `npm start` to launch the frontend development server.

#### OCR (Flask)

1. Open the `ocr-model` directory.
```
   cd ./ocr-model
```

2. Create a virtual environment: `python -m venv venv`.
3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On Unix or MacOS: `source venv/bin/activate`
4. Install Tesseract OCR . You can download it from [Tesseract OCR](https://github.com/tesseract-ocr/tesseract)
5. Install dependencies: `pip install -r requirements.txt`.
6. Run the Flask server: `python app.py`.
### Usage

1. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the "Allergy Alert" web application.
2. Create an account or log in if you already have one.
3. check your allergies in the allergies page in order to continue.
4. Upload an image containing the product's ingredients.
5. The site will analyze the ingredients and provide information about if the product is safe to consume or not.



   

