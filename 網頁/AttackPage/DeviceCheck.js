// JavaScript Document
function isMobileDevices(){
    var mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    var isMobileDevice = false ;
    for(var i=0; i<mobileDevice.length; i++){
        if(navigator.userAgent.match(mobileDevice[i])){
            isMobileDevice = true ;
        }
	
	}
    return isMobileDevice ;
}