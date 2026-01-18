"use client";

import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteCategory } from "@/services/categories/deleteCategory";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import { DeleteComfermation } from "@/components/shared/DeleteComfermation";

const DeleteCategoryButton = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useCustomMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast.success("Category deleted successfully");
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.CATEGORIES,
      });
    },
    onError: () => {
      toast.error("Delete failed");
    },
  });

  return (
    <DeleteComfermation
      trigger={
        <Button size="icon">
          <TrashIcon />
        </Button>
      }
      ActionButton={
        <Button
          variant={"destructive"}
          size="icon"
          isLoading={isPending}
          onClick={() => mutate(id)}
        >
          Delete
        </Button>
      }
      Dilaogdesc="Do you want to remove this category?"
    />
  );
};

export default DeleteCategoryButton;
