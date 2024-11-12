// components/ResultComponent.tsx
import ResultadoProgramacion from './results/ResultadoProgramacion';
import ResultadoCripto from './results/ResultadoCripto';
import ResultadoIngles from './results/ResultadoIngles';
import ResultadoEconomia from './results/ResultadoEconomia';
import ResultadoIA from './results/ResultadoIA';
import ResultadoVideos from './results/ResultadoVideos';
import ResultadoDiseno from './results/ResultadoDiseno';

type Props = {
  opcionElegida: string;
};

const ResultComponent: React.FC<Props> = ({ opcionElegida }) => {
  switch (opcionElegida) {
    case 'Aprender sobre criptomonedas':
      return <ResultadoCripto />;
    case 'Aprender a programar':
      return <ResultadoProgramacion />;
    case 'Aprender inglés':
      return <ResultadoIngles />;
    case 'Aprender economía':
      return <ResultadoEconomia/>
    case 'Aprender sobre I.A':
      return <ResultadoIA/>
    case 'Aprender edición de videos':
      return <ResultadoVideos />
    case 'Aprender a diseñar':
      return <ResultadoDiseno />
    default:
      return <div>Elige una opción válida.</div>;
  }
};

export default ResultComponent;
