API.chatLog('<3 Welcome to Europe party! <3');
function initEnvironment(){
}
 window.alert = function(data){
  var a = $('#chat-messages'),b = a.scrollTop() > a[0].scrollHeight - a.height() - 20;
  a.append('<div class="chat-update"><span class="chat-text" style="color:#FF0000"><strong>[Window Alert]</strong></span><span style="color:#FFFFFF"> : ' + data + '</span></div>'); 
  b && a.scrollTop(a[0].scrollHeight);
  setTimeout(function(){location.reload()},1500)
           };
$('#chat-messages').on('click', '.chat-timestamp', function() {
	if ($(this).parent().find('.chat-delete-button').length === 0) {
		var msg, id;
		msg = $(this).parent().find('span').last().html();
		id = $(this).parent().attr('class').split(' ');
		if (id.length === 3 || id.length === 4) { 
			id = id[2].substr(8); 
		} else if (id.length === 2) { 
			id = id[1].substr(8); 
		}
		
		return API.moderateDeleteChat(id);
	} else {
		return false;
	}
});
initEnvironment();
if (RMEnhanced !== undefined)
    RMEnhanced.close();
String.prototype.equalsIgnoreCase = function(other) {
    return this.toLowerCase() === other.toLowerCase();
};
var plugCubed,
RMEnhancedModel = require('app/base/Class').extend({
    init: function(){
        var Lang = require('lang/Lang');
        setTimeout($.proxy(this.initCSS,this), 1500)
        //Lang.ui.buttonVotePositive = "";
        //Lang.ui.buttonVotePositiveSelected = "";
        //Lang.ui.buttonVotePositiveDisabled = "";
		//Lang.ui.buttonVoteNegative = "";
        //Lang.ui.buttonVoteNegativeSelected = "";
        //Lang.ui.buttonVoteNegativeDisabled = "";
        Lang.ui.buttonAddThis = "http://i.imgur.com/YJSl1cf.png";
        //Lang.ui.buttonAddThisDisabled = "";   
        Lang.ui.buttonSkipThis  = "http://i.imgur.com/dkKqEwc.png";
        //Lang.ui.buttonDJPlay = "";
        //Lang.ui.buttonDJLeave = "";
        //Lang.ui.buttonDJWaitlistJoin = "";
        //Lang.ui.buttonDJWaitlistLeave = "";
        //Lang.ui.buttonDJQuitShort = "";
        //Lang.ui.buttonDJQuit = "";
        //Lang.ui.buttonDJPlayShort = "";
        this.removeElements();
		this.proxy = {
            onChat: $.proxy(this.onChat, this)
        };
        API.on(API.CHAT,this.proxy.onChat)
        if (plugCubed == undefined) $.getScript("http://alpha.plugCubed.net/plugCubed.min.js");
    },
    initCSS: function() {
        $('#room-wheel').css('background','url("")');
        $('#room-wheel').css('background-repeat','no-repeat');
        $('#room-wheel').css('background-position','500px 275px');
        //$('#button-dj-waitlist-join').attr('style','background-image:url(); display: block;');
        //$('#button-dj-waitlist-leave').attr('style','background-image:url(); display: block;');
        //$('#button-dj-play').attr('style','background-image:url(); display: block;');
        //$('#button-dj-leave').attr('style','background-image:url(); display: block;');
        $('#dj-console').attr('style','background-image:url(http://i.imgur.com/8Of99Nv.jpg); display:block; position:absolute; top:15px; width:317px;');
        $('#button-add-this').attr('style','background-image:url(http://i.imgur.com/YJSl1cf.png);');
		$('#button-skip-this').attr('style','background-image:url(http://i.imgur.com/dkKqEwc.png);');
        $('body').attr('style','background: none');
            $('head').append('<style type="text/css" id="TFL-css">'
            + 'html{background: url("http://i.imgur.com/B1S4pBT.jpg") no-repeat scroll center top #000000;}'
            + '#button-lobby { background-image: url("http://i.imgur.com/E1JsRr9.png");}'
            + 'body {color:#FFFFFF;}'
			+ '#chat {background-color: rgba(10, 10, 10, 0.7);}'
            + '#current-dj-value {color:#FFFFFF;}'
            //+ '#button-dj-play.button-dj {background-image: url("");}'
            //+ '#button-dj-quit.button-dj {background-image: url("");}'
            //+ '#button-dj-waitlist-join.button-dj {background-image: url("");}'
            //+ '#button-dj-waitlist-leave.button-dj {background-image: url("");}'
            //+ '#button-dj-waitlist-view {background-image: url("");}'
            + '#button-my-playlists {background-image: url("http://i.imgur.com/sLVaxYB.png");}'
            + '#button-share-facebook {background-image: url("http://i.imgur.com/ISVA78k.png");}'
            + '#button-share-twitter {background-image: url("http://i.imgur.com/qqmCH60.png");}'
			+ '.frame-background {opacity: .20;}'
            //Changes the color of user's names in chat
            + '.chat-from-featureddj, .chat-from-featureddj {color: #BF6091 !important;}'
            + '.chat-from-bouncer, .chat-from-bouncer {color: #BF6091 !important;}'
            + '.chat-from-manager, .chat-from-manager {color: #FF0084 !important;}'
            + '.chat-from-cohost, .chat-from-cohost {color: #8933FF !important;}'
            + '.chat-from-host, .chat-from-host {color: #E8B315 !important;}'
            //Changes the icons and background color
			+ '.meta-header span {color: #CCCCCC !important;}'
            + '.chat-host, .chat-host {background-image: url(http://i.imgur.com/c0RYujG.png); no repeat 0 5px);}'
            + '.chat-cohost, .chat-cohost {background-image: url(http://i.imgur.com/zxG4vRG.png); no repeat 0 5px;}'
            + '.chat-manager, .chat-manager {background-image: url(http://i.imgur.com/RFwZkKX.png); no repeat 0 5px;}'
	        + '.chat-bouncer, .chat-bouncer {background-image: url(http://i.imgur.com/iXlfa3b.png); no repeat 0 5px;}'
            + '.chat-message:nth-child(2n), .chat-message:nth-child(2n) {background-color: rgba(0, 0, 0, 0.0);}'
            + '.chat-update:nth-child(2n), .chat-update:nth-child(2n) {background-color: rgba(0, 0, 0, 0.0);}'
            + '.chat-mention:nth-child(1n), .chat-mention:nth-child(1n) {background-color: rgba(82, 0, 255, 0.12);}'
  	        + '.chat-moderation:nth-child(1n), .chat-moderation:nth-child(1n) {background-color: rgba(255, 0, 0, 0.0);}'
       	    + '.chat-skip:nth-child(1n), .chat-skip:nth-child(1n) {background-color: rgba(255, 0, 0, 0.0);}'
            + '.chat-emote:nth-child(2n), .chat-emote:nth-child(2n) {background-color: rgba(0, 0, 0, 0.0);}'
			+ '#user-container .frame-background {opacity: 1;}'
			+ '@import url(http://fonts.googleapis.com/css?family=Consolas);'
			+ '#lobby-panel {background-color: #1c1f25;}'
			+ 'li.room-list-item {background-color: #1c1f25;}'
			+ 'span.user-meta-value {font-family: Segoe UI Light; font-weight: normal;}'
			+ 'span.room-name {font-family: Segoe UI;font-weight: normal;color: #eeeeee;}'
			+ 'span.room-hosted-by {font-family: Segoe UI;font-weight: normal;color: #808691;}'
			+ 'span.room-host-name {font-family: Segoe UI;font-weight: normal;color: #ac76ff;}'
			+ 'span.room-media {font-family: Segoe UI;font-weight: normal;color: #808691;}'
			+ 'span.room-now-playing {font-family: Segoe UI;font-weight: normal;color: #ac76ff;}'
			+ 'span.room-population-label {font-family: Segoe UI;font-weight: normal;color: #808691;}'
			+ 'span.user-meta-label {font-family: Segoe UI Light;font-weight: normal;}'
			+ 'span.room-population-value {font-family: Segoe UI Light;font-weight: normal;color: #00b5e6;}'
			+ 'form.search-input input {font-family: Segoe UI;font-weight: normal;}'
			+ '#user-name {font-family: Segoe UI Light;font-weight: normal;height: 50px;color: #eeeeee;}'
			+ '#user-points {color: #eeeeee;}'
			+ '#user-fans {color: #eeeeee;}'
			+ '#footer-container {font-family: Segoe UI Light;font-weight: normal;color: #eeeeee;}'
			+ 'span.footer a {font-family: Segoe UI Light;font-weight: normal;color: #eeeeee;}'
			+ '#meta-queue {font-family: Segoe UI Light;font-weight: normal;color: #eeeeee;}'
			+ '#media-meta {color: #ffffff;}'
			+ 'div.hnb {font-family: Segoe UI Light;font-weight: normal;color: #eeeeee;}'
			+ 'div.user-score-title.hnm {font-family: Segoe UI;font-weight: normal;color: #4A4B50;}'
			+ 'div.user-score-count.hnb {font-family: Segoe UI;font-weight: normal;color: #eeeeee;}'
			+ 'div.meta-value.hnb span {margin-top: -3px;}'
			+ 'span.hnb {font-family: Segoe UI;font-weight: normal;color: #808691;}'
			+ 'div.meta-value.hnb {font-family: Segoe UI Light;font-weight: normal;color: #eeeeee;}'
			+ 'span.chat-title {font-family: Segoe UI Light;font-weight: normal;color: #808691;}'
			+ 'span.overlay-title {font-family: Segoe UI Light;font-weight: normal;}'
			+ 'span.user-list-overlay-title {font-family: Segoe UI Light;font-weight: normal;}'
			+ 'span.user-list-meta-username {font-family: Segoe UI Light;font-weight: normal;}'
			+ 'span.user-list-meta-usertype {font-family: Segoe UI Light;font-weight: normal;}'
			+ 'span.user-list-meta-points {font-family: Segoe UI Light;font-weight: normal;}'
			+ 'span.user-list-meta-fans {font-family: Segoe UI Light;font-weight: normal;}'
			+ 'div.media-list {font-family: Segoe UI Light;font-weight: normal;}'
			+ 'div.media-panel-title {font-family: Segoe UI Light;font-weight: normal;}'
			+ '#playlist-create-label span {font-family: Segoe UI Light;font-weight: normal;}'
			+ '.playlist-row-label {font-family: Segoe UI Light;font-weight: normal;}'
			+ '.playlist-row-count {font-size: 12px; font-style: normal;}'
			+ '#user-name span {font-family: Segoe UI Light;font-weight: normal;color: #eeeeee;font-size: 16px;font-style: italic;}'
			+ 'span.room-djs-label {font-family: Segoe UI;font-weight: normal;color: #00b5e6;}'
			+ 'span.room-friends-label {font-family: Segoe UI;font-weight: normal;color: #00b5e6;}'
			+ '#time-remaining-value {top: 113px;}'
        + '</style>');
},
    onChat: function(data){
    },
    removeElements: function() {
        require('app/views/room/AudienceView').initRoomElements = function() {}
        require('app/views/room/AudienceView').defaultRoomElements = function(){}
        require('app/views/room/AudienceView').roomElements = []
        delete require('app/views/room/AudienceView').cactusHit
        delete require('app/views/room/AudienceView').cactus
        delete require('app/views/room/AudienceView').mountainHit
        delete require('app/views/room/AudienceView').mountain
        delete require('app/views/room/AudienceView').archHit
        delete require('app/views/room/AudienceView').arch
        delete require('app/views/room/AudienceView').cloudHit
        delete require('app/views/room/AudienceView').cloud
        require('app/base/Context').trigger('audience:redraw')
    },
});
var RMEnhanced = new RMEnhancedModel;
