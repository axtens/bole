var Stage = Java.type("javafx.stage.Stage");
var FileChooser = Java.type("javafx.stage.FileChooser");
var File = Java.type("java.io.File");
var FileReader = Java.type("java.io.FileReader");
var BufferedReader = Java.type("java.io.BufferedReader");
var Files = Java.type("java.nio.file.Files");
var Paths = Java.type("java.nio.file.Paths");

MessageBox.Show(gsPath, gsFile);

if (MainText.text.length > 0) {

	var st = new Stage;
	var fc = new FileChooser;
	var f = new File(gsPath);
	var sParent = f.getParent();
	fc.setInitialDirectory(f);
	fc.setTitle(gsVersion + " File Save");
	var f = fc.showSaveDialog(st);
	MessageBox.Show(f.length,gsFile);
	Files.write(Paths.get(f), MainText.text.getBytes());
}

