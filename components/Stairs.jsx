import { motion } from "framer-motion"

const stairAnimation = {
    initial: {
        top: "0%",

    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"],
    },
}

//calaculate the reverse index for staggered delay.
const reverseIndex = (Index) => {
    const totalSteps = 6; //number of steps
    return totalSteps - Index - 1;
}
const Stairs = () => {
  return (
    
    <>
    {
    /*Render & Motion Divs, each representing a step of the stair. 
    Each div will have the same animation defined by the stairsAnimation object. The
    delay for the each div is calculated dynamically based on it's reversed index, 
    creating a staggered effect with decreasing delay for each subsequent step.    
    */
    }
    {[...Array(6)].map((_, index) => {
     return (
        <motion.div key={index} 
        variants={stairAnimation} 
        initial="initial"
        animate="animate"
        exit="exit"
        transition = {{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index)*0.1,
        }} 
        className="h-full w-full bg-white relative"
       />
    )
    })}
    </>
  )
}

export default Stairs