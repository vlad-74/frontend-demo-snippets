#щрнр йнд гюосяйюрэ рнкэйн хг йнлюмдмни ярпнйх  PowerShell
$cont = wget http://fotoma.info/
$cont = $cont.Content
$FilePath = 'contentFronHtml.txt' -f $env:SystemDrive;
$cont | Out-File -FilePath $FilePath -Append -Width 200;
