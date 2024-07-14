const quotes = [
    "Imagination is more important than knowledge.",
    "You will face many defeats in life, but never let yourself be defeated.",
    "Be yourself; everyone else is already taken.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    "The only thing worse than being blind is having sight but no vision.",
    "The secret of getting ahead is getting started.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }

    while(true){
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if(usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}