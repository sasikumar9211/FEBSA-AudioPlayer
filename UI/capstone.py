from flask import * 
import base64
import io
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
os.environ["CUDA_DEVICE_ORDER"] = "PCI_BUS_ID"
os.environ['CUDA_VISIBLE_DEVICES'] = '-1'
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
    #EMOTIONS_LIST = ["Angry", "Disgust","Fear", "Happy","Neutral", "Sad","Surprise"]
    #print(request.get_json())
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
    #loaded_model=load_model("C:\image\Models\I3denseAdam61.h5")
    #loaded_model=load_model("C:\image\Models\I8batch128denseAdam.h5")
    #loaded_model=load_model("C:\image\Models\model_phase_resnet50_proplus.h5")
    
    #loaded_model=load_model("C:\image\Models\mymodel6_71_70.h5")

    print("Model loaded")
    # load a single image
    #new_image = load_image("C:\image\Captures\Saved.jpg")
    #img = cv2.imread("C:\image\Captures\Saved.jpg")
    #img = cv2.resize(img,(96,96))
    #img_arr = np.asarray(img).reshape(1,96,96,3)
    #img_arr = img_arr.astype('float32')
    #img_arr /= 255
    # check prediction
    #pred = loaded_model.predict(img_arr)
    #print(EMOTIONS_LIST[np.argmax(pred)])
    #emotions = EMOTIONS_LIST[np.argmax(pred)]
    emotions = softPredict()
    response = {"emotion": emotions}
    json_dump = json.dumps(response)
    return json_dump
 
def softPredict():

    EMOTIONS_LIST = ["Angry", "Disgust","Fear", "Happy","Neutral", "Sad","Surprise"]
    #read the captured image
    img = cv2.imread("C:\image\Captures\Saved.jpg")
    
    loaded_model_1 = load_model("C:\image\Models\I8batch128denseAdam.h5")
    print("Loaded Efficient Net Model")
    img_1 = cv2.resize(img,(96,96))
    img_arr_1 = np.asarray(img_1).reshape(1,96,96,3)
    img_arr_1 = img_arr_1.astype('float32')
    img_arr_1 /= 255
    pred_1 = loaded_model_1.predict(img_arr_1)
    softVote_1 = pred_1[0][np.argmax(pred_1)]
    print("softVote_1",softVote_1)
    print("softVote_1 prediction",EMOTIONS_LIST[np.argmax(pred_1)])
    
    loaded_model_2 = load_model("C:\image\Models\model_phase_resnet50_proplus.h5")
    print("Loaded Resnet50V2 Model")
    img_2 = cv2.resize(img,(128,128))
    img_arr_2 = np.asarray(img_2).reshape(1,128,128,3)
    img_arr_2 = img_arr_2.astype('float32')
    img_arr_2 /= 255
    pred_2 = loaded_model_2.predict(img_arr_2)
    softVote_2 = pred_2[0][np.argmax(pred_2)]
    print("softVote_2",softVote_2)
    print("softVote_2 prediction",EMOTIONS_LIST[np.argmax(pred_2)])

    
    loaded_model_3 = load_model("C:\image\Models\mymodel6_71_70.h5")
    print("Loaded MobileNet Model")
    pred_3 = loaded_model_3.predict(img_arr_1)
    softVote_3 = pred_3[0][np.argmax(pred_3)]
    print("softVote_3",softVote_3)
    print("softVote_3 prediction",EMOTIONS_LIST[np.argmax(pred_3)])
    
    if( softVote_1 > softVote_2 and softVote_1 > softVote_3):
        return EMOTIONS_LIST[np.argmax(pred_1)]
    
    if( softVote_2 > softVote_1 and softVote_2 > softVote_3):
        return EMOTIONS_LIST[np.argmax(pred_2)]
    
    if( softVote_3 > softVote_1 and softVote_3 > softVote_2):
        return EMOTIONS_LIST[np.argmax(pred_3)]
        
    
    
    
    
    
 
if __name__ == '__main__':  
    app.run(debug = True) 