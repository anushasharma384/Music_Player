const image = document.getElementById('images');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current_time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const song = [
    {
        name_song: 'image-1',
        name_image: 'image-1',
        display_name: 'Teri Hogaiyaan',
        artist: 'Vishal Mishra',
    },
    {
        name_song: 'image-2',
        name_image: 'image-2',
        display_name: 'Love Is Gone',
        artist: 'Slandar, Dylan Matthew',
    },
    {
        name_song: 'image-3',
        name_image: 'image-3',
        display_name: 'Sang Rahiyo',
        artist: 'Jasleen Royal, Ranveer Allahbadia',
    },
    {
        name_song: 'image-4',
        name_image: 'image-4',
        display_name: 'Tum Se Hi',
        artist: 'Mohit Chauhan',
    },
    {
        name_song: 'image-5',
        name_image: 'image-5',
        display_name: 'Darasal',
        artist: 'Atif Aslam',
    },
    {
        name_song: 'image-6',
        name_image: 'image-6',
        display_name: 'Abhi Na Jaao Chhod Kar',
        artist: 'Mohd Rafi, Asha Bhosle',
    },
    {
        name_song: 'image-7',
        name_image: 'image-7',
        display_name: 'Phir Na Aisi Raat Aayegi',
        artist: 'Arijit Singh',
    },
    {
        name_song: 'image-8',
        name_image: 'image-8',
        display_name: 'Perfect',
        artist: 'Ed Sheeren',
    },
    {
        name_song: 'image-9',
        name_image: 'image-9',
        display_name: 'Rubaru',
        artist: 'Vishal Mishra, Asees Kaur',
    },
    {
        name_song: 'image-10',
        name_image: 'image-10',
        display_name: 'Humko Tum Mil Gaye',
        artist: 'Vishal Mishra',
    },
    {
        name_song: 'image-11',
        name_image: 'image-11',
        display_name: 'Kya Kiya hai Tune',
        artist: 'Armaan Malik',
    },
    {
        name_song: 'image-12',
        name_image: 'image-12',
        display_name: 'Shaamein',
        artist: 'Armaan Malik',
    },
    {
        name_song: 'image-13',
        name_image: 'image-13',
        display_name: 'Kehna Galat Galat',
        artist: 'Madhur Sharma',
    },
    {
        name_song: 'image-14',
        name_image: 'image-14',
        display_name: 'Kuchh To Hua Hai',
        artist: 'Shankar-Ehsan-Loy',
    },
    {
        name_song: 'image-15',
        name_image: 'image-15',
        display_name: 'Pal',
        artist: 'Arijit Singh, Shreya Ghoshal',
    },
    {
        name_song: 'image-16',
        name_image: 'image-16',
        display_name: 'Kal Ho Na Ho',
        artist: 'Sonu Nigam',
    },
    {
        name_song: 'image-17',
        name_image: 'image-17',
        display_name: 'Rozana',
        artist: 'Shreya Ghoshal',
    },
    {
        name_song: 'image-18',
        name_image: 'image-18',
        display_name: 'Kuchh To Hai',
        artist: 'Armaan Malik',
    },
    {
        name_song: 'image-19',
        name_image: 'image-19',
        display_name: 'Teri Hogaiyaan 2',
        artist: 'Vishal mishra',
    },
    {
        name_song: 'image-20',
        name_image: 'image-20',
        display_name: 'Dil',
        artist: 'Kaushik-Guddu',
    },
    {
        name_song: 'image-21',
        name_image: 'image-21',
        display_name: 'Ajib Dastaan Hai Yeh',
        artist: 'Lata Mangeshkar',
    },
    {
        name_song: 'image-22',
        name_image: 'image-22',
        display_name: 'Dil Kyun Yeh Mera',
        artist: 'KK',
    },
    {
        name_song: 'image-23',
        name_image: 'image-23',
        display_name: 'Kalle Kalle',
        artist: 'Priya Saraiya',
    },
    {
        name_song: 'image-24',
        name_image: 'image-24',
        display_name: 'Jaisi Teri Marzi',
        artist: 'Harshdeep Kaur',
    },
    {
        name_song: 'image-25',
        name_image: 'image-25',
        display_name: 'Milte Hai Zindagi Mein',
        artist: 'Lata Mangeshkar',
    },
    {
        name_song: 'image-26',
        name_image: 'image-20',
        display_name: 'Mai Roothi To',
        artist: 'Jyotika Tangri',
    },
    {
        name_song: 'image-27',
        name_image: 'image-15',
        display_name: 'La-Ilaaj',
        artist: 'Arijit Singh',
    }
]

//Check if Playing
let isPlaying = false;

// Play
function playsong()
{   
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause
function pausesong()
{
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

//Play ou Pause Event Listner
playBtn.addEventListener('click', () => (isPlaying ? pausesong() : playsong()));

//Update DOM
function loadSong(song) {
    title.textContent = song.display_name;
    artist.textContent = song.artist;
    // current_time2.textContent = song.end_time;
    music.src = `songs/${song.name_song}.mp3`;
    image.src = `images/${song.name_image}.jpg`;
}

//Current Song
let songIndex = 0;

// Previous Song
function prevSong()
{
    songIndex--;
    if (songIndex < 0){
        songIndex = song.length -1;
    }
    loadSong(song[songIndex]);
    playsong();
}

// Next Song
function nextSong()
{
    songIndex++;
    if(songIndex > song.length -1) {
        songIndex = 0;
    }
    loadSong(song[songIndex]);
    playsong();
}

//On Load - Select First Song
loadSong(song[songIndex]);

// Update Progress Bar And Time
function updateProgressBar(e) {
    if(isPlaying) {
        const { duration, currentTime } = e.srcElement;
        //Update Progress Bar Width
        const progressPercent = (currentTime / duration)*100;
        progress.style.width = `${progressPercent}%`;

        // Calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }

        //Delay switching the duration element to avoid NaN
        if (durationSeconds) {
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }

        // Calculate display for current
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
}



//Event Listners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
