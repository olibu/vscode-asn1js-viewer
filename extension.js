const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// open command
	let disposable = vscode.commands.registerCommand('vscode-asn1js-viewer.open', function () {
		vscode.window.showInformationMessage('ASN1 Viewer opened!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
