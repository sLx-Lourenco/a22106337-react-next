'use client';

import tecnologias from '@/app/data/tecnologias.json';
import { useParams, useRouter } from 'next/navigation';
import TecnologiaDetailsCard from '@/componentes/TecnologiaDetailsCard/TecnologiaDetailsCard';
import Botao from '@/componentes/Botao/Botao';

export default function TecnologiaPage() {
  const params = useParams();
  const router = useRouter();
  const index = Number(params.tecnologia);
  const tecnologia = tecnologias[index];

  if (!tecnologia) {
    return <p>Tecnologia não encontrada.</p>;
  }

const handleClick = () => {
    router.back(); 
  };

  return(
  <>
    <div>
      <Botao label="< Voltar" onClick={handleClick} />
    </div>
    <br></br>
    <div>
     <TecnologiaDetailsCard tecnologia={tecnologia} index={index} />;
    </div>
  </>);
}
