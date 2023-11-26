from flask import Flask, request, jsonify
import base64
import pytesseract
import requests
from io import BytesIO
from PIL import Image
from flask_cors import CORS

#change this path with the tesseract executable path in your machine
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
app = Flask(__name__)
CORS(app)

@app.route('/extract_words', methods=["GET", 'POST'])
def extract_words():
    image = request.json['image']
    image_bytes = base64.b64decode(image)
    img = Image.open(BytesIO(image_bytes))
    text = pytesseract.image_to_string(img)
    words = text.split()
    return jsonify({'words': words})

if __name__ == '__main__':
    app.run(debug=True)