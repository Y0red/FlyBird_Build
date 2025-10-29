

const scriptsInEvents = {

	async Game_events_Event11_Act2(runtime, localVars)
	{
		console.log(runtime.globalVars.Score);
		scoreUpdate(runtime.globalVars.Score);
	},

	async Global_events_Event5_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Score);
		scoreUpdate(runtime.globalVars.Score);
	},

	async Global_events_Event59_Act3(runtime, localVars)
	{
		closeGame();
	},

	async Global_events_Event60_Act2(runtime, localVars)
	{
		closeGame();
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
