

const scriptsInEvents = {

	async Menuevent_Event15_Act4(runtime, localVars)
	{
		closeGame();
	},

	async Menuevent_Event15_Act5(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.Level);
	},

	async Gameevent_Event616_Act5(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.Level);
	},

	async Gameevent_Event617_Act4(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.Level);
	},

	async Gameevent_Event618_Act4(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.Level);
	},

	async Gameevent_Event619_Act4(runtime, localVars)
	{
		scoreUpdate(runtime.globalVars.Level);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
