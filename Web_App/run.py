#import packages
import time
import threading
import numpy as np
import torch
import matplotlib.pyplot as plt 
import os
import pandas as pd 
import random
import gc
from datetime import datetime
import torch.cuda as cuda

import torchvision as tv
import torchvision.transforms as transforms
from torchvision import models
from torchvision import datasets
from torch.utils.data import DataLoader

from files.mlp import mlp
from files.folder import *

res = None
rsx = None 
inc = None

out1 = None
out2 = None
out3 = None
out4 = None
out5 = None
'''
def calRes(x,base):
      global res
      PATH=os.path.join(base ,"models/ResModel.pth").replace('\\','/')
      ResModel = torch.load(PATH)
      ResModel.eval()
      if cuda.is_available():
        x = x.cuda()
        ResModel = ResModel.cuda()
      res = ResModel(x)
      del ResModel

def calRex(x,base):
      global rsx

      PATH=os.path.join(base ,"models/RsxModel.pth").replace('\\','/')
      RsxModel = torch.load(PATH)
      RsxModel.eval()
      if cuda.is_available():
        RsxModel = RsxModel.cuda()
      rsx = RsxModel(x)
      del RsxModel
      gc.collect()
      
def calInc(x,base):
      global inc

      PATH=os.path.join(base ,"models/IncModel.pth").replace('\\','/')
      IncModel = torch.load(PATH)
      IncModel.eval()
      if cuda.is_available():
        IncModel = IncModel.cuda()
      inc = IncModel(x)
      del IncModel
      gc.collect()

class mlp(torch.nn.Module):
      def  __init__(self,input_size, output_num):
        super(mlp,self).__init__()
        self.fc1=torch.nn.Linear(input_size,output_num)

        self.relu=torch.nn.ReLU()
        self.drop4= torch.nn.Dropout(p=0.8)
        
        
      def forward(self,x):
        out=self.relu(x)
        out=self.drop4(out)
        out=self.fc1(out)


        return out
'''
def calmlp1(x):
      global out1 
      model1 =  mlp(1536 , 150)
      PATH="./models/mlp1.pth"
      checkpoint = torch.load(PATH)
      model1.load_state_dict(checkpoint['model_state_dict'])
      model1.eval()
      if cuda.is_available():
        model1 = model1.cuda()      
      out1=model1(x) #out1: torch.Size([batchsize, 151])  | 151 is number of output neurons
      del model1
      del checkpoint
      gc.collect()
     
def calmlp2(x):
      global out2

      model2 =  mlp(1536 , 150)
      PATH="./models/mlp2.pth"
      checkpoint = torch.load(PATH)
      model2.load_state_dict(checkpoint['model_state_dict'])
      model2.eval()
      if cuda.is_available():
        model2 = model2.cuda()  
      out2=model2(x) #out1: torch.Size([batchsize, 151])  | 151 is number of output neurons
      del model2
      del checkpoint
      gc.collect()

def calmlp3(x):
      global out3

      model3 =  mlp(1536 , 150)
      PATH="./models/mlp3.pth"
      checkpoint = torch.load(PATH)
      model3.load_state_dict(checkpoint['model_state_dict'])
      model3.eval()
      if cuda.is_available():
        model3 = model3.cuda()  
      out3=model3(x) #out1: torch.Size([batchsize, 151])  | 151 is number of output neurons
      #print(out3)
      del model3
      del checkpoint
      gc.collect()



def calmlp4(x):
      global out4
      model4 =  mlp(1536 , 150)
      PATH="./models/mlp4.pth"
      checkpoint = torch.load(PATH)
      model4.load_state_dict(checkpoint['model_state_dict'])
      model4.eval()
      if cuda.is_available():
        model4 = model4.cuda()  
      out4=model4(x) #out1: torch.Size([batchsize, 151])  | 151 is number of output neurons
      del model4
      del checkpoint
      gc.collect()

def calmlp5(x):
      global out5

      model5 =  mlp(1536 , 150)
      PATH="./models/mlp5.pth"
      checkpoint = torch.load(PATH)
      model5.load_state_dict(checkpoint['model_state_dict'])
      model5.eval()
      if cuda.is_available():
        model5 = model5.cuda()  
      out5=model5(x) #out1: torch.Size([batchsize, 151])  | 151 is number of output neurons
      del model5
      del checkpoint
      gc.collect()





