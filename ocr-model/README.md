# Allergy Alert OCR

Allergy Alert OCR is an OCR (Optical Character Recognition) model designed for my web application project, Allergy Alert. It analyzes images of ingredients and determines if they can cause allergies. I developed this Flask app to convert the user-provided image of ingredients into a list of strings, which is then used in the backend for testing.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Python installed
- Tesseract OCR installed. You can download it from [Tesseract OCR](https://github.com/tesseract-ocr/tesseract)
- Install required Python packages using `pip install -r requirements.txt`

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yassineerrakkas/allergy_alert_OCR.git
cd allergy_alert_OCR
```
2. Set up a virtual environment (optional):
```
python -m venv venv
source venv/bin/activate
```
On Windows, use
```bash
venv\Scripts\activate
```
3. Install dependencies:
```
pip install -r requirements.txt

```
4. Set up Tesseract OCR path:

Update the pytesseract.tesseract_cmd variable in app.py to point to the Tesseract OCR executable on your system.

5. Run the application :
```bash
python app.py
```
