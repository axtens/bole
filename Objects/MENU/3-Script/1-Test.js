var Stage = Java.type("javafx.stage.Stage");
var FileChooser = Java.type("javafx.stage.FileChooser");
var File = Java.type("java.io.File");
var FileReader = Java.type("java.io.FileReader");
var BufferedReader = Java.type("java.io.BufferedReader");
var Files = Java.type("java.nio.file.Files");
var Paths = Java.type("java.nio.file.Paths");

if (MainText.text.length > 0) {

	var st = new Stage;
	var fc = new FileChooser;
	var f = new File(gsPath);
	var sParent = f.getParent();
	fc.setInitialDirectory(f);
	fc.setTitle(gsVersion + " File Save");
	var f = fc.showSaveDialog(st);
	if (null !== f) {
		Files.write(Paths.get(f), MainText.text.getBytes());
		tfStatus.text = f;
		var fn = new File(fn);
		var gsPath = fn.getParent();
		var gsFile = fn.getName();
	}
}

