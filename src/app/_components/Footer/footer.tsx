import "./footer.css"

export default function Footer() {
    return (
        <div className="footer text-sm">
            <div className="about">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 mb-4">
                        <div className="subtitle mb-2">Sobre</div>
                        <p>
                            Thais Politansky Cervi, Musicoterapeuta, formada pela UniFMu desde
                            2004. Atua nas áreas de profilaxia, estimulação precoce, ADNPM,
                            deficiência física, intelectual e saúde mental. Experiência em
                            atendimento infantil e adulto.
                        </p>
                    </div>
                    <div className="grid grid-cols-1">
                        <div>
                            <div className="subtitle mb-2">Redes Sociais</div>
                            <div className="">
                                <a

                                    title="Siga-me no Instagram!"
                                    href="https://www.instagram.com/thaispolitanskycervi"
                                    target="_blank"
                                >

                                </a>
                                <a

                                    title="Acesse meu canal no Youtube!"
                                    href="https://www.youtube.com/@kikacervi4696"
                                    target="_blank"
                                >

                                </a>
                                <a

                                    title="Linkedin"
                                    href="https://www.linkedin.com/in/thais-politansky-cervi-26947937"
                                    target="_blank"
                                >

                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container mx-auto gap-2">
                    <div className="text-center copyright--text">
                        © Copyright 2024 Thais Politansky Cervi
                        <span className="d-none d-sm-inline">|</span><br className="d-block d-sm-none" />
                        Todos os direitos reservados
                    </div>
                </div>
            </div>
        </div>

    );
}
