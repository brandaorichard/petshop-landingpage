import Image from "next/image";
import about1img from '../../../public/about-1.png'
import about2img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          {/* div relative dos cards */}
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1img}
                alt="foto do dog"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              <Image
                src={about2img}
                alt="foto do cat"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold ">
              SOBRE
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor vel eros eget consequat. Nulla ex enim, fermentum ac finibus at, aliquam sit amet augue. Donec ut quam in mi tincidunt tincidunt. Curabitur commodo mauris enim. Nam porttitor rhoncus luctus. Nam cursus hendrerit hendrerit.
            </p>

            <ul className="space-y-4 ">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>
            </ul>

            <ul className="space-y-4 ">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 5 veterinários
              </li>
            </ul>

            <ul className="space-y-4 ">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é a nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a href="#" className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                <WhatsappLogo className="w-5 h-5 text-white " />
                Contato via WhatsApp
              </a>

              <a href="#" className=" text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                <MapPin className="w-5 h-5 text-black " />
                Endereco da loja
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}