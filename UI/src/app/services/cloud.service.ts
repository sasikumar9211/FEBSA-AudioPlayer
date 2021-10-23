import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CloudService {
  neutralSongs: any = [

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
    {
      url:
        "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      name: "Perfect",
      artist: " Ed Sheeran"
    }
  ];


  sadSongs: any = [

    {
      url:
        "https://ia600805.us.archive.org/30/items/mv_Celine_Dion_My_Heart_Will_Go_On/Celine_Dion_My_Heart_Will_Go_On.mp4",
      name: "My_Heart_Will_Go_On",
      artist: "Celine_Dion"
    },
    {
      url:
        "https://ia803104.us.archive.org/34/items/soundcloud-310434658/Ed_Sheeran_-_Shape_Of_You_Cover-310434658.mp3",
      name: "Shape of You",
      artist: "Ed Sheeran"
    },
    {
      url:
        "https://ia804503.us.archive.org/14/items/jennifer-lopez-pitbull-live-it-up/JENNIFER%20LOPEZ%20PITBULL%20Live%20It%20Up.mp4",
      name: "Live It Up",
      artist: "JENNIFER LOPEZ"
    },

    {
      url:
        "https://ia803107.us.archive.org/10/items/jennifer-lopez-on-the-floor-ft-pitbull-8d-audio-aghany/jennifer-lopez-on-the-floor-ft-pitbull-8d-audio-aghany.mp3",
      name: "On The Floor ft. Pitbull",
      artist: "JENNIFER LOPEZ"
    }
  ];

  surpriseSongs: any = [
    {
      url:
        "https://ia600908.us.archive.org/18/items/2006HipsDontLieWorldcupGermany06ShakiraFtWyclefJean/%5B2006%5D%20Hips%20Don%27t%20Lie%20-%20Worldcup%20Germany%2006%20-%20Shakira%20ft%20wyclef%20jean.mp3",
      name: "Hips Don't lie",
      artist: "Shakira"
    },

    {
      url:
        "https://ia903403.us.archive.org/22/items/lady-gaga-bad-romance/LADY%20GAGA%20Bad%20Romance.mp4",
      name: "Bad Romance",
      artist: "LADY GAGA"
    },
    {
      url:
        "https://ia801204.us.archive.org/13/items/Michael_Jackson_Way_You_Make_Me_Feel__The/Michael%20Jackson_Way%20You%20Make%20Me%20Feel_%20The.mp4",
      name: "The Way You Make Me Feel",
      artist: "MJ"
    },
    {
      url:
        "https://ia803107.us.archive.org/10/items/jennifer-lopez-on-the-floor-ft-pitbull-8d-audio-aghany/jennifer-lopez-on-the-floor-ft-pitbull-8d-audio-aghany.mp3",
      name: "On The Floor ft. Pitbull",
      artist: "JENNIFER LOPEZ"
    }
  ];

  angrySongs: any = [
    {
      url:
        "https://ia904503.us.archive.org/11/items/akon-right-now/AKON%20Right%20Now.mp4",
      name: "Right Now",
      artist: "Akon"
    },

    {
      url:
        "https://ia801407.us.archive.org/0/items/pitbull-give-me-everything_202110/Pitbull%20-%20Give%20Me%20Everything.mp3",
      name: "Give me everything",
      artist: "PITBULL"
    },
    {
      url:"https://ia802908.us.archive.org/34/items/cd_red_taylor-swift/disc1/08.%20Taylor%20Swift%20-%20We%20Are%20Never%20Ever%20Getting%20Back%20Together_sample.mp3",
      name: "We Are Never Ever Getting Back Together",
      artist: "Taylor Swift"
    },
    {
      url:
        "https://ia804507.us.archive.org/0/items/pitbull-marc-anthony-rain-over-me/PITBULL%20MARC%20ANTHONY%20Rain%20Over%20Me.mp4",
      name: "Rain Over Me ft",
      artist: "Marc Anthony"
    }
  ];


  disgustSongs: any = [
    {
      url:
        "https://ia804509.us.archive.org/33/items/akon-eminem-smack-that/AKON%20EMINEM%20Smack%20That.mp4",
      name: "SMACK THAT",
      artist: "Akon"
    },

    {
      url:
        "https://ia601207.us.archive.org/16/items/Jennifer_Lopez_Papi/Jennifer%20Lopez_Papi.mp4",
      name: "PAPI",
      artist: "JENNIFER LOPEZ"
    },
    {
      url:"https://ia902604.us.archive.org/3/items/Europeanposte-BritneySpearsToxic534-3/Europeanposte-BritneySpearsToxic645.mp3",
      name: "Toxic",
      artist: "BritneySpears"
    },
    {
      url:
        "https://ia601002.us.archive.org/2/items/podcast_d-luxe_jennifer-lopez-get-right-d_1000391378458/podcast_d-luxe_jennifer-lopez-get-right-d_1000391378458.mp3",
      name: "Get right",
      artist: "Jennifer Lopez"
    }
  ];


  happySongs: any = [
    {
      url:
        "https://ia803105.us.archive.org/19/items/acidplanet-audio-00975648/00975648.mp3",
      name: "Dangerous",
      artist: "MICHAEL JACKSON"
    },

    {
      url:
        "https://ia903108.us.archive.org/0/items/acidplanet-audio-01481591/01481591.mp3",
      name: "remix swagger",
      artist: "chris brave"
    },
    {
      url:"https://ia601605.us.archive.org/7/items/Shakira_Whenever_Wherever/Shakira_Whenever_Wherever.mp4",
      name: "Whenever_Wherever",
      artist: "Shakira"
    },
    {
      url:
        "https://ia803104.us.archive.org/34/items/soundcloud-310434658/Ed_Sheeran_-_Shape_Of_You_Cover-310434658.mp3",
      name: "Shape of You",
      artist: "Ed Sheeran"
    }
  ];


  fearSongs: any = [
    {
      url:
        "https://ia803403.us.archive.org/27/items/rihanna-jay-z-umbrella/RIHANNA%20JAY%20Z%20Umbrella.mp4",
      name: "Umbrella",
      artist: "Rihanna"
    },

    {
      url:
        "https://archive.org/download/taylor-swift-kendrick-lamar-bad-blood/TAYLOR%20SWIFT%20KENDRICK%20LAMAR%20Bad%20Blood.mp4",
      name: "Bad Blood",
      artist: "Taylor Swift"
    },
    {url:
      "https://ia601207.us.archive.org/16/items/Jennifer_Lopez_Papi/Jennifer%20Lopez_Papi.mp4",
    name: "PAPI",
    artist: "JENNIFER LOPEZ",
    },
    {
      url:
        "https://ia803402.us.archive.org/16/items/rihanna-diamonds_202105/RIHANNA%20Diamonds.mp4",
      name: "Diamonds",
      artist: "Rihanna"
    }
  ];



  getNeutralSongs() {
    return of(this.neutralSongs);
  }

  getSadSongs() {
    return of(this.sadSongs);
  }

  getSurpriseSongs() {
    return of(this.surpriseSongs);
  }

  getAngrySongs(){
    return of(this.angrySongs);
  }

  getDisgustSongs(){
    return of(this.disgustSongs);
  }

  getHappySongs(){
    return of(this.happySongs);
  }

  getFearSongs(){
  return of(this.fearSongs);
  }
}
