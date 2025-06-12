import { useState } from "react";

const CantadaAmorosa = () => {
    const [nome, setNome] = useState('');

    const cantadas = [
        "você não é o Google, mas tem tudo que eu procuro.",
        "seu pai é um pirata? Porque você é um tesouro!",
        "meu amor por você é igual obra: nunca acaba!",
        "eu não sou traficante, mas eu te trago flores.",
        "você acredita em amor à primeira vista ou devo passar de novo?",
        "eu não sou um anjo, mas caí do céu... nos seus braços!",
        "se a beleza fosse crime, você pegaria prisão perpétua.",
        "com você, todo dia é Dia dos Namorados, mas hoje a gente pode comemorar em dobro!",
        "eu não sou fotógrafo, mas consigo imaginar a gente junto pra sempre.",
        "meu coração é seu, mas se você não quiser, eu aceito de volta com um laço e um beijinho."
      ];
      
    //   const formCantada = nome + ', ' + cantadas[0]
      const [frase, setFrase] = useState('✨Coloque o nome do seu crush e veja a mágica acontecer!✨');
      const numFrase = Math.floor(Math.random() * 10);

      const verificaNome = () => {
        if (nome == '')
        {
            setFrase('Preencha o nome do seu crush.')
        }
        else
        {
            setFrase(nome + ', ' + cantadas[numFrase])
        }
      }

    return (
        <div className="container">
            <h2 className="titulo">💘 Cantadas Amorosas Para o Seu Crush</h2>
            <input type="text" placeholder="Nome do seu Crush" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <button onClick={() => verificaNome()}>Gerar cantada</button>
            <p>{frase}</p>
        </div>
    );
}

export default CantadaAmorosa