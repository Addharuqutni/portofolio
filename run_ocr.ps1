
[Windows.Storage.StorageFile,Windows.Storage,ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder,Windows.Graphics.Imaging,ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine,Windows.Foundation,ContentType=WindowsRuntime] | Out-Null

function Await() {
    while (-not .IsCompleted) { [System.Threading.Thread]::Sleep(20) }
    return .GetResults()
}

 = 'C:\Users\haru\.factory\temp\images\f7091587\2d42bf97-4e82-45b8-a735-26b8a49fe789.jpeg'
 = [Windows.Storage.StorageFile]::GetFileFromPathAsync()
 = Await 

 = .OpenAsync([Windows.Storage.FileAccessMode]::Read)
 = Await 

 = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync()
 = Await 

 = .GetSoftwareBitmapAsync()
 = Await 

 = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
 = .RecognizeAsync()
 = Await 

foreach ( in .Lines) {
    Write-Output .Text
}
