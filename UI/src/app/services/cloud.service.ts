import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CloudService {
  files: any = [
    {
      // tslint:disable-next-line: max-line-length
      url:
        "https://ia803402.us.archive.org/23/items/michael-jackson-they-dont-care-about-us/MICHAEL%20JACKSON%20They%20Dont%20Care%20About%20Us.mp4",
      name: "They Dont really care about us",
      artist: "MJ"
    },
    {
      url:
        "https://ia801001.us.archive.org/23/items/shakira-waka-waka_202106/SHAKIRA%20Waka%20Waka.mp4",
      name: "Waka Waka",
      artist: "Shakira"
    },
    {
      url:
        "https://ia801803.us.archive.org/15/items/michael-jackson-beat-it-original-iso_20210107/MICHAEL%20JACKSON%20%28Beat%20It%29%20original%20ISO.mp4",
      name: "Beat It",
      artist: "MJ"
    },
    // tslint:disable-next-line: max-line-length
    {
      url:
        "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      name: "Perfect",
      artist: " Ed Sheeran"
    }

  ];

  getFiles() {
    return of(this.files);
  }
}