def r(p):


    start = time.time()
    base = os.path.dirname(os.path.abspath(__file__))

    image_transforms = {
        # Train uses data augmentation
        'train':
        transforms.Compose([
            transforms.RandomResizedCrop(size=(400,399), scale=(0.8, 1.0)),
            transforms.RandomRotation(degrees=20),
            transforms.ColorJitter(),
            transforms.RandomHorizontalFlip(),
            #transforms.CenterCrop(size=(400,300)),  
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406],
                                 [0.229, 0.224, 0.225]) 
        ]),
        # Validation does not use augmentation
        'valid':
        transforms.Compose([
            transforms.Resize(size=(400,399)),
            transforms.CenterCrop(size=(400,399)),
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
        ]),
    }

    data = {
        'test':
        
         ImageFolder(root=os.path.dirname(os.path.dirname(p)).replace("/static/","./static/"), transform=image_transforms['valid']),
    }


    test_samples_lenght = len(data['test'])
    batch_size_test= 1
    numTestBatches =  int(np.ceil(test_samples_lenght / batch_size_test))

    dataloaders = {
        'test': DataLoader(data['test'], batch_size=batch_size_test, shuffle=False),
    }








    #trainiter = iter(dataloaders['test']) 
    #x,y,z,w = next(trainiter) 





    labelsArray=np.genfromtxt(os.path.join(base ,"files/labels.csv"),dtype=str,  delimiter=',')
    PDlabels=pd.DataFrame(labelsArray)
    uniqBreeds=PDlabels[1].unique()
    breeds={}
    for i in range(len(uniqBreeds)-1):
      breeds[uniqBreeds[i+1]]=i
    def get_breeds_index(breed):
        return breeds[breed]

    breeds=dict([(val,key)  for key,val in breeds.items()])






    
    csv_np=np.ones((1 + 1,151),dtype=object)

    testiter = iter(dataloaders['test']) 
    for k in range(numTestBatches):
     with torch.no_grad():
      names = []
      x, y ,z ,w = next(testiter)
      
      im_data = x
      for i in range(len(z)):
          names.append( z[i][41:][:-4] )

      csv_np[k*batch_size_test +1 : k* batch_size_test + len(z) +1,0]=names
      #x = x.to(torch.bfloat16)


   

      PATH=os.path.join(base ,"models/EFN.pth").replace('\\','/')
      EFNModel = torch.load(PATH)
      EFNModel.eval()
      if cuda.is_available():
        EFNModel = EFNModel.cuda()
      x = EFNModel(x)
      del EFNModel
      gc.collect()

      
        
     
      
  
      '''
      model1 = mlp(1536 , 150)
      PATH="./models/mlp1.pth"
      checkpoint = torch.load(PATH)
      model1.load_state_dict(checkpoint['model_state_dict'])
      model1.eval()
      if cuda.is_available():
        model1 = model1.cuda()      
      out1=model1(x) #out1: torch.Size([batchsize, 151])  | 151 is number of output neurons
      del model1
      del checkpoint
      gc.collect()
      
      model2 = mlp(1536 , 150)
      PATH="./models/mlp2.pth"
      checkpoint = torch.load(PATH)
      model2.load_state_dict(checkpoint['model_state_dict'])
      model2.eval()
      if cuda.is_available():
        model2 = model2.cuda()  
      out2=model2(x) #out1: torch.Size([batchsize, 151])  | 151 is number of output neurons
      del model2
      del checkpoint
      gc.collect()

      model3 = mlp(1536 , 150)
      PATH="./models/mlp3.pth"
      checkpoint = torch.load(PATH)
      model3.load_state_dict(checkpoint['model_state_dict'])
      model3.eval()
      if cuda.is_available():
        model3 = model3.cuda()  
      out3=model3(x) #out1: torch.Size([batchsize, 151])  | 151 is number of output neurons
      del model3
      del checkpoint
      gc.collect()

      model4 = mlp(1536 , 150)
      PATH="./models/mlp4.pth"
      checkpoint = torch.load(PATH)
      model4.load_state_dict(checkpoint['model_state_dict'])
      model4.eval()
      if cuda.is_available():
        model4 = model4.cuda()  
      out4=model4(x) #out1: torch.Size([batchsize, 151])  | 151 is number of output neurons
      del model4
      del checkpoint
      gc.collect()

      model5 = mlp(1536 , 150)
      PATH="./models/mlp5.pth"
      checkpoint = torch.load(PATH)
      model5.load_state_dict(checkpoint['model_state_dict'])
      model5.eval()
      if cuda.is_available():
        model5 = model5.cuda()  
      out5=model5(x) #out1: torch.Size([batchsize, 151])  | 151 is number of output neurons
      del model5
      del checkpoint
      gc.collect()
      '''
      

    

      t1 = threading.Thread(target=calmlp1 , args = [x])
      t2 = threading.Thread(target=calmlp2 , args = [x])
      t3 = threading.Thread(target=calmlp3 , args = [x])
      t4 = threading.Thread(target=calmlp4 , args = [x])
      t5 = threading.Thread(target=calmlp5 , args = [x])
      t1.start()
      t2.start()
      t3.start()
      t4.start()
      t5.start()
      
      t1.join()
      t2.join()
      t3.join()
      t4.join()
      t5.join()
      
      outputs=(out1 + out2 + out3 + out4+ out5) / 5


      out=torch.nn.functional.softmax(outputs,dim=1)



      csv_np[k*batch_size_test + 1  : k* batch_size_test + len(z) + 1 ,1:]=out.detach().cpu()
      #del outputs
      del out
      del x
      gc.collect()
      torch.cuda.empty_cache() 
 



    data = pd.DataFrame(csv_np[1:,:])


    row1=["id"]
    for i in range(len(breeds)):
      row1.append(breeds[i])
    newindex=[ 0 for i in range(len(row1))]
    newindex[0]="id"
    r=np.sort(row1[1:])
    newindex[1:]=r



    data.columns=newindex
    o1=0
    p1=0
    
    o2=0
    p2=0
    
    d=data.iloc[0][1:]
    for i in range(150):
      if d[i]==d.values.max(0):
         print(str(datetime.now().strftime("%d/%m/%Y %H:%M:%S"))," , ",d[i]," , ",newindex[i+1])
         p1= d[i]
         o1= newindex[i+1]
         
         break
         
    z=[]
    for i in range(150):
         z.append(d[i])
         
    z.remove(d.values.max(0))
    for i in range(149):
        if z[i]==max(z):
          p2= z[i]
          o2= newindex[i+1]
          break
    end = time.time()
    print("time: ",end - start)
    return(o1,p1,o2,p2,im_data)
