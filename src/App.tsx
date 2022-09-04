import NavBar from "./components/NavBar";
import Card from "./components/Card";

const imageUrl = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
const image2 = "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg"
const image3 = "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D"
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function App() {
  return (
    <div className="w-full">
      <NavBar/>
      <div className="py-16 text-center">
        <div className={"text-4xl font-extrabold"}>
          Navbars in Tailwind CSS
        </div>
      </div>

      <div className="py-4 ml-6 text-left">
        <div className={"text-4xl font-extrabold underline"}>
          Awesome Cards
        </div>
      </div>

      <div className={"container px-5 py-10 mx-auto"}>
        <div className={"flex flex-wrap -m-4"}>
          <Card title={"Trip title"} imageUrl={imageUrl} description={description}/>
          <Card title={"Trip title"} imageUrl={image2} description={description}/>
          <Card title={"Trip title"} imageUrl={image3} description={description}/>
        </div>
      </div>
    </div>
  )
}

export default App
