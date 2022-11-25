set copyDirCss=css
set copyDirJs=js
set copyDirResources=resources
set destinationDir=build

rmdir /s /q %destinationDir%
mkdir %destinationDir%\%copyDirCss% 
mkdir %destinationDir%\%copyDirJs% 
@REM robocopy %copyDirCss% %destinationDir%/%copyDirCss% /E /is /it
@REM robocopy %copyDirJs% %destinationDir%/%copyDirJs% /E /is /it
robocopy %copyDirResources% %destinationDir%/%copyDirResources% /E /is /it

for %%f in (%copyDirCss%/*) do call uglifycss %copyDirCss%/%%f > %destinationDir%/%copyDirCss%/%%f
for %%f in (%copyDirJs%/*) do call uglifyjs %copyDirJs%/%%f > %destinationDir%/%copyDirJs%/%%f

robocopy ./ %destinationDir% index.html /is /it

del %destinationDir%\%copyDirJs%\menu.ts
rmdir /s /q %destinationDir%\%copyDirResources%\original