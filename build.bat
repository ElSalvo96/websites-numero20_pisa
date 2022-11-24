set copyDirCss=css
set copyDirJs=js
set copyDirResources=resources
set destinationDir=build

rmdir /s /q %destinationDir%
robocopy %copyDirCss% %destinationDir%/%copyDirCss% /E /is /it
robocopy %copyDirJs% %destinationDir%/%copyDirJs% /E /is /it
robocopy %copyDirResources% %destinationDir%/%copyDirResources% /E /is /it
robocopy ./ %destinationDir% index.html /is /it

del %destinationDir%\%copyDirJs%\menu.ts
rmdir /s /q %destinationDir%\%copyDirResources%\original

robocopy %destinationDir%\%copyDirCss% %destinationDir%\%copyDirCss%\temp /E /is /it
pause
uglifycss %destinationDir%\%copyDirCss%\temp\effects.css > %destinationDir%\%copyDirCss%\effects.css
uglifycss %destinationDir%\%copyDirCss%\temp\loader.css > %destinationDir%\%copyDirCss%\loader.css
pause
uglifycss %destinationDir%\%copyDirCss%\temp\menu.css > %destinationDir%\%copyDirCss%\menu.css
pause
uglifycss %destinationDir%\%copyDirCss%\temp\style.css > %destinationDir%\%copyDirCss%\style.css
pause

rmdir /s /q %destinationDir%\%copyDirCss%\temp

PAUSE
PAUSE