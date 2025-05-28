import Header from "./_components/Header/header";
import Footer from "./_components/Footer/footer";
import './home.css'
import { Playfair_Display } from "next/font/google";
import { Button } from "@mui/material";

const playfairDisplayFont = Playfair_Display({
    subsets: ['latin'],
    weight: ['400']
})

export default function Home() {
    return (
        <>
            <Header></Header>
            <div className={`hero ${playfairDisplayFont.className}`}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-2">
                        <div>
                            <div>
                                <h1>Música é muito mais vida & amor!</h1>
                                <p>
                                    É música para os ouvidos, mente e alma. E com a
                                    <strong>musicoterapia</strong>, a gente chega lá.
                                </p>
                                <p>
                                    Posso ajudar no desenvolvimento do seu filho de uma forma lúdica e
                                    facilitadora, por meio da <strong>Musicoterapia</strong>.
                                </p>
                            </div>
                            <div>
                                <div className="col-12 offset-0 col-lg-10 offset-lg-0 lg:mb-5">
                                    <div suppressHydrationWarning>
                                        <Button suppressHydrationWarning variant="contained">Quero conhecer</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="grid-cols-6 lg:flex align-items-end"
                        >
                            <img
                                className="img-fluid mt-4 mt-md-5 mt-sm-0 kika"
                                src="./kika.png"
                                alt="Thais Politansky Cervi"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <section className="text-center">
                <div className="text-center">
                    <h1>Benefícios da Musicoterapia</h1>
                </div>
            </section >
            <section className="mb-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="">
                            <h1>Vem que eu te explico!</h1>
                        </div>
                        <div className="">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/qkVdUyKuS7k?si=9p_A4t4cY9SR_BCo"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="col-10 offset-1 col-lg-6 offset-lg-3"></div>
                </div>
            </section>


            <Footer></Footer>
        </>

    );
}
