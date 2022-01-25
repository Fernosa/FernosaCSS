# Fernosa
[discord](https://discord.gg/8v6nZH67)
an upcoming open-source css library currently under development, please dont worry abt optimization, the classes you havent used in the project WILL NOT get added to the css file.

# How to use it?
YOU NEED NODE INSTALLED FOR THE FOLLOWING:

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


this will start the gulp server which will convert the scss into css as well as purge unneseccery css. The best part is that even after the unneseccery css is removed you can still keep on using the library and the used classes will get added the the .css file. The only downside is that you won't get auto-complete of classes on vscode, we will fix that by making a vscode fernosa extension soon!

WE RECOMMEND TO ONLY USE gulp AFTER YOU FINISH DEVELOPMENT AND PLAN ON DEPLOYING.


if you still want to test fernosa out we do have a testing kit. BUT DO NOT USE THE TESTING KIT IN PRODUCTION ENVIORNMENT
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Adityeahhh/Fernosa@main/FernosaCSS/fernosa.css">
```
DO NOT USE THE TESTING KIT IN DEVELOPMENT ENVIORNMENT

join our discord if you have any issues our team will gladly assist you
