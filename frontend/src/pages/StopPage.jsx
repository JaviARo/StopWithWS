import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./StopPage.css";

function StopPage() {
  const [users, setUsers] = useState([]);
  const [letter, setLetter] = useState();
  const [letterSet, setLetterSet] = useState(false);
  const [stop, setStop] = useState(false);

  const [nombre, setNombre] = useState();
  const [animal, setAnimal] = useState();
  const [lugar, setLugar] = useState();
  const [comida, setComida] = useState();
  const [color, setColor] = useState();
  const [objeto, setObjeto] = useState();
  const [stopInfo, setStopInfo] = useState();

  const { username } = useParams();

  const ws = useRef();

  const sendLetter = (e) => {
    e.preventDefault();
    console.log(letter);
    ws.current.send(
      JSON.stringify({
        letter: letter,
        type: "letterSend",
      })
    );
  };

  const sendStop = (e) => {
    e.preventDefault();
    ws.current.send(
      JSON.stringify({
        nombre: nombre,
        animal: animal,
        lugar: lugar,
        comida: comida,
        color: color,
        objeto: objeto,
        type: "stopSend",
      })
    );
  };

  useEffect(() => {
    //Example: ws://localhost:8080/?username=tiburcio
    const SERVER_URL = `${process.env.REACT_APP_SERVER_URL}/?username=${username}`;
    ws.current = new WebSocket(SERVER_URL);

    ws.current.onopen = () => {
      console.log("Connection opened");
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setUsers(data.users);
      setLetter(data.letter);
      setLetterSet(data.letterSet);
      setStop(data.stop);
      setStopInfo(data.stopInfo[0]);
      console.log(data);
    };

    return () => {
      console.log("Cleaning up...");
      ws.current.close();
    };
  }, [username]);

  return (
    <>
      {stop === true ? (
        <div>
          <h1>Fin del juego</h1>
          <table>
            <thead>
            <tr>
              <th>Jugador</th>
              <th>Nombre</th>
              <th>Animal</th>
              <th>Lugar</th>
              <th>Comida</th>
              <th>Color</th>
              <th>Objeto</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{users[0].username}</td>
              <td>{stopInfo.nombre}</td>
              <td>{stopInfo.animal}</td>
              <td>{stopInfo.lugar}</td>
              <td>{stopInfo.comida}</td>
              <td>{stopInfo.color}</td>
              <td>{stopInfo.objeto}</td>
            </tr>
            </tbody>
          </table>
        </div>
        
      ) : (
        <div>
          {letterSet === true ? (
            <div>
              <h1>Letra: {letter}</h1>
              <form onSubmit={sendStop}>
                <div className="formInput">
                <label htmlFor="letra">Nombre</label>
                <input
                  id="nombre"
                  type="char"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                </div>
                <div className="formInput">
                <label htmlFor="letra">Animal</label>
                <input
                  id="animal"
                  type="char"
                  value={animal}
                  onChange={(e) => setAnimal(e.target.value)}
                />
                </div>
                <div className="formInput">
                <label htmlFor="letra">Lugar</label>
                <input
                  id="lugar"
                  type="char"
                  value={lugar}
                  onChange={(e) => setLugar(e.target.value)}
                />
                </div>
                <div className="formInput">
                <label htmlFor="letra">Color</label>
                <input
                  id="color"
                  type="char"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
                </div>
                <div className="formInput">
                <label htmlFor="letra">Comida</label>
                <input
                  id="comida"
                  type="char"
                  value={comida}
                  onChange={(e) => setComida(e.target.value)}
                />
                </div>
                <div className="formInput">
                <label htmlFor="letra">Objeto</label>
                <input
                  id="objeto"
                  type="char"
                  value={objeto}
                  onChange={(e) => setObjeto(e.target.value)}
                />
                </div>
                <button type="submit">Stop</button>
              </form>
            </div>
          ) : (
            <form onSubmit={sendLetter}>
              <label htmlFor="login-page-username">Introduce una letra</label>
              <input
                id="login-page-username"
                type="char"
                placeholder="Letra"
                value={letter}
                onChange={(e) => setLetter(e.target.value)}
                required
              />
              <button onClick={sendLetter}>Enviar letra</button>
            </form>
          )}
        </div>
      )}
    </>
  );
}

export default StopPage;
