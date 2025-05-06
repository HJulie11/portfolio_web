import ThreeScene from "./components/ThreeScene";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import { ScrollIndicator } from "./components/ScrollIndicator";
import Skills from "./components/Skills";

const sections = [
  { id: 'startscene', name: 'Home' },
  { id: 'Skills', name: 'Skills' },
  { id: 'section3', name: 'Projects' },
  { id: 'section4', name: 'Contact' }
]

export default function Home() {
  return (
    <main className="flex flex-col h-full item-center justify-center overflow-hidden">
      <div className="flex items-center py-10">
        <Header />
      </div>
      <div className="flex flex-row w-full">
        {/* <div className='h-full flex w-[20%] fixed items-center justify-center'>
          <ScrollIndicator sections={sections} />
        </div> */}
        <div className="w-full h-full overflow-y-scroll scroll-smooth">
          <div className="w-full h-full" id="startscene">
            <StartScreen />
          </div>
          <div className="w-full h-full" id="Skills">
            <Skills />
          </div>
        </div>
        
      </div>
      {/* <ThreeScene /> */}
    </main>
  );
}
