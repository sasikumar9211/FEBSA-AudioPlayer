import { Component } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { CloudService } from '../../services/cloud.service';
import { StreamState } from '../../interfaces/stream-state';
import { AuthService } from '../../services/auth.service';
import { AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements AfterViewInit {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  emotions : string;

  constructor(private audioService: AudioService, public cloudService: CloudService, public auth: AuthService,public photoService:PhotoService) {
    // get media files
   // cloudService.getFiles().subscribe(files => {
     // this.files = files;
    //});

    // listen to stream state
    this.audioService.getState()
    .subscribe(state => {
      this.state = state;
    });
  }

  playStream(url :string) {
    this.audioService.playStream(url)
    .subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file : any, index : number) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change : any) {
    this.audioService.seekTo(change.value);
  }

  WIDTH = 224;
  HEIGHT = 224;

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  captures: string[] = [];
  error: any;
  isCaptured: boolean;
  isShown: boolean = true ;


  async ngAfterViewInit() {
    await this.setupDevices();
  }

  async setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
      } catch (e) {
        this.error = e;
      }
    }
  }

  capture() {
    this.drawImageToCanvas(this.video.nativeElement);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/jpeg",1.0));
    this.isShown = ! this.isShown;
    console.log(typeof(this.captures[0]));
    console.log(this.captures[0]);
    this.photoService.captureExpression(this.captures[0]).subscribe(data => {
      console.log('Response From Flask Service...',data.emotion)
      this.emotions = data.emotion;
      console.log("Emotions -",this.emotions);

      if(this.emotions  === "Angry"){
        console.log("Emotions -",this.emotions);
        this.isCaptured = true;
        this.cloudService.getAngrySongs().subscribe(files => {
        this.files = files;
        });
      }

      if(this.emotions  === "Angry"){
        console.log("Emotions -",this.emotions);
        this.isCaptured = true;
        this.cloudService.getAngrySongs().subscribe(files => {
        this.files = files;
        });
      }

      if(this.emotions  === "Happy"){
        console.log("Emotions -",this.emotions);
        this.isCaptured = true;
        this.cloudService.getHappySongs().subscribe(files => {
        this.files = files;
        });
      }

      if(this.emotions  === "Fear"){
        console.log("Emotions -",this.emotions);
        this.isCaptured = true;
        this.cloudService.getFearSongs().subscribe(files => {
        this.files = files;
        });
      }


      if(this.emotions  === "Surprise"){
          console.log("Emotions -",this.emotions);
          this.isCaptured = true;
          this.cloudService.getSurpriseSongs().subscribe(files => {
          this.files = files;
          });
        }

      if(this.emotions  === "Neutral" ){
      console.log("Emotions -",this.emotions);
      this.isCaptured = true;
      this.cloudService.getNeutralSongs().subscribe(files => {
      this.files = files;
      });
    }

      if(this.emotions  === "Sad"){
          console.log("Emotions -",this.emotions);
          this.isCaptured = true;
          this.cloudService.getSadSongs().subscribe(files => {
          this.files = files;
          });}


    });

}

  drawImageToCanvas(image: any) {
    this.canvas.nativeElement
      .getContext("2d")
      .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }

}
