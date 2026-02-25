import "./hero.scss";
import { ChevronRight } from "lucide-react";
const Hero = () => (
  <>
    <section id="hero" className="runic-bg">
      <div className="back"></div>
      <div className="container">
        <div>
          <span className="desc">Disponível para novos desafios</span>
          <h1 className="font-display">
            Desenvolvedor
            <br />
            <span class="text-gradient-gold italic">Front-End</span>
          </h1>
          <p>
            Focado em performance extrema, arquiteturas escaláveis e
            experiências de usuário que transcendem o comum.
          </p>

          <div>
            <a href="#projetos" className="group bg-white text-[#0A0A0A]">
              <span className="text-lg">
                Ver projetos
                <ChevronRight
                  size={20}
                  className="seta group-hover:translate-x-3"
                />
              </span>
            </a>
            <a
              href="@contato"
              className="group text-white hover:bg-[#d4af37]/5 border hover:border-[#d4af37]/50 rounded-full font-bold border-white/20"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
      <div className="rune">ᛊᛖᛃᚨ ᛗᚢᛁᛏᛟ ᛒᛖᛗ ᚢᛁᚾᛞᛟ ᚨᛟ ᛗᛖᚢ ᛈᛟᚱᛏᚠᛟᛚᛟ</div>
    </section>
  </>
);

export default Hero;
