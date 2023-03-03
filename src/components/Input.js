import { useRef } from 'react'

export default function Input(props) {
    const inputArray = props.inputsData
    const formEl = useRef()
    const sendData = (e) => {
        e.preventDefault()
        props.event(Array.from(formEl.current),e)
        formEl.current.reset()
    }

    const formStructure = (item) => {
        return (
            <label className='' key={item.name}>
                <p>{item.name}</p>
                <input type={item.type} name={item.name} defaultValue={item.value} placeholder={item.placeholder} />
            </label>
        )
    }

  return (
    <>
    <form onSubmit={sendData} ref={formEl}>
        {props.children}
        {inputArray.map(formStructure)}
        <button type="submit">Enviar</button>
    </form>
    </>
  )
}
