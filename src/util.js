import { v4 as uuidv4 } from 'uuid';

function songLink() {
    return [
        {
            "title": "Death Bed",
            "artist": "Powfu",
            "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
            "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
            "id": uuidv4(),
            "active": true
        },
        {
            "title": "Bad Liar",
            "artist": "Imagine Dragons",
            "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
            "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
            "id": uuidv4(),
            "active": false
        },
        {
            "title": "Faded",
            "artist": "Alan Walker",
            "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
            "url": "https://samplesongs.netlify.app/Faded.mp3",
            "id": uuidv4(),
            "active": false

        },
        {
            "title": "Hate Me",
            "artist": "Ellie Goulding",
            "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
            "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
            "id": uuidv4(),
            "active": false

        },
        {
            "title": "Solo",
            "artist": "Clean Bandit",
            "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
            "url": "https://samplesongs.netlify.app/Solo.mp3",
            "id": uuidv4(),
            "active": false

        },
        {
            "title": "Without Me",
            "artist": "Halsey",
            "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
            "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
            "id": uuidv4(),
            "active": false

        }
    ]
}

export default songLink;