const colorQuoteArray = [
        { color: "#7FDBFF", quote: "The sky's serene blue whispers tales of boundless horizons." },
        { color: "#FF5733", quote: "Orange, like a fiery sunset, sparks the passion within." },
        { color: "#9A79EC", quote: "Purple, a regal hue, mirrors the dreams woven in nobility." },
        { color: "#2ECC40", quote: "Green, the color of life, nurtures ambitions to bloom." },
        { color: "#FFC300", quote: "Yellow, a beacon of hope, lights the way through adversity." },
        { color: "#FF6F61", quote: "Red, vibrant and fierce, embodies the spirit of courage." },
        { color: "#C70039", quote: "Maroon, deep and resolute, symbolizes unwavering strength." },
        { color: "#00BFFF", quote: "The ocean's blue whispers of mysteries waiting to be discovered." },
        { color: "#DA70D6", quote: "Orchid, a delicate hue, paints dreams on life's tender canvas." },
        { color: "#FFA07A", quote: "Light salmon hues tell tales of the dawn of fresh opportunities." },
        { color: "#20B2AA", quote: "Light sea green reflects the tranquil beauty of a secluded oasis." },
        { color: "#9370DB", quote: "Medium purple mirrors the rich tapestry of life's diverse adventures." },
        { color: "#32CD32", quote: "Lime green, the color of growth, signifies the blossoming of potential." },
        { color: "#FF6347", quote: "Tomato red, ripe with passion, fuels the fire of ambition." },
        { color: "#40E0D0", quote: "Turquoise, like a tropical lagoon, invites exploration and discovery." },
        { color: "#6495ED", quote: "Cornflower blue, serene and calming, evokes tranquil aspirations." },
        { color: "#F4A460", quote: "Sandy brown hues mirror the resilient spirit of endurance." },
        { color: "#9ACD32", quote: "Yellow green, fresh and lively, echoes the zest for new beginnings." },
        { color: "#FA8072", quote: "Salmon, warm and embracing, speaks of compassionate endeavors." },
        { color: "#00FF7F", quote: "Spring green whispers of rejuvenation and renewal." },
        { color: "#FF69B4", quote: "Hot pink hues pulsate with the vibrant energy of new ideas." },
        { color: "#00CED1", quote: "Dark turquoise reflects the depth of uncharted possibilities." },
        { color: "#FF4500", quote: "Orange red, ablaze with fervor, embodies unwavering determination." },
        { color: "#00FFFF", quote: "Cyan, crisp and clear, whispers tales of limitless potential." },
        { color: "#1E90FF", quote: "Dodger blue, bold and confident, symbolizes undaunted aspirations." },
        { color: "#DAA520", quote: "Golden hues mirror the brilliance found in the pursuit of dreams." },
        { color: "#FF8C00", quote: "Dark orange, rich and vibrant, echoes the drive for bold initiatives." },
        { color: "#808000", quote: "Olive hues signify the quiet strength found in resilience." },
        { color: "#00FA9A", quote: "Medium spring green reflects the freshness of new perspectives." },
        { color: "#8A2BE2", quote: "Blue violet, a harmonious blend, speaks of creative endeavors." },
        { color: "#FFA500", quote: "Orange, bright and radiant, ignites the fire of innovation." },
        { color: "#4682B4", quote: "Steel blue hues evoke the steadfast determination to endure." },
        { color: "#87CEEB", quote: "Sky blue, serene and tranquil, whispers of peaceful endeavors." },
        { color: "#48D1CC", quote: "Medium turquoise mirrors the calm embrace of new beginnings." },
        { color: "#ADFF2F", quote: "Green yellow hues echo the vibrant zest for fresh possibilities." },
        { color: "#FFB6C1", quote: "Light pink, soft and tender, reflects the grace found in compassion." },
        { color: "#8B008B", quote: "Indigo, deep and enigmatic, symbolizes the mysteries of ambition." },
        { color: "#9400D3", quote: "Dark violet hues whisper of dreams spun in the cloak of mystery." },
        { color: "#6A5ACD", quote: "Slate blue, a quiet elegance, mirrors the depth of contemplation." },
        { color: "#D2691E", quote: "Chocolate hues speak of warmth found in the pursuit of passion." },
        { color: "#FF00FF", quote: "Magenta, bold and daring, symbolizes the pursuit of the extraordinary." },
        { color: "#778899", quote: "Light slate gray whispers tales of wisdom found in subtlety." },
        { color: "#00FF00", quote: "Lime green, fresh and vivid, echoes the vitality of new endeavors." },
        { color: "#8B0000", quote: "Dark red hues speak of the depth found in unwavering determination." },
      ];

const data = colorQuoteArray;

const button = document.querySelector('#generate');
const p = document.querySelector('#p');
const body = document.querySelector('body');
const colorP = document.querySelector('#color');

button.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * data.length);

    body.style.background = data[randomNum].color;
    p.textContent = data[randomNum].quote;
    colorP.textContent = data[randomNum].color;

    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(data[randomNum].quote);
        speech.lang = 'en-US'; // Fixed typo in language code

        speech.volume = 4;
        speech.rate = 1;
        speech.pitch = 2;

        speechSynthesis.speak(speech);
    } else {
        alert('Text-to-speech is not supported in your browser.');
    }
});