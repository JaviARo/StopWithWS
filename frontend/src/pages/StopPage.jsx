function StopPage() {
  return (
    <div>
      <form id="login-page-username-form">
        <label htmlFor="login-page-username">Introduce una letra</label>
        <input id="login-page-username" type="char" placeholder="Letra"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          required
        />
        <button id="login-page-login-button" type="button" onClick={handleSubmit}>Entrar</button>
      </form>
      <table>
        <th>
          <td>Letra</td>
          <td>Nombre</td>
          <td>Animal</td>
          <td>Lugar</td>
          <td>Color</td>
          <td>Comida</td>
          <td>Objeto</td>
        </th>
        <tr>
          <td>Letra</td>
          <td><input></input></td>
          <td><input></input></td>
          <td><input></input></td>
          <td><input></input></td>
          <td><input></input></td>
          <td><input></input></td>
        </tr>
      </table>
    </div>
  )
}

export default StopPage;