@echo off
echo.
echo Inside passTo.bat
set vara=%1
set varb=%2

echo vara: %vara%
echo varb: %varb%

::powershell -Command "& {Invoke-WebRequest -Uri https://raw.githubusercontent.com/vlad-74/spaphpwritefile/master/README.md -ContentType text/plain -OutFile %vara% ;}"

::ÂÛÇÛÂÀÒÜ = D:\Users7\TOMA\Desktop>call passToBat.bat D:\KROPOTBase\t.md