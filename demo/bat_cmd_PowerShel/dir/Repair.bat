@echo off & setlocal ENABLEEXTENSIONS
call :GetIP ip
:::echo/IP Address is: %ip%

:::\\10.59.8.66\Public\Dbases - Москва Румянцево
:::\\10.59.51.51\Public\Dbases - Москва Севреная башня
:::\\10.59.50.92\Public\Dbases -  Питер
:::\\10.59.41.243\Public\Dbases - Нижний
:::\\10.59.52.225\Public\Dbases - Тольятти
:::\\10.59.46.111\Public\Dbases - Калуга
:::\\10.59.11.93\Public\Dbases - Домодедово

if not %ip%==%ip:10.59.8.=% (SET find=10.59.8.66\Public\Dbases%&goto Address)
if not %ip%==%ip:10.59.9.=% (SET find=10.59.8.66\Public\Dbases%&goto Address)

if not %ip%==%ip:10.59.51.=% (SET find=10.59.51.51\Public\Dbases%&goto Address)
if not %ip%==%ip:10.59.50.=% (SET find=10.59.50.92\Public\Dbases%&goto Address)
if not %ip%==%ip:10.59.41.=% (SET find=10.59.41.243\Public\Dbases%&goto Address)
if not %ip%==%ip:10.59.52.=% (SET find=10.59.52.225\Public\Dbases%&goto Address)
if not %ip%==%ip:10.59.46.=% (SET find=10.59.46.111\Public\Dbases%&goto Address)
if not %ip%==%ip:10.59.11.=% (SET find=10.59.11.93\Public\Dbases%&goto Address)
GOTO Address2

:Address2
echo ----------------ЋЃЌЋ‚‹…Ќ€… ЉђЋЏЋ’ЃЂ‡›---------------------------
ping 127.0.0.1 > nul
:::echo \\10.59.8.66\Public\DBases -- 10.59.8.60\mro-gef\Files_exchange\DBases

copy /y "\\10.59.8.66\Public\DBases\Interface\Library.mde" "D:\KROPOTBase\" > nul
copy /y "\\10.59.8.66\Public\DBases\Interface\FileStore.mde" "D:\KROPOTBase\" > nul

IF EXIST "D:\KROPOTBase\Accounting.mde" CALL "\\10.59.8.66\Public\DBases\Accounting\Update.bat" 1
IF EXIST "D:\KROPOTBase\ActCheck.mde" CALL "\\10.59.8.66\Public\DBases\ActCheck\Update.bat" 1
IF EXIST "D:\KROPOTBase\Authority.mde" CALL "\\10.59.8.66\Public\DBases\Authority\Update.bat" 1
IF EXIST "D:\KROPOTBase\CRM.mde" CALL "\\10.59.8.66\Public\DBases\CRM\Update.bat" 1
IF EXIST "D:\KROPOTBase\Customs.mde" CALL "\\10.59.8.66\Public\DBases\Customs\Update.bat" 1
IF EXIST "D:\KROPOTBase\Juridique.mde" CALL "\\10.59.8.66\Public\DBases\Juridique\Update.bat" 1
IF EXIST "D:\KROPOTBase\Overland.mde" CALL "\\10.59.8.66\Public\DBases\Overland\Update.bat" 1
IF EXIST "D:\KROPOTBase\Overseas.mde" CALL "\\10.59.8.66\Public\DBases\Overseas\Update.bat" 1
IF EXIST "D:\KROPOTBase\Purchasing.mde" CALL "\\10.59.8.66\Public\DBases\Purchasing\Update.bat" 1
IF EXIST "D:\KROPOTBase\StdRates.mde" CALL "\\10.59.8.66\Public\DBases\Rates\Update.bat" 1
IF EXIST "D:\KROPOTBase\HR.mde" CALL "\\10.59.8.66\Public\DBases\HR\Update.bat" 1
IF EXIST "D:\KROPOTBase\4PL.mde" CALL "\\10.59.8.66\Public\DBases\4PL\Update.bat" 1
IF EXIST "D:\KROPOTBase\CCC_4pl.mde" CALL "\\10.59.8.66\Public\DBases\CCC_4PL\Update.bat" 1
IF EXIST "D:\KROPOTBase\TeapiDIV.mde" CALL "\\10.59.8.66\Public\DBases\TeapiDIV\Update.bat" 1
IF EXIST "D:\KROPOTBase\TeapiSAV.ade" CALL "\\10.59.8.66\Public\DBases\TeapiSAV\Update.bat" 1

GOTO ENDS

:Address
echo +++++++++++++++++ЋЃЌЋ‚‹…Ќ€… ЉђЋЏЋ’ЃЂ‡›+++++++++++++++++++
ping 127.0.0.1 > nul
:::echo %find%
copy /y "\\%find%\Interface\Library.mde" "D:\KROPOTBase\" > nul
copy /y "\\%find%\Interface\FileStore.mde" "D:\KROPOTBase\" > nul

IF EXIST "D:\KROPOTBase\Accounting.mde" CALL "\\%find%\Accounting\Update.bat" 1
IF EXIST "D:\KROPOTBase\ActCheck.mde" CALL "\\%find%\ActCheck\Update.bat" 1
IF EXIST "D:\KROPOTBase\Authority.mde" CALL "\\%find%\Authority\Update.bat" 1
IF EXIST "D:\KROPOTBase\CRM.mde" CALL "\\%find%\CRM\Update.bat" 1
IF EXIST "D:\KROPOTBase\Customs.mde" CALL "\\%find%\Customs\Update.bat" 1
IF EXIST "D:\KROPOTBase\Juridique.mde" CALL "\\%find%\Juridique\Update.bat" 1
IF EXIST "D:\KROPOTBase\Overland.mde" CALL "\\%find%\Overland\Update.bat" 1
IF EXIST "D:\KROPOTBase\Overseas.mde" CALL "\\%find%\Overseas\Update.bat" 1
IF EXIST "D:\KROPOTBase\Purchasing.mde" CALL "\\%find%\Purchasing\Update.bat" 1
IF EXIST "D:\KROPOTBase\StdRates.mde" CALL "\\%find%\Rates\Update.bat" 1
IF EXIST "D:\KROPOTBase\HR.mde" CALL "\\%find%\HR\Update.bat" 1
IF EXIST "D:\KROPOTBase\4PL.mde" CALL "\\%find%\4PL\Update.bat" 1
IF EXIST "D:\KROPOTBase\CCC_4pl.mde" CALL "\\%find%\CCC_4PL\Update.bat" 1
IF EXIST "D:\KROPOTBase\TeapiDIV.mde" CALL "\\%find%\TeapiDIV\Update.bat" 1
IF EXIST "D:\KROPOTBase\TeapiSAV.ade" CALL "\\%find%\TeapiSAV\Update.bat" 1

GOTO ENDS
goto :EOF
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:GetIP ip
::
:: By:   Ritchie Lawrence, [url]http://www.commandline.co.uk[/url]
::
:: Func: Получает Ip-addr сетевушки. Если сетевушек несколько, возвращает адрес той,
::   к которой прибит default route. В случае ошибки возвращает 0.0.0.0
::
:: Args: %1 перем. для получения IP-addr.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
setlocal ENABLEEXTENSIONS & set "i=0.0.0.0" & set "j="
for /f "tokens=4" %%a in ('route print^|findstr 0.0.0.0.*0.0.0.0') do (
 if not defined j for %%b in (%%a) do set "i=%%b" & set "j=1")
endlocal & set "%1=%i%" & goto :EOF
:ENDS
cls
