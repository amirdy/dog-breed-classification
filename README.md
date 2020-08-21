# Dog Breed Classification

This project predicts  the dog breed from 150 different breeds.

![Demo](README_Files/Demo.png)
<ins>[LIVE DEMO]()</ins>&nbsp;&nbsp;&nbsp;<ins>[GIF(Computer Browser)](#computer-browser-demo)</ins>&nbsp;&nbsp;&nbsp;
<ins>[GIF(Mobile Browser)](#mobile-browser-demo)</ins>&nbsp;&nbsp;&nbsp;
<ins>[Setup](#Setup)</ins>&nbsp;&nbsp;&nbsp;
<ins>[Web Application Section](#web-application-section)</ins>&nbsp;&nbsp;&nbsp;
<ins>[AI Section](#ai-section)</ins>
&nbsp;&nbsp;&nbsp;
### Computer Browser Demo: 
![Web Demo](README_Files/web.gif)

### Mobile Browser Demo:
![mobile Demo](README_Files/mobile.gif)

# Setup
## Ubuntu 16 LTS
First install `python3.7` and `python3.7-venv` on the OS.

#### Check:

By typing `python3.7` and hiting Enter, Python shell will appear (version 3.7).

Leave the python shell and run the commands below:

```
 $ git clone https://github.com/amirdy/dog-breed-classification.git 
 $ cd dog-breed-classification/Web_App
 $ python3.7 -m venv env 
 $ source ./env/bin/activate
 (env)$ pip install -r requirements.txt
 (env)$ pip install torch==1.6.0+cpu torchvision==0.7.0+cpu -f https://download.pytorch.org/whl/torch_stable.html
 (env)$ flask run
 ```
 #### Note: 
 For enabling [Fontawesome](https://www.Fontawesome.com) icons, you must add Fontawesome CDN into the index.html ( inside the `<head>` tag ).
 
 You can find this CDN from [here](https://fontawesome.com/account/cdn).
# Web Application Section 
  
### Stack:

HTML - CSS - Js - Jquey - Bootstrap - Chart.js - Flask - Python 

### Icon Set:
[Fontawesome](https://www.Fontawesome.com)

### Source of Images: 
[Unsplash](https://unsplash.com/)

# AI Section: 

### Dataset:

Combination of 3 datasets:

- [Stanford Dogs Dataset](http://vision.stanford.edu/aditya86/ImageNetDogs/)

- [Dog Breed Classification](https://www.kaggle.com/venktesh/person-images)

- [Dog Breed Prediction Competition](https://www.kaggle.com/malhotra1432/dog-breed-prediction-competition)

Number of total images:
- 22790

### Model:
- Using [EfficientNet-B3](https://arxiv.org/abs/1905.11946) model ( pretrained )

- Feed the image into the model and save the last Conv features

- Feed that to a one layer classifier ( just train the classifier )

### Details of Implementation:
- #### Genreralization: 
   - Drop out (0.8) \[in classifier\] + 5 Fold Cross-Validation
- #### Dropout: 
   - 0.8
- #### Batch size (Train): 
   - 25 
- #### Learning rate: 
   - 0.0001
- #### Optimizer: 
   - ADAM
- #### Train-Validation vs Test Split: 
   - Approximately : 0.8 | 0.2 
- #### Train vs Validation Split: 
   - Approximately : 0.8 | 0.2 
- #### Tools: 
   - Python - Pytorch ( Using Google Colab Pro )
- #### Processing: 
   - Resize (H = 400, W = 350) | Rotate | Normalize
- #### Test Result: 
   - loss : 0.2281  | Accuracy: 92.5884 <ins>[See Details](README_Files/Test_Acc.txt)</ins>

### 5 Fold Cross-Validation:

- ### Fold1:
  - ##### Loss & Accuracy (150 Epochs):
          - Best Validation Loss : 0.2477
          - (In Epoch 134 | Accuracy : 92.60 %) [This model is selected]
          - Test Accuracy on this model : 92.48 %

![alt text](README_Files/loss1.png) ![alt text](README_Files/acc1.png)
- ### Fold2:
  - ##### Loss & Accuracy (150 Epochs):
          - Best Validation Loss : 0.2262
          - (In Epoch 147 | Accuracy : 92.39 %) [This model is selected]  
          - Test Accuracy on this model : 92.68 %
![alt text](README_Files/loss2.png) ![alt text](README_Files/acc2.png)
- ### Fold3:
  - ##### Loss & Accuracy (150 Epochs):
          - Best Validation Loss : 0.2489
          - (In Epoch 111 | Accuracy : 91.86 %) [This model is selected]
          - Test Accuracy on this model : 92.39 %
![alt text](README_Files/loss3.png) ![alt text](README_Files/acc3.png)
- ### Fold4:
  - ##### Loss & Accuracy (150 Epochs):
          - Best Validation Loss : 0.2630
          - (In Epoch 134 | Accuracy : 91.59 %) [This model is selected]
          - Test Accuracy on this model : 92.46 %
![alt text](README_Files/loss4.png) ![alt text](README_Files/acc4.png)
- ### Fold5:
  - ##### Loss & Accuracy (150 Epochs):
          - Best Validation Loss : 0.2425
          - (In Epoch 135 | Accuracy : 92.46 %) [This model is selected]
          - Test Accuracy on this model : 92.33 %
![alt text](README_Files/loss5.png) ![alt text](README_Files/acc5.png)



