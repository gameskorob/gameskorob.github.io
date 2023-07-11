


const scriptsInEvents = {

	async E_game_Event1_Act1(runtime, localVars)
	{
		document.querySelector('body').style['backgroundColor'] = '#1a2940'
	},

	async E_game_Event1_Act2(runtime, localVars)
	{
		window.addEventListener("keydown", function(e) {
		      if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
		          e.preventDefault();
		      }
		  }, false);
	},

	async E_level_Event1_Act1(runtime, localVars)
	{
		document.querySelector('body').style['backgroundColor'] = '#1a2940'
	},

	async E_menu_Event1_Act1(runtime, localVars)
	{
		document.querySelector('body').style['backgroundColor'] = '#35838d'
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

