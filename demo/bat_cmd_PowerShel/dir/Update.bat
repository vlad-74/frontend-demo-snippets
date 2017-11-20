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
echo ---------------“‘’ЂЌЋ‚ЉЂ ЊЋ„“‹џ ЉђЋЏЋ’ЃЂ‡›--------------
echo -----------------------Accounting------------------
ping 127.0.0.1 > nul

:::echo \\10.59.8.66\Public\DBases --  10.59.8.60\mro-gef\Files_exchange\DBases

IF NOT EXIST "D:\KROPOTBase" MD "D:\KROPOTBase" > nul
IF NOT EXIST "D:\KROPOTBase\KROPOTBaseInterface.mde" copy /y "\\10.59.8.66\Public\DBases\Interface\KropotBaseInetrface.mde" "D:\KROPOTBase\" > nul
IF NOT EXIST "D:\KROPOTBase\Library.mde" copy /y "\\10.59.8.66\Public\DBases\Interface\Library.mde" "D:\KROPOTBase\" > nul
IF NOT EXIST "D:\KROPOTBase\FileStore.mde" copy /y "\\10.59.8.66\Public\DBases\Interface\FileStore.mde" "D:\KROPOTBase\" > nul
IF NOT EXIST "D:\KROPOTBase\InterfaceVersion.ver" copy /y "\\10.59.8.66\Public\DBases\Interface\InterfaceVersion.ver" "D:\KROPOTBase\" > nul

copy /y "\\10.59.8.66\Public\DBases\Accounting\ACC_changes.chm" "D:\KROPOTBase\" > nul
IF "%1"=="" START "" /B "D:\KROPOTBase\ACC_changes.chm"
copy /y "\\10.59.8.66\Public\DBases\Accounting\Accounting.mde" "D:\KROPOTBase\" > nul
IF "%1"=="" START "" /B "D:\KROPOTBase\Accounting.mde"
copy /y "\\10.59.8.66\Public\DBases\Accounting\Accounting.chm" "D:\KROPOTBase\" > nul

GOTO ENDS

:Address
echo +++++++++++++++“‘’ЂЌЋ‚ЉЂ ЊЋ„“‹џ ЉђЋЏЋ’ЃЂ‡›++++++++++++++++
echo +++++++++++++++++++++++Accounting+++++++++++++++++++++++++
ping 127.0.0.1 > nul

:::echo %find%
IF NOT EXIST "D:\KROPOTBase" MD "D:\KROPOTBase" > nul
IF NOT EXIST "D:\KROPOTBase\KROPOTBaseInterface.mde" copy /y "\\%find%\Interface\KropotBaseInetrface.mde" "D:\KROPOTBase\" > nul
IF NOT EXIST "D:\KROPOTBase\Library.mde" copy /y "\\%find%\Interface\Library.mde" "D:\KROPOTBase\" > nul
IF NOT EXIST "D:\KROPOTBase\FileStore.mde" copy /y "\\%find%\Interface\FileStore.mde" "D:\KROPOTBase\" > nul
IF NOT EXIST "D:\KROPOTBase\InterfaceVersion.ver" copy /y "\\%find%\Interface\InterfaceVersion.ver" "D:\KROPOTBase\" > nul

copy /y "\\%find%\Accounting\ACC_changes.chm" "D:\KROPOTBase\" > nul
IF "%1"=="" START "" /B "D:\KROPOTBase\ACC_changes.chm"
copy /y "\\%find%\Accounting\Accounting.mde" "D:\KROPOTBase\" > nul
IF "%1"=="" START "" /B "D:\KROPOTBase\Accounting.mde"
copy /y "\\%find%\Accounting\Accounting.chm" "D:\KROPOTBase\" > nul

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
