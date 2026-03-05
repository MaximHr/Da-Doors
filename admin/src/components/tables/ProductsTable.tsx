import type { ProductTListResponse } from "@/types/product";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import { DeleteProductAlert } from "../alerts/DeleteProductAlert";

interface ProductsTableProps {
  products: ProductTListResponse[];
  page: number;
  fetchProducts: (pageNumber: number) => Promise<void>;
}

const ProductsTable = ({
  products,
  page,
  fetchProducts,
}: ProductsTableProps) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-md border w-fit max-w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-26">Снимка</TableHead>
            <TableHead className="w-40">Име</TableHead>
            <TableHead className="w-26">Серия</TableHead>
            <TableHead className="w-26">Промени</TableHead>
            <TableHead className="w-26">Изтрий</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.slug}>
              <TableCell>
                {product.titleImage ? (
                  <img
                    src={
                      import.meta.env.VITE_R2_URL +
                      "/image/" +
                      product.titleImage
                    }
                    alt={product.title}
                    className="w-12 h-12 object-contain rounded"
                  />
                ) : (
                  <div className="overflow-hidden w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
                    Няма снимка
                  </div>
                )}
              </TableCell>
              <TableCell className="max-w-[220px] whitespace-normal wrap-break-word">
                {product.title}
              </TableCell>
              <TableCell>{product.series ? `${product.series}` : "-"}</TableCell>
              <TableCell>
                <Button
                  size="sm"
                  onClick={() => navigate(`/admin/products/${product.slug}`)}
                >
                  Промени
                </Button>
              </TableCell>
              <TableCell>
                <DeleteProductAlert
                  id={product.id}
                  page={page}
                  fetchProducts={fetchProducts}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
