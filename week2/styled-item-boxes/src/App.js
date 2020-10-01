import React from "react"


import Blog from "./components/Blog"

const App = () => {
    return (
        <div className="blog-container">
            <Blog 
                title="Hello World"
                subtitle="How vast is the universe?"
                information="The world is vast. Have you ever seen a node module? Yeah, vaster than that."
            />
            <Blog 
                title="Hello Universe"
                subtitle="What color is the universe?"
                information="When you look up at the sky? What color do you actually see?....... Well don't look here because I don't know either."
            />
            <Blog 
                title="Hello Ocean"
                subtitle="How much ocean is in the ocean?"
                information="Scientist have often pondered how much of the ocean is undiscovered, good thing thats not our job, right?"
            />
            <Blog 
                title="Hello Space"
                subtitle="Is space really empty?"
                information="Yes of course, just about as empty as my will to get my work done"
            />
            <Blog 
                title="Hello Society"
                subtitle="What is the greates society around?"
                information="We have gathered data over thousands of years and, sadly, no society will ever be good enough for people unrealistic standards. "
            />
            <Blog 
                title="Hello Moon"
                subtitle="Is the moon made out of cheese?"
                information="According to NASA scientist and leaders, The moon is infact just a giant rock. Sorry guys"
            />
            <Blog 
                title="Hello Star"
                subtitle="How far are stars?"
                information="Here we will explain to you exactly why you cannot visit your favorite planet"
            />
            <Blog 
                title="Hello Sun"
                subtitle="Where are these solar flairs?"
                information="Hey sun, can you like back up a little? It's getting kinda hot and we can't keep blaming humans for it."
            />
            <Blog 
                title="Hello Bryan"
                subtitle="Learning react is going well."
                information="FullStack web design is where it is at."
            />
            <Blog 
                title="Hello You"
                subtitle="Did you make it this far?"
                information="Or are you just skiming through? "
            />
        </div>
    )
}

export default App