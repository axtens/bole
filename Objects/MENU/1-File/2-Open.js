var Stage = Java.type("javafx.stage.Stage");
var FileChooser = Java.type("javafx.stage.FileChooser");
var File = Java.type("java.io.File");
var FileReader = Java.type("java.io.FileReader");
var BufferedReader = Java.type("java.io.BufferedReader");

var st = new Stage;
var fc = new FileChooser;
fc.setTitle(gsVersion + " File Open");
var f = new File(DirApp);
var sParent = f.getParent();
fc.setInitialDirectory(f); // should default to last file edited's parent or ??

var gsPath = fc.showOpenDialog(st);
var fl = new File(gsPath);
var fr = new FileReader(fl);
var br = new BufferedReader(fr);
var blk = [];
if (fl.canRead()) {
	var lin;
	while ( (lin = br.readLine()) !== null) {
		blk.push(lin);
	}
}
MainText.text = blk.join("\r\n") + "\r\n";
tfStatus.text = gsPath;
f = new File(gsPath);
gsPath = f.getParent();
gsFile = f.getName();