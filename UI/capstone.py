from flask import * 
import base64
import io
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import cv2
from PIL import Image
from flask_cors import CORS 
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import numpy as np


app = Flask(__name__) 
CORS(app) 

def load_image(img_path):
    print("inside load_image")
    img = image.load_img(img_path, target_size=(224, 224,3))
    img_tensor = image.img_to_array(img)                    # (height, width, channels)
    img_tensor = np.expand_dims(img_tensor, axis=0)         # (1, height, width, channels), add a dimension because the model expects this shape: (batch_size, height, width, channels)
    img_tensor /= 255                                      # imshow expects values in the range [0, 1]
    return img_tensor
    
    
      
@app.route('/image',methods = ['POST'])  
def getImage():
    EMOTIONS_LIST = ["Angry", "Disgust","Fear", "Happy","Neutral", "Sad","Surprise"]
    print(request.get_json())
    data = request.get_json()
    #data = request.get_data()
    #image_64_encode = base64.b64encode(data)
    #print(type(image_64_encode))
    #image_64_decode =base64.b64decode((image_64_encode))
    image_result = open("C:\image\Captures\Saved.jpg", 'wb') # create a writable image and write the decoding result
    #image_result.write(image_64_decode)
    base64_bytes = data.encode('ascii')
    message_bytes = base64.b64decode(base64_bytes)
    image_result.write(message_bytes)
    print("Image received")
    loaded_model=load_model("C:\image\Models\I3denseAdam61.h5")
    print("Model loaded")
    # load a single image
    #new_image = load_image("C:\image\Captures\Saved.jpg")
    img = cv2.imread("C:\image\Captures\Saved.jpg")
    img = cv2.resize(img,(96,96))
    img_arr = np.asarray(img).reshape(1,96,96,3)
    print(img_arr.shape)
    print(type(img_arr))
    img_arr = img_arr.astype('float32')
    img_arr /= 255
    # check prediction
    pred = loaded_model.predict(img_arr)
    print(EMOTIONS_LIST[np.argmax(pred)])
    emotions = EMOTIONS_LIST[np.argmax(pred)]
    response = {"emotion": emotions}
    json_dump = json.dumps(response)
    return json_dump
       
if __name__ == '__main__':  
    app.run(debug = True) 