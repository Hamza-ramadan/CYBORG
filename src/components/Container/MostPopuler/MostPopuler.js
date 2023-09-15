import"./MostPopuler.css";
import Card from "./Card";

import photo_1 from "../../../images/popular-01.jpg";
import photo_2 from "../../../images/popular-02.jpg";
import photo_3 from "../../../images/popular-03.jpg";
import photo_4 from "../../../images/popular-04.jpg";
import photo_5 from "../../../images/popular-05.jpg";
import photo_6 from "../../../images/popular-06.jpg";
import photo_7 from "../../../images/popular-07.jpg";
import photo_8 from "../../../images/popular-08.jpg";

import SectionHeader from "../../section-Header/SectionHeader";

import SectionWrapper from "../../SectionWrapper/SectionWrapper";
// const MostPopulerItem = [{title:"pubg" , photo: photo_1 , id:"most-populer1"},{title:"pubg" , photo: photo_2 , id:"most-populer2"},{title:"pubg" , photo: photo_3 , id:"most-populer3"},
// {title:"pubg" , photo: photo_6 , id:"most-populer6"},{title:"pubg" , photo: photo_5 , id:"most-populer4"},{title:"pubg" , photo: photo_4 , id:"most-populer4"},
// {title:"pubg" , photo: photo_7 , id:"most-populer7"},{title:"pubg" , photo: photo_8 , id:"most-populer8"}];

// const cards = MostPopulerItem.map(card=>{
//     return <Card key={card.id} photo={card.photo} title={card.title}/>
// });


const MostPopuler = () => {
    return (
        <>
            <SectionWrapper>
            <SectionHeader pepepep="Most Popular" sspp="Right Now"/>
                
                <div className=" home-boxs">
                    <Card title="Pubg" photo={photo_1}/>
                    <Card title="Pubg" photo={photo_2}/>
                    <Card title="Pubg" photo={photo_3}/>
                    <Card title="Pubg" photo={photo_4}/>
                    <Card title="Pubg" photo={photo_5}/>
                    <Card title="Pubg" photo={photo_6}/>
                    <Card title="Pubg" photo={photo_7}/>
                    <Card title="Pubg" photo={photo_8}/>

                    
                </div>
                </SectionWrapper>
        </>
    )
}

export default MostPopuler;