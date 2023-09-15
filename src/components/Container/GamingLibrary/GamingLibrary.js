import React from './GamingLibrary.css'
import SectionHeader from '../../section-Header/SectionHeader'
import SectionWrapper from '../../SectionWrapper/SectionWrapper'
import GamingLibraryph1 from "../../../images/game-01.jpg"
import GamingLibraryph2 from "../../../images/game-02.jpg"
import GamingLibraryph3 from "../../../images/game-03.jpg"
import GamingCard from './GamingCard'
const gamingLibrarydata = [{title:"sandBox" , category :"Dota-2", photo: GamingLibraryph1 , id:"gamingLibrarydata1" , download:"Dawnload", data_added:"20/2/2023" ,hours_playeded:"620 H 24 mim"},
        {title:"sandBox"  , category :"Dota-1" , photo: GamingLibraryph2 , id:"gamingLibrarydata2" , download:"Dawnload", data_added:"20/2/2023" ,hours_playeded:"620 H 24 mim"},
        {title:"sandBox"  , category :"pubg" , photo: GamingLibraryph3 , id:"gamingLibrarydata3" , download:"Dawnload", data_added:"20/2/2023" ,hours_playeded:"620 H 24 mim"},];
    
const GamingLibrary = () => {
    const gamingLibrarycards = gamingLibrarydata.map(card => {
        return <GamingCard key={card.id} photo={card.photo} title={card.title} category={card.category} download={card.download}
        data_added={card.data_added} hours_playeded={card.hours_playeded} />
    });
    return (
    
    <>

    <SectionWrapper>
            <SectionHeader pepepep="Your Gaming" sspp="Library"/>
                
                <div className=" gaming-library-cards">
                    {gamingLibrarycards}
                    
                    
                </div>
    </SectionWrapper>
        </>
    )
}

export default GamingLibrary