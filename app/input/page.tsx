import InputEcho from "@/componentes/InputEcho/InputEcho"
import SeletorTecnologias from "@/componentes/SeletorTecnologias/SeletorTecnologias"
import AdicionarListaTarefa from "@/componentes/AdicionarListaTarefa/AdicionarListaTarefa"
export default function InputPage() {

    return (
        <>
            <InputEcho /> 
            <SeletorTecnologias />
            <AdicionarListaTarefa />
        </>
    )
}