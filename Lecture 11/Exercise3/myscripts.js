// create variable header
let header = (
  <header className="header">
      <h1>Buat Header Mengguanakan JSX</h1>
      <p>Tutorial JSX Sederhana</p>
  </header>
);

//render elemen ke DOM
ReactDOM.render(header, document.getElementById("app"));

const Header = () => {
  return (
  <header className="header">
      <h1> buat header Menggunakan JSX</h1>
      <p>tutorial JSX sederhana</p>
  </header>
  );
};


const Table = () => {
  return (
    <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
      <thead>
        <tr>
          <th>NAMA</th>
          <th>GENDER</th>
          <th>JURUSAN</th>
          <th>NO WA</th>
          <th>ALAMAT</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Angelie Manueke</td>
        <td>Perempuan</td>
        <td>Sistem Informasi</td>
        <td>08xxxxxxxxxx</td>
        <td>Jl. xxxxxx</td>
        </tr>
        <tr><td>Arlin Tumbal</td>
        <td>Perempuan</td>
        <td>Sistem Informasi</td>
        <td>08xxxxxxxxxx</td>
        <td>Jl. xxxxxx</td>
        </tr>
        <tr><td>Freshy Rembet</td>
        <td>Perempuan</td>
        <td>Sistem Informasi</td>
        <td>08xxxxxxxxxx</td>
        <td>Jl. xxxxxx</td>
        </tr>
        <tr><td>Fictor Retno</td>
        <td>Laki-laki</td>
        <td>Sistem Informasi</td>
        <td>08xxxxxxxxxx</td>
        <td>Jl. xxxxxx</td>
        </tr>
        <tr><td>Navys Gosal</td>
        <td>Laki-laki</td>
        <td>Sistem Informasi</td>
        <td>08xxxxxxxxxx</td>
        <td>Jl. xxxxxx</td>
        </tr>
  
      </tbody>
    </table>
  );
};


const App = () => {
  return (
      <div>
          <Header/>
          <Table />
      </div>
  );
};

ReactDOM.render (<App />, document.getElementById('app'));