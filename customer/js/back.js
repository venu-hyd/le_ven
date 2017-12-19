
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() 
{

       document.addEventListener('backbutton', backButtonCallback, false);
}
function backButtonCallback() 
{
	 navigator.notification.confirm('do you want to exit the app?',confirmCallback);
}
function confirmCallback(buttonIndex) 
{
	if(buttonIndex == 1) 
		{
		        navigator.app.exitApp();
		        return true;
		}
		else 
		{
		        return false;
		}
}