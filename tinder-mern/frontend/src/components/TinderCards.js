import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from 'axios'

const TinderCards = () => {
    const [people, setPeople] = useState([
    //     {name: "Elon Musk", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/409px-Elon_Musk_2015.jpg"},
    // {name: "Sandra Bullock", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Sandra_Bullock_%289192365016%29_%28cropped%29.jpg"},
    // {name: "Drew Barrymore", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Drew_Barrymore_Berlin_2014.jpg"}
    ])

    

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get('http://localhost:8001/tinder/cards')
            setPeople(req.data)
        }
        fetchData()
    }, [])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__container">
                {people.map(person => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                        preventSwipe={['up', 'down']}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div >
    )
}

export default TinderCards