import Name from "./Name"

const Hello = () => {
  const onClick = () => {
    alert('hello')
  }

  const text = 'Hello, React'
  const name = 'React'

  return (
    <>
      <div onClick={onClick}>
        {text}
      </div>
      <span>こんにちは、{name}さん</span>
      <Name />
    </>
  )
}

export default Hello
