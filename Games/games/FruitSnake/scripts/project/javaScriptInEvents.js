

const scriptsInEvents = {

	async Global_events_Event16_Act3(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.BestScore);
	},

	async Global_events_Event59_Act4(runtime, localVars)
	{
		closeGame();
	},

	async Global_events_Event59_Act5(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.BestScore);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
