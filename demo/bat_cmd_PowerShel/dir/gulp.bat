@echo off

set gulppath=%1
::echo gulppath: %gulppath%  
set "location=%cd%" 

cd %gulppath%
echo.
gulp example

