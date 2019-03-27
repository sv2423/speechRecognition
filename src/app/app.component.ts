import { Component, OnInit, NgZone } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AppService } from "./app.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public Editor = ClassicEditor;
  title = "speechRecognition";
  recognition: SpeechRecognition;
  speechText: string = "";

  constructor(private zone: NgZone, private appService: AppService) {}

  ngOnInit() {
    var SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = "hi-IN";
    this.appService.getSpeechText().subscribe(data => {
      console.log(data);
      this.speechText = data[0].speechText;
    });

    this.recognition.onstart = function() {
      //  instructions.text('Voice this.recognition activated. Try speaking into the microphone.');
    };

    this.recognition.onspeechend = function() {
      //  instructions.text('You were quiet for a while so voice this.recognition turned itself off.');
    };

    this.recognition.onerror = function(event) {
      if (event.error == "no-speech") {
        // instructions.text('No speech was detected. Try again.');
      }
    };

    this.recognition.onresult = event => {
      this.onSpeechResult(event);
    };
  }

  public onSpeechResult(event) {
    // event is a Speechthis.recognitionEvent object.
    // It holds all the lines we have captured so far.
    // We only need the current one.
    var current = event.resultIndex;

    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;
    this.zone.run(() => {
      this.speechText = transcript;
    });
  }

  public textToSpeech() {
    console.log(this.Editor);
    var SpeechSynthesisUtterance = (window as any).SpeechSynthesisUtterance;
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[9]; // Note: some voices don't support altering params
    msg.voiceURI = "native";
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1; //0 to 2

    msg.text = this.speechText.replace(/(<([^>]+)>)/gi, "");
    msg.lang = "hi";

    msg.onend = function(e) {
      console.log("Finished in " + e.elapsedTime + " seconds.");
    };

    speechSynthesis.speak(msg);
  }

  /**
   *
   */

  public onSpeechStart() {
    this.speechText = "testingggg";
    this.recognition.start();
  }

  public onSpeechStop() {
    this.speechText = "stoping";
    this.recognition.stop();
  }
}
