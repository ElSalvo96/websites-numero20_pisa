set copyDirCss=css
set copyDirJs=js
set copyDirResources=resources
set destinationDir=build

rmdir /s /q %destinationDir%
@REM mkdir %destinationDir%\%copyDirCss% 
@REM mkdir %destinationDir%\%copyDirJs% 
robocopy %copyDirCss% %destinationDir%/%copyDirCss% /E /is /it
robocopy %copyDirJs% %destinationDir%/%copyDirJs% /E /is /it
robocopy %copyDirResources% %destinationDir%/%copyDirResources% /E /is /it
robocopy ./ %destinationDir% index.html /is /it

del %destinationDir%\%copyDirJs%\menu.ts
rmdir /s /q %destinationDir%\%copyDirResources%\original

for %%f in (%destinationDir%/%copyDirCss%/*) do call uglifycss %destinationDir%/%copyDirCss%/%%f > %destinationDir%/%copyDirCss%/%%f
for %%f in (%destinationDir%/%copyDirJs%/*) do call uglifyjs %destinationDir%/%copyDirJs%/%%f > %destinationDir%/%copyDirJs%/%%f
