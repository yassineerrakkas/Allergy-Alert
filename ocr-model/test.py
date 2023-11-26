import requests
import base64

with open('for_test.jpg', 'rb') as image_file:
    image_data = base64.b64encode(image_file.read()).decode('utf-8')

data = {"image": image_data}
response = requests.post("http://localhost:5000/extract_words", json=data)

print(response.json()) 
