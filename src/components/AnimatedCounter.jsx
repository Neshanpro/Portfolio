import { counterItems } from "../constants"

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems}
            </div>
        </div>
    )
}

export default AnimatedCounter