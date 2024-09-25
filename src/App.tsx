import {FormHeader} from './blocks/FormHeader/FormHeader'
import {Form} from './blocks/Form/Form'
import {FormFooter} from './blocks/FormFooter/FormFooter.tsx'

function App() {
  return (
    <section className={'wrapper'}>
        <FormHeader/>
        <Form/>
        <FormFooter/>
    </section>
  )
}

export default App
