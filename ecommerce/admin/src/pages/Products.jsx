import PageHeader from "../components/PageHeader";
import Listing from "../components/Listing";

function Products() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">
      <PageHeader title="Product List" />
      <Listing />
    </div>
  );
}

export default Products;