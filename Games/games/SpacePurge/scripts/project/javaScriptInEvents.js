

const scriptsInEvents = {

	async Addsettings_Event91_Act3(runtime, localVars)
	{
		closeGame();
	},

	async Addsettings_Event91_Act4(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.BestScore);
	},

	async Addsettings_Event92_Act3(runtime, localVars)
	{
		closeGame();
	},

	async Addsettings_Event92_Act4(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.BestScore);
	},

	async Gamesettings_Event61_Act3(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.BestScore);
	},

	async Gamesettings_Event64_Act3(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.BestScore);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
