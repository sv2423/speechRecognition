import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "speechRecognition";
  recognition: SpeechRecognition;
  speechText: string;
  // that:any;

  ngOnInit() {
    var SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();

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

    this.recognition.onresult = this.onSpeechResult;

    // // this.that = this;
    // this.recognition.onresult = function(event) {
    //   // event is a Speechthis.recognitionEvent object.
    //   // It holds all the lines we have captured so far.
    //   // We only need the current one.
    //   var current = event.resultIndex;

    //   // Get a transcript of what was said.
    //   var transcript = event.results[current][0].transcript;

    //   console.log(transcript);
    //   console.log("1", test.speechText);
    //   test.speechText = transcript;
    //   console.log(test.speechText);
    //   // Add the current transcript to the contents of our Note.
    //   //  noteContent += transcript;
    //   // noteTextarea.val(noteContent);
    // };

    test = this;
  }

  public onSpeechResult(event) {
    // event is a Speechthis.recognitionEvent object.
    // It holds all the lines we have captured so far.
    // We only need the current one.
    var current = event.resultIndex;

    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;

    console.log(transcript);
    console.log("1", this.speechText);
    this.speechText = transcript;
    console.log(this.speechText);
    // Add the current transcript to the contents of our Note.
    //  noteContent += transcript;
    // noteTextarea.val(noteContent);
  }

  /**
   *
   */
  constructor() {}

  /*  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

if(!mobileRepeatBug) {
  noteContent += transcript;
  noteTextarea.val(noteContent);
} */

  public onSpeechStart() {
    test.speechText = "testingggg";
    console.log(this.recognition);
    this.recognition.start();
  }

  public onSpeechStop() {
    test.speechText = "stoping";
    this.recognition.stop();
  }
}

var test;
