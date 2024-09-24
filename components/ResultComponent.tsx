// components/ResultComponent.tsx
import ResultadoProgramacion from './results/ResultadoProgramacion';
import ResultadoFinanzas from './results/ResultadoFinanzas';
// Importa otros componentes según las opciones

type Props = {
  opcionElegida: string;
};

const ResultComponent: React.FC<Props> = ({ opcionElegida }) => {
  switch (opcionElegida) {
    case 'Aprender a programar':
      return <ResultadoProgramacion />;
    case 'Aprender finanzas':
      return <ResultadoFinanzas />;
    // Agrega más casos según las opciones disponibles
    default:
      return <div>Elige una opción válida.</div>;
  }
};

export default ResultComponent;
