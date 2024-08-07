import Tabs from './Tabs';
import BarraNavegacion from './BarraNavegacion';

type AsignaturaProps = {
    children: React.ReactNode[],
    cerrarSemestre: (isClosed: boolean) => void
}

function Asignatura({ children, cerrarSemestre }: AsignaturaProps) {

    return (
        <>
            <BarraNavegacion />
            <Tabs cerrarSemestre={cerrarSemestre}>
                {children}
            </Tabs>
        </>
    )
}

export default Asignatura
