import "../app/globals.css";
import Image from "next/image";
import google from "../../public/google.png";
import avaliacao from "../../public/avaliacao.png";
import telefone from "../../public/telefone.png";
import email from "../../public/email.png";
import relogio from "../../public/relogio.png";
import primeiraFoto from "../../public/primeira_foto.png"
import logoFooter from "../../public/logo_footer.png"
import segundaFoto from "../../public/segunda_foto.png"
import terceiraFoto from "../../public/terceira_foto.jpg"
import fotoForms from "../../public/forms.jpg"


export default function Home() {
  return (
    <>
      <main className="h-screen font-sans">
        <section className="flex h-20 w-full p-1 bg-azul-escuro text-white">
          <div className="flex h-full w-1/2 justify-start md:items-center md:ml-40">
            <button className="md:mr-8 transition-transform transform hover:scale-110">
              Serviços
            </button>
            <button className="mr-8 transition-transform transform hover:scale-110">
              Sobre Nós
            </button>
            <button className="transition-transform transform hover:scale-110">
              Contato
            </button>
          </div>
          <div className="flex h-full w-1/2 justify-end items-end md:items-center">
            <button className="bg-insta h-5 w-5 bg-cover transition-transform transform hover:scale-125"></button>
            <button className="mx-8 bg-face h-5 w-5 bg-cover transition-transform transform hover:scale-125"></button>
            <button className="mx-32 border border-white border-solid p-2 rounded-lg transition-transform transform hover:scale-110">
              Orçamento
            </button>
          </div>
        </section>

        <section className="flex flex-col md:flex-row h-[90%] bg-azul-semi-escuro">
          <div className="flex flex-col w-full md:w-2/5 h-full items-center md:items-start text-white justify-center md:ml-36">
            <span className="bg-logo w-20 h-20 md:w-40 md:h-40 bg-contain"></span>
            <span className="mb-3 w-[90%] md:w-full text-[1.4rem] md:text-3xl font-bold text-center md:text-left">
              PROTEJA SEUS BENEFÍCIOS AGORA COM NOSSA ASSESSORIA ESPECIALIZADA!
            </span>
            <span className="mb-3 w-[90%] md:w-full text-[0.9rem] md:text-base text-center md:text-left">
              Somos advogados especialistas em direito do trabalho e podemos te
              ajudar em garantir o seu direito.
            </span>
            <button className="bg-verde text-[0.9rem] md:text-base p-2 md:p-4 rounded-lg transition-transform transform hover:scale-105 duration-500">
              Fale conosco pelo Whatsapp
            </button>
          </div>
          <div className="flex h-2/5 md:h-full w-full md:w-3/5">
            <Image className="w-full h-full object-contain" src={primeiraFoto} alt={"primeiraFoto"}></Image>
          </div>
        </section>
        
        <section className="flex flex-col md:flex-row w-full h-[90%]">
          <div className="flex h-[40%] md:w-1/2 md:h-full mt-5 md:mt-20">
            <Image className="w-full h-full object-contain" src={segundaFoto} alt={"segunda foto"}></Image>
          </div>
          <div className="flex flex-col w-full md:w-50% text-justify text-azul-escuro justify-center ml-4 md:ml-0 mt-4 md:mt-0">
            <span className="w-40 font-bold text-[1.5rem] md:text-3xl">BENEFÍCIOS</span>
            <span className="w-4/5 mt-1 md:mt-6 text-[0.9rem] md:text-base">
              Contratar um advogado trabalhista oferece proteção legal contra{" "}
              <span className="font-bold">
                violações de direitos e práticas injustas no ambiente de
                trabalho.;
              </span>
            </span>
            <span className="w-4/5 mt-4 md:mt-6 text-[0.9rem] md:text-base">
              Um advogado trabalhista pode ajudar na{" "}
              <span className="font-bold bg-dourado">
                maximização de benefícios,
              </span>{" "}
              assegurando que o cliente receba todos
              os direitos e compensações adequados.
            </span>
            <span className="w-4/5 mt-4 md:mt-6 text-[0.9rem] md:text-base">
              Profissionais experientes agilizam a resolução de conflitos,
              evitando prolongamentos desnecessários e reduzindo o impacto
              emocional e financeiro no cliente.
            </span>
            <button className="mt-4 flex items-start text-[0.9rem] md:text-base bg-verde text-white w-[50%] md:w-1/5 justify-center p-2 md:p-4 rounded-lg transition-transform transform hover:scale-105 duration-500">
              Fazer Avaliação
            </button>
          </div>
        </section>
        
        <section className="flex flex-col bg-azul-escuro w-full h-max md:h-4/5 mt-28 items-center">
          <div className="flex flex-col mt-5 md:mt-28 w-[90%] md:w-1/3 items-center text-center">
            <p className="text-dourado font-bold text-[1.5rem] md:text-3xl">
              Veja como podemos te ajudar
            </p>
            <p className="text-white mt-2 text-[0.9rem] md:text-base">
              Confie seu caso nas mãos de um advogado que saberá a melhor
              maneira de te ajudar a ter seu direito garantido.
            </p>
            <p className="text-dourado font-bold underline mt-2 text-[1rem] md:text-lg">
              Experiência comprovada em causas trabalhistas como:
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-4 mt-5 md:mt-12 justify-center text-white items-center">
            <span className="w-[60%] md:h-[6rem] md:w-44 text-[0.9rem] md:text-base bg-azul-claro p-2 md:p-4 rounded-lg text-start md:text-center transition-transform transform hover:translate-y-[-10px]">
              Recolhimento FGTS
            </span>
            <span className="w-[60%] md:h-[6rem] md:w-44 text-[0.9rem] md:text-base bg-azul-claro p-2 md:p-4 rounded-lg text-start md:text-center transition-transform transform hover:translate-y-[-10px]">
              Reconhecimento do vínculo empregarício
            </span>
            <span className="w-[60%] md:h-[6rem] md:w-44 text-[0.9rem] md:text-base bg-azul-claro p-2 md:p-4 rounded-lg text-start md:text-center transition-transform transform hover:translate-y-[-10px]">
              Pagamentos de horas extraordinárias
            </span>
            <span className="w-[60%] md:h-[6rem] md:w-44 text-[0.9rem] md:text-base bg-azul-claro p-2 md:p-4 rounded-lg text-start md:text-center transition-transform transform hover:translate-y-[-10px]">
              Intervalo intrajornada
            </span>
            <span className="w-[60%] md:h-[6rem] md:w-44 text-[0.9rem] md:text-base bg-azul-claro p-2 md:p-4 rounded-lg text-start md:text-center transition-transform transform hover:translate-y-[-10px]">
              Assédio moral
            </span>
            <span className="w-[60%] md:h-[6rem] md:w-44 text-[0.9rem] md:text-base bg-azul-claro p-2 md:p-4 rounded-lg text-start md:text-center transition-transform transform hover:translate-y-[-10px]">
              Verbas atrasadas
            </span>
            <span className="w-[60%] md:h-[6rem] md:w-44 text-[0.9rem] md:text-base bg-azul-claro p-2 md:p-4 rounded-lg text-start md:text-center transition-transform transform hover:translate-y-[-10px]">
              Acidente em serviço
            </span>
          </div>
          <button className="bg-verde text-white text-[0.9rem] md:text-base p-2 md:p-4 mt-5 mb-2 md:mt-12 rounded-xl transition-transform transform hover:scale-105 duration-500">
            Falar com um advogado agora
          </button>
        </section>

        <section className="flex flex-col-reverse md:flex-row h-[90%] w-full mt-56 md:mt-12">
          <div className="h-[40%] md:h-3/4 md:w-2/4 mt-20 md:mt-6 ml-8">
          <Image className="md:w-full w-[90%] h-full object-contain" src={terceiraFoto} alt={"terceiraFoto"}></Image>
          </div>
          <div className="h-3/4 w-full md:w-2/4 justify-center items-center md:items-start p-4 text-justify flex flex-col text-azul-escuro">
            <h3 className="w-[90%] md:w-3/4 md:mt-0 ml-0 md:ml-20 text-3xl font-bold">Sobre nós</h3>
            <span className="w-[90%] mt-6 md:w-3/4 ml-0 md:ml-20 text-[0.9rem] md:text-base">
              O{" "}
              <span className="font-bold bg-dourado">
                WILLIANS ADVOGADOS, OAB 989.878,
              </span>{" "}
              é o escritório especializado em Direito do Trabalho;
            </span>
            <span className="w-[90%] md:w-3/4 mt-4 ml-0 md:ml-20 text-[0.9rem] md:text-base">
              Temos nosso escritório{" "}
              <span className="font-bold">
                localizado em São Paulo e Itapecerica da Serra,
              </span>{" "}
              com atuação presencial e online para acelerar a resolução das
              causas e prezar pelo conforto dos nossos clientes.
            </span>
            <span className="w-[90%] md:w-3/4 ml-0 md:ml-20 mt-4 text-[0.9rem] md:text-base">
              Além do aparato técnico e conhecimento para enfrentamento de
              problemas judiciais, temos por objetivo, evitar o surgimento de
              novos processos, atuando na prevenção, oferencendo todo o suporte
              para que o cliente possa viver em sociedade, exercendo seu direito
              e, sabendo os limites e reflexos de sua atuação, melhorando as
              relações sociais e pacificando os conflitos.
            </span>
            <button className="flex ml-0 md:ml-20 bg-verde text-[0.9rem] md:text-base text-white mt-8 p-2 md:p-4 rounded-xl w-72 justify-center transition-transform transform hover:scale-105 duration-500">
              Falar com um advogado agora
            </button>
          </div>
        </section>

        <section className="h-max w-full flex flex-col bg-azul-escuro items-center mt-5 md:mt-0">
          <h3 className="text-white font-bold md:text-3xl text-[1.4rem] mt-5 md:mt-16 text-center">
            CLIENTES QUE APROVAM E INDICAM NOSSO TRABALHO
          </h3>
          <div className="flex gap-6 h-full w-full md:max-w-screen-lg md:mx-auto mt-12 md:justify-center overflow-x-auto">
            <div className="flex flex-col flex-shrink-0 w-[80%] md:w-56 bg-white rounded-2xl p-4 ml-8 md:ml-0 mb-5">
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
            <div className="flex flex-col flex-shrink-0 w-[80%] md:w-56 bg-white rounded-2xl p-4 ml-8 md:ml-0 mb-5">
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
            <div className="flex flex-col flex-shrink-0 w-[90%] md:w-56 bg-white rounded-2xl p-4 ml-8 md:ml-0 mb-5">
              <div className="flex w-full justify-between items-center">
                <Image className="w-20" src={avaliacao} alt="estrelas"></Image>
                <Image className="h-8 w-8 " src={google} alt="google"></Image>
              </div>
              <span className="flex-shrink-0 h-40 bg-white text-azul-escuro p-2">
                Muito atencioso! Muito competente e dedicado!
              </span>
              <div className="flex w-full justify-between items-center mt-4">
                <span className="bg-green-500 w-8 h-8 rounded-full text-center text-white p-1 transition-transform transform hover:scale-105 duration-500">
                  R
                </span>
                <span className="font-bold">Rodrigo Farias</span>
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0 w-[80%] md:w-56 bg-white rounded-2xl p-4 mx-8 md:mx-0 mb-5">
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
          <button className="text-white bg-verde p-4 rounded-xl mt-8 mb-5 transition-transform transform hover:scale-105 duration-500">
            Falar com um advogado agora
          </button>
        </section>

        <section className="flex md:flex-row h-3/4 w-full md:mt-10 justify-center">
          <div className="flex flex-col-reverse md:flex-row h-max md:w-11/12 w-full p-4 text-azul-escuro bg-PowderBlue md:rounded-3xl">
            <div className="flex flex-col w-full md:w-1/2">
              <span className="h-30 text-justify md:text-3xl text-[1rem] font-bold p-2 md:p-4 md:mt-12">
                Nossa missão é assegurar que nossos clientes tenham o seu
                direito trabalhista estabelecido de maneira justa, através de um
                acompanhamento jurídico de qualidade.
              </span>
              <form className="flex flex-col gap-2 w-5/6 md:p-4" id="" action="">
                <input
                  className="rounded-xl p-1 md:p-2 mt-3"
                  placeholder="Digite seu nome"
                  type="text"
                />
                <input
                  className="rounded-xl p-1 md:p-2"
                  placeholder="Digite seu número de celular"
                  type="text"
                />
                <input
                  className="rounded-xl p-1 md:p-2"
                  placeholder="Digite seu melhor E-mail"
                  type="text"
                />
                <button className="bg-verde text-white p-1 md:p-2 mt-3 md:mt-6 rounded-xl transition-transform transform hover:scale-105 duration-500">
                  Falar com um advogado
                </button>
              </form>
            </div>
            <div className="md:flex md:w-1/2 w-full md:ml-6 p-4">
            <Image className="w-full h-full object-contain mt-5 md:mt-0 rounded-full" src={fotoForms} alt={"fotoForms"}></Image>
            </div>
          </div>
        </section>
        
        <section className="flex w-full md:h-80 h-max bg-gelo md:mt-8 mt-24 flex-col">
          <div className="flex flex-col md:flex-row md:justify-around w-full h-max md:h-40 p-6 border-b-2 border-azul-escuro border-solid">
            <div className="w-30 flex items-center mb-4">
              <Image
                className="h-8 w-8 mr-2"
                src={telefone}
                alt="telefone"
              ></Image>
              <div className="flex flex-col justify-center">
                <span className="text-azul-escuro font-bold">
                  Atendimento por telefone
                </span>
                <span className="text-cinza">(11) 9 9999-9999</span>
              </div>
            </div>
            <div className="w-30 flex items-center mb-4">
              <Image className="h-8 w-8 mr-2" src={email} alt="email"></Image>
              <div className="flex flex-col justify-center">
                <span className="text-azul-escuro font-bold">
                  Atendimento por email
                </span>
                <span className="text-cinza">
                  contato@williansadvogados.com.br
                </span>
              </div>
            </div>
            <div className="w-30 flex items-center">
              <Image
                className="h-8 w-8 mr-2"
                src={relogio}
                alt="relogio"
              ></Image>
              <div className="flex flex-col justify-center">
                <span className="text-azul-escuro font-bold">
                  Horário de atendimento
                </span>
                <span className="text-cinza">
                  08h às 18h de seg. à sexta-feira
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row md:justify-around">
            <div className="h-40 md:w-1/3 w-full flex md:justify-center mt-5 mb-5">
              <Image className="object-contain" src={logoFooter} alt={"logoFooter"}></Image>
            </div>
            <div className="h-full md:w-1/3 w-[90%] ml-2 flex flex-col justify-center md:items-center">
              <span className="text-azul-escuro font-bold">Nossos endereços</span>
              <span className="text-cinza text-[0.9rem] md:text-base">Rua Clementino Jarbas Neto, 997 - Sala 05 / SP - 05456-111</span>
              <span className="text-cinza text-[0.9rem] md:text-base">Rua Fernandes De Jesus, 1050 - Itapecerica da Serra / SP - 33325-789</span>
            </div>
            <div className="h-full md:w-1/3 w-[90%] ml-2 flex flex-col justify-center md:items-center mt-4">
              <span className="text-azul-escuro font-bold">Willians Fernandes | José Willians</span>
              <span className="text-cinza text-[0.9rem] md:text-base md:mb-2">Especialista em Direito do Trabalho</span>
              <span className="text-cinza text-[0.9rem] md:text-base">Consultoria e Assessoria Trabalhista</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
