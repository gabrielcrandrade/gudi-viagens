import "../styles/components/maincontent.sass"

const Main = () => {
  return (
    <main id="main-content">
      <div className="container">
        <h1>Para qual estado você deseja ir?</h1>
        <input type="text" placeholder="Pesquisar" />
        <button>Buscar</button>
      </div>
    </main>
  )
}

export default Main