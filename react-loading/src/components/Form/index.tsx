import './styles.css'

type FormType = {
   onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const Form = ({ onSubmit }: FormType) => {
   return(
      <div className="form-container">
         <h2>Adicionar nova tarefa</h2>
         <form onSubmit={(e) => onSubmit(e)}>
            <div className="inputBox">
               <label htmlFor="titulo">Titulo</label>
               <input type="text" name="titulo" id="titulo" placeholder="Informe o titulo"/>
            </div>
            <div className="inputBox">
               <label htmlFor="descricao">Descrição</label>
               <input type="text" name="descricao" id="descricao" placeholder="Informe a descrição "/>
            </div>
         <button type='submit'>Adicionar</button>
         </form>
      </div>
   )
}  
