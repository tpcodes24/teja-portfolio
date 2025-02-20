import { Button } from "@/components/ui/button"
import { FiDownload} from 'react-icons/fi'

//Components
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const Home = () => {
  return ( 
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h2 mb-6"> 
              Hello, I'm 
              <br/> 
              <span className="text-accent">Tejasree Parasa!</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            
  <span className="text-accent">Microsoft | 3+ YOE | 12x Professional Certified</span> <br/>
  <br /> Innovating at the intersection of <span className="text-accent">Machine Learning, Cloud Computing, and Software Development</span>.  
  I architect intelligent systems that drive business impact, optimize performance, and push technological boundaries. Engineering isn’t just about code — it’s about creating solutions that redefine possibilities. <span className="text-accent"> Every algorithm, every deployment, every innovation should drive meaningful change — and that’s what I build for. </span>


            </p>
            {/*Button and Socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/Tejasree_Parasa_3YOE_SoftwareEngineer.pdf" download>
  <Button 
    variant="outline" 
    size="lg" 
    className="uppercase flex items-center gap-2">
    <span> Download Resume!</span>
    <FiDownload className="text-xl"/>
  </Button>
</a>

              <div className="mb-8 xl:mb-0" >
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>

          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home

