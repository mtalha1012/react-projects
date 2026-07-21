import { useState } from 'react'
import Accordian from './Components/Accordian/Accordian'
import TabButton from './Components/TabButton'
import RandomColor from './Components/RandomColor'
import StarRating from './Components/StarRating'
import ImageSlider from './Components/ImageSlider'
import LoadMore from './Components/LoadMore'
import TreeView from './Components/TreeView/TreeView'
import { menus } from './Components/TreeView/data'
import Weather from './Components/Weather/Weather'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState("Accordian")

  return (
    <>
    <header>
      <TabButton 
      id="Accordian"
      label="Accordian"
      current={activeTab}
      onClick={setActiveTab}
      />
      <TabButton 
      id="color-generator"
      label="Color Generator"
      current={activeTab}
      onClick={setActiveTab}
      />
      <TabButton
      id="starRating"
      label="Star Rating"
      current={activeTab}
      onClick={setActiveTab}
      />
      <TabButton
      id="image-slider"
      label="Image Slider"
      current={activeTab}
      onClick={setActiveTab}
      />
      <TabButton
      id="load-more"
      label="Loading Products"
      current={activeTab}
      onClick={setActiveTab}
      />
      <TabButton
      id="tree-view"
      label="Tree View"
      current={activeTab}
      onClick={setActiveTab}
      />
      <TabButton
      id="weather"
      label="Weather App"
      current={activeTab}
      onClick={setActiveTab}
      />
    </header>

    <main>
      {activeTab == "Accordian" && <Accordian />}
      {activeTab == "color-generator" && <RandomColor /> }
      {activeTab == "starRating" && <StarRating no={10}/>}
      {activeTab == "image-slider" && <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />}
      {activeTab == "load-more" && <LoadMore />}
      {activeTab == "tree-view" && <TreeView menus = {menus}/>}
      {activeTab == "weather" && <Weather />}
    </main>
    </>
  )
}
