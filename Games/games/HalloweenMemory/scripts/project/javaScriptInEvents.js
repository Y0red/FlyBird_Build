

const scriptsInEvents = {

	async Menuevent_Event9_Act4(runtime, localVars)
	{
		console.log(runtime.globalVars.Level);
		scoreUpdate(runtime.globalVars.Level);
	},

	async Menuevent_Event9_Act5(runtime, localVars)
	{
		closeGame();
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
