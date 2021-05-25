import {useState} from 'react'

import {Card, Timeline} from 'presentation/components'

export default function Home(): JSX.Element {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <main className="flex flex-col gap-28 md:gap-0 w-full h-full md:flex-row">
        <section className="flex flex-col gap-6">
          <div className="leading-3">
            <h1 className="font-black text-2xl md:text-2xl lg:text-3xl">
              Olá, João!
            </h1>
            <p className="text-[1.125rem] font-semibold">
              Aqui está sua rotina de estudos.
            </p>
          </div>
          <div className="text-lg">
            <h3 className="font-bold">Período</h3>
            <p className="font-normal">
              O período é o tempo completo do percusso de estudo que você
              escolheu.
            </p>
          </div>
          <div className="flex">
            <Timeline />
            <div className="h-full w-full flex flex-col gap-6">
              <Card isActive />
              <Card />
            </div>
          </div>
        </section>
        <article className="flex flex-col gap-4 h-full font-black max-w-md p-0 md:p-4 md:ml-28">
          <section>
            <h1 className=" text-xl">Relatório</h1>
            <p className="font-semibold">
              Aqui está seu progresso durante o tempo de estudo.
            </p>
          </section>
          <section>
            <h2 className="">Objetivos</h2>
            <div>
              <label className="flex items-center font-semibold select-none">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="test"
                  id=""
                  onChange={() => setIsChecked(state => !state)}
                />
                Ler artigo "Blogged Answer"
              </label>
            </div>
          </section>
          <section>
            <h2 className="">Anatoções</h2>
            <p className="font-semibold">
              Em breve terá anotações incluídas. Enquanto isso, ecomendados
              fazer todas as anotações no{' '}
              <strong>
                <a href="https://notion.so" className="underline">
                  Notion
                </a>
              </strong>
              .
            </p>
          </section>
        </article>
      </main>
    </>
  )
}
