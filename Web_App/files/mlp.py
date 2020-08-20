
import torch
import os
class mlp(torch.nn.Module):
  def  __init__(self,input_size, output_num):
    super(mlp,self).__init__()
    self.fc1=torch.nn.Linear(input_size,output_num)

    self.relu=torch.nn.ReLU()
    self.drop4= torch.nn.Dropout(p=0.8)
    
    
  def forward(self,x):
    #out=self.relu(x)
    out=self.drop4(x)
    out=self.fc1(out)


    return out
