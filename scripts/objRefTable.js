const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Physics,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Multiplayer,
		C3.Plugins.Spritefont2,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Multiplayer.Acts.SignallingLeaveRoom,
		C3.Plugins.Multiplayer.Acts.DisconnectRoom,
		C3.Plugins.Multiplayer.Acts.SignallingDisconnect,
		C3.Behaviors.Physics.Acts.SetWorldGravity,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Cnds.CompareWidth,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Behaviors.Physics.Acts.ApplyImpulseAtAngle,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Cnds.IsMobile,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Sprite.Exps.AnimationFrameCount,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Mouse.Cnds.OnRelease,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.PickAll,
		C3.Plugins.Spritefont2.Cnds.CompareInstanceVar,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Spritefont2.Exps.Text,
		C3.Plugins.Multiplayer.Acts.SignallingConnect,
		C3.Plugins.Multiplayer.Acts.SyncObject,
		C3.Plugins.Multiplayer.Acts.SyncObjectInstanceVar,
		C3.Plugins.Multiplayer.Acts.AddClientInputValue,
		C3.Plugins.System.Acts.SetLayoutAngle,
		C3.Plugins.System.Acts.SetLayerAngle,
		C3.Plugins.Multiplayer.Cnds.OnSignallingConnected,
		C3.Plugins.Multiplayer.Acts.SignallingLogin,
		C3.Plugins.Multiplayer.Cnds.OnSignallingLoggedIn,
		C3.Plugins.Multiplayer.Acts.SignallingAutoJoinRoom,
		C3.Plugins.Multiplayer.Cnds.OnSignallingJoinedRoom,
		C3.Plugins.Multiplayer.Cnds.IsHost,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Multiplayer.Exps.PeerState,
		C3.Plugins.Multiplayer.Exps.PeerID,
		C3.Plugins.Multiplayer.Cnds.OnPeerMessage,
		C3.Plugins.Sprite.Cnds.PickDistance,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Multiplayer.Exps.Message,
		C3.Plugins.Multiplayer.Acts.SendPeerMessage,
		C3.Plugins.Multiplayer.Cnds.OnPeerConnected,
		C3.Plugins.Spritefont2.Acts.Destroy,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Multiplayer.Acts.SetClientState,
		C3.Plugins.Mouse.Cnds.IsButtonDown,
		C3.Behaviors.Physics.Acts.SetEnabled,
		C3.Plugins.Multiplayer.Cnds.OnPeerDisconnected,
		C3.Plugins.System.Exps.layoutangle,
		C3.Plugins.System.Acts.StopLoop,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.Physics.Cnds.CompareVelocity,
		C3.Plugins.System.Cnds.PickRandom,
		C3.Plugins.Sprite.Exps.IID,
		C3.Plugins.System.Cnds.PickOverlappingPoint,
		C3.Plugins.Browser.Acts.GoToURL,
		C3.Plugins.Browser.Acts.GoToURLWindow
	];
};
self.C3_JsPropNameTable = [
	{Aim: 0},
	{VarAim: 0},
	{ShadowMode: 0},
	{Physics: 0},
	{Checker: 0},
	{GoTo: 0},
	{Button: 0},
	{Touch: 0},
	{Mouse: 0},
	{Multiplayer: 0},
	{VarLen: 0},
	{VarVis: 0},
	{VarWhite: 0},
	{Arrow: 0},
	{ToDo: 0},
	{SpriteFont: 0},
	{Board: 0},
	{Shadow: 0},
	{ButtonChecker: 0},
	{CheckerAI: 0},
	{AimX: 0},
	{AimY: 0},
	{AI: 0},
	{Browser: 0},
	{Blockus: 0},
	{Физика: 0},
	{Спрайт: 0},
	{Go: 0}
];

self.InstanceType = {
	Checker: class extends self.ISpriteInstance {},
	Button: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Multiplayer: class extends self.IInstance {},
	Arrow: class extends self.ISpriteInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	Board: class extends self.ISpriteInstance {},
	Shadow: class extends self.ISpriteInstance {},
	ButtonChecker: class extends self.ISpriteInstance {},
	AI: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	Blockus: class extends self.ISpriteInstance {},
	Спрайт: class extends self.ISpriteInstance {}
}