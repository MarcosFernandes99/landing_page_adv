import "../app/globals.css";
import Image from "next/image";
import google from "../../public/google.png";
import avaliacao from "../../public/avaliacao.png";

export default function Home() {
  return (
    <>
      <main className="h-screen">
        <section className="flex h-20 w-full p-1 bg-azul-escuro text-white">
          <div className="flex h-full w-1/2 justify-start items-center">
            <span className="mx-32">
              LOGO
              <img src="" alt="" />
            </span>
            <button className="mr-8">Serviços</button>
            <button className="mr-8">Sobre Nós</button>
            <button>Contato</button>
          </div>

          <div className="flex h-full w-1/2 justify-end items-center">
            <button className="mx-8">INSTA</button>
            <button>FACE</button>
            <button className="mx-32 border border-white border-solid p-2 rounded-lg">
              Orçamento
            </button>
          </div>
        </section>
        <section className="flex h-4/5 bg-azul-semi-escuro">
          <div className="flex flex-col w-2/5 h-full items-start ml-36 text-white justify-center text-justify">
            <span className="mb-12">LOGO</span>
            <span className="mb-3 text-4xl font-bold">
              SOLICITE O AUMENTO DA SUA APOSENTADORIA AGORA!
            </span>
            <span className="mb-3 text-base">
              Somos advogados especialistas em direito previdenciário e podemos
              te ajudar com a revisão da vida toda!
            </span>
            <button className="bg-verde p-4 rounded-lg">
              Fale conosco pelo Whatsapp
            </button>
          </div>
          <div className="flex h-full w-3/5 bg-photo_header bg-contain bg-no-repeat bg-center"></div>
        </section>
        <section className="flex w-full h-4/5">
          <div className="flex w-1/2 h-full mt-20 bg-photo bg-contain bg-no-repeat bg-center"></div>
          <div className="flex flex-col w-50% text-justify text-azul-escuro justify-center">
            <span className="w-4/5 font-bold text-2xl">
              A{" "}
              <span className="bg-azul-escuro text-dourado">
                Revisão da vida
              </span>{" "}
              toda foi aprovada pelo STF e agora é definitivo, milhares de
              aposentados e pensionistas, poderão ter direito a revisar suas
              aposentadorias.
            </span>
            <span className="w-4/5 mt-6">
              Em certos casos, a revisão pode aumentar em mais de 3 (três) vezes
              o valor do benefício;
            </span>
            <span className="w-4/5 mt-6">
              Existem casos que sai de um salário mínimo, para uma aposentadoria
              de{" "}
              <span className="font-bold">
                R$ 5.000,00 mensais, imagine só ?
              </span>
            </span>
            <span className="w-4/5 mt-6">
              Mas não são todos que tem direito,{" "}
              <span className="font-bold">será necessário uma avaliação.</span>
            </span>
            <button className="mt-4 flex items-start bg-verde text-white w-1/5 justify-center p-4 rounded-lg">
              Fazer Avaliação
            </button>
          </div>
        </section>
        <section className="flex flex-col bg-azul-escuro w-full h-4/5 mt-28 items-center">
          <div className="flex flex-col mt-28 w-1/3 items-center">
            <p className="text-dourado font-bold text-3xl">
              Veja como podemos te ajudar
            </p>
            <p className="text-white mt-2">
              Confie seu caso nas mãos de um advogado que saberá a melhor
              maneira de te ajudar a ter seu benefício liberado.
            </p>
            <p className="text-dourado font-bold underline mt-2">
              Experiência comprovada em causas previdenciárias como:
            </p>
          </div>
          <div className="flex w-full gap-4 mt-12 justify-center text-white">
            <span className="w-44 bg-azul-claro p-4 rounded-lg text-center">
              Auxílio Acidente
            </span>
            <span className="w-44 bg-azul-claro p-4 rounded-lg text-center">
              Aposentadoria por idade ou invalidez
            </span>
            <span className="w-44 bg-azul-claro p-4 rounded-lg text-center">
              Auxílio Doença
            </span>
          </div>
          <button className="bg-verde text-white p-4 mt-12 rounded-xl">
            Falar com um advogado agora
          </button>
        </section>
        <section className="flex h-3/4 w-full mt-12">
          <div className="h-3/4 w-2/4 bg-photo_about bg-contain bg-no-repeat mt-4 bg-center"></div>
          <div className="h-3/4 w-2/4 justify-center p-4 text-justify flex flex-col text-azul-escuro">
            <h3 className="ml-20 text-3xl font-bold">Sobre nós</h3>
            <span className="w-3/4 ml-20 mt-4">
              O{" "}
              <span className="font-bold bg-dourado">
                NOME DO ESCRITÓRIO, OAB.655.123,
              </span>{" "}
              é o escritório especializado em Direito do Trabalho e Direito
              Previdenciário;
            </span>
            <span className="w-3/4 ml-20 mt-4">
              Temos nosso escritório{" "}
              <span className="font-bold">
                localizado em São Bernardo do Campo e em São Paulo,
              </span>{" "}
              com atuação presencial e online para acelerar a resolução das
              causas e prezar pelo conforto dos nossos clientes.
            </span>
            <span className="w-3/4 ml-20 mt-4">
              Além do aparato técnico e conhecimento para enfrentamento de
              problemas judiciais, temos por objetivo, evitar o surgimento de
              novos processos, atuando na prevenção, oferencendo todo o suporte
              para que o cliente possa viver em sociedade, exercendo seu direito
              e, sabendo os limites e reflexos de sua atuação, melhorando as
              relações sociais e pacificando os conflitos.
            </span>
            <button className="flex ml-20 bg-verde text-white mt-8 p-4 rounded-xl w-72 justify-center">
              Falar com um advogado agora
            </button>
          </div>
        </section>
        <section className="h-3/4 w-full flex flex-col bg-azul-escuro items-center">
          <h3 className="text-white font-bold text-3xl mt-16">
            CLIENTES QUE APROVAM E INDICAM NOSSO TRABALHO
          </h3>
          <div className="flex gap-6 h-68 w-2/3 mt-12 justify-center">
            <div className="flex flex-col w-56 bg-white rounded-2xl p-4">
              <div className="flex w-full justify-between items-center">
                <Image className="w-20" src={avaliacao} alt="estrelas"></Image>
                <Image className="h-8 w-8 " src={google} alt="google"></Image>
              </div>
              <span className="flex-shrink-0 bg-white text-azul-escuro p-2 h-40 overflow-y-auto">
                Precisei para auxiliar com um cliente do escritório. Me atendeu
                rapidamente e com muita eficiência.
              </span>
              <div className="flex w-full justify-between items-center mt-4">
                <span className="bg-red-600 w-8 h-8 rounded-full text-center text-white p-1">
                  J
                </span>
                <span className="font-bold">João Dias</span>
              </div>
            </div>
            <div className="flex flex-col w-56 bg-white rounded-2xl p-4">
              <div className="flex w-full justify-between items-center">
                <Image className="w-20" src={avaliacao} alt="estrelas"></Image>
                <Image className="h-8 w-8 " src={google} alt="google"></Image>
              </div>
              <span className="flex-shrink-0 h-40 bg-white text-azul-escuro p-2">
                Perfeito e eficaz.
              </span>
              <div className="flex w-full justify-between items-center mt-4">
                <span className="bg-amber-500 w-8 h-8 rounded-full text-center text-white p-1">
                  C
                </span>
                <span className="font-bold">Carla Santos</span>
              </div>
            </div>
            <div className="flex flex-col w-56 bg-white rounded-2xl p-4">
              <div className="flex w-full justify-between items-center">
                <Image className="w-20" src={avaliacao} alt="estrelas"></Image>
                <Image className="h-8 w-8 " src={google} alt="google"></Image>
              </div>
              <span className="flex-shrink-0 h-40 bg-white text-azul-escuro p-2">
                Muito atencioso! Muito competente e dedicado!
              </span>
              <div className="flex w-full justify-between items-center mt-4">
                <span className="bg-green-500 w-8 h-8 rounded-full text-center text-white p-1">
                  R
                </span>
                <span className="font-bold">Rodrigo Farias</span>
              </div>
            </div>
            <div className="flex flex-col w-56 bg-white rounded-2xl p-4">
              <div className="flex w-full justify-between items-center">
                <Image className="w-20" src={avaliacao} alt="estrelas"></Image>
                <Image className="h-8 w-8 " src={google} alt="google"></Image>
              </div>
              <span className="flex-shrink-0 h-40 bg-white text-azul-escuro p-2 overflow-y-auto">
                Advogados competentes! Acompanham o processo pessoalmente e está
                sempre explicando os andamentos.
              </span>
              <div className="flex w-full justify-between items-center mt-4">
                <span className="bg-sky-500 w-8 h-8 rounded-full text-center text-white p-1">
                  R
                </span>
                <span className="font-bold">Helena Souza</span>
              </div>
            </div>
          </div>
          <button className="text-white bg-verde p-4 rounded-xl mt-8">
            Falar com um advogado agora
          </button>
        </section>
        <section className="flex h-3/4 w-full mt-10 justify-center">
          <div className="flex h-full w-11/12 p-4 text-azul-escuro bg-PowderBlue rounded-3xl">
            <div className="flex flex-col w-1/2">
              <span className="h-30 text-justify text-3xl font-bold p-4">
                Nossa missão é assegurar que nossos clientes tenham o seu
                benefício previdenciário estabelecido de maneira justa, através
                de um acompanhamento jurídico de qualidade.
              </span>
              <form className="flex flex-col gap-2 w-5/6 p-4" id="" action="">
                <input
                  className="rounded-xl p-2"
                  placeholder="Digite seu nome"
                  type="text"
                />
                <input
                  className="rounded-xl p-2"
                  placeholder="Digite seu número de celular"
                  type="text"
                />
                <input
                  className="rounded-xl p-2"
                  placeholder="Digite seu melhor E-mail"
                  type="text"
                />
                <button className="bg-verde text-white p-2 mt-6 rounded-xl">
                  Falar com um advogado
                </button>
              </form>
            </div>
            <div className=" flex w-1/2 h-full bg-forms bg-cover rounded-xl ml-6"></div>
          </div>
        </section>
      </main>
    </>
  );
}
