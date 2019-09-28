Type=Class
Version=2.5
ModulesStructureVersion=1
B4J=true
@EndOfDesignText@
'Class module
Sub Class_Globals
	Private fx As JFX
	Private oFCh As FileChooser
	Public context As Form
End Sub

'Initializes the object. You can add parameters to this method if needed.
Public Sub Initialize(form1 As Form)
	oFCh.Initialize
	context = form1
End Sub

Public Sub Open(sInitDir As String, sExtFiltName As String, lExtFiltArr As String) As String
	oFCh.InitialDirectory = sInitDir
	Dim L As List = Regex.Split(",",lExtFiltArr)
	oFCh.SetExtensionFilter(sExtFiltName, L)
	oFCh.Title = Main.gsVersion
	Return oFCh.ShowOpen(context)
End Sub

Public Sub Read(sFilePath As String) As String
	Return File.ReadString(File.GetFileParent(sFilePath),File.GetName(sFilePath))
End Sub