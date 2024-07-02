import { personalData, socialMedia } from "@/data"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa"
import Image from "next/legacy/image"

const Footer = () => {
    return (
        <footer className="w-full pb-3 mb-[50px] md:mb-5" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                <p className="text-white-100 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how can hel you achieve your goals.
                </p>
                <a href={`mailto:${personalData.email}`}>
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
                <div className="flex w-full mt-16 md:flex-row flex-col gap-3 justify-between items-center">
                    <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Manuel Jiménez Bravo</p>
                    <div className="flex items-center md:gap-3 gap-6">
                        {socialMedia.map(({ id, img, link}) => (
                            <div key={id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                <a href={link} className="flex items-center justify-center">
                                    <Image src={img} alt={img} width={20} height={20} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer