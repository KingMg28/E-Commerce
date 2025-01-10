import { Loader } from "lucide-react";

import Card from "../components/Card";
import Breadcrumbs from "../components/Breadcrumbs";
import Pagination from "../components/Pagination";

import { useProductStore } from "../store/useProductStore";
// import SortOptions from "../components/SortOptions";

const HomePage = () => {
  const { products, loading } = useProductStore();

  return (
    <div className="min-h-[calc(100vh-24.2rem)]">
      <div className="flex flex-col items-center  max-w-5xl h-full mx-auto ">
        <Breadcrumbs newDirectory="Shop" />
        <div className="flex w-full">
          {/* <div className=" border-r ">
            <SortOptions />
          </div> */}
          <div className=" grid mx-auto grid-cols-1 gap-8 lg:grid-cols-3">
            {loading && (
              <div className="flex items-center justify-center h-screen">
                <Loader className="size-10 animate-spin" />
              </div>
            )}
            {products?.map((p) => (
              <Card
                key={p._id}
                _id={p._id}
                name={p.name}
                price={p.price}
                description={p.description}
                images={p.images}
                stock={p.stock}
              />
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default HomePage;
