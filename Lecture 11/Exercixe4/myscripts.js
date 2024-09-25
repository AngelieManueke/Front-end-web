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
          <tr><td>Andriano tielung</td>
          <td>lelaki</td>
          <td>si</td>
          <td>08xxxxx</td>
          <td>asrama</td>
          </tr>

          <tr><td>siko</td>
          <td>lelaki</td>
          <td>si</td>
          <td>08xxxxx</td>
          <td>asrama</td>
          </tr>
          <tr><td>tasya</td>
          <td>wanita</td>
          <td>si</td>
          <td>08xxxxx</td>
          <td>asrama</td>
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