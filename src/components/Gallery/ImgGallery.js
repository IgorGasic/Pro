import React, { useEffect, useState } from 'react';
import TagButton from './TagButton';
import {GalleryContainer, ImageCard, Image, Tags} from './Gallery.styled';
import { SRLWrapper } from 'simple-react-lightbox';


const images = [
    {id: '1', imageName: 'cev1.jpg', tag:'vodovod', alt:'Vodovodne cevi'},
    {id: '2', imageName: 'cev2.jpg', tag:'vodovod', alt:'Vodovodne cevi'},
    {id: '3', imageName: 'cev3.jpg', tag:'vodovod', alt:'Vodovodne cevi'},
    {id: '4', imageName: 'cev4.jpg', tag:'vodovod', alt:'Vodovodne cevi'},
    {id: '5', imageName: 'led1.jpg', tag:'led svetla', alt:'Led osvetljenje u zgradi'},
    {id: '6', imageName: 'led2.jpg', tag:'led svetla', alt:'Led osvetljenje u zgradi'},
    {id: '7', imageName: 'pp1.jpg', tag:'javljač požara', alt:'Javljač požara'},
    {id: '8', imageName: 'pp2.jpg', tag:'panik rasveta', alt:'Panik rasveta'},
    {id: '9', imageName: 'krov1.jpg', tag:'krov', alt:'Kompletna sanacija trulog krova'},
    {id: '10', imageName: 'krov2.jpg', tag:'krov', alt:'Kompletna sanacija trulog krova'},
    {id: '11', imageName: 'krov3.jpg', tag:'krov', alt:'Kompletna sanacija trulog krova'},
    {id: '12', imageName: 'krov4.jpg', tag:'krov', alt:'Izgled uradjenog novog krova'},
    {id: '13', imageName: 'krov5.jpg', tag:'krov', alt:'Izgled uradjenog novog krova'},
    {id: '14', imageName: 'krov6.jpg', tag:'krov', alt:'Izgled uradjenog novog krova'},
    {id: '15', imageName: 'sanduce.jpg', tag:'poštanski sandučići', alt:'Poštanski sandučići'},
    {id: '16', imageName: 'sanduce2.jpg', tag:'poštanski sandučići', alt:'Poštanski sandučići'},
    {id: '17', imageName: 'sanduce3.jpg', tag:'poštanski sandučići', alt:'Poštanski sandučići'},
    {id: '18', imageName: 'merdevine1.jpg', tag:'krovne merdevine', alt:'Merdevine za tavan'},
    {id: '19', imageName: 'merdevine2.jpg', tag:'krovne merdevine', alt:'Merdevine za tavan'},
    {id: '20', imageName: 'merdevine3.jpg', tag:'krovne merdevine', alt:'Merdevine za tavan'},
    {id: '21', imageName: 'merdevine4.jpg', tag:'krovne merdevine', alt:'Merdevine za tavan'},
    {id: '22', imageName: 'nastresnica1.jpg', tag:'postavljanje nadstrešnice', alt:'Postavljanje nove nastrešnice'},
    {id: '23', imageName: 'nastresnica2.jpg', tag:'postavljanje nadstrešnice', alt:'Postavljanje nove nastrešnice'},
    {id: '24', imageName: 'nastresnica3.jpg', tag:'postavljanje nadstrešnice', alt:'Postavljanje nove nastrešnice'},
    {id: '25', imageName: 'nastresnica4.jpg', tag:'postavljanje nadstrešnice', alt:'Postavljanje nove nastrešnice'},
    {id: '26', imageName: 'podrum.jpg', tag:'betoniranje podruma', alt:'Popravljanje podruma'},
    {id: '27', imageName: 'podrum1.jpg', tag:'betoniranje podruma', alt:'Popravljanje podruma'},
    {id: '28', imageName: 'oluk1.jpg', tag:'zamena oluka', alt:'Postavljanje novog okluka'},
    {id: '29', imageName: 'oluk2.jpg', tag:'zamena oluka', alt:'Postavljanje novog okluka'},
    {id: '30', imageName: 'oluk3.jpg', tag:'zamena oluka', alt:'Postavljanje novog okluka'},
    {id: '31', imageName: 'kvaka.jpg', tag:'zaštita od provale u podrumima', alt:'Zaštita od provale u podrumima'},
    {id: '32', imageName: 'uzbuna.jpg', tag:'panik rasveta', alt:'Panik rasveta'}


]

    const options = {
        settings: {
        overlayColor: 'rgba(0,0,0,0.8)'
        },
        buttons: {
            showAutoplayButton: false,
            showDownloadButton: false,
        }
    }

const ImgGallery = () => {

    const[tag, setTag] = useState('sve slike');
    const[filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        tag == 'sve slike' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag == tag))
    },[tag]);


    return (
        <>
         <h1 style={{textAlign:"center", paddingTop:"40px"}}>Galerija slika uradjenih radova na starijim zgradama</h1>
          <Tags>
            <TagButton name="sve slike" handleSetTag={setTag}/>
            <TagButton name="javljač požara" handleSetTag={setTag}/>
            <TagButton name="poštanski sandučići" handleSetTag={setTag}/>
            <TagButton name="vodovod" handleSetTag={setTag}/>
            <TagButton name="krov" handleSetTag={setTag}/>
            <TagButton name="led svetla" handleSetTag={setTag}/>
            <TagButton name="zamena oluka" handleSetTag={setTag}/>
            <TagButton name="betoniranje podruma" handleSetTag={setTag}/>
            <TagButton name="krovne merdevine" handleSetTag={setTag}/>
            <TagButton name="postavljanje nadstrešnice" handleSetTag={setTag}/>
            <TagButton name="zaštita od provale u podrumima" handleSetTag={setTag}/>
            <TagButton name="panik rasveta" handleSetTag={setTag}/>
          </Tags>
          <SRLWrapper options={options}>
            <GalleryContainer>
                {filteredImages.map(image => (
                <ImageCard key={image.id}>
                <a href={`/images/${image.imageName}`}>
                <Image src={`/images/${image.imageName}`} alt={image.alt} /></a></ImageCard>))}
            </GalleryContainer>
           </SRLWrapper>
        </>
    )
}

export default ImgGallery
