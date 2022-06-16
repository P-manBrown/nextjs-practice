type ContainerProps = {
  title: string
  children: React.ReactNode
}

const Container = (props: ContainerProps): JSX.Element => {
  const {title, children} = props

  return (
    <div style={{ background: 'red'}}>
      <span>{title}</span>
      {/* 親の入れ子になった部分はchildrenとして子に渡される */}
      <div>{children}</div>
    </div>
  )
}

const Parent = (): JSX.Element => {
  return (
    // 以下のtitleはpropsとして子に渡される
    <Container title="Hello">
      {/* 以下がchildrenとして子に渡される */}
      <p>ここの部分が背景色で囲まれます。</p>
    </Container>
  )
}

export default Parent