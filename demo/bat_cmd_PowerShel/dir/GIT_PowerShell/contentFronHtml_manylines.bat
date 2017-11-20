Set "MyCmnd=$cont = wget http://fotoma.info/;"
Set "MyCmnd=%MyCmnd% $cont = $cont.Content;"
Set "MyCmnd=%MyCmnd% $FilePath = 'contentFronHtml.txt' -f $env:SystemDrive;"
Set "MyCmnd=%MyCmnd% $cont | Out-File -FilePath $FilePath -Append -Width 200;"
powershell -Command "& {%MyCmnd%}"



