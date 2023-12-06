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
          <div className="flex flex-col w-2/5 h-full items-start ml-36 text-white justify-center">
            <span className="mb-12">LOGO</span>
            <span className="mb-3 text-4xl">
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
          <div className="flex h-full w-3/5 bg-photo bg-contain bg-no-repeat bg-center"></div>
        </section>
      </main>
    </>
  );
}
