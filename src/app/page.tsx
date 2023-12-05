export default function Home() {
  return (
    <>
      <main>
        <section className="flex h-20 w-full p-1 bg-azul-escuro text-white">
          <div className="flex h-full w-1/2 justify-start items-center">
            <span className="mx-32">LOGO<img src="" alt="" /></span>
            <button className="mr-8">Serviços</button>
            <button className="mr-8">Sobre Nós</button>
            <button>Contato</button>
          </div>

          <div className="flex h-full w-1/2 justify-end items-center">
            <button className="mx-8">INSTA</button>
            <button>FACE</button>
            <button className="mx-32 border border-white border-solid p-2 rounded-lg">Orçamento</button>
          </div>
        </section>
      </main>
    </>
  );
}
