import Table from "react-bootstrap/Table";

function Tablecomponent() {
  return (
    <>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr >
            <th className="bg-danger">#</th>
            <th className="bg-danger">First Name</th>
            <th className="bg-danger">Last Name</th>
            <th className="bg-danger">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Tablecomponent;
