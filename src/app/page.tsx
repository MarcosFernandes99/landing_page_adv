import "../app/globals.css";

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
          <div className="flex w-3/5 h-full mt-20 bg-photo bg-contain bg-no-repeat bg-center"></div>
          <div className="flex flex-col w-55% text-justify text-azul-escuro justify-center">
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
            <span className="w-44 bg-azul-claro p-4 rounded-lg text-center">Auxílio Acidente</span>
            <span className="w-44 bg-azul-claro p-4 rounded-lg text-center">Aposentadoria por idade ou invalidez</span>
            <span className="w-44 bg-azul-claro p-4 rounded-lg text-center">Auxílio Doença</span>
          </div>
          <button className="bg-verde text-white p-4 mt-12 rounded-xl">Falar com um advogado agora</button>
        </section>
        <section className="h-96 w-full">

        </section>
      </main>
    </>
  );
}
