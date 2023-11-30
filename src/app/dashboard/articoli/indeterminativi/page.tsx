/* eslint-disable react/no-unescaped-entities */
const ArticoliIndeterminativi: React.FC = () => {
  return (
    <>
      <h2>Gli articoli indeterminativi</h2>
      <p>
        Iniziamo con le cose positive: gli articoli indeterminativi sono solo quattro: un, uno, una
        e un’. Sono tutti singolari, in quanto la funzione del plurale è svolta dagli articoli
        partitivi.
      </p>
      <p>
        Gli articoli indeterminativi si usano per parlare di qualcosa di indeterminato, che non si
        conosce o che non si è citato in precedenza. Diciamo per esempio: “Ho visto una macchina
        gialla parcheggiata davanti a casa tua.” Non so di chi sia la macchina, o perché sia
        parcheggiata lì. “Ho molta fame ed è ora di pranzo… andiamo a mangiarci un panino?” Non un
        panino specifico, ma uno qualsiasi.
      </p>
      <p>
        Vediamo ora con che nomi vanno usati i quattro articoli indeterminativi. UN e UNO si usano
        con i nomi maschili. UNO si usa con quelli che iniziano per s + consonante, ps, gn, x, y e z
        (in questo corrisponde all’articolo determinativo LO), mentre UN si usa con tutti gli altri
        (inclusi quelli che iniziano per vocale). Diremo quindi ‘uno psicologo’, ‘uno gnomo’ e ‘uno
        zaino’ ma ‘un videogioco’, ‘un amico’ e ‘un fumetto’. Per gli articoli determinativi
        femminili le cose sono più semplici. Anche qui ne abbiamo due: UNA e UN’. UNA si usa con i
        nomi che iniziano per consonante (come l’articolo determinativo LA) e UN’ con quelli che
        iniziano per vocale (come l’articolo determinativo L’). Diremo quindi ‘una macchina’ e
        ‘un’astronave’. Anche qui, in caso di dubbio, può essere utile provare a pronunciare
        l’articolo insieme al nome che accompagna.
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
            <td>un</td>
            <td>/</td>
            <td>
              Davanti a parole che iniziao con una vocale o con una consonante (eccetto s +
              consonante, ps, gn, x, y, z)
            </td>
            <td>Un videogioco / un amico</td>
          </tr>
          <tr>
            <td>uno</td>
            <td>/</td>
            <td>Davanti a parole che iniziano con s + consonante, ps, gn, x, y, z</td>
            <td>Uno zaino</td>
          </tr>
          <tr>
            <td>una</td>
            <td>/</td>
            <td>Davanti a parole che iniziano con una consonante</td>
            <td>Una sveglia</td>
          </tr>
          <tr>
            <td>un'</td>
            <td>/</td>
            <td>Davanti a parole che iniziano con una vocale</td>
            <td>Un'amica</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ArticoliIndeterminativi;
