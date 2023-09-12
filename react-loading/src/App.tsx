import { useState, useEffect, useCallback } from 'react'
import { api } from './api'
import * as C from './components'
import { TarefaTypeResponse } from './types'

function App() {
  const [tarefas, setTarefas] = useState<TarefaTypeResponse[]>()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      titulo: {value: string},
      descricao: {value: string}
    }
    const titulo = target.titulo
    const descricao = target.descricao
    const payload = {titulo: titulo.value, descricao: descricao.value, status: 'PENDENTE'}
    const data = await api.post('/tarefas', payload)
    addTarefa(data.data)
  }

  const addTarefa = (data: TarefaTypeResponse) => {
    setTarefas((prev) => [...prev as any, data])
  }

  const deletarTarefa = async (id: number) => {
    const newTarefas = tarefas?.filter(tarefa => tarefa.id !== id)
    setTarefas(newTarefas)
    await api.delete(`/tarefas/${id}`)
  }

  const fetchData = useCallback( async () => {
    const response = await api.get('http://localhost:8090/tarefas')
     setTarefas(response.data)
  }, [])
 

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div style={{ color: '#FFF', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: "center" }}>
      <C.Form onSubmit={onSubmit} />
      <C.Tarefas tarefas={tarefas} deletarTarefa={deletarTarefa}/>
    </div>
  )
}

export default App
