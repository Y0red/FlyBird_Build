

const scriptsInEvents = {

	async Gameevent_Event30_Act2(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.BestScore); 
	},

	async Menuevent_Event13_Act4(runtime, localVars)
	{
		closeGame();
	},

	async Menuevent_Event13_Act5(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.BestScore); 
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
