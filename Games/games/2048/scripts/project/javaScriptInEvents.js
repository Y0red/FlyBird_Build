

const scriptsInEvents = {

	async Egame_Event29_Act4(runtime, localVars)
	{
		 scoreUpdate(runtime.globalVars.BestScore);
	},

	async Egame_Event33_Act2(runtime, localVars)
	{
		window.gCoins = runtime.globalVars.Coin;
	},

	async Egame_Event39_Act2(runtime, localVars)
	{
		closeGame();
	},

	async Egame_Event43_Act3(runtime, localVars)
	{
		console.log("unmuted");
	},

	async Egame_Event44_Act3(runtime, localVars)
	{
		console.log("Muted");
	},

	async Egame_Event58_Act7(runtime, localVars)
	{
		gCoins -= runtime.globalVars.DecreaseNumberOfCoin;
	},

	async Egame_Event58_Act8(runtime, localVars)
	{
		runtime.globalVars.Coin = window.gCoins;
		console.log(gCoins);
	},

	async Egame_Event136_Act2(runtime, localVars)
	{
		 scoreUpdate(runtime.globalVars.BestScore);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
