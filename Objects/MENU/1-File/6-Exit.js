if (gbDirty) {
	var v = MessageBox.Show2("File has changed. Quit anyway?", gsVersion, "Yes", "", "No");
	if (v === -1) {
		MainForm.Close();
	}
} else {
	MainForm.Close();
}