::set "location=D:\_DEVELOPER\Sites\_GIT\frontend-demo-snippets\demo\bat_cmd\dir"
set "location=%cd%" 
:: !!!!!! %cd%" ТЕКУЩАЯ ПАПКА ИЗ CMD  !!!!!!
IF %cd%==D:\_DEVELOPER\Sites\_GIT\frontend-demo-snippets\demo (
   start %location%\bat_cmd\dir\mongodb\mongod.bat
   timeout 8 >nul
   start %location%\bat_cmd\dir\mongodb\mongo.bat
) ELSE IF %cd%==D:\_DEVELOPER\Sites\_GIT\frontend-demo-snippets\demo\bat_cmd (
   start %location%\dir\mongodb\mongod.bat
   timeout 8 >nul
   start %location%\dir\mongodb\mongo.bat
) ELSE IF %cd%==D:\_DEVELOPER\Sites\_GIT\frontend-demo-snippets\demo\bat_cmd\dir (
   start %location%\mongodb\mongod.bat
   timeout 8 >nul
   start %location%\mongodb\mongo.bat
)ELSE (
	cls&echo.
	echo !!!! NODE START FROM frontend-demo-snippets\demo OR frontend-demo-snippets\demo\bat_cmd !!!
)