

const scriptsInEvents = {

	async ["Title-E_Event13_Act1"](runtime, localVars)
	{
		closeGame();
	},

	async ["Title-E_Event13_Act2"](runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.High_Score); 
	},

	async Gameplay_Event17_Act6(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.High_Score); 
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
