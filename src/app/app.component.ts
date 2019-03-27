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
<<<<<<< HEAD
    this.recognition.lang = "hi-IN";
    this.appService.getSpeechText().subscribe(data => {
      console.log(data);
      this.speechText = data[0].speechText;
    });

=======
    this.recognition.lang = 'hi-IN';
>>>>>>> 9a68d0c0a2a4b6f0e4057e23329e0290c87d7d51
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
