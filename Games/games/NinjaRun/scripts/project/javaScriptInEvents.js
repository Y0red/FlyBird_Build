

const scriptsInEvents = {

	async Global_events_Event59_Act4(runtime, localVars)
	{
		closeGame();
	},

	async Global_events_Event59_Act5(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.Best_Score);
	},

	async Game_events_Event57_Act2(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.Best_Score);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
