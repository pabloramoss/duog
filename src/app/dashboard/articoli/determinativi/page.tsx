/* eslint-disable react/no-unescaped-entities */
const ArticoliDeterminativi: React.FC = () => {
  return (
    <>
      <h2>Gli articoli determinativi</h2>
      <p>
        Gli articoli determinativi sono usati in italiano per parlare di cose che conosciamo, oppure
        di qualcosa che è già stato citato in precedenza (anche implicitamente) in una
        conversazione. Si tratta sempre di una cosa specifica, definita.
      </p>
      <p>
        Diciamo per esempio: <br />
        <i>
          “Ho parcheggiato <b>la</b> macchina in garage.”
        </i>{' '}
        Si tratta di una macchina specifica (la mia).{' '}
        <i>
          “Sono appena arrivato a casa ma non posso aprire <b>la</b> porta. Non trovo <b>le</b>{' '}
          chiavi.”
        </i>{' '}
        Nella prima parte della frase è evidente che si tratta della porta di casa, mentre nella
        seconda parte è ovvio che si tratta delle chiavi che aprono la porta appena citata.
      </p>
      <h2>Gli articoli determinativi singolari</h2>
      <p>
        Esistono due articoli determinativi femminili singolari in italiano: LA e L’. LA si usa
        davanti alle parole che iniziano per consonante, mentre L’ si usa davanti alle parole che
        iniziano per vocale. Quindi diremo ‘la macchina’ e ‘l’astronave’. Ecco un semplice trucco
        per sapere sempre qual è l’articolo corretto: se fai fatica a pronunciarlo, vuol dire che
        hai scelto quello sbagliato! Prova a dire ‘l’macchina’ o ‘la astronave’ se non mi credi! Per
        gli articoli determinativi maschili singolari le cose si complicano un poco. Infatti questi
        sono non due ma… tre! Sì, solo tre… quanti te ne aspettavi, cento :-)? L’articolo L’ si usa
        esattamente come il suo corrispondente femminile: davanti ai nomi (questa volta maschili)
        che iniziano per vocale. Diremo quindi ad esempio ‘l’aereo’ e ‘l’errore’. Esistono poi IL e
        LO. IL si usa davanti ai nomi che iniziano per consonante, ad eccezione di quelli che
        richiedono l’uso di LO. LO si usa davanti ai nomi che iniziano per s + consonante, ps, gn,
        x, y e z. Diremo quindi ‘il cavallo’, ‘il libro’ e ‘il telefono’ ma ‘lo zaino’, ‘lo
        studente’ e ‘lo sbadiglio’.
      </p>
      <h2>Gli articoli determinativi plurali</h2>
      <p>
        Con il plurale le cose per fortuna sono un po’ più semplici. Per il femminile esiste infatti
        un solo articolo: LE. LE si usa con qualsiasi nome femminile plurale. Ad esempio ‘la
        macchina’ al plurale diventa ‘le macchine’, mentre ‘l’anguria’ diventa ‘le angurie’. Per il
        maschile esistono invece due articoli: I e GLI. I segue le stesse regole di IL. Si usa
        quindi davanti ai nomi che iniziano per consonante, con l’eccezione di quelli che iniziano
        per s + consonante, ps, gn, x, y e z. ‘Il libro’ al plurale diventa quindi ‘i libri’. GLI
        segue invece le regole di L’ e LO, ovvero si usa davanti ai nomi che iniziano per vocale
        (come L’) e davanti ai nomi che iniziano per s + consonante, ps, gn, x, y e zn (come LO).
        ‘L’aereo’ diventa quindi ‘gli aerei’ e ‘lo zaino’ diventa ‘gli zaini’.
      </p>
      <table>
        <thead>
          <tr>
            <th>Singolare</th>
            <th>Plurale</th>
            <th>Uso</th>
            <th>Esempi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>il</td>
            <td>i</td>
            <td>
              Davanti a parole che iniziano con una consonante (eccetto s + consonante, ps, gn, x,
              y, z)
            </td>
            <td>Il videogioco / i videogiochi</td>
          </tr>
          <tr>
            <td>lo</td>
            <td>gli</td>
            <td>Davanti a parole che iniziano con s + consonante, ps, gn, x, y, z</td>
            <td>Lo zaino / gli zaini</td>
          </tr>
          <tr>
            <td>l'</td>
            <td>gli</td>
            <td>Davanti a parole che iniziano con una vocale</td>
            <td>L'errore / gli errori</td>
          </tr>
          <tr>
            <td>la</td>
            <td>le</td>
            <td>Davanti a parole che iniziano con una consonante</td>
            <td>La macchina / le macchine</td>
          </tr>
          <tr>
            <td>l'</td>
            <td>le</td>
            <td>Davanti a parole che iniziano con una vocale</td>
            <td>L'amica / le amiche</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ArticoliDeterminativi;
