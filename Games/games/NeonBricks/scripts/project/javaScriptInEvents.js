

const scriptsInEvents = {

	async EventSheetUiComands_Event14_Act1(runtime, localVars)
	{
		console.log("Current Level: "+ runtime.globalVars.Stages_Open);
		scoreUpdate(runtime.globalVars.Stages_Open); 
		
	},

	async EventSheetUiComands_Event14_Act2(runtime, localVars)
	{
		closeGame(); 
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
