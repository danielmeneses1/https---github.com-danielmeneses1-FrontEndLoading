import { TarefaTypeResponse } from '../../types'
import './styles.css'


type TarefasType = {
   tarefas: TarefaTypeResponse[] | undefined
   deletarTarefa: (id: number) => void
}

export const Tarefas = ({ tarefas, deletarTarefa}: TarefasType) => {
   return (
      <div className='tarefas-wrapper'>
         {tarefas?.map(tarefa => {
            return (
               <div className='tarefas-card' key={tarefa.id}>
                  <span>{tarefa.titulo}</span>
                  <p><strong>DESCRIÇÃO: </strong> <span>{tarefa.descricao}</span></p>
                  <p><strong>STATUS: </strong> <span>{tarefa.status}</span></p>
                  <span>{tarefa.dataCriacao}</span>
                  <button className="deletar-button" onClick={() => deletarTarefa(tarefa.id)}>Deletar atividade</button>
               </div>
            )
         })}
      </div>
   )
}