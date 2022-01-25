# Fernosa
[discord](https://discord.gg/8v6nZH67)

an upcoming open-source css library currently under development, please dont worry abt optimization, the classes you havent used in the project WILL NOT get added to the css file.

# How to use it?

YOU NEED NODE INSTALLED FOR THE FOLLOWING:

Alright, so first of all download the repository and remove all the readme files because they are annoying

```html
npm init -y
```

then

```html
npm install gulp gulp-sass sass --save-dev
```

```html
npm install --save-dev gulp-purgecss
```

then open the terminal and go to directory. run the command: gulp 

#ONLY USE gulp AFTER YOU FINISH DEVELOPMENT AND PLAN ON DEPLOYING.



this will start the gulp server which will purge the unnecessary css.


if you still want to test fernosa out we do have a testing kit, just link the cdn like any other css file. BUT DO NOT USE THE TESTING KIT IN PRODUCTION ENVIORNMENT
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Adityeahhh/Fernosa@main/FernosaCSS/fernosa.css">
```
DO NOT USE THE TESTING KIT IN DEVELOPMENT ENVIORNMENT

join our discord if you have any issues our team will gladly assist you
