import BootstrapPagination from "react-bootstrap/Pagination";

function Pagination() {
  return (
    <BootstrapPagination>
      <BootstrapPagination.First />
      <BootstrapPagination.Prev />
      <BootstrapPagination.Item active>{1}</BootstrapPagination.Item>
      <BootstrapPagination.Item>{2}</BootstrapPagination.Item>
      <BootstrapPagination.Item>{3}</BootstrapPagination.Item>
      <BootstrapPagination.Item>{4}</BootstrapPagination.Item>
      <BootstrapPagination.Item>{5}</BootstrapPagination.Item>
      <BootstrapPagination.Ellipsis />
      <BootstrapPagination.Item>{20}</BootstrapPagination.Item>
      <BootstrapPagination.Next />
      <BootstrapPagination.Last />
    </BootstrapPagination>
  );
}

export default Pagination;
