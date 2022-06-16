const Container = (props: {title: string; children: React.ReactElement}) => {
  const {title, children} = props

  return (
    <div style={{ background: 'red'}}>
      <span>{title}</span>
      {/* 親の入れ子になった部分はchildrenとして子に渡される */}
      <div>{children}</div>
    </div>
  )
}

const Parent = () => {
  return (
    <Container title="Hello">
      <p>ここの部分が背景色で囲まれます。</p>
    </Container>
  )
}

export default Parent