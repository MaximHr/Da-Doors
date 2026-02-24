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
import { kickMember } from "@/api/members";
import { toast } from "react-toastify";
import type { UserT } from "@/types/user";
import { handleError } from "@/api/errorHandler";

interface KickMemberAlertProps {
  id: number;
  setMembers: React.Dispatch<React.SetStateAction<UserT[]>>;
}

export function KickMemberAlert({ id, setMembers }: KickMemberAlertProps) {
  const [open, setOpen] = useState(false);

  const handleKickMember = async () => {
    try {
      await kickMember(id);
      toast.success("Member kicked successfully.");
      setMembers((prev) => prev.filter((member) => member?.id !== id));
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
          Изгони участник
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Напълно ли сте сигурни?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отказ</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={handleKickMember}
          >
            Изгони участник
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
