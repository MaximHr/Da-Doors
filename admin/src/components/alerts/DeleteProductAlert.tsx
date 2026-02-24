import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { handleError } from "@/api/errorHandler";
import { deleteProduct } from "@/api/products";
import { toast } from "react-toastify";

interface ProductDeleteAlertProps {
  id: number;
  page: number;
  fetchProducts: (pageNumber: number) => Promise<void>;
}

export function DeleteProductAlert({
  id,
  page,
  fetchProducts,
}: ProductDeleteAlertProps) {
  const [open, setOpen] = useState(false);

  const handaleProductDelete = async () => {
    try {
			const data = await deleteProduct(id);
			await fetchProducts(page);
			toast.success(data);
      setOpen(false);
    } catch (err) {
      if (err instanceof Error) {
        handleError(err.message);
      } else {
        handleError("Възникна грешка. Моля опитайте по-късно.");
      }
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
          Изтрий
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Напълно ли сте сигутни?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отказ</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={handaleProductDelete}
          >
            Изтрий продукт
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
