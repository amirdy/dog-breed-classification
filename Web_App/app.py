from flask import Flask,render_template, request, url_for ,jsonify
from werkzeug.utils import secure_filename
from datetime import datetime
import os
import run 
from xlrd import open_workbook
from xlutils.copy import copy
from PIL import Image
import piexif
import shutil


f = open("breed.txt", "r")
breeds=[]
for x in f:
 breeds.append(x.strip())

app = Flask(__name__,template_folder="templates")
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
UPLOAD_FOLDER = './static/uploadIMG'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

 
ALLOWED_EXTENSIONS = { 'png', 'jpg', 'jpeg'}
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
           
           
           

@app.route('/', methods=['GET', 'POST'])
def index():

    #  save uploaded file and show it

    if 'file1' in request.files:
          print("File uploaded")
          file = request.files['file1']
          if file and allowed_file(file.filename): 
            filename = secure_filename(file.filename)
            exten=filename.split(".")
            exten=exten[-1]
            datetime_object = datetime.now()
            name = str(int(datetime_object.timestamp())-1586289491)
            dirr = os.path.join(app.config['UPLOAD_FOLDER'], name)
            os.mkdir(dirr)
            dirr = os.path.join(dirr, name)
            os.mkdir(dirr)
            file.save(os.path.join(dirr, name + "." +exten ))
            



            try:
                imgMain = Image.open(os.path.join(dirr, name + "." +exten))
                
                img = piexif.load(os.path.join(dirr, name + "." +exten))
                #Get the orientation if it exists
                orientation = img["0th"].pop(piexif.ImageIFD.Orientation)
                exif_bytes = piexif.dump(img)

                if orientation == 2:
                    imgMain = imgMain.transpose(Image.FLIP_LEFT_RIGHT)
                elif orientation == 3:
                    imgMain = imgMain.rotate(180)
                elif orientation == 4:
                    imgMain = imgMain.rotate(180).transpose(Image.FLIP_LEFT_RIGHT)
                elif orientation == 5:
                    imgMain = imgMain.rotate(-90, expand=True).transpose(Image.FLIP_LEFT_RIGHT)
                elif orientation == 6:
                    imgMain = imgMain.rotate(-90, expand=True)
                elif orientation == 7:
                    imgMain = imgMain.rotate(90, expand=True).transpose(Image.FLIP_LEFT_RIGHT)
                elif orientation == 8:
                    imgMain = imgMain.rotate(90, expand=True)

                imgMain.save(os.path.join(dirr, name + "." +exten),exif=exif_bytes)
                print("TT")
            except:             
                  print("bbbb")
            '''
            im = Image.open(os.path.join(dirr, filename))
            width, height = im.size
            print(width, height)
            rgb_im = im.convert('RGB')
            rgb_im.save(os.path.join(dirr, 'a.png'))'''
            

            
            
            p=os.path.join(dirr, name + "." +exten).replace('\\','/')
            width, height = Image.open(os.path.join(dirr, name + "." +exten)).size
            dat = {'img':p ,'w':width,'h':height}
            resp= jsonify(dat)
            resp.headers['Access-Control-Allow-Origins']='*'
            return resp
          else:
            dat = {'img':"ERROR_extention"}
            resp= jsonify(dat)
            return resp

        
    
    #  run the deep model       
    if "image" in request.form:
    
          
            
          imgsrc = request.form["image"]
          idx = imgsrc.index("/static/")
          

          o1,p1,o2,p2,x=run.r(imgsrc[idx:])
          
          f = open("log.txt", "a")
          f.write( "\n" + str(datetime.now().strftime("%d/%m/%Y %H:%M:%S")) + "," +o1 +"," +str(p1))
          f.close()
          
          o1 = o1.split("_")
          o1 = [word.capitalize() for word in o1]
          o1=" ".join(o1)
          o2 = o2.split("_")
          o2 = [word.capitalize() for word in o2]
          o2=" ".join(o2)       



          data = {'o1':o1 ,'p1':p1,'o2':o2,'p2':p2}
          resp= jsonify(data)
          resp.headers['Access-Control-Allow-Origins']='*'


          
          if 'uploadIMG' in imgsrc[idx:]:
                    shutil.rmtree(os.path.dirname(os.path.dirname(imgsrc[idx:])).replace("/static/","./static/"))
            
          

          return resp
          
    # save the feedback
    if "nameForm" in request.form:
    
          
          rb = open_workbook("feedback.xls")
          wb = copy(rb)
          s = wb.get_sheet(0)
          s.write(rb.sheet_by_index(0).nrows, 0,str(datetime.now().strftime("%d/%m/%Y %H:%M:%S")))
          s.write(rb.sheet_by_index(0).nrows, 1, request.form["nameForm"])
          s.write(rb.sheet_by_index(0).nrows, 2, request.form["emailForm"])
          s.write(rb.sheet_by_index(0).nrows, 3, request.form["textForm"])
          wb.save('feedback.xls')
          return (jsonify({"message":"Submitted"}))
          
          
    # search the breeds
    if "searchValue" in request.form:
        if  request.form["searchValue"] != "":
              val = request.form["searchValue"][0].upper() + request.form["searchValue"][1:]
              result=[]
              for breed in breeds:
                if breed.startswith(val):
                    result.append(breed)

              data = {'res':result}
              resp= jsonify(data)
              return resp
        else:
            data = {'res':breeds}
            resp= jsonify(data)
            return resp

    # get the full breeds
    if "fullSearchValue" in request.form:
            data = {'res':breeds}
            resp= jsonify(data)
            return resp
    return render_template("index.html")
    
    

    
app.run(debug=True)
#app.run(host="0.0.0.0", port=5555)
