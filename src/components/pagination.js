import BootstrapPagination from "react-bootstrap/Pagination";

function Pagination() {
  return (
    <BootstrapPagination>
      <BootstrapPagination.First />
      <BootstrapPagination.Prev />
      <BootstrapPagination.Item>{1}</BootstrapPagination.Item>
      <BootstrapPagination.Ellipsis />

      <BootstrapPagination.Item>{10}</BootstrapPagination.Item>
      <BootstrapPagination.Item>{11}</BootstrapPagination.Item>
      <BootstrapPagination.Item active>{12}</BootstrapPagination.Item>
      <BootstrapPagination.Item>{13}</BootstrapPagination.Item>
      <BootstrapPagination.Item disabled>{14}</BootstrapPagination.Item>

      <BootstrapPagination.Ellipsis />
      <BootstrapPagination.Item>{20}</BootstrapPagination.Item>
      <BootstrapPagination.Next />
      <BootstrapPagination.Last />
    </BootstrapPagination>
  );
}

export default Pagination;
