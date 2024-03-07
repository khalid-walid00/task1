import { faFacebook, faInstagram, faSnapchat, faTiktok, faWhatsapp, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(<>
     <div className=" flex justify-center font-sans">
        <div className="w-10/12">
            <div className=" uppercase text-orange-500 text-end
             text-2xl lg:text-5xl sm:text-5xl md:text-5xl font-bold">we<span className=" ms-2 text-teal-500">travallers</span></div>
            <div className=" text-xl">
            <div className=" lg:w-8/12 text-end">
                <div className="text-orange-500">العنوان</div>
                <div className="">مقراتنا في جورجيا، تبيليسي، حي فيركيتيلي الثالث</div>
                <div className="text-orange-500">الايميل</div>
                <div className="">gloryatravels@gmail.com</div>
                <div className="text-orange-500">خدمة العملاء</div>
                <div className="">9631 55555 995+</div>
                <div className="">9731 55555 995+</div>
                

            </div>
            <div className=" lg:w-4/12"></div>
            </div>
            <div className="flex w-12/12 justify-center my-16">
            <FontAwesomeIcon className=" text-orange-500 lg:size-6 sm:size-3 mx-2 p-2 shadowbutton rounded-full" icon={faFacebook}  />
            <FontAwesomeIcon className=" text-orange-500 lg:size-6 sm:size-3 mx-2 p-2 shadowbutton rounded-full"  icon={faInstagram} />
            <FontAwesomeIcon className=" text-orange-500 lg:size-6 sm:size-3 mx-2 p-2 shadowbutton rounded-full"  icon={faXTwitter} />
            <FontAwesomeIcon className=" text-orange-500 lg:size-6 sm:size-3 mx-2 p-2 shadowbutton rounded-full"  icon={faTiktok} />
            <FontAwesomeIcon className=" text-orange-500 lg:size-6 sm:size-3 mx-2 p-2 shadowbutton rounded-full"  icon={faSnapchat} />
            <FontAwesomeIcon className=" text-orange-500 lg:size-6 sm:size-3 mx-2 p-2 shadowbutton rounded-full" icon={faWhatsapp} />
            <FontAwesomeIcon className=" text-orange-500 lg:size-6 sm:size-3 mx-2 p-2 shadowbutton rounded-full" icon={faYoutube} />
            </div>
        </div>
     </div>
    </>)
}