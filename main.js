window.onload = () => {
    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up_el = document.getElementById('song-next-up');

    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

    const audio_player = document.getElementById('music-player');

    let current_song_index;
    let next_song_index;

    let songs = [
        {
            title: 'Chandelier',
            artist: 'Sia',
            song_path: 'music/01. Chandelier.mp3',
            img_path: 'images/Singer-Sia-696x442.jpg'
        },
        {
            title: 'Pyramid Song',
            artist: 'Radiohead',
            song_path: 'music/02 Pyramid Song.mp3',
            img_path: 'images/R-6841012-1431011063-2277.jpeg.jpg'
        },
        {
            title: 'Set Fire To The Rain',
            artist: 'Adele',
            song_path: 'music/05 Adele - Set Fire To The Rain.mp3',
            img_path: 'images/_49747558_adele_21_cover_300dpi_251010.jpg'
        },
        {
            title: 'Umbrella',
            artist: 'Rihanna ft. JayZ',
            song_path: 'music/03 - Umbrella ft. Jay-Z.mp3',
            img_path: 'images/Rihanna - Talk That Talk (FanMade Album Cover by EnjoyYourLife).png'
        },

    ]
    
    play_btn.addEventListener('click', TogglePlaySong);
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

    function InitPlayer() {
        current_song_index=0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }

    function UpdatePlayer() {
        let song = songs[current_song_index];

        song_img_el.style = "background-image: url('" + song.img_path + "')";
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;

        song_next_up_el.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;

        audio_player.src = song.song_path;

    }

    function TogglePlaySong() {
        if(audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');
        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');
        }
    }

    function ChangeSong(next = true) {
        if(next) {
            current_song_index++;
            next_song_index = current_song_index + 1;

            if(current_song_index > songs.length - 1) {
                current_song_index = 0;
                next_song_index = current_song_index + 1;
            }

            if(next_song_index > songs.length - 1){
                next_song_index =0;
            }
        } else {
            current_song_index--;
            next_song_index = current_song_index + 1;

            if(current_song_index < 0) {
                current_song_index = songs.length - 1;
                next_song_index =0;
            }
        }

        UpdatePlayer();
        TogglePlaySong();
    }

}