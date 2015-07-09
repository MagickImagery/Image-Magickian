#Image Magickian

Be your own Image Magickian! This single page app demonstrates ImageMagick's in-browser and command-line tool to create and manipulate images in countless ways, such as cropping, resizing, transforming, color adjustments, and adding text or drawings to images. It can also perform some advanced wizardry like creating GIF animations.

##How to use this app##
1) Install ImageMagick CLI tools:     
> brew install imagemagick  

2) Install the module using npm:  
> npm install imagemagick  

3) To use the jCrop jQuery plug-in to crop images. Add these to the HTML file (after downloading files from [here](http://deepliquid.com/content/Jcrop_Download.html):  
> <link rel="stylesheet" href="/jcrop/css/Jcrop.css">   
> <script src="/jcrop/js/Jcrop.js"></script>

4) Open the app in Chrome using localhost:3000. Upload a picture to either crop or resize directly in the app.

5) To Crop: drag your cursor to your target size and press 'enter'. The file will be saved in the apps 'Uploads' folder.

6) To Resize: press either 'Resize: Large', 'Medium', or 'Small' to downsize your image. Final resizes will become:  

* Large = 600px x 600px
* Medium = 400px x 400px
* Small = 200px x 200px

7) Additionally, you can manipulate images via the CLI. You can refer to the [ImageMagick site](http://www.imagemagick.org/script/index.php) for a complete list of commands but here are some basic ones to get you started:

* **Downsize by 50%:** convert imageName.jpg -resize 50% NewImageName.jpg  
* **Flop:** convert imageName.jpg -flop NewImageName.jpg   
* **Blur:** convert imageName.jpg -blur 0x8 NewImageName.jpg  

Author: The Image Magickians    
Creation date: July 9, 2015  