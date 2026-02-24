import { handleError } from "@/api/errorHandler";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { type SignUpPayload } from "../../types/auth";
import { addMember } from "@/api/members";
import type { UserT } from "@/types/user";

interface AddMemberDialogProps {
  setMembers: React.Dispatch<React.SetStateAction<UserT[]>>;
}

export default function AddMemberDialog({ setMembers }: AddMemberDialogProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const member: SignUpPayload = {
        email,
        password,
        role,
      };
      const res = await addMember(member);
      setMembers((prev) => [...prev, res]);
			setEmail("");
			setPassword("");
			setRole("");
			setIsOpen(false);

    } catch (err) {
      if (err instanceof Error) {
        handleError(err.message);
      } else {
        handleError("Възникна грешка. Моля опитайте по-късно.");
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Добави участник</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-2">
          <DialogTitle>Добави участник</DialogTitle>
        </DialogHeader>
        <form onSubmit={submitHandler}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">Имейл</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Парола</Label>
              <Input
                id="password"
                type="password"
                placeholder="Въведете парола за новия член на екипа."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="role">Роля</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Избери роля" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Product manager">
                    Product Manager
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="outline">Отказ</Button>
            </DialogClose>
            <Button type="submit">Добави участник</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
