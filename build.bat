set copyDirCss=css
set copyDirJs=js
set copyDirResources=resources
set destinationDir=build

rmdir /s /q %destinationDir%
mkdir %destinationDir%\%copyDirCss% 
mkdir %destinationDir%\%copyDirJs% 
@REM robocopy %copyDirCss% %destinationDir%/%copyDirCss% /E /is /it
robocopy %copyDirJs% %copyDirJs%/temp /E /is /it
del %copyDirJs%\temp\menu.ts

robocopy %copyDirResources% %destinationDir%/%copyDirResources% /E /is /it

for %%f in (%copyDirCss%/*) do call uglifycss %copyDirCss%/%%f > %destinationDir%/%copyDirCss%/%%f
for %%f in (%copyDirJs%/temp/*) do call uglifyjs %copyDirJs%/temp/%%f > %destinationDir%/%copyDirJs%/%%f


html-minifier index.html --remove-comments --collapse-whitespace --minify-js --minify-css > %destinationDir%\index.html

rmdir /s /q %destinationDir%\%copyDirResources%\original
rmdir /s /q %copyDirJs%\temp
