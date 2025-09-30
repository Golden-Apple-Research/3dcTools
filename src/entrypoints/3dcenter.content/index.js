import "./default.min.css";
import "./3dcenter-dark.css";
import "./sceditor.min.js";
import "./monocons.js";
import "./bbcode.js";
// import sceditor from "./sceditor.min.js";

export default defineContentScript({
  matches: ["*://*.forum-3dcenter.org/*"],

  main(ctx) {
    // Create SCEditor instance
    const editorOptions = {
      format: "bbcode",
      width: 900,
      height: 600,
      icons: "monocons",
      enablePasteFiltering: true,
      autofocus: true,
      emoticonsEnabled: true,
      css: "default.min.css",
      locale: "de",
      plugins: "dragdrop,plaintext,undo",
      toolbar: "quote,youtube,image,link,emoticon,source,maximize",
      id: "vB_Editor_001",
      emoticonsRoot:
        "https://www.forum-3dcenter.org/vbulletin/images/3dc/smilies/",
      emoticons: {
        // Emoticons to be included in the dropdown
        dropdown: {
          ":ugly:": "ugly/ugly.gif",
          ":bluesmile:": "common/bluesmile.gif",
          ":wink:": "common/wink.gif",
          ":sad:": "/common/sad.gif",
          ":fgsdf:": "/misc/fgsdf.gif",
          ":uglycafe:": "/ugly/uglycafe.gif",
          ":frown:": "/common/frown.gif",
          ":bluebiggrin:": "/common/bluebiggrin.gif",
          ":biggrinflip:": "/common/biggrinflip.gif",
          ":bluehappy:": "/common/bluehappy.gif",
          ":baeh:": "/common/baeh.gif",
          ":bonk:": "/misc/bonk.gif",
          ":cwm13:": "/common/cwm13.gif",
          ":eek5:": "/common/eek5.gif",
          ":nono:": "/misc/nono.gif",
          ":down:": "/misc/down.gif",
          ":smiley_deal:": "/misc/smiley_deal.gif",
          ":loveya:": "/misc/loveya.gif",
          ":cop:": "/misc/cop.gif",
          ":up:": "/misc/up.gif",
          ":love2:": "/misc/love2.gif",
          ":wavey:": "/misc/wavey.gif",
          ":lol:": "/misc/lol.gif",
          ":circling:": "/misc/circling.gif",
          ":smiley_ass:": "/misc/smiley_ass.gif",
          ":huh:": "/misc/huh.gif",
          ":face31:": "/misc/face31.gif",
          ":sgrin:": "/misc/sgrin.gif",
          ":schleich:": "/misc/schleich.gif",
          ":love:": "/misc/love.gif",
          ":heart:": "/misc/heart.gif",
          ":lurk:": "/misc/lurk.gif",
          ":idea:": "/misc/idea.gif",
          ":anbet:": "/misc/anbet.gif",
          ":ugly_love:": "/ugly/ugly_love.gif",
          ":ugly:": "/ugly/ugly.gif",
          ":uglygruebel:": "/ugly/uglygruebel.gif",
          ":uglyrolleyes:": "/ugly/uglyrolleyes.gif",
          ":ugly2:": "/ugly/ugly2.gif",
          ":uglyup:": "/ugly/uglyup.png",
          ":uglydown:": "/ugly/uglydown.png",
          ":uglysad:": "/ugly/uglysad.gif",
          ":uglyconfused:": "/ugly/uglyconfused.gif",
          ":uglyno:": "/ugly/uglyno.gif",
          ":uglysleep:": "/ugly/uglysleep.gif",
          ":ugly_devil:": "/ugly/ugly_devil.gif",
          ":uglycatch:": "/ugly/uglycatch.gif",
          ":uglyeye:": "/ugly/uglyeye.gif",
          ":uglyking:": "/ugly/uglyking.gif",
          ":uglyparanoid:": "/ugly/uglyparanoid.gif",
          ":uglypeace:": "/ugly/uglypeace.gif",
          ":ugly_klatsch:": "/ugly/ugly_klatsch.gif",
          ":ugly_sweet:": "/ugly/ugly_sweet.gif",
          ":uglyanbet:": "/ugly/uglyanbet.gif",
          ":X-D:": "/im/X-D.png",
          ":X-(:": "/im/X-(.png",
          ":(y):": "/im/(y).png",
          ":(n):": "/im/(n).png",
          ":uglyfinger:": "/ugly/uglyfinger.gif",
          ":tuschel:": "/misc/tuschel.gif",
        },
        more: {
          ":uglyhdl2:": "/ugly/uglyhdl2.gif",
          ":uglysex:": "/ugly/uglysex.gif",
          ":jumpin_ugly:": "/ugly/jumpin_ugly.gif",
          ":jugly:": "/ugly/jugly.gif",
          ":uglybigboy:": "/ugly/uglybigboy.gif",
          ":uglybeer:": "/ugly/uglybeer.gif",
          ":uglywave:": "/ugly/uglywave.gif",
          ":ugly_ban:": "/ugly/ugly_ban.gif",
          ":uglywoot:": "/ugly/uglywoot.gif",
          ":uglylaugh:": "/ugly/uglylaugh.gif",
          ":uglylol:": "/ugly/uglylol.gif",
          ":uglyhammer:": "/ugly/uglyhammer.gif",
          ":uglyhammer2:": "/ugly/uglyhammer2.gif",
          ":basher:": "/ugly/basher.gif",
          ":uglyheadshot:": "/ugly/uglyheadshot.gif",
          ":uglysorry:": "/ugly/uglysorry.gif",
          ":ugly-expl:": "/ugly/ugly-expl.gif",
          ":uglyattacke:": "/ugly/uglyattacke.gif",
          ":weg:": "/misc/weg.gif",
          ":morons:": "/ugly/morons.gif",
          ":uglyaua2:": "/ugly/uglyaua2.gif",
          ":uglyaua:": "/ugly/uglyaua.gif",
          ":uglyconfus:": "/ugly/uglyconfus.gif",
          ":box2:": "/ugly/box2.gif",
          ":uglyduden:": "/ugly/uglyduden.gif",
          ":ugly_idee:": "/ugly/ugly_idee.gif",
          ":uglylove:": "/ugly/uglylove.gif",
          ":uglyconfused2:": "/ugly/uglyconfused2.gif",
          ":love-smiley-024:": "/misc/love-smiley-024.gif",
          ":bootyshake:": "/misc/bootyshake.gif",
        },
      },
    };

    const textarea = document.getElementById("vB_Editor_001_textarea");
    document.getElementById("vB_Editor_001").replaceWith(textarea);

    // window.sceditor.command.set("commandname", {
    //   exec: function (caller) {
    //     var editor = this;

    //     this.getEditorCommand("youtube")._dropDown(
    //       editor,
    //       caller,
    //       function (id) {
    //         editor.insertText("[youtube]" + id + "[/youtube]");
    //       },
    //     );
    //   },
    // 		txtExec: function (caller) {
    // 				var editor = this;

    // 				this.getEditorCommand('youtube')._dropDown(
    // 					editor,
    // 					caller,
    // 					function (id) {
    // 						editor.insertText('[youtube]' + id + '[/youtube]');
    // 					}
    // 				);
    // 			},
    //   tooltip: "Insert the letter a",
    // });
    // Create the editor
    sceditor.create(textarea, editorOptions);
    // sceditor.instance(textarea);
    sceditor
      .instance(textarea)
      .css(
        "body { background: #1F1F1F; color: #EFEFEF; height: 97vh }; .sceditor-container { background: #0F0F0F; border: #3F3F3F}; ",
      );

    // }

    // Initialize the script
    // async function init() {
    //   const resourcesLoaded = await loadSCEditorResources();

    //   if (!resourcesLoaded) {
    //     console.error("Failed to load SCEditor resources");
    //     return;
    //   }

    //   replacevBulletinEditor();
    // }

    // // Start the initialization
    // init();
    console.log("test");
    // const container = document.createElement("div");
    // container.innerHTML = "<p>yolo</p>";
    // document.getElementById("vB_Editor_001").replaceWith(container);
  },
});
