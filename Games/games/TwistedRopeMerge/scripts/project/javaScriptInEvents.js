

const scriptsInEvents = {

	async Start_sheet_Event13_Act1(runtime, localVars)
	{
		 closeGame();
	},

	async Start_sheet_Event13_Act2(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.level);
	},

	async Codegame_Event57_Act7(runtime, localVars)
	{
		console.log(runtime.globalVars.level);
		scoreUpdate(runtime.globalVars.level);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
